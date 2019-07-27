FROM node:12

WORKDIR /app
COPY . /app

WORKDIR /app
RUN npm install --no-save

WORKDIR /app
RUN npm run tsc

FROM node:12

WORKDIR /app
COPY --from=0 /app/src/index.js /app

WORKDIR /app
CMD ["node" ,"index.js"]
