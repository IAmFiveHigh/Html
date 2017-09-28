/**
 * Created by meitiannongzi on 2017/9/23.
 */
var alphabet = {"0": "A", "1": "B", "2": "C", "3": "D", "4": "E", "5": "F"}


window.onload = function () {

    var selectArr = localStorage.getItem("selectArr")
    var indexlist = localStorage.getItem("indexArr")

    var objects = JSON.parse(localStorage.getItem("jsonData"))

    var selects = selectArr.split(",")
    selects.splice(0,1)

    var indexs = indexlist.split(",")
    indexs.splice(0,1)

    var background = document.getElementById("background")

    for (var i=0; i<indexs.length; i++) {


        var question = document.createElement("div")
        question.className = "question"
        question.textContent = parseInt(i + 1) + "、 " + objects[indexs[i]].SUBJECT

        background.appendChild(question)

        for (var j=0; j<objects[indexs[i]].COMMENT.length; j++) {

            var op = document.createElement("div")

            var opAlpha = document.createElement("div")
            opAlpha.className = "opAlpha"
            opAlpha.textContent = alphabet[j] + "."
            op.appendChild(opAlpha)

            var opSpan = document.createElement("div")
            opSpan.className = "opSpan"
            opSpan.textContent = objects[indexs[i]].COMMENT[j].MESSAGE
            op.appendChild(opSpan)
            background.appendChild(op)

            //调整ABCD的位置
            var opSpanW = opSpan.offsetWidth
            var opT = op.offsetTop
            var opH = op.offsetHeight

            if (objects[indexs[i]].COMMENT[j].STATUS == "0") {
                op.style.paddingBottom = 0
                var correct = document.createElement("img")
                correct.src = "images/对@2x.png"
                correct.className = "rightOrWrong"
                correct.style.left = opSpanW - 20  + "px"
                correct.style.top =  - ((op.offsetHeight - 20) / 2 - op.offsetHeight / 2) + "px"
                op.appendChild(correct)
            }else {
                if (selects[i] == j) {
                    op.style.paddingBottom = 0
                    var error = document.createElement("img")
                    error.src = "images/错@2x.png"
                    error.className = "rightOrWrong"
                    error.style.left = opSpanW - 20  + "px"
                    error.style.top = (opH - 20) / 2 + error.offsetTop - opT + "px"

                    op.appendChild(error)
                    op.style.paddingBottom = 0
                }
            }

            var opAlphaH = opAlpha.offsetHeight
            var opAlphaT = opAlpha.offsetTop
            var opSpanH = opSpan.offsetHeight
            var opSpanT = opSpan.offsetTop
            opAlpha.style.top = (opH - opAlphaH) / 2 - opAlphaT + opT + "px"
            opSpan.style.top = (opH - opSpanH) / 2 - opSpanT + opT + "px"

            if (selects[i] == j) {
                op.className = "answer answer_select"

            }else {
                op.className = "answer answer_normal"

            }

        }
        if (objects[indexs[i]].MESSAGE != " ") {
            var message = document.createElement("div")
            message.className = "resultMessage"
            message.textContent = "解析: " + objects[indexs[i]].MESSAGE
            background.appendChild(message)
        }

        var backLine = document.createElement("div")
        backLine.className = "line"
        background.appendChild(backLine)
    }
}


//     var index = parseInt(indexs[i])
//
//     var background = document.getElementById("background")
//
//     var progress = document.createElement("div")
//     progress.className = "progressClass"
//     progress.textContent = "第" + (i + 1) + "题"
//     background.appendChild(progress)
//
//     var content = document.createElement("div")
//     content.className = "content"
//     background.appendChild(content)
//
//     var question = document.createElement("div")
//     question.className = "question"
//     question.textContent = objects[index].question
//     content.appendChild(question)
//
//     for(var k=0; k<3; k++) {
//         var op = document.createElement("div")
//         op.className = "answer"
//
//         if (selects[i] == k) {
//
//             op.className += " answer_error"
//             var result_correct_img = document.createElement("img")
//             result_correct_img.className = "result_img"
//             op.appendChild(result_correct_img)
//
//             if (!objects[index].options[k].isCorrent) {
//                 result_correct_img.src = "images/矩形-1@2x.png"
//             }else {
//                 result_correct_img.src = "images/形状-1@2x.png"
//             }
//
//         }else {
//             op.className += " answer_normal"
//
//             if (objects[index].options[k].isCorrent) {
//                 var result_error_img = document.createElement("img")
//                 result_error_img.src = "images/形状-1@2x.png"
//                 result_error_img.className = "result_img"
//                 op.appendChild(result_error_img)
//
//             }else {
//
//                 var result_hidden_img = document.createElement("img")
//                 // result_hidden_img.src = ""
//                 result_hidden_img.className = "result_img"
//                 result_hidden_img.style.display = "hidden"
//                 op.appendChild(result_hidden_img)
//
//             }
//         }
//
//         var span_text = document.createElement("span")
//         span_text.textContent = objects[index].options[k].title
//
//         // op.className = "answer"
//         op.appendChild(span_text)
//
//
//
//
//         content.appendChild(op)
//     }
//     var analysis = document.createElement("div")
//     analysis.textContent = "解析: " + objects[index].analysis
//     analysis.className = "analysis"
//     content.appendChild(analysis)
//
// }
//
// document.getElementById("background").onclick = function () {
//
//     window.location.href = "ranking.html"
// }