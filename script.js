// 获取所有图片元素
const images = document.querySelectorAll('.slider img');
let currentIndex = 0;

// 切换图片的函数
function showNextImage() {
  // 隐藏当前图片
  images[currentIndex].classList.remove('active');

  // 计算下一张图片的索引
  currentIndex = (currentIndex + 1) % images.length;

  // 显示下一张图片
  images[currentIndex].classList.add('active');
}

// 每 10 秒切换一次图片
setInterval(showNextImage, 10000);
