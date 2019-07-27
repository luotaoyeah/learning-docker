# [Create A Base Image](https://docs.docker.com/develop/develop-images/baseimages/)

parent image 和 base image 在很多时候指的是同一个概念, 就是当前 image 所基于得基础 image, 但是严格来讲, 它们是不一样的

1. parent image: 指的是某个 image 所依赖的上级的 image, 比如: `FROM alpine` 中的 `alpine` 就是当前 image 的 parent image
2. base image: 指的是完全从头开始创建的 image, 即 base image 就是没有 parent image 的 image, base image 通常是使用 `FROM scratch` 指令开始创建
