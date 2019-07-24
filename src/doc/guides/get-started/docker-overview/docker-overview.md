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
