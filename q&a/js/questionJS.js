
var clientWidth = document.documentElement.clientWidth
var clientHeight = document.documentElement.clientHeight


var alphabet = {"0": "A", "1": "B", "2": "C", "3": "D", "4": "E", "5": "F"}


var index = 0
var indexArr = []
var selectArr = []
var correntArr = []

window.onload = function () {

    var requset = new XMLHttpRequest()
    requset.open("POST", "http://192.168.3.3:8888/under/app/findWenDa", true)
    requset.setRequestHeader("Content-type","application/x-www-form-urlencoded");

    requset.send("")
    requset.onreadystatechange = function() {

        if (requset.readyState === 4) {

            if (requset.status === 200) {

                var result = requset.responseText
                var jsonOBJ = JSON.parse(result)
                console.log(jsonOBJ)

                var objects = jsonOBJ.object

                var arr = new Array(objects.length)
                var i = objects.length
                while (i--) {
                    arr[i] = i
                }


                //获取随机序列
                randomSort(arr, indexArr)

                //第一题
                displayQAndA(objects)


                //获取正确答案
                var tmpCorrentArr = []
                for (var k=0; k<objects.length; k++) {

                    var options = objects[k].COMMENT
                    for (var l=0; l<options.length; l++) {
                        if (options[l].STATUS === "0") {
                            tmpCorrentArr.push(l)
                        }
                    }
                }

                //调整正确答案排序
                for (var m=0; m<indexArr.length; m++) {
                    var nIndex = indexArr[m]
                    correntArr[m] = tmpCorrentArr[nIndex]
                }

                var content = document.getElementById("content")

                content.style.position = "absolute"
                // var contentWidth = content.clientWidth
                var contentHeight = content.clientHeight

                content.style.top = (clientHeight - contentHeight) / 2 + "px"
                // content.style.left = (clientWidth - contentWidth) / 2 + "px"
                content.style.left = "0px"

                var background = document.getElementById("background")
                background.style.position = "absolute"
                background.style.height = clientHeight + "px"

                if (clientWidth >= 500) {
                    background.style.width = 500 + "px"
                    background.style.left = (clientWidth - 500) / 2 + "px"
                    content.style.width = 500 - 20 + "px"

                }else {
                    background.style.width = clientWidth + "px"
                    content.style.width = clientWidth - 20 + "px"

                }
            }
        }
    }

}


//刷新UI
function displayQAndA(objects) {

    if (index === indexArr.length) { //全部做完

        var correctCount = 0
        for (var i=0; i<selectArr.length; i++) {

            var select = selectArr[i]
            var correct = correntArr[i]
            console.log("选择了" + select + "正确答案" + correct)
            if (select == correct) {
                correctCount += 1
            }
        }

        var score = correctCount / indexArr.length * 100
        console.log("得分" + score + "正确数" + correctCount)
        localStorage.setItem("score", score)
        localStorage.setItem("name", "name")

        var selectlist = joinStringWithArr(selectArr)
        var indexlist = joinStringWithArr(indexArr)
        localStorage.setItem("selectArr",selectlist)
        localStorage.setItem("indexArr",indexlist)
        localStorage.setItem("jsonData",JSON.stringify(objects))
        window.location.href = "score.html"
        return
    }

    //题目
    var question = document.getElementById("question")
    question.textContent = (index + 1) + "、 " + objects[indexArr[index]].SUBJECT

    //题号
    document.getElementById("progress").textContent = (index + 1) + "/" + objects.length + "(每题10分)"

    //清空当前选项
    var removeQuestions = document.getElementsByClassName("answer")
    var qLength = removeQuestions.length
    for (var j=0; j<qLength; j++) {
        document.getElementById("background").removeChild(removeQuestions[0])
    }

    //根据题类型 创建不同选项
    // if (type === "text") { // 文字选项

        for(var k=0; k<objects[indexArr[index]].COMMENT.length; k++) {
            var op = document.createElement("div")
            op.className = "answer answer_normal"

            var opAlpha = document.createElement("div")
            opAlpha.className = "opAlpha"
            opAlpha.textContent = alphabet[k] + "."
            op.appendChild(opAlpha)

            var opSpan = document.createElement("div")
            opSpan.className = "opSpan"
            opSpan.textContent = objects[indexArr[index]].COMMENT[k].MESSAGE
            op.appendChild(opSpan)
            document.getElementById("background").appendChild(op)

            //调整ABCD的位置
            var opH = op.offsetHeight
            var opAlphaH = opAlpha.offsetHeight
            var opAlphaT = opAlpha.offsetTop
            var opT = op.offsetTop
            opAlpha.style.top = (opH - opAlphaH) / 2 - opAlphaT + opT + "px"

        }
    // }else { //图片选项

        // for(var l=0; l<objects[indexArr[index]].options.length; l++) {
        //     var op_img = document.createElement("div")
        //     op_img.className = "image_answer option"
        //     var op_img_img = document.createElement("img")
        //     op_img_img.src = "images/横图.jpg"
        //     op_img_img.className = "image_answer_img"
        //
        //     //获取图片原始大小
        //     var natureW = op_img_img.naturalWidth
        //     var natureH = op_img_img.naturalHeight
        //
        //     if (natureW > natureH) {
        //
        //         op_img_img.style.width = clientWidth - 24 + "px"
        //         op_img_img.style.height = "auto"
        //     }else {
        //
        //         op_img_img.style.width = (clientWidth - 100) / 2 + "px"
        //
        //     }
        //
        //     var op_img_span = document.createElement("span")
        //     op_img_span.className = "image_answer_text"
        //     op_img_span.textContent = "狗"
        //
        //     op_img.appendChild(op_img_img)
        //     op_img.appendChild(op_img_span)
        //
        //     content.appendChild(op_img)
        // }
    // }

    var btns = document.getElementsByClassName("answer")
    for (var m=0; m<btns.length; m++) {
        btns[m].dataset.selectid = m
        btns[m].onclick = function () {
            index += 1
            this.className = "answer answer_select"
            selectArr.push(this.dataset.selectid)

            setTimeout(function () {
                displayQAndA(objects)
            }, 800)
        }

    }


}

//生成随机数字数组
function randomSort(arr, newArr) {

    if(arr.length === 1) {
        newArr.push(arr[0]);
        return newArr;
    }
    var random = Math.ceil(Math.random() * arr.length) - 1;
    newArr.push(arr[random]);
    arr.splice(random,1);
    return randomSort(arr, newArr);
}

//拼接
function joinStringWithArr(arr) {
    // if (arr.length == 1) {return arr[0]}

    var newArrString = arr.reduce(function (p1, p2) {
        return p1 + "," + p2
    }, "")

    return newArrString

}




