FROM node:lts-alpine
WORKDIR /app
COPY ./dist/packages/api .
ENV PORT=3333
EXPOSE ${PORT}
RUN npm install --production
# dependencies that nestjs needs
RUN npm install tslib reflect-metadata
CMD node ./main.js