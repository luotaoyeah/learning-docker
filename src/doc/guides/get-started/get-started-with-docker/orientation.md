# [Get Started, Part 1: Orientation And Setup](https://docs.docker.com/get-started/)

## [Docker Conceptions](https://docs.docker.com/get-started/#docker-concepts)

### [Images And Containers](https://docs.docker.com/get-started/#images-and-containers)

`image` 是静态的, `container` 是动态的, `container` 是 `image` 的 runtime instance, 当把 `image` 启动起来之后就是一个 `container`

可以使用 `docker ps` 查看当前运行的所有 `container`

### [Containers And Virtual Machines](https://docs.docker.com/get-started/#containers-and-virtual-machines)

`container` 是直接运行在 host os 上的, 所有的 `container` 共享一个 host os, `container` 是比较轻量级的, 需要消耗的资源很少

`VM` 是运行在 guest os 上的, 每个 `VM` 都有一个自己的 guest os, guest os 再运行在 host os 上面, `VM` 比较重量级, 需要消耗比较多的资源

## [Prepare Your Docker Environment](https://docs.docker.com/get-started/#prepare-your-docker-environment)

### [Test Docker Version](https://docs.docker.com/get-started/#test-docker-version)

使用命令 `docker --version` 查看 docker 的版本

使用命令 `docker version` 查看更加详细的版本信息

使用命令 `docker info` 查看更加详细的信息

### [Test Docker Installation](https://docs.docker.com/get-started/#test-docker-installation)

使用命令 `docker run hello-world` 来运行一个名叫 `hello-world` 的 `image`

使用命令 `docker image ls` 来查看所有的 `image`

使用命令 `docker container ls` 来查看所有正在运行的 `container`
