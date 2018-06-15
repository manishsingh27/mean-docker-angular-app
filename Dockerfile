# Stage 0, based on Node.js, to build and compile Angular
FROM node:latest AS nodebase

LABEL maintaniner="Manish Singh"

WORKDIR /app

COPY package.json /app/

RUN npm install

COPY ./ /app/

ARG env=prod

RUN npm run build -- --$env

# Stage 1, based on Nginx, to have only the compiled, minified app, ready for production with Nginx
FROM nginx:latest

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

COPY --from=nodebase /app/dist/ /usr/share/nginx/html

COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf