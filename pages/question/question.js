// pages/question/question.js
const getQuestionData = require('../../utils/data.js').getQuestionData;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    question: {},
    checkAnsId: '',
    nextQueNum: '',
    isFinish: false
  },

  // 选择答案
  checkAnswer: function (e) {
    let answerId = e.currentTarget.dataset.id;
    let nextQueNum = e.currentTarget.dataset.tonum;
    this.setData({
      checkAnsId: answerId,
      nextQueNum: nextQueNum
    })
    if (nextQueNum == 0) {
      this.setData({
        isFinish: true
      })
    } else {
      this.setData({
        isFinish: false
      })
    }
  },

  // 获取下一题
  getNextQuestion: function () {
    if (!this.data.checkAnsId) {
      wx.showToast({
        icon: 'loading',
        title: '请选择答案'
      })
      return false;
    }
    this.setThisQuestion(this.data.nextQueNum);
  },

  // 查看测试结果
  getTestResult: function () {

  },

  // 设置当前题目
  setThisQuestion: function (queNum) {
    this.setData({
      question: getQuestionData(queNum),
      checkAnsId: ''
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