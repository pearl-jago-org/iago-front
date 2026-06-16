# ---------- BUILD ----------
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build -- --configuration production

# ---------- RUNTIME ----------
FROM nginx:stable-alpine

# Actualizamos Alpine para parchear libcrypto3, libssl3 y libxml2
RUN apk update && apk upgrade

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /app/dist/iago-front/browser /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

