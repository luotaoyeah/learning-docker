FROM alpine as alpine

WORKDIR /app
RUN echo FOO > foo

FROM alpine

WORKDIR /app

# 从当前的某个 stage 中复制文件
COPY --from=alpine /app/foo /app

# 从其他的 image 中复制文件
COPY --from=nginx:latest /etc/nginx/nginx.conf /app

WORKDIR /app
RUN ls -al
