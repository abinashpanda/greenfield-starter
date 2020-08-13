FROM node:alpine

WORKDIR /srv/client

COPY package.json /srv/client

RUN yarn install

COPY . /srv/client

CMD ["yarn", "start"]
