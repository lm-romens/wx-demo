import util from './../../utils/util.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
     sortindex:0,
     sortid:null,
     sort:[],
     activitylist:[],
     scrolltop:null,
     page:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.fetchSortData(),
    this.fetchConferenceData()
  },
  fetchSortData:function(){
    this.setData({
      sort:[
        {
          "id": 0,
          "title": "热门点击"
        },
        {
          "id": 1,
          "title": "最新发布"
        },
        {
          "id": 2,
          "title": "最多参与"
        },
      ]
    })
  },
  fetchConferenceData:function(){ 
    const perpage=10;
    this.setData({
      page:this.data.page+1
    })
    const page=this.data.page;
    const newlist=[];
    for (var i=(page-1)*perpage;i<page*perpage;i++){
      newlist.push({
        "id": i + 1,
        "name": "云栖技术分享日（云栖TechDay" + (i + 1) + "）",
        "status": "进行中", //util.getRandomArrayElement(["进行中", "报名中", "已结束"]),
        "time": "2016/07/12 14:00",
        "coments": Math.floor(Math.random() * 1000),
        "address": "杭州云栖小镇咖啡馆  （杭州云计算产业园内）",
        "imgurl": "http://pic.58pic.com/58pic/12/34/51/85d58PICkjf.jpg"
      })
    }
    this.setData({
      activitylist:this.data.activitylist.concat(newlist)
    })
  },
  setSortBy(e){
    const d=e.data;
    const dataset=e.currentTarget.dataset;
    this.setData({
      sortindex:dataset.sortindex,
      sortid:dataset.sortid,
    })
  },
  scrollHandle:function(e){
     this.setData({
       scrolltop:e.detail.scrolltop
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