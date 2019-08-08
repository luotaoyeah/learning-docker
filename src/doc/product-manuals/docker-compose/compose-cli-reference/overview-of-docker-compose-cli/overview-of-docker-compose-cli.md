# [Overview Of docker-compose CLI](https://docs.docker.com/compose/reference/overview/)

## [Command Options Overview And Help](https://docs.docker.com/compose/reference/overview/#command-options-overview-and-help)

使用 `docker-compose --help` 查看该命令的帮助信息

## [Use `-f` To Specify Name And Path Of One Or More Compose Files](https://docs.docker.com/compose/reference/overview/#use--f-to-specify-name-and-path-of-one-or-more-compose-files)

### [Specifying Multiple Compose Files](https://docs.docker.com/compose/reference/overview/#specifying-multiple-compose-files)

我们可以使用 `-f <FILE>` 参数来指定一个 compose 文件, 例如: `docker-compose -f ./docker-compose.yml`

`-f` 可以使用多次, 用来指定多个 compose 文件, 这些文件是有先后顺序的, 并且后面的文件会覆盖前面的文件中的同名配置选项,
例如: `docker-compose -f docker-compose.yml -f docker-compose.production.yml`

默认情况下, `docker-compose` 会在当前目录以及上级目录寻找 2 个文件: `docker-compose.yml` 和 `docker-compose.override.yml`,
类似于: `docker-compose -f docker-compose.yml -f docker-compose.override.yml`
