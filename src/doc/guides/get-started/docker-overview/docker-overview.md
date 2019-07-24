# [Docker Overview](https://docs.docker.com/engine/docker-overview/)

## [The Docker Platform](https://docs.docker.com/engine/docker-overview/#the-docker-platform)

跟虚拟机不一样, container 是直接运行在宿主机上的, 这个宿主机甚至可以就是一个虚拟机

## [Docker Engine](https://docs.docker.com/engine/docker-overview/#docker-engine)

docker engine 是一个 CS 应用, 其中:

1. 有一个 server 称之为 docker daemon
2. 有一个 REST API
3. 有一个 client, 就是 docker CLI (docker 命令)

docker CLI 通过 REST API 跟 docker daemon 进行交互

docker daemon 负责对各种 docker object 进行创建和管理, 包括: image/container/network/volume

## [Docker Architecture](https://docs.docker.com/engine/docker-overview/#docker-architecture)

docker 使用的是 CS 架构, 其中的 client 指的是 docker CLI, 其中的 server 指的是 docker daemon

docker CLI 通过 REST API 跟 docker daemon 进行交互

docker CLI 和 docker daemon 可以运行在同一台机器上, 也可以运行在不同的机器上

### [The Docker Daemon](https://docs.docker.com/engine/docker-overview/#the-docker-daemon)

docker daemon 对应的命令是 `dockerd`

docker daemon 负责管理 image/container/network/volume, 监听 REST API 请求

### [The Docker Client](https://docs.docker.com/engine/docker-overview/#the-docker-client)

docker client 指的就是 docker CLI, docker CLI 对应的命令是 `docker`

docker CLI 通过 REST API 将命令发送给 docker daemon 执行

一个 docker CLI 可以跟多个 docker daemon 进行交互