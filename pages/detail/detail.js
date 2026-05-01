const { products } = require('../../data/products')

Page({
  data: {
    product: null,
    relatedProducts: []
  },

  onLoad(options) {
    const { id } = options
    const product = products.find(p => p.id === Number(id))
    if (!product) return

    // 获取同类或同产地相关产品
    const related = products
      .filter(p => p.id !== product.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 4)

    this.setData({
      product,
      relatedProducts: related
    })

    wx.setNavigationBarTitle({
      title: product.name
    })
  },

  onTapRelated(e) {
    const { id } = e.currentTarget.dataset
    wx.redirectTo({
      url: `/pages/detail/detail?id=${id}`
    })
  },

  onPreviewImage() {
    const { product } = this.data
    wx.previewImage({
      urls: [product.image],
      current: product.image
    })
  },

  onImgError(e) {
    // 图片加载失败，CSS占位背景生效
  },

  onShareAppMessage() {
    const { product } = this.data
    return {
      title: `${product.name} - 贵州特色产品`,
      path: `/pages/detail/detail?id=${product.id}`
    }
  }
})
