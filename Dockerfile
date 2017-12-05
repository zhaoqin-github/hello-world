FROM node:4.7.2

WORKDIR /usr/src/app

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

COPY . /usr/src/app/
RUN if [ ! -d "./node_modules" ] ; then npm install ; fi

CMD [ "npm", "start" ]

EXPOSE 80
