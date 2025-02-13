// 网页 URL 列表
const webPages = [
    "https://yingxunli.github.io/WatchFaces_UX/5.New_Time/index.html",
    "https://yingxunli.github.io/WatchFaces_UX/6.Ball_Fall/index.html",
    "https://yingxunli.github.io/WatchFaces_UX/7.Bubble_Trouble/index.html",
    "https://yingxunli.github.io/WatchFaces_UX/1.Floating_Geometry/index.html",
    "https://yingxunli.github.io/WatchFaces_UX/2.Scratch_Card/index.html",
    "https://yingxunli.github.io/WatchFaces_UX/3.Zeitfluss/index.html",
    "https://yingxunli.github.io/WatchFaces_UX/4.Bubbles/index.html",
    "https://yingxunli.github.io/WatchFaces_UX/8.Blubberblasen/index.html",
    "https://yingxunli.github.io/WatchFaces_UX/9.%E2%81%A0K%C3%A4se/index.html",
    "https://yingxunli.github.io/WatchFaces_UX/10.%E2%81%A0B%C3%A4llebad/index.html",
    "https://yingxunli.github.io/WatchFaces_UX/11.%E2%81%A0Zeigermodell/index.html",
    "https://yingxunli.github.io/WatchFaces_UX/12.Waves/index.html",
    "https://yingxunli.github.io/WatchFaces_UX/13.Web/index.html",
    "https://yingxunli.github.io/WatchFaces_UX/14.Segments_Clock/index.html",
    "https://yingxunli.github.io/WatchFaces_UX/15.Free_Palestine/index.html",
    "https://yingxunli.github.io/WatchFaces_UX/16.Magnet_Flowers/index.html",
    "https://yingxunli.github.io/WatchFaces_UX/17.Reversed_Falling/index.html"
  ];
  
  let currentIndex = 0;
const iframe = document.getElementById("webFrame");
const pageIndicator = document.getElementById("pageIndicator");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

// 更新 iframe 和页面序号
function updatePage() {
  iframe.src = webPages[currentIndex];
  pageIndicator.textContent = `${currentIndex + 1} / ${webPages.length}`;
}

// 切换到上一页
function showPrevPage() {
  currentIndex = (currentIndex - 1 + webPages.length) % webPages.length;
  updatePage();
}

// 切换到下一页
function showNextPage() {
  currentIndex = (currentIndex + 1) % webPages.length;
  updatePage();
}

// 初始加载第一个网页
updatePage();

// 每分钟自动切换到下一页
setInterval(showNextPage, 60000); // 60000 毫秒 = 1 分钟

// 绑定按钮事件
prevButton.addEventListener("click", showPrevPage);
nextButton.addEventListener("click", showNextPage);