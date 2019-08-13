FROM node:10 as builder

WORKDIR /usr/src/app
COPY package*.json ./
COPY . /usr/src/app

RUN npm install 
RUN npm run styleguide:build

# production environment
FROM nginx:1.15-alpine
COPY --from=builder /usr/src/app/styleguide /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

