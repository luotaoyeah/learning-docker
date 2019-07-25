# [Best Practices For Writing Dockerfiles](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)

docker 根据 `Dockerfile` 中的指令来构建一个 image, `Dockerfile` 中的指令是按照顺序执行的

每一个指令表示一个 layer, 所有的 layer 是叠加起来的, 一个 image 就是由这些 layers 组成的

当从一个 image 创建并运行一个 container 之后, 会在 image 的 layer 之上添加一个新的 layer, 称之为 container layer
