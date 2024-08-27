FROM node:22

WORKDIR /app

ENV PORT=3000

# COPY package*.json ./

COPY . .

RUN npm install

CMD ["node", "--watch", "server.js"]