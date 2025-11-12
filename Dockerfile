FROM node:18-alpine
EXPOSE 3001
RUN mkdir /app
WORKDIR /app
COPY package*.json  index.js /app/
RUN npm install
ENTRYPOINT [ "node", "index.js" ]