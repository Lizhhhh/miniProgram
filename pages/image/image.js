// pages/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagePath: '',
    imagePath1: '',
  },
  handleChooseAlbum() {
    // 系统API,让用户在相册中选择图片(或者拍照)
    wx.chooseImage({
      success: res => {
        // 1.取出路径
        const path = res.tempFilePaths[0]

        // 设置路径
        this.setData({
          imagePath: path
        })
      },
    })
  },
  handleChooseAlbum1() {
    // 系统API,让用户在相册中选择图片(或者拍照)
    wx.chooseImage({
      success: res => {
        // 1.取出路径
        const path = res.tempFilePaths[0]

        // 设置路径
        this.setData({
          imagePath1: path
        })
      },
    })
  },
  handImageLoad(){
    console.log('图片加载完成')
  }

})