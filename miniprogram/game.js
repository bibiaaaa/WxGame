const {
  windowWidth,
  windowHeight
} = wx.getSystemInfoSync()
const canvas = wx.createCanvas()
const context = canvas.getContext('2d') // 创建一个 2d context
context.fillStyle = '#66ccff' // 矩形颜色
function drawRect(x, y) {
  context.clearRect(0, 0, windowWidth, windowHeight)
  context.fillRect(x, y, 100, 100)
}
const rectX = canvas.width / 2 - 50
let rectY = 0
setInterval(function () {
  drawRect(rectX, rectY++)
}, 16)