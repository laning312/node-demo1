/*
 * @Descripttion: 列出目录下的内容
 * @version: 1.0
 * @Author: yao
 * @Date: 2021-01-18 15:58:07
 * @LastEditors: yao
 * @LastEditTime: 2021-01-18 16:00:15
 */

const fs = require('fs');

fs.readdir('./logs', (err, files) => {
  if (err) {
    console.log(err);
  } else {
    console.log(files);
  }
})
