https://github.com/nanuchi/my-project

docker
git clone https://github.com/docker/getting-started-app.git
docker login -u <username>

Dockerfile
FROM node:lts-alpine
WORKDIR /app
COPY . .
RUN yarn install --production
CMD ["node", "src/index.js"]
EXPOSE 3000

cd /path/to/getting-started-app

docker build -t getting-started .

 docker run -d -p 127.0.0.1:3000:3000 getting-started
