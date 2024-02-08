---
tags:
    - 游戏
    - 图灵完备
desc: 摸一会鱼
img: https://cdn.jsdelivr.net/gh/open17/Pic/img/202402082346065.jpg
---

# 图灵完备游戏全流程(大概)
:::tip 目录
[[toc]]
:::
## 基础逻辑电路
### 原力觉醒
体验游戏操作
### NAND
通用逻辑门(NOR也是),两个为T才输出F
通关获得NAND
### NOT
用NAND实现,显然NAND两个输入端都为输入值自然就取反了
通关获得NOT
### AND NOR与OR
- AND:对NAND取反即可
- OR: 对NAND的输入两端去反即可
- NOR: 对OR取反即可

:::success 德摩根定律
自此我们获得游戏词条:
![alt text](https://cdn.jsdelivr.net/gh/open17/Pic/img/202402072313338.png)
:::

### 高电平
无论输出如何始终输出T
or的输入接源输入+去反的源输入即可

### 第二刻
> 为什么叫这个名字?

瞪眼法即可

### XOR
逻辑表达出来即可
![](https://cdn.jsdelivr.net/gh/open17/Pic/img/202402072345036.png)

### 三路或门,三路与门
拼接一下即可
### XNOR(同或门)
异或门取反即可

## 算数运算与储存器
### 二进制速算
小游戏
### 成对的麻烦
卡诺图[^1]化简一下即可

[^1]: 卡诺图化简注意事项可以看看[这里](/post/2024/02/07/karnaugh-map/)


因为0少,偷懒对结果加个去反,然后卡诺图化简,则有:
$$\overline{\overline{B}\overline{C}\overline{D}+\overline{A}\overline{C}\overline{D}+\overline{A}\overline{B}\overline{D}+\overline{A}\overline{B}\overline{C}}$$

### 奇数个信号
![](https://cdn.jsdelivr.net/gh/open17/Pic/img/202402080136583.png)

### 循环依赖
> 感觉时序是不是要来了?

随便乱连都可以,只要连回自身

### 延时线

两个延时线连在一起即可

### 奇变偶不变
对延时线输出端取反传入自身输入

### 一位取反器
一个异或门
