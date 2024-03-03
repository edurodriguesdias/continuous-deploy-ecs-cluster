FROM node:20.11.0-slim

WORKDIR /app

COPY package.json package-lock.json tsconfig.json ./

RUN npm install

COPY . ./

RUN npm run tsc

CMD ["node", "./build/main.js"]
