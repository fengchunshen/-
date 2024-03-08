//导入request请求工具类
import {requestUtil} from '../../utils/requestUtils';
import {getBaseUrl} from '../../utils/requestUtils';
import {regeneratorRuntime} from '../../lib/runtime/runtime';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //轮播图数组
    swiperList:[],

    bigTypeList_row1:[],
    bigTypeList_row2:[],
    bigTypeList:[],
    hotProductList:[],
    baseUrl:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const baseUrl=getBaseUrl();
    this.setData({
      baseUrl: baseUrl
    })
    //发送异步请求，获取后端数据
    this.getSwiperList();
    this.getBigTypeList();
    this.getHotProductList();
  },
  async getSwiperList(){
    const result=await requestUtil({url:'/product/findSwiper',method: "GET"});
    this.setData({
      swiperList:result.message,
    })
  },
  async getBigTypeList(){
    const result=await requestUtil({
      url:'/bigType/findAll',
      method: "GET"
    });
    const bigTypeList=result.message;
    const bigTypeList_row1=bigTypeList.filter((item,index)=>{
      return index<5;
    })
    const bigTypeList_row2=bigTypeList.filter((item,index)=>{
      return index>=5;
    })
    this.setData({
      bigTypeList,
      bigTypeList_row1,
      bigTypeList_row2
    })
  },
  async getHotProductList(){
    const result=await requestUtil({
      url:'/product/findHot',
      method: "GET"
    });
    const hotProductList=result.message;
    this.setData({
      hotProductList
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