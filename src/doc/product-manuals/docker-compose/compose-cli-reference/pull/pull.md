# [docker-compose pull](https://docs.docker.com/compose/reference/pull/)

`docker-compose pull` 用来拉取某个 service 的 image

`--ignore-pull-failures` 表示忽略拉取失败的, 继续拉取可以成功拉取的

默认会并行地拉取多个 image, 可以使用 `--no-parallel` 禁止并行拉取

`--include-deps` 表示同时拉取依赖的 service 的 image
