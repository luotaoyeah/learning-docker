# [Use Volumes](https://docs.docker.com/storage/volumes/)

volumes 是由 docker 来创建和管理的, 而 bind mounts 是依赖于 host machine 的目录结构的, volumes 相比 bind mount 具有下列优势:

1. volumes 更加容易备份和迁移
2. volumes 可以通过 docker CLI API 来管理
3. volumes 可以在 windows 和 linux 中使用
4. volumes 可以更加安全地被多个 container 所共享
5. volumes 可以通过 drivers 来支持将数据存储到 remote host 或者 cloud 中去
6. volumes 中的数据可以用 container 中的数据来进行预填充

## [Choose The `-v` Or `--mount` Flag](https://docs.docker.com/storage/volumes/#choose-the--v-or---mount-flag)

最开始的时候, `-v | --volume` 使用在 standalone container 中的, 而 `--mount` 是用在 swarm service 中的, 但是从 docker 17.06 之后, `--mount` 也可以用在 standalone container 中

如果需要配置 volume driver option, 则必须使用 `--mount`

推荐使用 `--mount`

## [Create And Manage Volumes](https://docs.docker.com/storage/volumes/#create-and-manage-volumes)

可以使用 `docker volume` 命令来管理 volumes

1. 创建一个 volume:

   `docker volume create vol01`

2. 查看所有的 volume:

   `docker volume ls`

3. 检查一个 volume:

   `docker volume inspect vol01`

4. 删除一个 volume:

   `docker volume rm vol01`

## [Start A Container With A Volume](https://docs.docker.com/storage/volumes/#start-a-container-with-a-volume)

如果启动一个 container 时它所挂载的 volume 尚不存在, 则该 volume 会自动被创建

1. 启动一个 container:

   `docker run --name devtest --detach --mount source=vol02,target=/app nginx:latest`

2. 检查该 container 的挂载情况:

   `docker inspect devtest`  
   `docker volume inspect vol02`

3. 停止该 container:

   `docker container stop devtest`

4. 删除该 container:

   `docker container rm devtest`

5. 删除该 volume:

   `docker volume rm vol02`

### [Start A Service With Volumes](https://docs.docker.com/storage/volumes/#start-a-service-with-volumes)

1. 创建一个 service:

   `docker service create --replicas 3 --detach --name devtest-service --mount source=vol02,target=/app nginx:latest`

2. 检查 service:

   `docker service ps devtest-service`

3. 删除该 service:

   `docker service vm devtest-service`

### [Populate A Volume Using A Container](https://docs.docker.com/storage/volumes/#populate-a-volume-using-a-container)

在挂载一个 volume 的时候, 如果这个 volume 是空的, 并且目标挂载点中已经存在文件, 则这些文件会被复制到 volume 中去

`docker run --detach --name nginxtest --mount source=nginx-vol,target=/etc/share/nginx/html nginx:latest`

## [Use A Readonly Volume](https://docs.docker.com/storage/volumes/#use-a-read-only-volume)

volume 默认的读写权限为 read&write, 可以通过 `readonly` 选项创建一个 readonly 的 volume

`docker run --detach --name nginxtest --mount source=nginx-vol,target=/app,readonly nginx:latest`

通过 `docker container inspect nginxtest` 检查 container 的状态, 可以看到 `"RW": false`

## [Share Data Among Machines](https://docs.docker.com/storage/volumes/#share-data-among-machines)

可以通过 volume driver 来实现将数据存储在不同的地方, 默认的 volume driver 为 `local`, 即将 volume 数据存储在本地
