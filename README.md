A simple API in Flask with Keras sentiment model and frontend in React and Redux.

To try it out clone the repo and run:

```
  docker-compose up -d
```

and then go to localhost:8080.

To get into containers:

```
bash -c clear && docker exec -it imdb_backend sh

bash -c clear && docker exec -it imdb_frontend sh
```

gunicorn -w4 -b0.0.0.0:5000 server:app

curl http://localhost:5000

curl http://localhost

curl http://192.168.32.2:5000

curl backend:5000

curl http://backend:5000






curl backend:8080

curl -d '{"text":"this movie is awesome"}' -H "Content-Type: application/json" -X POST backend:5000/predict

curl -d '{"text":"this movie is awesome"}' -H "Content-Type: application/json" -X POST http://backend:5000/predict
