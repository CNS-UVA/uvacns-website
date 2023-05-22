FROM node:latest

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./ 

RUN npm install
COPY . ./
RUN npm run build

WORKDIR /app/build/
CMD ["node", "index.js"]