import flask
from flask import request
import model
from flask_cors import CORS


app = flask.Flask(__name__)
CORS(app)

@app.route('/')
def hello_world():
	return 'Hello world'

@app.route("/predict", methods=["POST"])
def predict():

	if flask.request.method == "POST":

		if flask.request.json:

			request = flask.request.json['text']

			data = model.predict(request)

			response = flask.jsonify(data)

			response.headers.add('Access-Control-Allow-Origin', '*')

			return response

if __name__ == "__main__":
	app.run(host='0.0.0.0',port=5000)
