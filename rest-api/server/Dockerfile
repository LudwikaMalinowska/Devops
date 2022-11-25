FROM node:latest
WORKDIR '/app'
COPY ./package.json .
COPY ./package-lock.json .
RUN npm i
COPY . .
EXPOSE 5000
CMD ["npm", "start"]