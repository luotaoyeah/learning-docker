# [About Docker CE](https://docs.docker.com/install/)

docker CE 适用于个人开发者和比较小的团队, docker CE 有三个更新频道:

- stable
- test
- nightly

## [Releases](https://docs.docker.com/install/#releases)

docker CE engine 的代码库地址为 `https://github.com/docker/engine`,
docker CE client 的代码库地址为 `https://github.com/docker/cli`

docker CE 的版本号规则为 `YY.mm.<patch>`, 其中 `YY` 表示年份, `mm` 表示月份

年月版本(`YY.mm`)从 `18.09` 开始, 每六个月发布一个版本, 如: `18.09`, `19.03`, `19.09`, `20.03` 等等

补丁版本(`<patch>`)会根据需要随时发布新的版本, 用于修复该年月版本中的 bug

### [Nightly Builds](https://docs.docker.com/install/#nightly-builds)

每天会从 `master` 分支发布一个 `nightly` 版本,
`nightly` 更新频道的版本号格式为: `0.0.0-YYYYmmddHHMMSS-abcdefabcdef`, 如: `0.0.0-20180720214833-f61e0f7`

### [Pre-Releases](https://docs.docker.com/install/#pre-releases)

当准备发布 year-month 版本之前, 会从 `master` 分支创建一个格式为 `YY.mm` 的分支专门用于该 year-month 版本

pre-release 版本指的是 beta 和 rc 版本

pre-release 和 patch 版本都是从这个 `YY.mm` 分支发布出来的

pre-release 版本可以从 `test` 更新频道来获取, `test` 更新频道的版本号格式为: `test-YY.mm`, 如: `test-18.09`

### [General Availability](https://docs.docker.com/install/#general-availability)

`stable` 更新频道的版本号格式为: `stable-YY.mm`, 如: `stable-18.09`

### [Relationship Between CE And EE Code](https://docs.docker.com/install/#relationship-between-ce-and-ee-code)

`EE` 是 `CE` 的超集, `CE` 包含的是开源的代码, `EE` 包含的是开源的代码 + 专有的代码, `EE` 中的开源代码是跟 `CE` 同步的
