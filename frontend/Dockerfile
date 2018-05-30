FROM node:8

ENV APP_HOME /home/node/app
RUN mkdir $APP_HOME
WORKDIR $APP_HOME

RUN npm install -g npm

RUN npm i -g npm@5.6.0

COPY app/package.json package.json

RUN npm install --quiet

#RUN chmod -R a+rwx ./node_modules

#ENTRYPOINT while true; do echo hello world; sleep 1; done

COPY . .
