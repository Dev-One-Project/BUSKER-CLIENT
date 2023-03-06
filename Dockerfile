FROM node:16-alpine

WORKDIR /BUSKER/
COPY ./package.json /BUSKER/

COPY . /BUSKER/
RUN yarn build
CMD yarn start