// pages/home/home.js
// 注册一个页面
// 页面也有自己的生命周期函数
Page({
  // 页面被加载时
  onLoad() {
    // 一般在这里发送网络请求,得到数据
    wx.request({
      url: 'http://123.207.32.32:8000/recommend',
      success: res => {
        console.log(res)
      }
    })
  },
  // 页面初次渲染完成时,回调
  onReady() {
    console.log('onReady')
  },
  // 页面显示出来时,回调
  onShow() {
    console.log('onShow')
  },
  // 页面隐藏时
  onHide() {
    console.log('onHide')
  },
  // 页面卸载时,页面跳转时,返回上一级页面时触发的函数
  onUnload() {
    console.log('onUnload')
  },
  handleClick() {
    console.log('点')
  },
  // 监听页面滚动
  onPageScroll(obj) {
    console.log(obj);
  },
  // 监听页面滚动到底部
  onReachBottom(){
    console.log('页面滚动到底部');
  },
  onPullDownRefresh(){
    console.log('下拉刷新事件');
  }
})