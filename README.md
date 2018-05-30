bash -c clear && docker exec -it imdb_backend sh

python run_keras_server.py


gunicorn -w4 -b0.0.0.0:5000 run_keras_server:application


bash -c clear && docker exec -it imdb_frontend sh
