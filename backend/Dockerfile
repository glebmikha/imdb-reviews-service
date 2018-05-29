#FROM python:3
FROM jupyter/datascience-notebook

COPY requirements.txt requirements.txt

RUN pip install -r requirements.txt

#RUN apt-get install libhdf5-dev

COPY . .

#EXPOSE 5000

#ENTRYPOINT ["python", "/src/app.py"]

ENTRYPOINT while true; do echo hello world; sleep 1; done
