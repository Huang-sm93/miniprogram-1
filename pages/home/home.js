// pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        year: new Date().getFullYear(),
        month: new Date().getMonth()+1,
        enableShow: false,
        value: 3,
        accountInfo: {
            monthExpenses: -2561.23,
            annualExpenses: -19882.20,
            budget: 2500.00,
            consumption: -2561.23,
            balance: -61.23
        }
    },
    goToAccount() {
        wx.navigateTo({
            url: '../account/account',
        })
    },
    bindDateChange(e) {
        const date = new Date(e.detail.value);
        console.log(e.detail.value)
        this.setData({
          year: date.getFullYear(),
          month: date.getMonth() + 1 // 月份是从0开始的
        });
      },
    onChange: function (e) {
    
      },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        var that = this
        wx.request({
            url: 'http://47.95.172.206:8080/account/get/8888',
            method:"GET",
            dataType:"text",
            header: {
                'content-type': 'application/json' // 默认值
            },
            success(res) {
                var obj = JSON.parse(res.data);
                console.log(obj)
                that.setData({
                    accountGet: obj
                });
            }
        })

    },
    canShow(e){
        this.setData({
            enableShow: this.data.enableShow ? false:true
        })
    },
    tapHandler: function(event) {
        const value = event.currentTarget.dataset.value;
        console.log(value); // 输出：要传递的值
      },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})