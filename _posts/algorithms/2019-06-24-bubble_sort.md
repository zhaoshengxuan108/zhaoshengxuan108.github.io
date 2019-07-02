---
layout: post
title: 冒泡排序
author: 晟世青风
categories: [sorting]
---

### 概述

（**Bubble Sort**）是一种简单的排序算法。它重复地走访过要排序的数列，一次比较两个元素，如果他们的顺序错误就把他们交换过来。走访数列的工作是重复地进行直到没有再需要交换，也就是说该数列已经排序完成。这个算法的名字由来是因为越小的元素会经由交换慢慢“浮”到数列的顶端。

冒泡排序算法的运作如下：

1. 比较相邻的元素。如果第一个比第二个大，就交换他们两个。
2. 对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。这步做完后，最后的元素会是最大的数。
3. 针对所有的元素重复以上的步骤，除了最后一个。
4. 持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。

由于它的简洁，冒泡排序通常被用来对于程序设计入门的学生介绍算法的概念。



### 代码实现

```java
public static void bubbleSort(int[] arr) {
    int i, temp, len = arr.length;
    boolean changed;
    do {
        changed = false;
        len-=1;
        for (i = 0; i < len; i++) {
            if (arr[i] > arr[i + 1]) {
                temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                changed = true;
            }
        }
    } while (changed);
}

public static <T extends Comparable<T>> void bubbleSort2(T[] arr) {
    int n = arr.length;
    int newn;
    do {
        newn = 0;
        for (int i = 1; i < n; i++)
            if (arr[i - 1].compareTo(arr[i]) > 0) {
                swap(arr, i - 1, i);
                newn = i;
            }
        n = newn;
    } while (newn > 0);
}
```



### 扩展阅读

1. Cortesi, Aldo (27 April 2007). ["Visualising Sorting Algorithms"](https://corte.si/posts/code/visualisingsorting/index.html). Retrieved 16 March 2017.
2. [Donald Knuth](https://en.wikipedia.org/wiki/Donald_Knuth). *The Art of Computer Programming*, Volume 3: *Sorting and Searching*, Second Edition. Addison-Wesley, 1998. [ISBN](https://en.wikipedia.org/wiki/International_Standard_Book_Number) [0-201-89685-0](https://en.wikipedia.org/wiki/Special:BookSources/0-201-89685-0). Pages 106–110 of section 5.2.2: Sorting by Exchanging. "[A]lthough the techniques used in the calculations [to analyze the bubble sort] are instructive, the results are disappointing since they tell us that the bubble sort isn't really very good at all. Compared to straight insertion […], bubble sorting requires a more complicated program and takes about twice as long!" (Quote from the first edition, 1973.)
3. Cormen, Thomas H.; Leiserson, Charles E.; Rivest, Ronald L.; Stein, Clifford (2001). *Introduction to Algorithms* (2nd ed.). Problem 2-2: MIT Press and McGraw-Hill. p. 40. [ISBN](https://en.wikipedia.org/wiki/International_Standard_Book_Number) [0-262-03293-7](https://en.wikipedia.org/wiki/Special:BookSources/0-262-03293-7).
4. Knuth, Donald E. (1998). *The Art of Computer Programming: Volume 3* (2nd ed.). Chapter 5, Section 5.2.2: Addison-Wesley Professional. p. 107. [ISBN](https://en.wikipedia.org/wiki/International_Standard_Book_Number) [978-0201896855](https://en.wikipedia.org/wiki/Special:BookSources/978-0201896855).
5. Astrachan, Owen (2003). ["Bubble sort: an archaeological algorithmic analysis"](http://www.cs.duke.edu/~ola/papers/bubble.pdf) (PDF). *ACM SIGCSE Bulletin*. **35** (1): 1–5. [doi](https://en.wikipedia.org/wiki/Digital_object_identifier):[10.1145/792548.611918](https://doi.org/10.1145%2F792548.611918). [ISSN](https://en.wikipedia.org/wiki/International_Standard_Serial_Number) [0097-8418](https://www.worldcat.org/issn/0097-8418).
6.  Black, Paul E. (24 August 2009). ["bubble sort"](https://xlinux.nist.gov/dads/HTML/bubblesort.html). *Dictionary of Algorithms and Data Structures*. [National Institute of Standards and Technology](https://en.wikipedia.org/wiki/National_Institute_of_Standards_and_Technology). Retrieved 1 October 2014.
7. [Owen Astrachan](https://en.wikipedia.org/wiki/Owen_Astrachan). [Bubble Sort: An Archaeological Algorithmic Analysis](https://users.cs.duke.edu/~ola/bubble/bubble.html)

