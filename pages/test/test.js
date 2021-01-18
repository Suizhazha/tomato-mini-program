// pages/test/test.js
Page({
  data: {
message:'我是第一条信息',
condition:false,

arr:[{
  id:1,
  text:2
},
{
  id:2,
  text:3
},
{
  id:3,
  text:4
}
],

array:[1,2,3,4],

str:'12345',
obj:{id:1,text:'我是信息1'},
red:true
},



  onTure(){
    console.log(this.data.condition);
    this.setData({condition:!this.data.condition})
    console.log(this.data.condition);
  },

reverStr(){
 this.setData({str:this.data.str.split('').reverse().join('')})
},
  pushItem(){
    let last = this.data.array[this.data.array.length-1] + 1
    console.log(last);
    let newArr = [last]
    console.log(newArr)
this.data.array=this.data.array.concat (newArr)
this.setData({array:this.data.array})
  },

  modifyText(){
    //修改对象的属性，使用'obj.text':'xxx'的方法
this.setData({'obj.text':'我是信2'})
console.log(this.data.obj)
  },
modifyColor(){
  this.setData({red:!this.data.red})
},


  onLoad: function (options) {
    console.log(options);
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