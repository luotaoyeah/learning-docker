# [Get Started, Part 2: Containers](https://docs.docker.com/get-started/part2/)

## [Prerequisites](https://docs.docker.com/get-started/part2/#prerequisites)

## [Introduction](https://docs.docker.com/get-started/part2/#introduction)

## [Your New Development Environment](https://docs.docker.com/get-started/part2/#your-new-development-environment)

有了 `docker` 之后, 我们就不需要再配置额外的运行环境, 而是直接拉取一个 `image`, 它里面就已经包含了所有需要的运行环境配置

## [Define A Container With Dockerfile](https://docs.docker.com/get-started/part2/#define-a-container-with-dockerfile)

我们通过 `Dockerfile` 文件来配置一个 `container`

## [Share Your Image](https://docs.docker.com/get-started/part2/#share-your-image)

如何将一个 `image` 发布到 docker hub 中去?

1. 使用 `docker login` 登录
2. 使用 `docker tag SOURCE_IMAGE luotaoyeah/repository:tag` 给这个 `image` 打一个标签
3. 使用 `docker push luotaoyeah/repository:tag` 将这个 `image` 发布到 docker hub 上去

### [Pull And Run The Image From The Remote Repository](https://docs.docker.com/get-started/part2/#pull-and-run-the-image-from-the-remote-repository)

使用命令 `docker run -p 8888:8888 luotaoyeah/get-started:part2` 来运行刚才发布到 docker hub 中的 `image`, 首先会将该 `image` pull 到本地
