FROM node:8.14.0
LABEL maintainer="M. Shanken Communications <dev@mshanken.com>"
LABEL description="NodeJS"

RUN npm install -g --unsafe-perm grunt-cli gulp-cli mjml-cli express-generator browser-sync node-sass

ENV HOME /home/node
ENV PWD .

COPY package.json $HOME

ADD $PWD $HOME
WORKDIR $HOME

RUN chown -R www-data:www-data $HOME\
	&& npm install\
	&& cd custom-components/mjml-component-boilerplate\
	&& npm install

EXPOSE 9000

CMD node server/index.js
