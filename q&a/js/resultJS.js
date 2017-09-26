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
                    result_correct_img.src = "images/矩形-1@2x.png"
                }else {
                    result_correct_img.src = "images/形状-1@2x.png"
                }

            }else {
                op.className += " answer_normal"

                if (objects[index].options[k].isCorrent) {
                    var result_error_img = document.createElement("img")
                    result_error_img.src = "images/形状-1@2x.png"
                    result_error_img.className = "result_img"
                    op.appendChild(result_error_img)

                }else {

                    var result_hidden_img = document.createElement("img")
                    // result_hidden_img.src = ""
                    result_hidden_img.className = "result_img"
                    result_hidden_img.style.display = "hidden"
                    op.appendChild(result_hidden_img)

                }
            }

            var span_text = document.createElement("span")
            span_text.textContent = objects[index].options[k].title

            // op.className = "answer"
            op.appendChild(span_text)




            content.appendChild(op)
        }
        var analysis = document.createElement("div")
        analysis.textContent = "解析: " + objects[index].analysis
        analysis.className = "analysis"
        content.appendChild(analysis)

    }

    document.getElementById("background").onclick = function () {

        window.location.href = "ranking.html"
    }
}

