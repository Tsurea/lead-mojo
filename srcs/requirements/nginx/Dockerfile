FROM nginx:1.25.4

WORKDIR /etc/nginx
COPY config .

WORKDIR /etc/nginx/ssl
COPY tools .

EXPOSE 443

COPY ./config/nginx.conf /etc/nginx/nginx.conf
