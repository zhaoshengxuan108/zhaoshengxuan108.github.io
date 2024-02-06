var relearn_search_index = [
  {
    "breadcrumb": "主页",
    "content": "Lorem Ipsum.\n",
    "description": "",
    "tags": null,
    "title": "计算机图形学",
    "uri": "/computer_graphics/index.html"
  },
  {
    "breadcrumb": "主页 \u003e 计算机图形学",
    "content": "前言 这里转载一些经典教程，内容非常经典，是计算机入门及进阶学习的不二之选。这些教程是非常被大众接受的，很多大佬也推荐学习的。这类教程我将其分为入门级、进阶两大类。不过进阶的目前还没找到。\n入门 从头开始的计算机图形学 原名《Computer Graphics from Scratch》 ，这教程也是不借助任何图形 API 来实现光追模型，非常适合入门学习。分为两部分内容：1.光追。2.光栅化。该教程被制作成电子书，同时也有在线版。\nPeter Shirley 大师光追三部曲 大师的三部曲非常适合光追入门学习，讲解的非常细致，跟着教程一步步地学习下去，将其代码都跟着敲上一遍，可以实现一个简易的光追渲染引擎。这三部曲由浅入深地来讲解光追方面的知识，光追是计算机图形学中非常重要的一部分内容。最重要的是该教程是纯粹从头来实现光追模型的，不需要任何图形 API 。非常适合入门学习。\nRay Tracing in One Weekend Ray Tracing: The Next Week Ray Tracing: The Rest of Your Life OpenGL 教程 OGL dev Modern OpenGL Tutorials OpenGL 入门学习教程 Learn OpenGL OpenGL 入门学习教程，有中文版 ",
    "description": "",
    "tags": null,
    "title": "经典教程",
    "uri": "/computer_graphics/classic-tutorial/index.html"
  },
  {
    "breadcrumb": "主页 \u003e 计算机图形学",
    "content": "",
    "description": "",
    "tags": null,
    "title": "参考资料",
    "uri": "/computer_graphics/reference/index.html"
  },
  {
    "breadcrumb": "主页",
    "content": "Lorem Ipsum.\n",
    "description": "",
    "tags": null,
    "title": "计算机科学",
    "uri": "/computer_science/index.html"
  },
  {
    "breadcrumb": "",
    "content": "Lorem Ipsum.\naaa aaaaaa\naaaa 1public static void main(String[] args) { 2 3 AppMain appMain = new AppMain(); 4 5 String path = \"E:\\\\book\"; 6 File dirFile = new File(path); 7 if (dirFile.isDirectory()) { 8 File[] files = dirFile.listFiles(); 9 for (File f : files) { 10 11 12 String fileHeader = appMain.getFileHeader(f); 13 String fileType = appMain.getFileType(fileHeader); 14 if (StringUtils.isNotEmpty(fileType)) { 15 //System.out.println(f.getName()); 16 String fileName = f.getName() + \".\" + fileType; 17 if (f.renameTo(new File(path + \"/\" + fileName))) { 18 System.out.println(f.getName() + \" 重命名成功！\"); 19 } else { 20 System.err.println(f.getName() + \" 重命名失败！\"); 21 } 22 } 23 } 24 } else { 25 System.out.println(dirFile.getAbsolutePath() + \" 不是路径\"); 26 } 27}1#the hardest part is to start writing code; here's a kickstart; just copy and paste this; it's free; the next lines will cost you serious credits 2print(\"Hello\") 3print(\" \") 4print(\"World\") 5print(\"!\") ",
    "description": "",
    "tags": null,
    "title": "主页",
    "uri": "/index.html"
  },
  {
    "breadcrumb": "主页",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Categories",
    "uri": "/categories/index.html"
  },
  {
    "breadcrumb": "主页",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tags",
    "uri": "/tags/index.html"
  }
]
