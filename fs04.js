/*
 * @Descripttion: 读取文件内容
 * @version: 1.0
 * @Author: yao
 * @Date: 2021-01-18 15:44:35
 * @LastEditors: yao
 * @LastEditTime: 2021-01-18 15:46:38
 */

const fs = require('fs');

fs.readFile('./logs/a.txt', 'utf8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
})
