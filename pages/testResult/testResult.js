// pages/testResult/testResult.js
const getSkinTypeData = require('../../utils/data.js').getSkinTypeData;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    parentId: '',
    sonId: '',
    skinData: {}
  },

  // 查看皮肤类型护理详情
  toViewDetail: function (e) {
    let parentId = e.currentTarget.dataset.parentid;
    let sonId = e.currentTarget.dataset.sonid;
    wx.navigateTo({
      url: '../skinDetail/skinDetail?parentid=' + this.data.parentId + '&sonid=' + this.data.sonId
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let parentId = options.parentid;
    let sonId = options.sonid;
    this.setData({
      parentId,
      sonId,
      skinData: getSkinTypeData(parentId, sonId)
    })
    console.log(getSkinTypeData(parentId, sonId))
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