# [docker-compose down](https://docs.docker.com/compose/reference/down/)

`docker-compose down` 跟 `docker-compose up` 命令想法, 用来停止并删除相关对象, 默认会执行如下操作:

1. 停止所有的 container
2. 删除所有在 compose 文件中定义的 container, 可以使用 `--remove-orphans` 来删除未在 compose 文件中定义的 container
3. 删除所有在 compose 文件中定义的 network
4. 如果 default network 被使用, 则删除该 default network

volume 默认不会删除, 可以使用 `--volumes` 来删除所有的 volume

可以使用 `--rmi all` 来删除所有的 image,
可以使用 `--rmi local` 来删除所有没有在 compose 文件中指定 `image` 属性的 image

> [app-21](./app-21)
