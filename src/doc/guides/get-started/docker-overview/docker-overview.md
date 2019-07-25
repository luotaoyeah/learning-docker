# [Docker Overview](https://docs.docker.com/engine/docker-overview/)

## [The Docker Platform](https://docs.docker.com/engine/docker-overview/#the-docker-platform)

跟虚拟机不一样, container 是直接运行在宿主机上的, 这个宿主机甚至可以就是一个虚拟机

## [Docker Engine](https://docs.docker.com/engine/docker-overview/#docker-engine)

docker engine 是一个 CS 应用, 其中:

1. 有一个 server 称之为 docker daemon (dockerd 命令)
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

### [Docker Registries](https://docs.docker.com/engine/docker-overview/#docker-registries)

docker registry 指的是存放 docker image 的仓库, docker hub 是一个所有人都可以访问的公开的 registry

默认情况下, 当我们执行 `docker pull`, `docker run`, `docker push` 等命令时, 使用的就是 docker hub 这个 registry

docker hub 就类似于 npmjs

除了 docker hub 之外, 我们也可以创建自己的 registry

### [Docker Objects](https://docs.docker.com/engine/docker-overview/#docker-objects)

#### IMAGES

image (镜像文件) 是一个静态的文件, 里面包含了 template 和 instructions, 用来指示如何从一个 image 创建一个 container

通常, 一个 image 是基于另外一个 image 的, 在另外一个 image 的基础上, 添加个性化的配置, 从而创建出一个新的 image

创建一个 image 时, 需要创建一个 `Dockerfile` 文件, 它里面包含了一系列的步骤指令, 用来指示如何构建一个 image

`Dockerfile` 里面的每一个指令表示 image 中的一个 layer, 当 `Dockerfile` 发生变更时, 只有变更的 layer 才会重新构建, 其余的 layer 不会受影响

### CONTAINERS

container 是 image 的运行实例, 我们可以通过 docker CLI 对 container 执行各种操作: create/delete/start/stop/move

默认情况下, 各个 container 之间, 以及 container 和 host machine 之间是相互隔离的, 我们可以控制这个隔离程度, 使之可以通过 network 或者磁盘进行交互

当一个 container 被 remove 时, 它里面的各种状态如果没有被保存到硬盘, 则都会被完全清除

可以将一个 container stop 掉而不是 remove 掉, 这样的话, 就可以再次 start 它

### SERVICES

service 用来对 container 进行扩展, 比如: 配置该 container 同时运行多个副本, 从而组成集群, 实现负载均衡

## [The Underlying Technology](https://docs.docker.com/engine/docker-overview/#the-underlying-technology)

### [Namespaces](https://docs.docker.com/engine/docker-overview/#namespaces)

### [Control Groups](https://docs.docker.com/engine/docker-overview/#control-groups)

### [Union File Systems](https://docs.docker.com/engine/docker-overview/#union-file-systems)

### [Container Format](https://docs.docker.com/engine/docker-overview/#container-format)
