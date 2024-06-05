FROM node:16-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install

ENV REACT_APP_API_URL=${API_URL}
ENV REACT_APP_URL=${APP_URL}

COPY . .
RUN npm run build

FROM nginx:stable-alpine
EXPOSE 80
COPY --from=builder /app /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
