---
layout: post
title: ECS安装MySQL
author: 晟世青风
categories: [aliyun_install]
---

## 项目配置

* 操作系统：公共镜像 CentOS 7.2 64位
* MySQL版本：MySQL 5.7.25

## 安装MySQL

1. 运行以下命令更新YUM源

   ```bash
   rpm -Uvh  http://dev.mysql.com/get/mysql57-community-release-el7-9.noarch.rpm
   ```

2. 运行以下命令安装MySQL。

   ```bash
   yum -y install mysql-community-server
   ```

3. 运行以下命令查看MySQL版本号。

   ```bash
   mysql -V
   ```

   返回结果如下，表示MySQL安装成功。

   ```bash
   mysql  Ver 14.14 Distrib 5.7.25, for Linux (x86_64) using  EditLine wrapper
   ```

   

## 配置MySQL

1. 运行以下命令启动MySQL服务。

   ```bash
   systemctl start mysqld
   ```

2. 运行以下命令设置MySQL服务开机自启动。

   ```bash
   systemctl enable mysqld
   ```

3. 运行以下命令查看/var/log/mysqld.log文件，获取并记录root用户的初始密码。

   ```bash
   # grep 'temporary password' /var/log/mysqld.log
   2016-12-13T14:57:47.535748Z 1 [Note] A temporary password is generated for root@localhost: p0/G28g>lsHD
   ```

   说明 下一步重置root用户密码时，会使用该初始密码。

4. 运行下列命令配置MySQL的安全性。

   ```bash
   mysql_secure_installation
   ```

   安全性的配置包含以下五个方面：

   1. 重置root账号密码。

      ```bash
      Enter password for user root: #输入上一步获取的root用户初始密码
      The 'validate_password' plugin is installed on the server.
      The subsequent steps will run with the existing configuration of the plugin.
      Using existing password for root.
      Estimated strength of the password: 100 
      Change the password for root ? ((Press y|Y for Yes, any other key for No) : Y #是否更改root用户密码，输入Y
      New password: #输入新密码，长度为8至30个字符，必须同时包含大小写英文字母、数字和特殊符号。特殊符号可以是()` ~!@#$%^&*-+=|{}[]:;‘<>,.?/
      Re-enter new password: #再次输入新密码
      Estimated strength of the password: 100 
      Do you wish to continue with the password provided?(Press y|Y for Yes, any other key for No) : Y
      ```

   2. 输入Y删除匿名用户账号。

      ```bash
      By default, a MySQL installation has an anonymous user, allowing anyone to log into MySQL without having to have a user account created for them. This is intended only for testing, and to make the installation go a bit smoother. You should remove them before moving into a production environment.
      Remove anonymous users? (Press y|Y for Yes, any other key for No) : Y  #是否删除匿名用户，输入Y
      Success.
      ```

   3. 输入Y禁止root账号远程登录。

      ```bash
      Disallow root login remotely? (Press y|Y for Yes, any other key for No) : Y #禁止root远程登录，输入Y
      Success.
      ```

   4. 输入`Y`删除test库以及对test库的访问权限。

      ```bash
      Remove test database and access to it? (Press y|Y for Yes, any other key for No) : Y #是否删除test库和对它的访问权限，输入Y
      - Dropping test database...
      Success.
      ```

   5. 输入Y重新加载授权表。

      ```bash
      Reload privilege tables now? (Press y|Y for Yes, any other key for No) : Y #是否重新加载授权表，输入Y
      Success.
      All done!
      ```

   更多详情，参见[官方文档](http://dev.mysql.com/doc/refman/5.7/en/mysql-secure-installation.html)。