FROM node:14

WORKDIR /backend-app

COPY package.json ./
RUN npm install

COPY . .

CMD ["node", "src/index.js"]
