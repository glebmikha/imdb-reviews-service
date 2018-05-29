import keras
from keras.models import load_model
from keras.preprocessing import sequence
import pickle

keras.__version__

max_len = 400

model = load_model('model_imdb.h5')

with open('tokenizer.pickle', 'rb') as handle:
    tokenizer = pickle.load(handle)

request = '''what a terrible movie'''

request_tok = tokenizer.texts_to_sequences([request])

request_seq = sequence.pad_sequences(request_tok, maxlen=max_len)

print(request_seq)

print(model.predict(request_seq)[0][0])
