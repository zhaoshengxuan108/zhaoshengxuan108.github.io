---
layout: post
title: 插入排序
author: 晟世青风
categories: [sorting]
---

### 概述

（英语：Insertion Sort）是一种简单直观的[排序算法](https://zh.wikipedia.org/wiki/排序算法)。它的工作原理是通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。**插入排序**在实现上，通常采用in-place排序（即只需用到{\displaystyle O(1)}![{\displaystyle O(1)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e66384bc40452c5452f33563fe0e27e803b0cc21)的额外空间的排序），因而在从后向前扫描过程中，需要反复把已排序元素逐步向后挪位，为最新元素提供插入空间。

### 代码实现

```java
public void insertionSort(int[] array) {
    for (int i = 1; i < array.length; i++) {
        int key = array[i];
        int j = i - 1;
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = key;
    }
}
```

### 扩展阅读

1. Simpsons, Unknown (28 November 2011), ["Visualising Sorting Algorithms"](https://upload.wikimedia.org/wikipedia/commons/4/42/Insertion_sort.gif), retrieved 16 November 2017
2.  Bentley, Jon (2000), *Programming Pearls*, ACM Press/Addison–Wesley, pp. 116, 121
3.  [Sedgewick, Robert](https://en.wikipedia.org/wiki/Robert_Sedgewick_(computer_scientist)) (1983), *Algorithms*, Addison-Wesley, pp. 95ff, [ISBN](https://en.wikipedia.org/wiki/International_Standard_Book_Number) [978-0-201-06672-2](https://en.wikipedia.org/wiki/Special:BookSources/978-0-201-06672-2).
4. [Cormen, Thomas H.](https://en.wikipedia.org/wiki/Thomas_H._Cormen); [Leiserson, Charles E.](https://en.wikipedia.org/wiki/Charles_E._Leiserson); [Rivest, Ronald L.](https://en.wikipedia.org/wiki/Ron_Rivest); [Stein, Clifford](https://en.wikipedia.org/wiki/Clifford_Stein) (2009) [1990]. "Section 2.1: Insertion sort". *Introduction to Algorithms* (3rd ed.). MIT Press and McGraw-Hill. pp. 16–18. [ISBN](https://en.wikipedia.org/wiki/International_Standard_Book_Number) [0-262-03384-4](https://en.wikipedia.org/wiki/Special:BookSources/0-262-03384-4).. See in particular p. 18.
5. Schwarz, Keith. ["Why is insertion sort Θ(n^2) in the average case? (answer by "templatetypedef")"](https://stackoverflow.com/a/17055342). Stack Overflow.
6. ["Binary Merge Sort"](https://docs.google.com/file/d/0B8KIVX-AaaGiYzcta0pFUXJnNG8)
7. Bender, Michael A.; [Farach-Colton, Martín](https://en.wikipedia.org/wiki/Martin_Farach-Colton); Mosteiro, Miguel A. (2006), "Insertion sort is *O*(*n* log *n*)", *Theory of Computing Systems*, **39** (3): 391–397, [arXiv](https://en.wikipedia.org/wiki/ArXiv):[cs/0407003](https://arxiv.org/abs/cs/0407003), [doi](https://en.wikipedia.org/wiki/Digital_object_identifier):[10.1007/s00224-005-1237-z](https://doi.org/10.1007%2Fs00224-005-1237-z), [MR](https://en.wikipedia.org/wiki/Mathematical_Reviews) [2218409](https://www.ams.org/mathscinet-getitem?mr=2218409)
8. Hill, Curt (ed.), "Trailing Pointer Technique", [*Euler*](http://euler.vcsu.edu:7000/11421/), Valley City State University, retrieved 22 September 2012.