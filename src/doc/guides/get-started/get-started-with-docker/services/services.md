# [Get Started, Part 3: Services](https://docs.docker.com/get-started/part2/)

## [About Services](https://docs.docker.com/get-started/part3/#about-services)

类似于微服务的概念, 一个应用中不同的功能部分称之为不同的 service, 在 docker 中, 一个 service 对应一个 image, 但是这个 image 可能启动了多个 container 实例

## [Your First docker-compose.yml File](https://docs.docker.com/get-started/part3/#your-first-docker-composeyml-file)

我们在 `docker-compose.yml` 文件中定义所有的 services

## [Run Your New Load-Balanced App](https://docs.docker.com/get-started/part3/#run-your-new-load-balanced-app)

1. 初始化一个 swarm: `docker swarm init`
2. 部署一个 stack, 并将它命名为 "getstartedlab": `docker stack deploy -c docker-compose.yml getstartedlab`
3. 查看所有的 stack: `docker stack ls`
4. 查看 "getstartedlab" 这个 stack 下的所有 service: `docker stack services getstartedlab`
5. 查看所有的 services: `docker service ls`
6. 查看 "getstartedlab_luotao_web" 这个 service 下的所有进程: `docker service ps getstartedlab_luotao_web`

## [Scale The App](https://docs.docker.com/get-started/part3/#scale-the-app)

如何扩展一个应用?

1. 修改 `docker-compose.yml` 中 `replicas` 的值
2. 再次执行命令 `docker stack deploy -c getstartedlab` 来更新这个 stack
