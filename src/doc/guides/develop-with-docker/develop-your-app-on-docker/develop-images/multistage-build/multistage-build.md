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

## [Name Your Build Stages](https://docs.docker.com/develop/develop-images/multistage-build/#name-your-build-stages)

在 `Dockerfile` 中, 每一个 `FROM` 指令表示一个 `stage`, 在 `COPY --from=<index>` 命令中我们可以通过索引来引用某个 `stage`

我们也可以在 `FROM xxx AS <NAME>` 命令中通过 AS 给这个 `stage` 起一个名字, 然后通过这个名字来引用它

> [app-13](./app-13)

## [Stop At A Specific Build Stage](https://docs.docker.com/develop/develop-images/multistage-build/#stop-at-a-specific-build-stage)

`Dockerfile` 文件中可以包含多个 `stage`, 我们可以使用 `docker build` 命令的 `--target` 选项来指定要构建到哪一个 `stage` 为止

> [app-14](./app-14)

## [Use An External Image As A Stage](https://docs.docker.com/develop/develop-images/multistage-build/#use-an-external-image-as-a-stage)

`COPY --from` 中 from 后面的值, 除了可以是当前 `Dockerfile` 中其他的 `stage`, 也可以是一个外部的任意的 image

> [app-15](./app-15)
