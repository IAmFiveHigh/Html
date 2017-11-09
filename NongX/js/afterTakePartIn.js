/**
 * Created by meitiannongzi on 2017/11/8.
 */

var screenWidth = document.body.scrollWidth
var screenHeight = document.body.scrollHeight

$(function () {

    var showType = 0 //0： 详情 1：二维码

    console.log(screenWidth)
    console.log(screenHeight)
    //设置背景 宽高

    var maxLeft = screenWidth > 500 ? (screenWidth - 500) / 2 : 0
    var maxWidth = screenWidth > 500 ? 500 : screenWidth

    var background = $("#background")
    //设置光亮背景和山
    var bgIMG = $("#bgIMG")
    var hill = $("#hill")

    background.css("width", maxWidth).css("height", screenHeight).css("left", maxLeft + "px")
    bgIMG.css("width", maxWidth)
    hill.css("width", maxWidth)

    $("#textarea1").hide()

    //我要代言按钮
    var vote = $("#vote")
    vote.css("width", maxWidth)
    var voteTop = vote.offset().top

    //调整包装位置
    //修改area
    var pack = $("#pack")
    var area = $("#area")

    if (maxWidth / screenHeight > 0.65) {
        pack.css("height", screenHeight * 0.65)
        // area.css("width", )
    }else {
        pack.css("width", maxWidth * 0.70)
    }
    pack.css("bottom", (screenHeight - voteTop) / screenHeight * 100 + "%")
    area.css("top", pack.offset().top + screenHeight * 0.189).css("width", maxWidth * 0.5).css("left", pack.offset().right - maxWidth / 10)




    var voteBtn = $("#vote>img:first")

    voteBtn.click(function () {

        $(this).attr("src","images/发布我的代言.png")
        $("#person").fadeOut()
        $("#vertical_word").animate({
            opacity: 0
        }, 800)

        $("#area").delay(800).hide().css("right", maxWidth * 0.25 + "px")
        $("#pack").delay(800).animate({
            left: maxWidth * 0.30 / 2 + "px"

        },800)

        $("#textarea1").delay(800).show()
        $("#textarea1").animate({
            right: maxWidth * 0.25 + "px"
        }, 800)

        $("#textarea2").delay(800).show()
        $("#textarea2").animate({
            right: maxWidth * 0.25 + "px"
        }, 800)

        $(this).delay(800).click(function () {

            if ($("#textarea1").val() == "" ) {
                alert("请输入代言内容")
                return
            }

            if ($("#textarea2").val() == "") {
                alert("请输入姓名")
                return
            }

            $("#qr_code").show()
            shadowShow(1)

            $(this).click(function () {})
        })
    })

    $("#close").click(function () {
        $("#qr_code").hide()
        shadowHide()
        voteBtn.attr("src","images/邀请朋友支持我.png")
        $("#textarea1").hide()
        $("#textarea2").hide()
        $("#area").show()

        $("#area").text($("#textarea1").val())
    })

    //详情页
    $("#top_right_img").click(function () {
        $("#ex_content").show()
        shadowShow(0)
    })

    $("#content").css("height", screenHeight * 0.733)

    $("#close_content").click(function () {
        $("#ex_content").hide()
        shadowHide()
    })


    //阴影
    $("#shadow").css("width", screenWidth).css("height", screenHeight)

    //底部三等分按钮
    $("#tab_bar>button").css("width", maxWidth / 3 - 3)

})

function shadowShow(type) {
    $("#shadow").show()
    $("#shadow").click(function () {
        $(this).hide()
        if (type === 0) {
            $("#ex_content").hide()
        }else {
            $("#qr_code").hide()
            $("#textarea1").hide()
            $("#textarea2").hide()
            $("#area").show()
            $("#area").css("left", screenWidth / 4 + "px")
            $("#area").text($("#textarea1").val())
        }
    })
}

function shadowHide() {
    $("#shadow").hide()
}