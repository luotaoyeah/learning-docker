# [docker-compose build](https://docs.docker.com/compose/reference/build/)

`docker-compose build` 命令用来构建某个或者某些 service, 当某个 service 的 `Dockerfile` 或者 build context 发生了变更之后, 就可以用该命令来重新构建这个 service

`--no-cache` 参数, 表示禁止使用缓存

`--force-rm` 参数, 表示构建成功之后, 删除过程中使用的临时的容器

`--pull` 参数, 表示每次在构建时, 都会尝试去拉取一个新版本的镜像文件
