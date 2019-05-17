---
layout: post
title: Git 入门进阶技巧
author: 晟世青风
categories: [code_version_management]
---

> [译版](<https://linux.cn/article-5418-1.html>)
>
> [原版](<https://www.andyjeffries.co.uk/25-tips-for-intermediate-git-users/>)

## 1.基本技巧

### 1.1.安装后的第一步

```bash
$ git config --global user.name "Some One"
$ git config --global user.email "someone@gmail.com"
```

而这些设置好的信息储存在gitconfig文件中，文件位置：

* /etc/gitconfig 文件：系统中对所有用户都普遍适用的配置。若使用 git config 时用 --system 选项，读写的就是这个文件。
* ~/.gitconfig 文件：用户目录下的配置文件只适用于该用户。若使用 git config 时用 --global 选项，读写的就是这个文件。
* 当前仓库的 Git 目录中的配置文件（也就是工作目录中的 .git/config 文件）：这里的配置仅仅针对当前仓库有效。每一个级别的配置都会覆盖上层的相同配置，所以 .git/config 里的配置会覆盖 /etc/gitconfig 中的同名变量。

查看配置信息

要查看已有的配置信息，可以使用 git config --list命令

```bash
$ git config --list
core.symlinks=false
core.autocrlf=true
core.fscache=true
color.diff=auto
color.status=auto
color.branch=auto
color.interactive=true
help.format=html
rebase.autosquash=true
http.sslbackend=openssl
http.sslcainfo=C:/Program Files/Git/mingw64/ssl/certs/ca-bundle.crt
credential.helper=manager
filter.lfs.smudge=git-lfs smudge -- %f
filter.lfs.process=git-lfs filter-process
filter.lfs.required=true
filter.lfs.clean=git-lfs clean -- %f
user.name=赵亮
user.email=zhao.liang@allscore.com
gui.recentrepo=D:/Workspace_person_website/personal_website
gui.recentrepo=D:/Git_Repository/mock
gui.recentrepo=D:/Git_Repository/epcc-demo
core.repositoryformatversion=0
core.filemode=false
:...skipping...
core.symlinks=false
core.autocrlf=true
core.fscache=true
color.diff=auto
color.status=auto
```

### 1.2.Git是基于指针的

&emsp;&emsp;保存在git里的一切都是文件。当你创建一个提交的时候，会建立一个包含你的提交信息和相关数据（名字，邮件地址，日期/时间，前一个提交，等等）的文件，并把它链接到一个树文件中。这个树文件中包含了对象或其他树的列表。这里的提到的对象（或二进制大对象）是和本次提交相关的实际内容（它也是一个文件，另外，尽管文件名并没有包含在对象里，但是存储在树中）。所有这些文件都使用对象的SHA-1哈希值作为文件名。

&emsp;&emsp;用这种方式，分支和标签就是简单的文件（基本上是这样），包含指向该提交的SHA-1哈希值。使用这些索引会带来优秀的灵活性和速度，比如创建一个新分支就是简单地用分支名字和所分出的那个提交的SHA-1索引来创建一个文件。当然，你不需要自己做这些，而只要使用Git命令行工具（或者GUI），但是实际上就是这么简单。

&emsp;&emsp;你也许听说过叫HEAD的索引。这只是简单的一个文件，包含了你当前指向的那个提交的SHA-1索引值。如果你正在解决一次合并冲突然后看到了HEAD，这并不是一个特别的分支或分支上的一个必需的特殊位置，只是标明你当前所在位置。

&emsp;&emsp;所有的分支指针都保存在.git/refs/heads里，HEAD在.git/HEAD里，而标签保存在.git/refs/tags里 - 自己可以随便进去看看。

### 1.3.两个爸爸（父节点）- 你没有看错！

&emsp;&emsp;在历史中查看一个合并提交的信息时，你将看到有两个父节点（不同于工作副本上的常规提交的情况）。第一个父节点是你所在的分支，第二个是你合并过来的分支。

### 1.4.合并冲突

&emsp;&emsp;目前我相信你碰到过合并冲突并且解决过。通常是编辑一下文件，去掉<<<<，====，>>>>标志，保留需要留下的代码。有时能够看到这两个修改之前的代码会很不错，比如，在这两个现在冲突的分支之前的改动。下面是一种方式：

```bash
$ git diff --merge
diff --cc dummy.rb  
index 5175dde,0c65895..4a00477  
--- a/dummy.rb
+++ b/dummy.rb
@@@ -1,5 -1,5 +1,5 @@@
  class MyFoo
    def say
-     puts "Bonjour"
 -    puts "Hello world"
++    puts "Annyong Haseyo"
    end
  end
```

&emsp;&emsp;如果是二进制文件，比较差异就没那么简单了...通常你要做的就是测试这个二进制文件的两个版本来决定保留哪个（或者在二进制文件编辑器里手工复制冲突部分）。从一个特定分支获取文件拷贝（比如说你在合并master和feature123两个分支）：

```bash
$ git checkout master flash/foo.fla # 或者...
$ git checkout feature132 flash/foo.fla
$ # 然后...
$ git add flash/foo.fla
```

&emsp;&emsp;另一种方式是通过git输出文件 - 你可以输出到另外的文件名，然后当你决定了要用哪个后，再将选定的正确文件复制为正常的文件名：

```bash
$ git show master:flash/foo.fla > master-foo.fla
$ git show feature132:flash/foo.fla > feature132-foo.fla
$ # 检出master-foo.fla和feature132-foo.fla
$ # 假如说我们决定来自feature132的文件是正确的
$ rm flash/foo.fla
$ mv feature132-foo.fla flash/foo.fla
$ rm master-foo.fla
$ git add flash/foo.fla
```

&emsp;&emsp;更新：感谢Carl在原博客文章上评论里的提醒，你实际上可以用“git checkout —ours flash/foo.fla”和“git checkout —theirs flash/foo.fla”来检出特定版本的文件，而不用记住你在合并的分支名字。就我个人来说喜欢更精确一点，但这也是一种方式...

&emsp;&emsp;记着在解决完冲突后要将文件加入提交（像我上面做的那样）。

## 2.服务器，分支和标签

### 2.1.远端服务器

&emsp;&emsp;git的一个超强大的功能就是可以有不止一个远端服务器（实际上你一直都在一个本地仓库上工作）。你并不是一定都要有这些服务器的写权限，你可以有多个可以读取的服务器（用来合并他们的工作）然后写入到另外一个仓库。添加一个新的远端服务器很简单：

```bash
$ git remote add john git@github.com:johnsomeone/someproject.git
```

如果你想查看远端服务器的信息可以这样做：

```bash
# 显示每个远端服务器的URL
$ git remote -v 
# 提供更多详细信息
$ git remote show name 
```

你随时都可以查看本地分支和远端分支的差异：

```bash
$ git diff master..john/master
```

你也可以查看没有在远端分支上的HEAD的改动：

```bash
$ git log remote/branch..
# 注意：..后面没有结束的特定引用
```

### 2.2.标签

&emsp;&emsp;在git里有两种类型的标签 - 轻量级标签和带注释标签。记住技巧2里说过git是基于指针的，这两者之间的差异也很简单。轻量级标签只是一个简单的指向一次提交的带名字指针。你随时都可以将它指向另一个提交。带注释标签是一个指向标签对象的带名字指针，带有自己的信息和历史。因为有自己的信息，它可以根据需要用GPG签名。

建立这两种类型的标签都很简单（只有一个命令行开关的差异）

```bash
$ git tag to-be-tested
$ git tag -a v1.1.0 # 会提示输入标签的信息
```

### 2.3.建立分支

&emsp;&emsp;在git里建立分支非常简单（而且像闪电一样快，因为它只需要创建一个小于100字节的文件）。用普通方式建立新分支并切换过去：

```bash
$ git branch feature132
$ git checkout feature132
```

当然，如果你确定自己直接切换到新建的分支，可以用一个命令实现：

```bash
$ git checkout -b feature132
```

如果你想重命名一个本地分支也很简单（可以显示发生了什么的较长的方式）：

```bash
$ git checkout -b twitter-experiment feature132
$ git branch -d feature132
```

&emsp;&emsp;更新：你也可以（像Brian Palmer在原博客文章的评论里提出的）只用“git branch”的-m开关在一个命令里实现（像Mike提出的，如果你只指定了一个分支参数，就会重命名当前分支）：

```bash
$ git branch -m twitter-experiment
$ git branch -m feature132 twitter-experiment
```

### 2.4.合并分支

也许在将来的某个时候，你希望将改动合并。有两种方式：

```bash
$ git checkout master
$ git merge feature83 # 或者...
$ git rebase feature83
```

&emsp;&emsp;merge和rebase之间的差别是merge会尝试处理改动并建立一个新的混合了两者的提交。rebase会尝试把你从一个分支最后一次分离后的所有改动，一个个加到该分支的HEAD上。不过，在已经将分支推到远端服务器后不要再rebase了 - 这会引起冲突/问题。

&emsp;&emsp;如果你不确定在哪些分支上还有独有的工作 - 所以你也不知道哪些分支需要合并而哪些可以删除，git branch有两个开关可以帮你：

```bash
# 显示已经全部合并到当前分支的分支
$ git branch --merged
# 显示没有合并到当前分支的分支
$ git branch --no-merged
```

### 2.5.远端分支

如果你在本地有一个分支希望推到远端服务器上，你可以用一行命令推送上去：

```bash
$ git push origin twitter-experiment:refs/heads/twitter-experiment
# origin是我们服务器的名字，而twitter-experiment是分支名字
```

&emsp;&emsp;更新：感谢Erlend在原博客文章上的评论 - 这个实际上和git push origin twitter-experiment效果一样，不过使用完整的语法，你可以在两者之间使用不同的分支名（这样本地分支可以是add-ssl-support而远端是issue-1723）。

如果你想在远端服务器上删除一个分支（注意分支名前面的冒号）：

```bash
$ git push origin :twitter-experiment
```

如果你想查看所有远端分支的状态可以这样做：

```bash
$ git remote show origin
```

&emsp;&emsp;这个命令可能会列出服务器上一些以前有过但现在已经不在了的分支。如果碰到这种情况你可以用下面的命令从你本地分支里清理掉：

```bash
$ git remote prune
```

最后，如果你想在本地跟踪一个远端分支，普通的方式是：

```bash
$ git branch --track myfeature origin/myfeature
$ git checkout myfeature
```

不过，新版的git在使用-b标记检出分支时会自动设定跟踪：

```bash
$ git checkout -b myfeature origin/myfeature
```

## 3.在储藏点，索引和文件系统中保存内容

### 3.1.储藏

在git里你可以把当前工作状态放进一个储藏堆栈中，然后可以再取出来。最简单的情形是下面这样：

```bash
$ git stash
# 做点其他事情...
$ git stash pop
```

&emsp;&emsp;许多人建议使用git stash apply来代替pop，不过如果这样做的话最后会遗留一个很长的储藏列表。而“pop”会在全部加载后自动从堆栈中移除。如果使用过git stash apply，你也可以使用下面的命令从堆栈上移除最后一项：

```bash
$ git stash drop
```

git会基于当前的提交信息自动创建评论。如果你更希望有自定义信息的话（因为它可能和前一个提交没有任何联系）：

```bash
$ git stash save "My stash message"
```

如果你希望从列表中取出一个特定的储藏点（不一定非得是最后一个）可以先列出它们然后用下面的方式取出：

```bash
$ git stash list
  stash@{0}: On master: Changed to German
  stash@{1}: On master: Language is now Italian
$ git stash apply stash@{1}
```

### 3.2.交互式添加

&emsp;&emsp;在subversion的世界里你只能修改文件然后提交所有改动。而在git里你有强大得多的方式来提交部分文件或者甚至是部分补丁。提交部分文件或文件中的部分改动你需要进入交互式模式：

```bash
$ git add -i
           staged     unstaged path
*** Commands ***
  1: status      2: update   3: revert   4: add untracked
  5: patch      6: diff     7: quit     8: help
What now>  
```

&emsp;&emsp;这会让你进入一个基于菜单的交互式提示。你可以使用命令中的数字或高亮的字母（如果你在终端里打开了高亮的话）来进入相应的模式。然后就只是输入你希望操作的文件的数字了（你可以使用这样的格式，1或者1-4或2,4,7）。

如果你想进入补丁模式（交互式模式下按‘p’或‘5’），你也可以直接进入：

```bash
$ git add -p    
diff --git a/dummy.rb b/dummy.rb  
index 4a00477..f856fb0 100644  
--- a/dummy.rb
+++ b/dummy.rb
@@ -1,5 +1,5 @@
 class MyFoo
   def say
-    puts "Annyong Haseyo"
+    puts "Guten Tag"
   end
 end
Stage this hunk [y,n,q,a,d,/,e,?]? 
```

&emsp;&emsp;你可以看到下方会有一些选项供选择用来添加该文件的这个改动、该文件的所有改动，等等。使用‘?’命令可以详细解释这些选项。

### 3.3.从文件系统里保存/取回改动

有些项目（比如Git项目本身）在git文件系统中直接保存额外文件而并没有将它们加入到版本控制中。

让我们从在git中存储一个随机文件开始：

```bash
$ echo "Foo" | git hash-object -w --stdin
51fc03a9bb365fae74fd2bf66517b30bf48020cb  
```

&emsp;&emsp;这样这个目标文件就已经保存到数据库中了，但是如果你没有设定一个指向它的指针的话它会被当做垃圾回收。最简单的方式是设定一个标签：

```bash
$ git tag myfile 51fc03a9bb365fae74fd2bf66517b30bf48020cb
```

注意这里我们使用了标签myfile。当我们需要使用这个文件的时候可以这样做：

```bash
$ git cat-file blob myfile
```

&emsp;&emsp;这个对于一些工具文件很有用，开发者可能会用到（密码，GPG密钥，等等）但是又不希望每次都检出到硬盘（尤其是在实际工作中）