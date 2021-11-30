FROM node:lts-slim
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY "package*.json" ./
RUN npm install --production --silent

COPY . .

RUN chown -R node /usr/src/app
USER node

