FROM alpine:3.15

WORKDIR /usr/src/app/front

RUN apk add vim

RUN apk add --update nodejs npm

COPY package*.json ./

# # Install package.json dependencies.
RUN npm install

COPY .env ./
COPY tsconfig.json ./
COPY . .

RUN npm install -g serve
RUN npm run build
