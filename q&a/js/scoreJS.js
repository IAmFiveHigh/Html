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
    score.textContent = scoreNum + "分"
    score_title.textContent = "在本次答题中获得" + scoreNum + "分"

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
    }

    document.getElementById("score").onclick = function () {

        window.location.href = "result.html"

    }
}