FROM nginx:1.15.5-alpine
WORKDIR /app
COPY ./dist /app/dist
COPY ./favicon.ico /app/dist
COPY ./nginx.conf /etc/nginx/
COPY ./app.conf /etc/nginx/conf.d/
EXPOSE 8080
ENTRYPOINT ["nginx", "-g", "daemon off;"]
