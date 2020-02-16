// pages/home/home.js

// 获取App()产生的实例对象
const app = getApp();
const name = app.globalData1.name;
const age = app.globalData1.age;



Page({
  data:{
    name,
    age
  },

  handleClick(e) {
    console.log(e)
  },

  handleGetUserInfo(e) {
    console.log(e)
  }
})