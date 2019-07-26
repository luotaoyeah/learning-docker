# [Best Practices For Writing Dockerfiles](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)

docker 根据 `Dockerfile` 中的指令来构建一个 image, `Dockerfile` 中的指令是按照顺序执行的

每一个指令表示一个 layer, 所有的 layer 是叠加起来的, 一个 image 就是由这些 layers 组成的

当从一个 image 创建并运行一个 container 之后, 会在 image 的 layer 之上添加一个新的 layer, 称之为 container layer

## [General Guidelines And Recommendations](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#general-guidelines-and-recommendations)

### [Create Ephemeral Containers](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#create-ephemeral-containers)

### [Understand Build Context](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#understand-build-context)

所谓的 build context 指的就是当前工作目录, 我们在使用 `docker build` 命令时, 其中的 `PATH` 参数就是用来指定工作目录

> 实例: [app-01](./app-01)

`Dockerfile` 文件的地址默认为 `<PATH>/Dockerfile`, 我们也可以通过 `-f some/other/path/Dockerfile` 选项来指定其他的地址

> 实例: [app-02](./app-02)

### [Pipe Dockerfile Through `stdin`](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#pipe-dockerfile-through-stdin)

### [Exclude With `.dockerignore`](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#exclude-with-dockerignore)

类似于 `.gitignore` 文件, 可以使用 `.dockerignore` 文件来排除某些文件

### [Use Multi-Stage Builds](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#use-multi-stage-builds)

### [Don't Install Unnecessary Packages](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#dont-install-unnecessary-packages)

不要安装不必要的包

### [Decouple Applications](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#decouple-applications)

container 应该尽量实现模块化, 职责单一, 相互解耦

container 之间可以通过 `dockers networks` 进行交互

### [Minimize The Number Of Layers](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#minimize-the-number-of-layers)

只有 `RUN`, `COPY`, `ADD` 这三个指令会创建 layer, 其他的指令只会创建一个临时的 image, 而不会增加最后的 image 的尺寸

尽可能使用 multi-stage builds, 并且只拷贝最终需要的文件到 image

### [Sort Multi-Line Arguments](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#sort-multi-line-arguments)

如果一个命令有多个参数, 可以每个参数占一行, 在每个参数后面加上 `<space>\` 来支持多行, 参数应该按照字母顺序排列

### [Leverage Build Cache](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#leverage-build-cache)

默认情况下, docker 在执行每一个指令的时候, 会优先使用缓存, 可以使用 `--no-cache` 选项来禁用缓存

通常, docker 会直接根据 `Dockerfile` 中的指令来判断是否可以使用某个缓存, 但是对于 `ADD` 和 `COPY` 命令, 还会额外判断文件内容来决定是否使用缓存

## [Dockerfile Instructions](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#dockerfile-instructions)

### [FROM](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#from)

尽可能使用官方提供的 image 作为我们自己的 base image

> 实例: [app-03](./app-03)
