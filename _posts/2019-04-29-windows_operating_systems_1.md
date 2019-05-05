---
layout: post
title: Windows 系统相关问题
author: 晟世青风
categories: [operating_systems]
---

## 系统如何查看端口被谁占用了

1. 查看被查看被占用端口对应的PID， 输入命令：netstat -aon \| findstr "4000"， 回车，记下最后一位数字，即PID

   ```bash
   C:\Users\Administrator>netstat -aon | findstr "4000"
     TCP    127.0.0.1:4000         0.0.0.0:0              LISTENING       20860
   ```

   

2. 技术输入 tasklist \| findstr "20860"， 回车，查看是哪个进程或者程序占用了20860端口。

   ```bash
   C:\Users\Administrator>tasklist | findstr "20860"
   ruby.exe                     20860 Console                    2     67,676 K
   ```



## 搜索文件名中带有圆括号的关键字

例如要搜索文件名中带有“（1）”的所有文件

在文件资源管理器右上角搜索框中输入：System.FileName:“(1)”即可

