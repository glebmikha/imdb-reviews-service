import keras
from keras.models import load_model
from keras.preprocessing import sequence
import pickle
import tensorflow as tf

graph = tf.get_default_graph()

model = None
tokenizer = None
id = 0
max_len = 400


def load_model_and_tokenizer():
    global model
    global tokenizer
    model = load_model('model_files/model_imdb.h5')
    with open('model_files/tokenizer.pickle', 'rb') as handle:
        tokenizer = pickle.load(handle)


load_model_and_tokenizer()


def prepare_text(text):
    request_tok = tokenizer.texts_to_sequences([text])
    request_seq = sequence.pad_sequences(request_tok, maxlen=max_len)
    return request_seq


def predict(request):

    data = {"sentiment": False, "text": False}

    text = prepare_text(request)

    global graph
    with graph.as_default():
        preds = model.predict(text)[0][0]

    sign = '-' if preds <= 0.5 else '+'

    global id
    data["sentiment"] = str(preds)
    data["text"] = request
    data["id"] = id
    data["sign"] = sign

    id += 1

    return data
