---
title: 网络模型
order: 0
toc: content
group:
  title: 基础知识
---

## [TCP/IP 网络模型概述](https://xiaolincoding.com/network/)

在计算机网络中，不同设备间的进程通信是至关重要的。虽然单个设备上的进程可以通过管道、消息队列、共享内存等方式进行通信，跨设备通信则依赖于网络。为了实现设备间的通信，国际标准化组织提出了 OSI 七层网络模型。然而，由于其复杂性，实际应用中更常使用的是简化版的 TCP/IP 模型。

## TCP/IP 模型的四层结构

TCP/IP 模型由四层组成，每层具有不同的职责：

- **应用层**：提供用户可直接使用的应用程序，如 HTTP、DNS、FTP 等。
- **传输层**：实现端到端的通信，例如 TCP 和 UDP。
- **网络层**：负责数据包的封装、分片、路由和转发，例如 IP 和 ICMP。
- **网络接口层**：处理数据包在物理网络中的传输，包括封帧、MAC 地址寻址、差错检测等。

![TCP/IP 网络模型](https://raw.githubusercontent.com/chuenwei0129/my-picgo-repo/master/me/20240410163734.png)

## 操作系统中的网络包处理机制

在 Linux 系统中，应用程序通过 Socket 接口发送的数据包，会经过网络协议栈的逐层处理后，送至网卡队列，再由网卡发送出去。

![网络包处理机制](https://raw.githubusercontent.com/chuenwei0129/my-picgo-repo/master/me/20240410164933.png)

接收数据包时，也需通过网络协议栈的逐层处理，最终才能交给应用程序。

![接收数据包过程](https://raw.githubusercontent.com/chuenwei0129/my-picgo-repo/master/me/20240410163626.png)

## 数据包的封装

设想你的身体代表应用层数据，打底衣服象征传输层的 TCP 头，外套代表网络层的 IP 头，而帽子和鞋子则分别对应网络接口层的帧头和帧尾。在冬季外出时，你会依次穿上这些衣物，类似于网络协议栈在发送数据包时的层层封装过程。

![数据包封装示意图](https://raw.githubusercontent.com/chuenwei0129/my-picgo-repo/master/me/20240410164156.png)

由于物理链路的限制，不能传输任意大小的数据包。以太网规定最大传输单元 (MTU) 为 1500 字节，限制了单次可传输的最大 IP 包大小。**超过 MTU 的数据包会在网络层进行分片**，以保证传输效率。

## 数据包的发送流程

从发送到接收，一个数据包会经历从应用层到物理层的传输，再从物理层回到应用层的过程。这个过程包括数据包的封装、传输、路由选择、到达接收端后的解封装等一系列复杂操作。其中涉及到的缓冲区管理、中断处理和数据重组等环节，都是保证数据准确、高效传输的关键。

![数据包发送流程](https://raw.githubusercontent.com/chuenwei0129/my-picgo-repo/master/me/20240414164452.png)
