# Based on  “builder pattern" but it is not beign used. 
#I am using multi-stage builds and there is only one active Docker file 'Dockerfile'
FROM nginx:1.15.0-alpine


## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
COPY /dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]