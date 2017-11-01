/**
 * Created by meitiannongzi on 2017/11/1.
 */
window.onload = function () {

    var selectArr = localStorage.getItem("selectArr")
    var objects = JSON.parse(localStorage.getItem("jsonData"))

    var selects = selectArr.split(",")
    selects.splice(0,1)

    /*
     <div class="question">
        <div class="resultProgress">1/14</div>
        <img src="images/result1.png" class="resultBGTop">
        <div class="questionDetail">
            <div class="questionTitle">1、最近镇子里，在XX农庄里有集中培训，每天大量老人到此听课，上午听砖家讲课、发纪念品、中午吃饭、下午送肥，一条龙服务。这个最可能是因为以下什么原因</div>
            <div class="questionOption odd">A.镇子里的扶贫项目，种植成本太高，关爱农民<img src="images/对@2x.png" class="rightOrWrong"></div>
            <div class="questionOption even">B.化肥忽悠团来了，哄骗农民买劣质肥、假肥料</div>
            <div class="questionOption odd">C.慈善机构来了，农民不仅要学技术知识，还要吃好喝好</div>
            <div class="analysisMessage">解析: 这个新改变是正规厂家的改变，现在做田间示范、开观摩会的都是正规厂家，忽悠团一般都是卖完就走的，不在当地待很久。</div>

     </div>
        <img src="images/result3.png" class="resultBGBottom">
     </div>
     */

    for (var i=0; i<objects.length; i++) {

        var question = document.createElement("div")
        question.className = "question"
        document.getElementById("content").appendChild(question)

        var resultProgress = document.createElement("div")
        resultProgress.className = "resultProgress"
        resultProgress.textContent = i + "/" + objects.length
        question.appendChild(resultProgress)

        var topIMG = document.createElement("img")
        topIMG.className = "resultBGTop"
        topIMG.src = "images/result1.png"
        question.appendChild(topIMG)

        var questionDetail = document.createElement("div")
        questionDetail.className = "questionDetail"
        question.appendChild(questionDetail)

        var questionTitle = document.createElement("div")
        questionTitle.className = "questionTitle"
        questionTitle.textContent = objects[i].question
        questionDetail.appendChild(questionTitle)

        var options = objects[i].options
        for (var j=0; j<options.length; j++) {
            var questionOption = document.createElement("div")
            questionOption.className = "questionOption"
            if (j % 2 === 0) {
                questionOption.classList.add("odd")
            }else {
                questionOption.classList.add("even")
            }
            questionOption.textContent = options[j].title

            if (options[j].isCorrent === true) {
                var correctImg = document.createElement("img")
                correctImg.src = "images/对@2x.png"
                correctImg.className = "rightOrWrong"
                questionOption.appendChild(correctImg)
            }

            if (selects[i] == j) {
                if (options[j].isCorrent !== true) {
                    var errorImg = document.createElement("img")
                    errorImg.src = "images/错@2x.png"
                    errorImg.className = "rightOrWrong"
                    questionOption.appendChild(errorImg)

                    questionOption.classList.add("error")
                } else {
                    questionOption.classList.add("correct")
                }
            }

            questionDetail.appendChild(questionOption)
        }

        if (objects[i].analysis != "") {
            var analysis = document.createElement("div")
            analysis.className = "analysisMessage"
            analysis.textContent = "解析: " + objects[i].analysis
            questionDetail.appendChild(analysis)
        }

        var bottomImg = document.createElement("img")
        bottomImg.className = "resultBGBottom"
        bottomImg.src = "images/result3.png"
        question.appendChild(bottomImg)


    }

}