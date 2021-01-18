/*
 * @Descripttion: 读取文件流
 * @version: 1.0
 * @Author: yao
 * @Date: 2021-01-18 16:10:25
 * @LastEditors: yao
 * @LastEditTime: 2021-01-18 16:31:36
 */

const fs = require('fs');
const fileReadStream = fs.createReadStream('./data/books.json');

let count = 0;

fileReadStream.on('data', (chunk) => {
  console.log(`${++count}: ${chunk.length}`);
  // console.log(`${++count}:${chunk.toString()}`);
});
