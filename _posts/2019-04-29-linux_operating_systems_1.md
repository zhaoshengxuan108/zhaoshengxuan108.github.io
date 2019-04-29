---
layout: post
title: Linux 系统常用的命令
author: 晟世青风
categories: [operating_systems]
---

## 一些常用的操作命令

```shell
#rpm -qa | grep libxml        // 查看下都安装了那些软件
#rpm -e php-5.1.6-5.el5       // 卸载软件
#mount /dev/cdrom /mnt -t iso9660    // 挂载镜像到/mnt目录下  
#lsof -i:8080     // 8080是端口号，查8080端口被哪个进程占用
#kill 3257        // 8080端口被3257占用了，杀掉这个进程即可释放该端口
#ntpdate us.pool.ntp.org   // 时间同步命令
```



* 查看Linux类操作系统的版本

  ```bash
  $uname -a 可显示服务器以及操作系统的相关信息
  $cat /proc/version  正在运行的内核版本
  $cat /etc/issue  显示发行版本信息
  $lsb_release -a  （适用于所有的Linux，包括Redhat、SuSE、Debian等，不过有的得需要安装）
  ```

* 查看端口被哪个进程占用了

  ```bash
  $netstat -tunlp | grep 15001
  ```

* 查看僵尸进程命令

  ```bash
  $ps -A -ostat,ppid,pid,cmd | grep -e '^[Zz]'
  ```

* 通过进程号查看哪个应用在用

  ```bash
  $ps aux | grep <进程号>
  ```

* 文件排序

  ```bash
  $ll -lrt  顺序排序
  $ll -lrs  倒序排序
  ```

* ZIP压缩命令

  将当前目录下的所有文件和文件夹全部压缩成test.zip文件,-r表示递归压缩子目录下所有文件

  ```bash
  # zip -r test.zip ./*
  ```

* 卸载自带OpenJDK

  查询

  ```bash
  # rpm -qa | grep jdk
  ```

  卸载

  ```bash
  # yum -y remove java-1.6.0-openjdk-1.6.0.35-1.13.7.1.el6_6.x86_64
  ```

* 改变目录拥有者

  改文件拥有者

  ```bash
  # chown mail:mail log2012.log
  ```

  改目录拥有者

  ```bash
  # chown -R sysuser:sysuser logs/
  ```

* Debian终端字体颜色显示

  ```bash
  #vi ~/.bashrc
  ```

  编辑如下内容：

  ```bash
  export LS_OPTIONS='--color=auto'
  eval "'dircolors'"
  alias ls='ls $LS_OPTIONS'
  ```

  编辑完，保存退出，最好再执行如下命令：

  ```bash
  #source .bashrc
  ```

  