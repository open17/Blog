---
tags:
    - 数据分析
    - 问卷
---

# 记一次问卷数据分析

## 概述
巴拉巴拉巴拉
## 预处理

### 数据清洗
去除问卷有效性设问回答错误的数据,以及按照作答时间3sigma清洗

同时处理异常值

### 虚拟变量转换
对于问卷中的无序定类变量,我们将其转换为虚拟变量(独热编码/哑变量),比如无序多选题,转为二元定量变量

### 数据编码

我们对问卷中的有序定类数据进行编码,记得最好正向编码

比如对A的满意度: 非常不满意 不满意 一般 满意 非常满意 
我们将其编码为： 1 2 3 4 5

## 信度分析

Cronbach's α,对问卷的每一个模块的选项进行信度分析

由于问卷选项的值不一致,记得取用标准化Cronbach's α系数

同时可根据标准化Cronbach's α系数变化对问卷部分问题项进行剔除

## 效度分析

- KMO检验>0.6
- Bartlett检验P值<0.05


## 描述性统计

一些最基础的数据分析,比如每个选项的频数比重方差等

然后加上可视化

还可以使用交叉列联分析进一步补充描述分析的有效性

## 问题假设
通过描述性统计与可视化观察与猜测一些有趣的性质结论
然后进一步验证

## 多源回归

### 数据降维
很多时候我们希望结论是一个y变量和多个x变量,所以我们对y变量进行降维

因为问卷一般是二元数据,所以直接PCA即可

## Spearman相关性分析
为了进一步选择哪些x可用,我们进行相关性分析

一般来说问卷结果不一定呈现正态分布,不建议使用皮尔森

斯皮尔曼要求必须是定量或有序定量变量

## 多元回归

选取相关性与y的p值显著的作为x变量,然后进行多元回归,建立模型

检验VIF,$R^2$,P值

然后文字描述即可




