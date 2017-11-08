/**
 * Created by meitiannongzi on 2017/11/8.
 */

var screenWidth = document.body.scrollWidth
var screenHeight = document.body.scrollHeight

$(function () {

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


    //我要代言按钮
    var vote = $("#vote")
    vote.css("width", maxWidth)
    var voteTop = vote.offset().top

    $("#pack").css("bottom", (screenHeight - voteTop) / screenHeight * 100 + "%")

    // var pactTop = $("#pack").offset().top
    // var areaTop = pactTop + screenHeight * 0.1891
    // $("#area").css("top", areaTop + "px")

    //底部三等分按钮
    $("#tab_bar>button").css("width", maxWidth / 3 - 3)

    // $("body").show()
})