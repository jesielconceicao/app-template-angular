FROM node

RUN mkdir /home/node/app-template
COPY ./dist /home/node/app-template/
#RUN chown node:node /home/node/app-template

WORKDIR /home/node/app-template
RUN npm install
# RUN npm rebuild node-sass --force
RUN npm install -g http-server

EXPOSE 8080

CMD http-server
