/**
 * Created by meitiannongzi on 2017/9/23.
 */


window.onload = function () {

    var selectArr = localStorage.getItem("selectArr")
    var indexlist = localStorage.getItem("indexArr")

    var data = JSON.parse(localStorage.getItem("jsonData"))

    var objects = data.objects

    var selects = selectArr.split(",")
    selects.splice(0,1)

    var indexs = indexlist.split(",")
    indexs.splice(0,1)

    for (var i=0; i<indexs.length; i++) {

        var index = parseInt(indexs[i])

        var background = document.getElementById("background")

        var progress = document.createElement("div")
        progress.className = "progressClass"
        progress.textContent = "第" + (i + 1) + "题"
        background.appendChild(progress)

        var content = document.createElement("div")
        content.className = "content"
        background.appendChild(content)

        var question = document.createElement("div")
        question.className = "question"
        question.textContent = objects[index].question
        content.appendChild(question)

        for(var k=0; k<3; k++) {
            var op = document.createElement("div")
            op.className = "answer"

            if (selects[i] == k) {

                op.className += " answer_error"
                var result_correct_img = document.createElement("img")
                result_correct_img.className = "result_img"
                op.appendChild(result_correct_img)

                if (!objects[index].options[k].isCorrent) {
                    result_correct_img.src = "images/error.jpg"
                }else {
                    result_correct_img.src = "images/correct.jpg"
                }

            }else {
                op.className += " answer_normal"

                if (objects[index].options[k].isCorrent) {
                    var result_error_img = document.createElement("img")
                    result_error_img.src = "images/correct.jpg"
                    result_error_img.className = "result_img"
                    op.appendChild(result_error_img)

                }else {

                    var result_error_img = document.createElement("img")
                    result_error_img.src = ""
                    result_error_img.className = "result_img"
                    op.appendChild(result_error_img)

                }
            }

            var span_text = document.createElement("span")
            span_text.textContent = objects[index].options[k].title

            // op.className = "answer"
            op.appendChild(span_text)
            content.appendChild(op)
        }

    }

    document.getElementById("background").onclick = function () {

        window.location.href = "ranking.html"
    }
}

