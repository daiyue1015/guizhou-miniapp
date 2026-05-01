Component({
  properties: {
    origin: {
      type: String,
      value: ''
    },
    coord: {
      type: Object,
      value: { x: 50, y: 50 }
    },
    productName: {
      type: String,
      value: ''
    }
  },

  data: {
    markerAnimating: false
  },

  lifetimes: {
    attached() {
      // 启动标记点呼吸动画
      setTimeout(() => {
        this.setData({ markerAnimating: true })
      }, 500)
    }
  },

  methods: {
    onTapMarker() {
      this.setData({ markerAnimating: false })
      setTimeout(() => {
        this.setData({ markerAnimating: true })
      }, 50)
    }
  }
})
