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

### [Specifying A Path To A Single Compose File](https://docs.docker.com/compose/reference/overview/#specifying-a-path-to-a-single-compose-file)

如果 compose 文件的名称不是 `docker-compose.yml`, 或者该文件不在当前目录, 则需要使用 `-f` 来指定该文件的地址

也可以通过环境变量 `COMPOSE_FILE` 来指定 compose 文件的地址

## [Use `-p` To Specify A Project Name](https://docs.docker.com/compose/reference/overview/#use--p-to-specify-a-project-name)

默认的 project 名称为当前的目录名称

可以通过 `-p <PROJECT_NAME>` 来指定, 也可以通过环境变量 `COMPOSE_PROJECT_NAME` 来指定
