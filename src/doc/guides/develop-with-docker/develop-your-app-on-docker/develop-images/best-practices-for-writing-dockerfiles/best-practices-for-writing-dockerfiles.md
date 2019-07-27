# [Best Practices For Writing Dockerfiles](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)

docker 根据 `Dockerfile` 中的指令来构建一个 image, `Dockerfile` 中的指令是按照顺序执行的

每一个指令表示一个 layer, 所有的 layer 是叠加起来的, 一个 image 就是由这些 layers 组成的

当从一个 image 创建并运行一个 container 之后, 会在 image 的 layer 之上添加一个新的 layer, 称之为 container layer

## [General Guidelines And Recommendations](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#general-guidelines-and-recommendations)

### [Create Ephemeral Containers](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#create-ephemeral-containers)

### [Understand Build Context](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#understand-build-context)

所谓的 build context 指的就是当前工作目录, 我们在使用 `docker build` 命令时, 其中的 `PATH` 参数就是用来指定工作目录

> [app-01](./app-01)

`Dockerfile` 文件的地址默认为 `<PATH>/Dockerfile`, 我们也可以通过 `-f some/other/path/Dockerfile` 选项来指定其他的地址

> [app-02](./app-02)

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

> [app-03](./app-03)

### [LABEL](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#label)

使用 `LABEL` 指令给 image 添加标签

> [app-04](./app-04)

### [RUN](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#run)

`RUN` 指令用来在构建时期执行命令, 执行的结果会反应到最终的 image 中

一个 `Dockerfile` 中可以包含任意条 `RUN` 指令

支持两种语法格式:

1. shell 格式: `RUN <command>`
2. exec 格式: `RUN ["exec", "param1", "param2"]`

> [app-05](./app-05)

### [CMD](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#cmd)

`CMD` 指令用来在运行时期执行默认命令

一个 `Dockerfile` 中最多只能包含一条 `CMD` 指令, 如果包含多条, 只有最后一条会生效

`CMD` 指令的作用等价于 `docker run [OPTIONS] IMAGE [COMMAND]` 命令中的 `[COMMAND]` 参数, 因此如果 `docker run` 命令中指定了 `[COMMAND]`, 则 `Dockerfile` 中的 `CMD` 指令会被覆盖

支持 3 种语法格式:

1. shell 格式: `CMD <command>`
2. exec 格式: `CMD ["exec", "param1", "param2"]`
3. default parameter 格式: `CMD ["param1", "param2"]`, 用来给 `ENTRYPOINT` 指定默认参数

> [app-06](./app-06)

### [EXPOSE](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#expose)

`EXPOSE` 指令用来告知 docker 这个 container 在运行的时候会监听哪个端口, 这样一来, 用户在运行这个 container 的时候可知道要使用哪个端口

> [app-07](./app-07)

### [ENV](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#env)

`ENV` 指令用来设置环境变量

有两种语法格式:

1. `ENV key value`
2. `ENV key1=value1 key2=value2 ...`

也可以使用 `docker run --env --env-file` 命令的 `--env` 或者 `--env-file` 参数配置环境变量

> [app-08](./app-08)

### [COPY or ADD](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#add-or-copy)

`COPY` 和 `ADD` 功能有一些类似, 大多数情况下应该使用 `COPY`

`ADD` 一般用在需要自动解压本地的 tar 文件时

> [app-09](./app-09)

### [ENTRYPOINT](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#entrypoint)

`ENTRYPOINT` 用来设置该 container 的主命令, 用来将一个 container 当成一个可执行应用(executable)来使用

使用 `ENTRYPOINT` 的同时可以使用 `CMD` 来设置 `ENTRYPOINT` 的默认参数

跟 `CMD` 一样, 一个 `Dockerfile` 文件中最多只能有一个 `ENTRYPOINT` 指令

> [app-10](./app-10)

### [VOLUME](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#volume)

### [USER](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#user)

### [WORKDIR](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#workdir)

`WORKDIR` 指令用在 `RUN`, `CMD`, `ENTRYPOINT`, `COPY`, `ADD` 等命令之前, 用来指定这些命令的工作目录

`WORKDIR` 指定的是 container 容器中的目录, 注意区分它跟 build context 的区别

`WORKDIR` 后面的地址, 推荐全部使用绝对路径

对于 `COPY` 指令来说, 它包含两个地址, 一个 source 地址, 一个 destination 地址, 如果 destination 地址是一个相对路径, 则它相对的就是前面的 `WORKDIR` 指定的工作目录,
而 source 地址相对的是 build context 所指定的目录, 它跟 `WORKDIR` 无关

> [app-11](./app-11)

### [ONBUILD](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#onbuild)
