/**
 * Created by meitiannongzi on 2017/9/22.
 */
window.onload = function () {

    var name = document.getElementById("name")
    var score = document.getElementById("score")
    var score_title = document.getElementById("score_title")

    var scoreNum = localStorage.getItem("score")
    var nameString = localStorage.getItem("name")

    name.textContent = nameString
    score.textContent = parseInt(scoreNum)

    var scoreSpan = document.createElement("span")
    scoreSpan.textContent = "分"
    score.appendChild(scoreSpan)

    score_title.textContent = "在本次答题中获得" + parseInt(scoreNum) + "分"

    var clientWidth = document.documentElement.clientWidth
    var clientHeight = document.documentElement.clientHeight

    var content = document.getElementById("content")
    content.style.position = "absolute"
    content.style.top = (clientHeight - content.clientHeight) / 2 + "px"


    var background = document.getElementById("background")
    background.style.position = "absolute"
    background.style.height = clientHeight + "px"

    if (clientWidth >= 500) {
        background.style.width = 500 + "px"
        background.style.left = (clientWidth - 500) / 2 + "px"
        content.style.width = 500 - 12 * 2 + "px"
    }else {

        background.style.width = clientWidth + "px"
        content.style.width = clientWidth - 12 * 2 + "px"
    }


    //评语
    var score_num_int = parseInt(scoreNum)
    var remark = document.getElementById("remark")
    if (score_num_int === 100) {
        remark.textContent = "你考100分是因为你有100分？还是因为试卷分数最多100分？"
    }else if (score_num_int < 100 && score_num_int >= 80) {
        remark.textContent = "你已经快成为合格的膜法师了, 不要整天习习蛤蛤"
    }else if (score_num_int < 80 && score_num_int >= 60) {
        remark.textContent = "这个成绩可不敢骄傲，中国有句古话，叫'闷声发大财'"
    }else {
        remark.textContent = "还是图样图森破，桑坦木哪义务"
    }

    document.getElementById("resultBtn").onclick = function () {

        window.location.href = "result.html"

    }
}