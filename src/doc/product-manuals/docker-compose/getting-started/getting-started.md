# [Get Started With Docker Compose](https://docs.docker.com/compose/gettingstarted/)

## [Step 1: Setup](https://docs.docker.com/compose/gettingstarted/#step-1-setup)

使用 nodejs 创建一个简单的 http-server 应用:

> [app-20](./app-20)

## [Step 2: Create A Dockerfile](https://docs.docker.com/compose/gettingstarted/#step-2-create-a-dockerfile)

创建 `Dockerfile` 文件, 并成功运行:

> [app-20](./app-20)

## [Step 3: Define Services In A Compose File](https://docs.docker.com/compose/gettingstarted/#step-3-define-services-in-a-compose-file)

创建一个 `docker-compose.yml` 文件, 并在其中定义多个 service:

> [app-20](./app-20)

## [Setp 4: Build And Run Your App With Compose](https://docs.docker.com/compose/gettingstarted/#step-4-build-and-run-your-app-with-compose)

构建并运行一个 `docker-compose.yml`, 其中:

1. `-f ../docker-compose.yml` 用来指定 `docker-compose.yml` 文件的路径, 默认值为 `docker-compose.yml`

2. `up` 表示创建并运行里面定义的 container

3. `-d | --detach` 表示 detach 模式

4. `--build` 表示在运行 container 之前先构建 image

`docker-compose -f D:\proj\git\luotaoyeah\learning-docker\src\doc\product-manuals\docker-compose\getting-started\app-20\docker-compose.yml up -d --build`

## [Step 5: Edit The Compose File To Add A Bind Mount](https://docs.docker.com/compose/gettingstarted/#step-5-edit-the-compose-file-to-add-a-bind-mount)
