# ---------- BUILD ----------
FROM node:20-slim AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build -- --configuration production

# ---------- RUNTIME ----------
FROM nginx:1.27-bookworm

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /app/dist/iago-front/browser /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]


