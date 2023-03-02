FROM alpine:3.15

WORKDIR /usr/src/app/back

RUN apk add vim

RUN apk add --update nodejs npm

COPY package*.json ./

RUN npm install

COPY . .
