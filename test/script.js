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
  
  // 切换到下一个网页
  function showNextPage() {
    // 更新 iframe 的 src 属性
    iframe.src = webPages[currentIndex];
  
    // 更新索引
    currentIndex = (currentIndex + 1) % webPages.length;
  }
  
  // 初始加载第一个网页
  showNextPage();
  
  // 每分钟切换一次网页
  setInterval(showNextPage, 60000); // 60000 毫秒 = 1 分钟