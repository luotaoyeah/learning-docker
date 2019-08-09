# [docker-compose rm](https://docs.docker.com/compose/reference/rm/)

`docker-compose rm` 命令, 用来删除某个或者所有的 service 中的 container

默认只删除已经被停止了的 container, 可以使用 `-s | --stop` 来停止并且删除某个正在运行的 container

默认会请求确认是否删除, 可以使用 `-f | --force` 来强制删除, 不需要确认

默认不会删除匿名的 volume, 可以使用 `-v` 来删除挂载的匿名的 volume
