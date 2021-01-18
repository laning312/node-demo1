/*
 * @Descripttion: 创建目录
 * @version: 1.0
 * @Author: yao
 * @Date: 2021-01-18 15:31:15
 * @LastEditors: yao
 * @LastEditTime: 2021-01-18 15:32:53
 */

const fs = require('fs');

fs.mkdir('logs', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('创建成功');
  }
})