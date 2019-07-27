# [Create A Base Image](https://docs.docker.com/develop/develop-images/baseimages/)

parent image 和 base image 在很多时候指的是同一个概念, 就是当前 image 所基于得基础 image, 但是严格来讲, 它们是不一样的

1. parent image: 指的是某个 image 所依赖的上级的 image, 比如: `FROM alpine` 中的 `alpine` 就是当前 image 的 parent image
2. base image: 指的是完全从头开始创建的 image, 即 base image 就是没有 parent image 的 image, base image 通常是使用 `FROM scratch` 指令开始创建

## [Create A Full Image Using `tar`](https://docs.docker.com/develop/develop-images/baseimages/#create-a-full-image-using-tar)

## [Create A Simple Parent Image Using Scratch](https://docs.docker.com/develop/develop-images/baseimages/#create-a-simple-parent-image-using-scratch)

可以使用 `FROM scratch` 指令从头开始创建一个 base image

`scratch` 是 docker 中的一个保留字, 我们不能使用 `scratch` 做为其他的 image 的标签

docker hub 中发布了一个名为 [scratch](https://hub.docker.com/_/scratch) 的 image, 但是我们不能 pull 或 run 这个 image
