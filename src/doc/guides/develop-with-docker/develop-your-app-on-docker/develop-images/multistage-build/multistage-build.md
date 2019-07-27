# [Use Multi-Stage Builds](https://docs.docker.com/develop/develop-images/multistage-build/)

## [Before Multi-Stage Builds](https://docs.docker.com/develop/develop-images/multistage-build/#before-multi-stage-builds)

在 `multi-stage builds` 出现之前, 为了使最终的 image 的尺寸尽可能的小, 通常会有两个 `Dockerfile`, 一个用于 development, 一个用于 production

在构建 image 的时候, 我们需要首先构建 development 的 image, 然后根据这个 image 运行一个 development 的 container,
然后从这个 container 中拷贝出需要的文件到本地磁盘, 用来构建接下来 production 的 image, 最后再删除这个 development 的 container

## [Use Multi-Stage Builds](https://docs.docker.com/develop/develop-images/multistage-build/#use-multi-stage-builds)

有了 `multi-stage builds` 之后, 就不再需要多个 `Dockerfile` 了, 而是在一个 `Dockerfile` 中包含多个 `stage`

在 `Dockerfile` 中可以使用多个 `FROM` 指令, 每一个 `FROM` 指令表示一个 `stage`

后面的 `stage` 可以利用前面的 `stage` 中产生的内容, 比如从前面的 `stage` 中复制文件到后面的 `stage` 中去

> [app-12](./app-12)
