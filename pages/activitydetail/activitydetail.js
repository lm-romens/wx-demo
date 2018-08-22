// pages/activitydetail/activitydetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    spaceimgs:[],
    activitydata:{},
    currentIndex:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     console.log(options)
     this.setData({
       activitydata:{
         "name": "云栖技术分享日（云栖TechDay" + options.id + "）",
         "date": "2016/06/08 14:00",
         "hasentered": 60,
         "total": 200,
         "address": '上海市松江区莘砖公路518号双子楼1楼',
         "hoster": "上海爱普科技有限公司"
       },
       spaceimgs:["http://139.196.218.128/SjPark/UserFile/Files/Thumbnail/46932530-4bc8-48dc-bf10-1e5e39d254b8_750x470.png", "http://139.196.218.128/SjPark/UserFile/Files/Thumbnail/73efa039-6c54-43c6-8ad9-70f831723e2e_750x470.png", "http://139.196.218.128/SjPark/UserFile/Files/Thumbnail/eb8bbf4d-e236-4c92-900c-67d8b941b02a_750x470.png"]
     })
     wx.setNavigationBarTitle({
       title: this.data.activitydata.name,
     })
  },

  setCurrent:function(e){
    this.setData({
      currentIndex:e.detail.current+1
    })
  },
  imgPreview:function(){
    const imgs=this.data.spaceimgs;
    wx.previewImage({
      urls: imgs,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})