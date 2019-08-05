# [Overview Of Docker Compose](https://docs.docker.com/compose/)

`docker-compose` 使用一个 `YAML` 文件对整个应用的多个 service 进行管理

## [Features](https://docs.docker.com/compose/#features)

### [Multiple Isolated Environments On A Single Host](https://docs.docker.com/compose/#multiple-isolated-environments-on-a-single-host)

### [Preserve Volume Data When Containers Are Created](https://docs.docker.com/compose/#preserve-volume-data-when-containers-are-created)

`docker-compose` 在启动的时候, 如果发现上次启动时创建的某个 container 还在, 就会把它的 volume 复制到这次启动时新创建的相同的这个 container 中来,
这样可以保证 `docker-compose` 在每次启动之后, volume 的数据是一直可以保留的
