FROM node:18-alpine
WORKDIR /mysite
ENV PATH="/mysite/node_modules/.bin:$PATH"
COPY  package.json ./
COPY  package-lock.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]