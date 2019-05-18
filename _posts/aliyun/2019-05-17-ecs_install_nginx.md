---
layout: post
title: ECS安装Nginx
author: 晟世青风
categories: [aliyun_install]
---

## 项目配置

* 操作系统：公共镜像 CentOS 7.2 64位
* Nginx版本：Nginx 1.12.2

## 安装Nginx

1. 运行以下命令安装Nginx。

   ```bash
   yum -y install nginx
   ```

2. 运行以下命令查看Nginx版本。

   ```bash
   nginx -v
   ```

   返回结果如下所示，表示Nginx安装成功。

   ```bash
   nginx version: nginx/1.12.2	
   ```



## 配置Nginx

1. 运行以下命令备份Nginx配置文件。

   ```bash
   cp /etc/nginx/nginx.conf /etc/nginx/nginx.conf.bak
   ```

2. 运行以下命令打开Nginx配置文件。

   ```bash
   vim /etc/nginx/nginx.conf
   ```

3. 按`i`进入编辑模式。

4. 在server大括号内，添加下列配置信息。

   ```bash
   location / {
   	index index.php index.html index.htm;
   }
   location ~ .php$ {
   	root /usr/share/php;
   	fastcgi_pass 127.0.0.1:9000;
   	fastcgi_index index.php;
   	fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
   	include fastcgi_params;
   }	
   ```

5. 运行下列命令配置MySQL的安全性。

   ```bash
   systemctl start nginx
   ```

6. 运行以下命令添加Nginx服务开机自启动。

   ```bash
   systemctl enable nginx
   ```


# Nginx相关命令

* 查看Nginx的版本号

  ```bash
  #nginx -V
  ```

* 启动Nginx

  ```bash
  #nginx
  #nginx -c conf/nginx.conf  // 指定配置文件启动
  ```

* 快速停止或关闭Nginx

  ```bash
  #nginx -s stop
  ```

* 正常停止或关闭Nginx

  ```bash
  #nginx -s quit
  ```

* 配置文件修改重装载命令

  ```bash
  #nginx -s reload
  ```

  