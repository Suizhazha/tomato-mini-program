// pages/test/test.js
Page({
  data: {
message:'我是第一条信息',
condition:false,
arr:[
 1,2,3,4
]
  },

  pushItem(){
    let last = this.data.arr[this.data.arr.length-1]+1
    this.data.arr = this.data.arr.concat([last])
this.setData({arr:this.data.arr})
  },

  onLoad: function (options) {
  },


  onReady: function () {

  },


  onShow: function () {

  },


  onHide: function () {

  },


  onUnload: function () {

  },

  onPullDownRefresh: function () {

  },


  onReachBottom: function () {

  },

  onShareAppMessage: function () {

  }
})