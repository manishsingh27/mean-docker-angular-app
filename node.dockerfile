FROM node:latest

ENV NODE_ENV=prod
ENV PORT=4200

COPY    . /var/www
WORKDIR /var/www

RUN npm install

#VOLUME [ "/var/www" ]

EXPOSE $PORT

ENTRYPOINT [ "npm", "start" ]
