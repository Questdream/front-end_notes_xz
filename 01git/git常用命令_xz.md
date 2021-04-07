# Git的常用命令

### 同步远程仓库

1. 创建一个空的远程仓库：登录 github ->  new repository

2. 初始化本地仓库：`git init`

3. 编辑文件

4. 编辑区添加到暂存区: `git add . `

5. 暂存区提交到分支： `git commit -m "备注"`

6. 克隆项目： `git clone url`

7. 同步远程仓库

   `git push -u github master`推送 

   `git pull github master`拉取

### 分支管理

1. 查看分支，默认是master分支： `git branch`

2. 创建dev分支：`git branch dev`

3. 切换分支：`git checkout dev`

4. 在自己分支上修改文件并提交

5. 合并分支，首先要切换到主分支master，即要合并到此分支上。`git merge dev`

6. 本地分支推送到远程分支

   `git push github feature-branch:feature-branch`

7. 远程分支拉倒本地：

   `git chekout -b feature-branch github/feature-branch`



### 切换版本

1. 查看历史记录：`git log`

2. 恢复版本，记住版本号前几位：`git reset --hard <版本号>`

3. 查看命令记录：`git reflog`

   