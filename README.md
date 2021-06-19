# react bundle tooling comparison

基于 react, react-dom, antd，测试打包工具的效果:
* create-react-app
* parcel
* @dian/cli
* vite(TODO)

## 测试结果

tool | bundle size(gzipped) | loading time(slow 3G) | running time(Snapdragon 410) | total time | building time(no cached)
----- | ----- | ----- | ----- | ----- | -----
cra | 120.28 kB | 2.4s | 570ms | 3s | 11.63s
parcel | 138.17 kB | 2.7s | 698ms | 3.4s | 15.87s
@dian/cli | 123.19 kB | 2.5s | 512ms | 3s | 14.65s
vite | ----- | ----- | ----- | ----- | -----

## 说明


* 使用了 antd 组件 DatePicker & Button, 去掉了 moment 的 locale.
* 加载/执行时间基于 [size-limit](https://github.com/ai/size-limit), a big thanks❤️!
* 测试环境：
    * OS: macOS 11.4
    * CPU: (8) x64 Intel(R) Core(TM) i7-1068NG7 CPU @ 2.30GHz
    * Memory: 1019.69 MB / 32.00 GB
* 测试版本：
    * node: v16.3.0
    * react: v17.0.2
    * react-dom: v17.0.2
    * antd: v4.16.3
    * create-react-app: v4.0.3
    * parcel: 2.0.0-beta.3.1
    * @dian/cli: v1.2.10