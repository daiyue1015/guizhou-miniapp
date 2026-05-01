const { products } = require('../../data/products')

Page({
  data: {
    products: [],
    featuredProduct: null,
    currentScenicIndex: 0,
    scenicImages: [
      { name: '黄果树瀑布', emoji: '🏔️' },
      { name: '西江千户苗寨', emoji: '🏘️' },
      { name: '荔波小七孔', emoji: '🌿' },
      { name: '赤水丹霞', emoji: '⛰️' }
    ]
  },

  onLoad() {
    this.setData({
      products,
      featuredProduct: products.find(p => p.featured)
    })
  },

  onPullDownRefresh() {
    wx.stopPullDownRefresh()
  },

  onTapProduct(e) {
    const { id } = e.currentTarget.dataset
    wx.navigateTo({
      url: `/pages/detail/detail?id=${id}`
    })
  },

  onSwiperChange(e) {
    this.setData({
      currentScenicIndex: e.detail.current
    })
  },

  onImgError(e) {
    // 图片加载失败时，显示占位背景
    const { detail } = e
  }
})
