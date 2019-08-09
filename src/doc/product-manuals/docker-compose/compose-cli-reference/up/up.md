# [docker-compose up](https://docs.docker.com/compose/reference/up/)

`docker-compose up` 命令, 用来 build/create/recreate/start/attach 某个 service

如果某个 service 依赖了其他的 service(通过 depends_on 指定), 则这些被依赖的 service 也会被启动, 可以通过 `--no-deps` 来禁用该特性

可以使用 `-d | --detach` 来启用 detached 模式, 即在后台运行

如果需要拉取某个镜像, 默认情况下会在控制台打印进度信息, 可以使用 `--quiet-pull` 来禁用该特性

默认情况下, 如果某个 service 的配置或者镜像文件内容发生了变更, 则会重新构建它的 container, 如果没有变更, 则会直接使用已经存在的 container,
可以使用 `--force-recreate` 来强制构建所有的 container, 无论是否发生变更,

默认情况下, 如果某个 image 不存在, 则会首先构建该 image,
可以使用 `--build` 来强制构建所有的 image, 即使已经存在,
可以使用 `--no-build` 来禁止构建 image, 即使 image 尚不存在

默认情况下, container 创建成功之后会启动, 可以使用 `--no-start` 来禁止启动
