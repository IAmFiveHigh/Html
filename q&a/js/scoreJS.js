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


    document.getElementById("score").onclick = function () {

        window.location.href = "result.html"

    }
}