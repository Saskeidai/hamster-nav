$(".contentRight").hide()
document.onreadystatechange = function() {
    if (document.readyState == "complete") {
        $(".prestrain").hide()
        $(".contentRight").show()
        $(function() {
            $(document).css({
                background: "#000"
            });
            $(".contentRight").click(function() {
                $(".setting_list").slideUp(250);
                $(".luminance").slideUp(250);
            });
            // 设置下拉列表
            $(".setting_icon").click(function(e) {
                $(".setting_list").stop().slideToggle(300);
                e.stopPropagation();
            });
            // 背景
            $("#setbg").click(function(e) {
                $(this).parents(".setting_list").stop().slideUp(300);
                $(".bg_list").slideDown();
                e.stopPropagation();
                $(".bg_list li").each(function(index, domEle) {
                    var w = $(".bg_list_Container li").outerWidth(true);
                    $(".bg_list_Container li").css("height", w);
                });
            });
            // 亮度
            $("#luminance").on("click", function(e) {
                e.stopPropagation();
                $(".luminance").stop().slideToggle(300);
            });
            // 时间模块
            function showTime() {
                var timeH = document.getElementById('timeH');
                var timeM = document.getElementById('timeM');
                var now = new Date();
                var h = now.getHours();
                h = h < 10 ? '0' + h : h;
                var m = now.getMinutes();
                m = m < 10 ? '0' + m : m;
                timeH.innerHTML = h;
                timeM.innerHTML = m;
            }
            showTime();
            setInterval(showTime, 1000);
            // 搜索板块
            $(".search input").focus(function() {
                if ($(this).val("search")) {
                    $(this).val("");
                    $(this).css({
                        "color": "#333"
                    });
                }
                // 背景效果变换
                var luminance = parseFloat($(".bgShade").css("opacity"))
                if (luminance < 0.5) {
                    var luminancenew = luminance + 0.2
                    luminancenew = luminancenew.toFixed(1)
                    $(".bgShade").animate({
                        opacity: luminancenew
                    }, 300)
                }
                $(".bgimg img").addClass("imgfocus");
                // 推荐站
                $(".donate").fadeOut(300)
            });
            $(".search input").blur(function() {
                if ($(this).val("")) {
                    $(this).val("search");
                    $(this).css("color", "#666");
                }
                // 背景效果变换
                var luminanceText = $(".luminance span").text()
                var luminanceTextnew = 100 - parseInt(luminanceText.slice(0, -1)) + "%";
                $(".bgShade").animate({
                    opacity: luminanceTextnew
                }, 300)
                $(".bgimg img").stop().removeClass("imgfocus");
                // 推荐站
                $(".donate").fadeIn(300)
            });

            // 背景切换板块
            var bglistImg = ["bg1", "bg2", "bg3", "bg4", "bg5", "bg6", "bg7"];
            $.each(bglistImg, function(i, ele) {
                $(".bg_list ul").prepend("<li><div><img src='../common/images/" + ele + ".jpg'></div></li>")
            });
            // 列表大小
            $(".bg_list_header i").click(function() {
                $(".bg_list").slideUp();
            });
            $(".bg_list_Container").on("click", "li", function() {
                $(".bg_list").slideUp()
            });
            // 背景切换
            $(".bg_list_Container img").click(function() {
                var bgSrc = $(this).prop("src");
                // 切换主背景
                $(".bgimg img").prop("src", bgSrc)
            });
            $(".bg_list").click(function(e) {
                e.stopPropagation();
            });
            $(".luminance").on("click", function(e) {
                e.stopPropagation();
            });

            $(".luminance input").on("focus", function() {
                $(".luminance input").change(function() {
                    luminance()
                });
            });
            // 获取背景亮度
            var newLuminanceText = localStorage.getItem("luminance");
            // 判断是否有亮度存储信息
            if (newLuminanceText !== null) {
                $(".luminance input").val(newLuminanceText)
            };

            function luminance() {
                var val = $(".luminance input").val() + "0";
                $(".luminance i").text(val)
                var luminanceText = $(".luminance span").text()
                var luminanceTextnew = 100 - parseInt(luminanceText.slice(0, -1)) + "%";
                $(".bgShade").animate({
                    opacity: luminanceTextnew
                }, 300)
            };
            $(luminance())

            // 推荐站点
            // 图标外部容器高度
            var donateW = $(".donate_content div").outerWidth()
            $(".donate_content div").css({
                "height": donateW,
                "lineHeight": donateW + "px"
            })
        })
    }
}