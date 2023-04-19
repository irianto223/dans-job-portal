FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm i -g node-gyp
RUN npm i --build-from-source=bcrypt

COPY . .

EXPOSE 9000

CMD ["npm", "start"]
