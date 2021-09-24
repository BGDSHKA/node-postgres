FROM node:14-alpine 

RUN mkdir -p /usr/src/backend
WORKDIR /usr/src/backend

COPY package*.json /usr/src/backend/
COPY . /usr/src/backend/

RUN yarn

EXPOSE 8000

CMD [ "node", "index.js" ]
