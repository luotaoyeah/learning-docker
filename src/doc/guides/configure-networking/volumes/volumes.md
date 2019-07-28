# [Use Volumes](https://docs.docker.com/storage/volumes/)

volumes 是由 docker 来创建和管理的, 而 bind mounts 是依赖于 host machine 的目录结构的, volumes 相比 bind mount 具有下列优势:

1. volumes 更加容易备份和迁移
2. volumes 可以通过 docker CLI API 来管理
3. volumes 可以在 windows 和 linux 中使用
4. volumes 可以更加安全地被多个 container 所共享
5. volumes 可以通过 drivers 来支持将数据存储到 remote host 或者 cloud 中去
6. volumes 中的数据可以用 container 中的数据来进行预填充
