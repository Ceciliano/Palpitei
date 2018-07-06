FROM node:8.1
LABEL api-avaliacao 'Back-end da aplicação montinho'
WORKDIR /api-avaliacao
ADD . /api-avaliacao
RUN npm i
RUN npm i nodemon -g
EXPOSE 3000
CMD ["npm", "start"]