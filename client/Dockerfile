FROM node:14-alpine as frontend

WORKDIR /src

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
