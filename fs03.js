/*
 * @Descripttion: 写文件（文件不存在会自动创建）
 * @version: 1.0
 * @Author: yao
 * @Date: 2021-01-18 15:33:56
 * @LastEditors: yao
 * @LastEditTime: 2021-01-18 15:43:45
 */

const fs = require('fs');

// fs.writeFile('./logs/a.txt', 'hi ~', (err) => {
// fs.writeFile('./logs/a.txt', '你好 ~', (err) => {
fs.writeFile('./logs/a.txt', '你好 ~\n', { encoding: 'utf8', flag: 'a' }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('写入成功');
  }
});

/*
fs.appendFile('./logs/a.txt', 'hello ~', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('写入成功');
  }
});
*/
