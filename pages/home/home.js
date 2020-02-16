Page({
  data: {
    name: 'Marron',
    age: 18,
    students: [{
        id: 110,
        name: 'ko',
        age: 30
      },
      {
        id: 9527,
        name: 'chou',
        age: 18
      },
      {
        id: 111,
        name: 'curry',
        age: 33
      }
    ],
    counter: 0
  },
  handleBtnClick() {
    // 1. 错误做法: 界面不会刷新
    // this.data.counter +=1;

    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleBtnSubstract() {
    this.setData({
      counter: this.data.counter - 1
    })
  }
})