# [Manage Data In Docker](https://docs.docker.com/storage/)

默认情况下, 在 container 中创建的文件都是保存在一个 writable container layer 中的, 当 container 被删除时, 这些文件都会一起被删除

有两种方式可以将 container 中创建的文件存储到本地磁盘中(即 host machine 的文件系统):

1. volumes
2. bind mounts

在 docker on linux 中还可以使用第三种方式:

3. tmpfs mounts

## [Choose The Right Type Of Mount](https://docs.docker.com/storage/#choose-the-right-type-of-mount)

### [More Details About Mount Types](https://docs.docker.com/storage/#more-details-about-mount-types)

- Volumes

  `volumes` 由 docker 创建和管理, 可以使用 `docker volume create` 命令手动创建, 也可以在创建 container 或 service 时自动创建

  一个 `volume` 可以同时挂载到多个 container 上去

  `volume` 可以是命名的, 也可以是匿名的, 如果是匿名的, docker 会自动给它分配一个唯一的随机名称

- Bind Mounts

  bind mounts 可以访问敏感数据, 新的应用推荐使用 volumes

- tmpfs mounts

  tmpfs mounts 的数据是存储在内存中的, 主要用来存放临时的, 不需要持久化的数据文件

`--volume` 可以用来挂载 volumes 和 bind mounts, `--tmpfs` 可以用来挂载 tmpfs mounts

新版本的 `--mount` 可以用来挂载 volumes, bind mounts, tmpfs mounts, 推荐使用

## [Good Use Cases For Volumes](https://docs.docker.com/storage/#good-use-cases-for-volumes)

`volumes` 的一些使用场景:

1. 多个 container 需要共享一个 volume 的时候

   停止或者删除某个 container 的时候, 对应的 volume 不会被删除, volume 需要手动删除

2. 当 container 中的数据需要存储到远程机器或者云上时

3. 当需要在多个 host machine 之间传输(备份/恢复/迁移)数据时

## [Good Use Cases For Bind Mounts](https://docs.docker.com/storage/#good-use-cases-for-bind-mounts)

1. 从 host machine 共享一些配置文件给 container

2. 从 host machine 共享一些源码或者构件给 container, 这样一来, 在 host machine 中修改了文件之后, 在 container 中可以直接读取到这些修改

## [Good Use Cases For `tmpfs` Mounts](https://docs.docker.com/storage/#good-use-cases-for-tmpfs-mounts)

当某些数据不需要(或者不应该)存储在 host machine 或者 container 中时, 就可以使用 tmpfs mounts 将数据存储到内存中去
