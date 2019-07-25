# [Docker Development Best Practices](https://docs.docker.com/develop/dev-best-practices/)

## [How To Keep Your Images Small](https://docs.docker.com/develop/dev-best-practices/#how-to-keep-your-images-small)

keep image small 有两个好处:

1. 能更快地从 registry 中被 pull 下来
2. 能更快地被加载进内存中

如何保持 image 尽可能地小:

1. 选择一个合适的 base image, 不要自己从头开始构建
2. 使用 multistage build, 即在执行不同的构建步骤时, 使用不同的 base image
3. 如果多个 image 有很多相同的部分, 可以将这些相同的部分提取到一个 base image 中去, 再分别基于这个 base image 来构建
4. 为了使 production image 尽可能小, 同时又要支持 debugging, 可以将 production image 作为一个 base image, 然后构建一个用于 debug 的 image
5. image 的 tag 中尽可能包含有用的信息

## [Where And How To Persist Application Data](https://docs.docker.com/develop/dev-best-practices/#where-and-how-to-persist-application-data)

1. 使用 `volume` 来存储数据, 而不要使用 `storage drivers`
2. 在开发环境可以使用 `bind mount`
3. 在生产环境, 使用 `secret` 来存储敏感数据, 使用 `config` 来存储非敏感数据
