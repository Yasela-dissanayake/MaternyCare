FROM node:21.6.0
WORKDIR /usr/code
COPY package.json .
RUN npm install -g pnpm && pnpm install
COPY . .
ENV SERVER_PORT 3000
EXPOSE $SERVER_PORT
CMD ["pnpm","run","start:prod"]