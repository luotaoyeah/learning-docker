# [Get Started, Part 4: Swarms](https://docs.docker.com/get-started/part4/)

## [Understanding Swarm Clusters](https://docs.docker.com/get-started/part4/#understanding-swarm-clusters)

一个 swarm 就是一个容器化的集群(dockerized cluster), 一个 swarm 中包含很多的 machine, 可以是物理机也可以是虚拟机, 每一个 machine 称之为一个 node

有一些 node 称之为 swarm manager, 它们可以执行命令, 同时管理其他的 node (比如, 将其他的 node 加入到 swarm 中来)

除了 swarm manager 之外, 其他的 node 称之为 worker

## [Setup Your Swarm](https://docs.docker.com/get-started/part4/#set-up-your-swarm)

TODO 执行 `docker-machine create --driver virtualbox myvm1` 命令时, 卡在 Waiting for SSH to be available, 最后失败
