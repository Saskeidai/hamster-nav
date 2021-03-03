var num = 0;
$(function() {
    // 侧边导航模块
    $(".sidebar_container").on("click", "h5", function() {
        $(this).parent("dt").nextAll().stop().slideToggle(300);
        $(this).children("i").toggleClass("rotate");
        $(this).parents("dl").siblings().children("dt").removeClass("backgroudB")
        $(this).parent("dt").addClass("backgroudB")
    });
    $.each(resourceContent, function(i, ele) {
        var dl = $("<dl><dt><h5>" + ele.title + "<i class='iconfont icon-xiajiantou'></i></h5></dt></dl>")
        $(".sidebar_container").append(dl)
        $.each(ele.items, function(j, e) {
            dl.append("<dd style='display:none;'><a href='javascript:;'>" + e.name + "</a></dd>")
        })

    });

    content(resourceContent)

    // 内容区域
    // 搜索执行函数
    function itemSearch(items) {

        items.forEach(function(value) {
            console.log(value);
            var demoC = $(".main_item").eq(0).clone();
            demoC.find("img").attr("src", value.ico)
            demoC.find("h5").text(value.name)
            demoC.find(".main_item_content_introduce span").text(value.introduce)
            demoC.find(".url").attr("href", value.url)
            $(".main_items").append(demoC)

        })
    }
    var newArr;
    // 页面加载执行函数
    function itemsOriginal(content) {
        var title = [];
        var sumCOntent = [];
        var arr = [];
        $("header h5").html(content[0].title)
        $.each(content, function(index, ele) {
            // 克隆类
            title.push(ele.title);
            // console.log(ele);
            var content = $(".main_items").eq(0).clone();
            // 循环改变每类里面的数据
            $.each(ele.items, function(index, e) {
                arr.push(e)
                sumCOntent.push(index)
                var demoC = $(".main_item").eq(0).clone();
                demoC.find("img").attr("src", e.ico)
                demoC.find("h5").text(e.name)
                demoC.find(".main_item_content_introduce span").text(e.introduce)
                demoC.find(".url").attr("href", e.url)
                content.append(demoC)
            });
            $("main section").append(content)
        });
        $("main section").children().eq(0).remove();
        num = sumCOntent.length;
        var box = document.querySelector("main section");
        // 滚轮滑动
        function onMouseWheel(ev) { /*当鼠标滚轮事件发生时，执行一些操作*/
            var ev = ev || window.event;
            var down = true; // 定义一个标志，当滚轮向下滚时，执行一些操作
            // down = ev.wheelDelta ? ev.wheelDelta < 0 : ev.detail > 0;
            // if (down) {
            //     console.log('鼠标滚轮向下---------')
            // } else {
            //     console.log('鼠标滚轮向上++++++++++')
            // }
            // 获取分类的位置
            var index = [];
            for (var i = 0; i < title.length; i++) {
                index.push($(".main_items").eq(i).position().top);
            }
            // 改变标题
            for (var j = 0; j < index.length; j++) {
                if (index[j] < 100) {
                    // 标题文字
                    $("header h5").html(title[j])
                        // 侧边栏样式
                    $(".sidebar_container dt").removeClass("backgroudB").eq(j).addClass("backgroudB");

                }
            }
            // console.log(document.querySelectorAll(".main_items")[0]);
            // if (ev.preventDefault) { /*FF 和 Chrome*/
            //     ev.preventDefault(); // 阻止默认事件
            // }
            return false;
        };
        addEvent(box, 'mousewheel', onMouseWheel);
        addEvent(box, 'DOMMouseScroll', onMouseWheel);

        function addEvent(obj, xEvent, fn) {
            if (obj.attachEvent) {
                obj.attachEvent('on' + xEvent, fn);
            } else {
                obj.addEventListener(xEvent, fn, false);
            }
        };
        newArr = arr;
    }

    function content(value, swit) {
        $(".main_items").eq(0).siblings().remove()
        if (!swit) {
            itemsOriginal(value)
        } else {
            itemSearch(value)
        }
    }
    $(".search button").click(function(e) {
        e.preventDefault();
        var search = $(".search input").val();
        var searchContent = newArr.filter(function(value) {
            return value.name == search.trim()
        })
        content(searchContent, "b")
    })

    // 分享功能
    $("main section").on("click", ".main_item_operation .cp", function() {

        var te = $(this).next().children("a").attr("href")
        var input = document.getElementById("copy");
        input.value = te;
        input.select(); // 选中文本
        document.execCommand("copy"); // 执行浏览器复制命令
        alert("复制成功");
    })

    // 搜索

    // console.log(newArr);

})