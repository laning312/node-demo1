/*
 * @Descripttion: 获取文件信息
 * @version: 1.0
 * @Author: yao
 * @Date: 2021-01-18 14:54:42
 * @LastEditors: yao
 * @LastEditTime: 2021-01-18 15:31:09
 */


const fs = require('fs');
const moment = require('moment');

fs.stat('./index.js', (err, stats) => {
  if (err) {
    console.log(err);
  } else {
    console.log(stats);
    console.log(stats.isFile());
    console.log(stats.isDirectory());
    console.log(moment(stats.birthtime).format('YYYY-MM-DD HH:mm:ss'));
  }
})