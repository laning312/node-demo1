/*
 * @Descripttion: 事件（发布订阅模式）
 * @version: 1.0
 * @Author: yao
 * @Date: 2021-01-18 14:11:01
 * @LastEditors: yao
 * @LastEditTime: 2021-01-18 16:12:26
 */

const EventEmitter = require('events');

class Player extends EventEmitter { }

let player = new Player();

player.on('play', (chunk) => {
  console.log(`开始播放:《${chunk}》`);
});

player.emit('play', '明天你好');