# react bundle tooling comparison

基于 react, react-dom, antd，测试打包工具的效果:
* create-react-app
* parcel
* @dian/cli
* vite(TODO)

## 测试结果

tool | bundle size(gzipped) | loading time | running time | total time | building time
----- | ----- | ----- | ----- | ----- | -----
cra | 120.28 kB | 2.4s | 570ms | 3s | 23.72s
parcel | 413.95 kB | 8.1s | 4.5s | 12.6s | 8.94s
@dian/cli | 123.19 kB | 2.5s | 512ms | 3s | 15.54s
vite | ----- | ----- | ----- | ----- | -----

## 说明


* 使用了 antd 组件 DatePicker & Button, 去掉了 moment 的 locale.
* 加载/执行时间基于 [size-limit](https://github.com/ai/size-limit), a big thanks❤️!
* 测试环境：
    OS: macOS 11.4
    CPU: (8) x64 Intel(R) Core(TM) i7-1068NG7 CPU @ 2.30GHz
    Memory: 1019.69 MB / 32.00 GB
* 测试版本：
    * node: v14.17.1
    * react: v17.0.2
    * react-dom: v17.0.2
    * antd: v4.16.3
    * create-react-app: v4.0.3
    * parcel: 2.0.0-beta.3.1
    * @dian/cli: v1.2.10