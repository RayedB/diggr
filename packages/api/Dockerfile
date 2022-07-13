FROM node:lts-alpine
WORKDIR /app
COPY ./dist/packages/api .
ENV PORT=8080
EXPOSE ${PORT}
RUN npm install --production
RUN npm install tslib reflect-metadata
CMD node ./main.js
