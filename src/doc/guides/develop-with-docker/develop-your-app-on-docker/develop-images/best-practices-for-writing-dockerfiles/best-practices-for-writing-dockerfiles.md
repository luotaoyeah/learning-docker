# [Best Practices For Writing Dockerfiles](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)

docker 根据 `Dockerfile` 中的指令来构建一个 image, `Dockerfile` 中的指令是按照顺序执行的

每一个指令表示一个 layer, 所有的 layer 是叠加起来的, 一个 image 就是由这些 layers 组成的

当从一个 image 创建并运行一个 container 之后, 会在 image 的 layer 之上添加一个新的 layer, 称之为 container layer

## [General Guidelines And Recommendations](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#general-guidelines-and-recommendations)

### [Create Ephemeral Containers](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#create-ephemeral-containers)

### [Understand Build Context](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#understand-build-context)

所谓的 build context 指的就是当前工作目录, 我们在使用 `docker build` 命令时, 其中的 `PATH` 参数就是用来指定工作目录

> 实例: app-01

`Dockerfile` 文件地址默认为 `<PATH>/Dockerfile`, 我们也可以通过 `-f some/other/path/Dockerfile` 选项来指定其他的地址

> 实例: app-02

### [Pipe Dockerfile Through `stdin`](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#pipe-dockerfile-through-stdin)

### [Exclude With `.dockerignore`](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#exclude-with-dockerignore)

类似于 `.gitignore` 文件, 可以使用 `.dockerignore` 文件来排除某些文件
