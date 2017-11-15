/**
 * Created by meitiannongzi on 2017/11/10.
 */

var screenWidth = document.body.clientWidth
var screenHeight = document.body.scrollHeight

var maxLeft = screenWidth > 500 ? (screenWidth - 500) / 2 : 0
var maxWidth = screenWidth > 500 ? 500 : screenWidth
$(function () {

    console.log(screenWidth)

    //old
    var background = $("#background")
    //设置光亮背景和山
    var bgIMG = $("#bgIMG")
    var hill = $("#hill")

    background.css("width", maxWidth).css("height", screenHeight).css("left", maxLeft + "px")
    bgIMG.css("width", maxWidth)
    hill.css("width", maxWidth)

    //我要代言按钮
    var vote = $("#vote")
    vote.css("width", maxWidth)
    //调整包装位置
    //修改area
    var pack = $("#pack")
    var area = $("#area")


    pack.css("bottom", screenHeight * 0.067 + 9 * 2 + 50)

    var photo = $("#photo")

    var like = $("#like")
    var likeNumber = $("#like_number")


    like.css("width", screenWidth * 0.0427)
    likeNumber.css("top", screenHeight * 0.1125).css("left", screenWidth * 0.4)

    var breakLine = $("#break_line")
    breakLine.css("top", likeNumber.offset().top + 32)

    $("#top_bg").css("height", breakLine.offset().top)
    // background.css("top", breakLine.offset().top)

    $("#bottom_bg").css("top", breakLine.offset().top).css("height", screenHeight)
    // $("#top_left_img").css("top", breakLine.offset().top + 20)
    // $("#top_right_img").css("top", breakLine.offset().top + 35)
    // area.css("top", pack.offset().top + screenHeight * 0.189 ).css("width", maxWidth * 0.5).css("left", pack.offset().right - maxWidth / 10)

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


    //new 点击事件

    //投她一票
    $("#vote_him_btn").click(function () {

    })

    //我也要代言
    $("#vote_me_btn").click(function () {

    })
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