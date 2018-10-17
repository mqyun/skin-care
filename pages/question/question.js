// pages/question/question.js
const getQuestionData = require('../../utils/data.js').getQuestionData

Page({

  /**
   * 页面的初始数据
   */
  data: {
    question: {}
  },

  // 选择答案
  checkAnswer: function (e) {
    let nextQueNum = e.detail.value;
    if (nextQueNum == 0) {
      wx.showToast({
        title: e.detail.value,
      })
    } else {
      this.setThisQuestion(nextQueNum);
    }
  },

  // 设置当前题目
  setThisQuestion: function (queNum) {
    this.setData({
      question: getQuestionData(queNum)
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setThisQuestion(1);
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