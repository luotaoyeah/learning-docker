# [Use Multi-Stage Builds](https://docs.docker.com/develop/develop-images/multistage-build/)

## [Before Multi-Stage Builds](https://docs.docker.com/develop/develop-images/multistage-build/#before-multi-stage-builds)

在 `multi-stage builds` 出现之前, 为了使最终的 image 的尺寸尽可能的小, 通常会有两个 `Dockerfile`, 一个用于 development, 一个用于 production

在构建 image 的时候, 我们需要首先构建 development 的 image, 然后根据这个 image 运行一个 development 的 container,
然后从这个 container 中拷贝出需要的文件到本地磁盘, 用来构建接下来 production 的 image, 最后在删除这个 development 的 container
