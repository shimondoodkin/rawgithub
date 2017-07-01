FROM node:8-alpine
RUN apk update && apk add ca-certificates && update-ca-certificates && apk add openssl
ADD . /
EXPOSE 6617
CMD ["node","index.js"]