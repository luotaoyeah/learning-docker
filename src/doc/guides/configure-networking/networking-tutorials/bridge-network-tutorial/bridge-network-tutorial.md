# [Networking With Standalone Containers](https://docs.docker.com/network/network-tutorial-standalone/)

## [Use The Default Bridge Network](https://docs.docker.com/network/network-tutorial-standalone/#use-the-default-bridge-network)

1. 使用 `docker network ls` 命令查看所有的 network, 默认应该有三个 network: `bridge`, `host`, `none`, 其中名称未 `bridge` 得就是默认的 bridge network

   | NAME   | DRIVER | SCOPE |
   | ------ | ------ | ----- |
   | bridge | bridge | local |
   | host   | host   | local |
   | none   | null   | local |

2. 创建并启动两个 container:

   `docker run -dit --name alpine1 alpine ash`

   `docker run -dit --name alpine2 alpine ash`

3. 查看 `bridge` 的详情, 可以看到刚才运行的两个 container 都连接到了这个 network 上

   `docker network inspect bridge`

4. 使用 `docker attach` 命令将本地的 IO 链接到某个 container:

   `docker attach alpine1`

5. 测试是否可以 ping 通 `google.com`:

   `ping -c 2 google.com`

6. 测试是否可以 ping 通 `alpine2`:

   `ping -c 2 172.17.0.3`

7. 使用快捷键 `CTRL + p` + `CTRL + q` 来断开对 container 的链接
