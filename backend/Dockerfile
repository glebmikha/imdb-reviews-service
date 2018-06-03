FROM python:3

COPY requirements.txt requirements.txt

RUN pip install -r requirements.txt

COPY . .

#ENTRYPOINT while true; do echo hello world; sleep 1; done

ENTRYPOINT gunicorn -w1 -b0.0.0.0:5000 server:app
