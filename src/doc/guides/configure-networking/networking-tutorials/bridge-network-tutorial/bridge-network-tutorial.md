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

## [Use User-Defined Bridge Networks](https://docs.docker.com/network/network-tutorial-standalone/#use-user-defined-bridge-networks)

1. 创建一个自定义的 bridge 网络:

   `docker network create --driver bridge alpine-net`

2. 查看这个网络的详情:

   `docker network ls`

   `docker network inspect alpine-net`

3. 创建四个 container, 其中 `alpine1` 和 `alpine2` 连接到 `alpine-net`, `alpine3` 连接到 `bridge`, `alpine4` 同时连接到 `bridge` 和 `alpine-net`

   `docker run -dit --name alpine1 --network alpine-net alpine ash`

   `docker run -dit --name alpine2 --network alpine-net alpine ash`

   `docker run -dit --name alpine3 alpine ash`

   `docker run -dit --name alpine4 alpine ash`

   由于在 `docker run` 命令中只能通过 `--network` 指定一个 network, 因此需要使用 `docker network connect` 命令将 `alpine4` 手动连接到 `alpine-net`:

   `docker network connect alpine-net alpine4`

4. 查看两个网络的详情:

   `docker network inspect bridge`

   `docker network inspect alpine-net`

5. 对于用户自定义的 bridge 网络, 可以直接通过 container 的名称来进行交互, 称之为 `服务自动发现`

   `docker attach alpine1`

   `ping -c 2 alpine2`

   `ping -c 2 alpine4`

6. 连接到不同的网络的 container 是不能进行交流的, 比如 `alpine1` 和 `alpine3` 是相互不能交流的

   `docker attach alpine1`

   `ping -c 2 alpine3`

7. 因为 `alpine4` 是同时连接到 `bridge` 和 `alpine-net` 上的, 因此它可以跟 `alpine1`, `alpine2`, `alpine3` 交流

   `docker attach alpine4`

   `ping -c 2 alpine1`

   `ping -c 2 alpine2`

   由于 `alpine3` 是连接到 `bridge` 上的, 因此只能通过 ip 来跟它交流:

   `ping -c 2 172.17.0.2`

8. 确保四个 container 都可以 ping 通 `google.com`
