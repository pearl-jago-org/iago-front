# ---------- BUILD ----------
FROM node:20 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build -- --configuration production

# ---------- RUNTIME ----------
FROM nginx:stable-alpine

RUN rm -rf /usr/share/nginx/html/*

# Copiamos el build REAL de tu proyecto
COPY --from=build /app/dist/iago-front/browser /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

