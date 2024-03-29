# [Use Bind Mounts](https://docs.docker.com/storage/bind-mounts/)

bind mount 比 volume 出现的要早, volume 是由 docker 来复杂创建和管理, 它实际所占用的磁盘目录是在 docker 的存储目录中

bind mount 类似于一个目录映射, 将 host machine 硬盘上的某个目录映射到 container 的某个目录, 比如将硬盘上的 D:/foo 映射到 container 的 /bar,
那么在 docker 中访问 /bar 时, 实际上访问的就是 D:/foo 目录

## [Choose The `-v` Or `--mount` Flag](https://docs.docker.com/storage/bind-mounts/#choose-the--v-or---mount-flag)

跟 volume 类似, 可以使用 `--volume | -v` 或者 `--mount` 来创建 bind mount, 推荐使用 `--mount`

`-v` 的值分成三个部分:

1. 第一个部分: 本地硬盘的目录地址
2. 第二个部分: container 中的目录地址
3. 第三个部分: 可选, 逗号分隔的配置选项

`--mount` 用于 bind mount 时, 需要设置 `type=bind`, `--mount` 用于 volume 时, `type` 默认为 `volume`

### [Differences Between `-v` And `--mount` Behavior](https://docs.docker.com/storage/bind-mounts/#differences-between--v-and---mount-behavior)

当本地磁盘的目录地址不存在时:

1. 使用 `-v` 来创建 bind mount 时, 会自动创建这个目录
2. 使用 `--mount` 来创建 bind mount 时, 会抛出一个错误

## [Start A Container With A Bind Mount](https://docs.docker.com/storage/bind-mounts/#start-a-container-with-a-bind-mount)

```
docker run -d -i -t --name devtest --mount type=bind,source=%cd%,target=/app nginx:latest
```

### [Mount Into A Non-Empty Directory On The Container](https://docs.docker.com/storage/bind-mounts/#mount-into-a-non-empty-directory-on-the-container)

对于 volume 来说, 如果 volume 是空的, 并且 container 的目录中已经存在文件, 则这些文件会被复制到 volume 中去

对于 volume 来说, 如果 volume 不是空的, 并且 container 的目录中已经存在文件, 则这些文件会暂时不可访问(obscured)

对于 bind mount 来说, 无论本地目录是否是空的, 如果 container 的目录中已经存在文件, 则这些文件都会暂时不可访问(obscured)

> [app-18](./app-18)

## [Use A Read-Only Bind Mount](https://docs.docker.com/storage/bind-mounts/#use-a-read-only-bind-mount)

如果要将 bind mount 设置未只读, 对于 `--mount` 要设置 `readonly`, 对于 `-v` 要设置 `ro`

> [app-19](./app-19)

## TODO [Configure Bind Propagation](https://docs.docker.com/storage/bind-mounts/#configure-bind-propagation)

## TODO [Configure The `selinux` Label](https://docs.docker.com/storage/bind-mounts/#configure-the-selinux-label)
