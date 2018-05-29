import keras
from keras.models import load_model
from keras.preprocessing import sequence
import pickle
import flask
from flask import request
import tensorflow as tf
max_len = 400

application = flask.Flask(__name__)
model = None
tokenizer = None

graph = tf.get_default_graph()

def load_model_and_tokenizer():
	global model
	global tokenizer
	model = load_model('model_imdb.h5')
	print('model is here')
	with open('tokenizer.pickle', 'rb') as handle:
		tokenizer = pickle.load(handle)

def prepare_text(text):
	request_tok = tokenizer.texts_to_sequences([text])
	request_seq = sequence.pad_sequences(request_tok, maxlen=max_len)
	return request_seq

@application.route('/')
def hello_world():
	return 'Hello world'

@application.route("/predict", methods=["POST"])
def predict():

	data = {"sentiment": False,
			"text": False}

	# ensure an image was properly uploaded to our endpoint
	if flask.request.method == "POST":

		if flask.request.json:

			request = flask.request.json['text']

			text = prepare_text(request)

			global graph
			with graph.as_default():
				preds = model.predict(text)[0][0]

			data["sentiment"] = str(preds)
			data["text"] = request

	return flask.jsonify(data)

if __name__ == "__main__":
	print(("* Loading Keras model and Flask starting server..."
		"please wait until server has fully started"))
	load_model_and_tokenizer()
	application.run(host='0.0.0.0')
