# [Networking With Standalone Containers](https://docs.docker.com/network/network-tutorial-standalone/)

## [Use The Default Bridge Network](https://docs.docker.com/network/network-tutorial-standalone/#use-the-default-bridge-network)

使用 `docker network ls` 命令查看所有的 network, 默认应该有三个 network: `bridge`, `host`, `none`, 其中名称未 `bridge` 得就是默认的 bridge network

| NAME   | DRIVER | SCOPE |
| ------ | ------ | ----- |
| bridge | bridge | local |
| host   | host   | local |
| none   | null   | local |
