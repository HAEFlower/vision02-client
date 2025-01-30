# 빌드 단계
FROM node:18-alpine AS builder
WORKDIR /app
ARG VITE_BASE_URL
ENV VITE_BASE_URL=$VITE_BASE_URL
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# 실행 단계
FROM nginx:1.25-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80