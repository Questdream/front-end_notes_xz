# 一 Git概述

### 版本控制工具

1. Git（分布式版本控制工具）
2. SVN（集中式版本控制工具）



### 代码托管平台

1. Github   2. coding  3. gitee

### Git的下载和安装

1. 下载Git，官网或者晓舟报告
2. 安装Git，一直下一步即可

### 克隆远程仓库

```git
git clone url
```

可以获得同步到本地的Git仓库进行相关操作然后push



# 二 推送和拉取仓库

常用命令：

##### 本地操作

1. `git status`查询状态
2. `git add .`提交到暂存区
3. `git commit -m "注释"`提交到本地分支上

##### 远程操作

1. `git push github master` 推送到远程github仓库的master分支
2. `git clone url` 克隆远程仓库到本地（在本地没有版本库的情况下执行）
3. `git pull github master` 拉取远程仓库和本地仓库不一样的东西，即为同步

第一次安装Git，会设置名称和邮箱

```git
git config --global user.email "you@example.com"
git config --global user.name "your name"
```
# 三 版本追溯

### 作用

1. 出现bug，需要回到上一个版本重新开放
2. 找回丢失的文件
3. 浏览过去的代码

### 切换版本

1. `git reset --hard <版本号>`
2. 到了指定提交版本号的文件状态

### Git小结

1. 如果文件提交（commit），此文件不管以后是否删除，都可以通过版本追溯找回，所以不会担心文件丢失。
2. 如果是团队开发，commit中的备注一定要写清楚，方便版本追溯
3. 开发项目过程中，每天至少提交一次。

# 四 分支管理

### 常用命令

1. `git branch`;查看分支
2. `git branch dev`;创建dev分支
3. `git checkout dev`;切换到dev分支
4. `git push github dev:dev`;本地分支和远程分支同步，没有就创建
5. `git merge dev`; 将dev分支合并到当前分支



# 五 扩展知识

### 配置公钥

为了免密推送：

1. 生成公钥：`ssh-keygen -t rsa`
2. 复制公钥，添加到设置中
3. clone ssh协议的链接



