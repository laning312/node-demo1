/*
 * @Descripttion: 改名（目录和文件都可以）
 * @version: 1.0
 * @Author: yao
 * @Date: 2021-01-18 16:01:15
 * @LastEditors: yao
 * @LastEditTime: 2021-01-18 16:02:45
 */

const fs = require('fs');

fs.rename('./logss', './logs', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('ok');
  }
})