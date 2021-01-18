/* 
 * @Descripttion: 删除目录（空）或文件
 * @version: 1.0
 * @Author: yao
 * @Date: 2021-01-18 16:04:28
 * @LastEditors: yao
 * @LastEditTime: 2021-01-18 16:12:46
 */
const fs = require('fs');

// 删除logs下面的文件
fs.readdirSync('./logs').map(file => {
  fs.unlink(`./logs/${file}`, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`删除了文件logs/${file}`);
    }
  })
});

// 删除空目录logs
fs.rmdir('./logs', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('目录删除成功');
  }
})