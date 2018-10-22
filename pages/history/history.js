// pages/history/history.js
const getSkinTypeData = require('../../utils/data.js').getSkinTypeData;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    history: []
  },

  delHistory: function () {
    let _this = this;
    wx.showModal({
      title: '提示',
      content: '确定要清空历史记录吗？',
      success: function (e) {
        if (e.confirm) {
          wx.removeStorageSync('history')
          _this.setData({
            history: []
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let historyStorage = wx.getStorageSync('history') || [];
    let history = [];
    for (let item of historyStorage) {
      let parentId = item.split(',')[0];
      let sonId = item.split(',')[1];
      history.push(getSkinTypeData(parentId, sonId))
    }
    this.setData({
      history
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