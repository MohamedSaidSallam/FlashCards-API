FROM node:14.16.1-alpine3.13

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

USER node

RUN npm install --production

COPY --chown=node:node . .

ENV NODE_ENV=production

EXPOSE 8000

CMD ["node", "src/app.js"]
