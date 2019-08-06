# docker build -t app-20 . && docker run -p 8888:80 --name app-20 app-20

# stage-build
FROM node:12 AS stage-build

WORKDIR /app
COPY . .

WORKDIR /app
RUN npm install --no-save

WORKDIR /app
RUN npm run tsc

# stage-node
FROM node:12 AS stage-node

WORKDIR /app
COPY --from=stage-build /app/src/index.js .

EXPOSE 80

WORKDIR /app
CMD ["node", "index.js"]
