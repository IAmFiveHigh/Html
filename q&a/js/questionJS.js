
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
                displayQAndA(objects, jsonOBJ)


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


            }
        }
    }

}


//刷新UI
function displayQAndA(objects, jsonObj) {

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

        //传结果
        var result = new Array()

        for (var q=0; q<objects.length; q++) {
            var wenda = objects[indexArr[q]]
            var wenda_id = wenda.WENDA_ID
            var wenda_info_id = wenda.COMMENT[selectArr[q]].WENDA_INFO_ID
            var nowDate = new Date()
            var dateStr = nowDate.getFullYear() + "-" + parseInt(nowDate.getMonth() + 1).toString() + "-" + nowDate.getDate() + " " + nowDate.getHours() + ":" + nowDate.getMinutes() + ":" + nowDate.getSeconds()
            var wendaObject = {"OPENID": "111",
                               "WENDA_ID": wenda_id,
                                "WENDA_INFO_ID": wenda_info_id,
                                "DATE": dateStr}
            result.push(wendaObject)
        }

        //得分
        var score = correctCount / indexArr.length * 100

        console.log(result)
        var requsetResult = new XMLHttpRequest()
        requsetResult.open("POST", "http://192.168.3.3:8888/under/app/saveWenDa", true)
        requsetResult.setRequestHeader("Content-type","application/x-www-form-urlencoded");

        requsetResult.send("OPENID=" + "111" + "&object=" + JSON.stringify(result) + "&FRACTION=" + score.toString() + "&data=" + JSON.stringify(jsonObj))
        requsetResult.onreadystatechange = function() {
            if (requsetResult.readyState === 4) {
                if (requsetResult.status === 200) {
                    var resultt = requsetResult.responseText
                    var jsonOBJ = JSON.parse(resultt)
                    console.log(jsonOBJ)
                }
            }
        }


        console.log("得分" + score + "正确数" + correctCount)
        localStorage.setItem("score", score)
        localStorage.setItem("name", "name")

        var selectlist = joinStringWithArr(selectArr)
        var indexlist = joinStringWithArr(indexArr)
        localStorage.setItem("selectArr",selectlist)
        localStorage.setItem("indexArr",indexlist)
        localStorage.setItem("jsonData",JSON.stringify(objects))

        //跳转
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


    var btns = document.getElementsByClassName("answer")
    for (var m=0; m<btns.length; m++) {
        btns[m].dataset.selectid = m
        btns[m].onclick = function () {
            index += 1
            this.className = "answer answer_select"
            selectArr.push(this.dataset.selectid)

            setTimeout(function () {
                displayQAndA(objects,jsonObj)
            }, 100)
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




