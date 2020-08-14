FROM node:alpine

RUN mkdir /srv/client && chown 1000:1000 -R /srv/client

WORKDIR /srv/client

VOLUME /srv/client

COPY docker-entrypoint.sh /usr/local

ENTRYPOINT ["docker-entrypoint.sh"]

CMD ["yarn", "start"]


EXPOSE 3000
