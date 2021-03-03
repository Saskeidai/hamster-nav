window.addEventListener("load", function() {
    // var bgimgData = document.querySelector(".bgimg img");
    // // 获取检查存储状态
    // var bgImg = localStorage.getItem('bgImg');
    // if (bgImg == null) {
    //     var str = JSON.stringify(bgimgData.getAttribute("src"));
    //     localStorage.setItem("bgImg", str);
    // }
    // 为背景赋值
    // bgImg = bgImg.replace(/^\"|\"$/g, '');
    // bgimgData.setAttribute("src", bgImg);

    // 背景亮度模块
    // luminance.value = "3";
    // luminancetext.innerHTML = "30";
})
window.addEventListener("unload", function() {
    // 背景图片数据存储
    // var bgimgData = document.querySelector(".bgimg img");
    // var str = JSON.stringify(bgimgData.getAttribute("src"));
    // localStorage.setItem("bgImg", str);

    // 亮度存储
    var luminance = document.querySelector(".luminance input").value;
    localStorage.setItem("luminance", luminance)
})