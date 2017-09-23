
var data = {
    "message" : "success",
    "objects" : [
        {
            "options" : [
                {
                    "title" : "曹擦",
                    "isCorrent" : false
                },
                {
                    "title" : "超人",
                    "isCorrent" : false
                },
                {
                    "title" : "香港记者",
                    "isCorrent" : true
                }
            ],
            "question" : "这世界上谁跑的最快？"
        },
        {
            "options" : [
                {
                    "title" : "60秒",
                    "isCorrent" : false
                },
                {
                    "title" : "61秒",
                    "isCorrent" : true
                },
                {
                    "title" : "59秒",
                    "isCorrent" : false
                }
            ],
            "question" : "在中国每过一分钟,你的生命就流逝多少秒？"
        },
        {
            "options" : [
                {
                    "title" : "亦可赛艇",
                    "isCorrent" : true
                },
                {
                    "title" : "亦能覆舟",
                    "isCorrent" : false
                },
                {
                    "title" : "亦能煮粥",
                    "isCorrent" : false
                }
            ],
            "question" : "水能载舟,下一句是?"
        },
        {
            "options" : [
                {
                    "title" : "2",
                    "isCorrent" : true
                },
                {
                    "title" : "3",
                    "isCorrent" : false
                },
                {
                    "title" : "4",
                    "isCorrent" : false
                }
            ],
            "question" : "1 + 1 = ?"
        },
        {
            "options" : [
                {
                    "title" : "弗利萨",
                    "isCorrent" : false
                },
                {
                    "title" : "蓝精灵",
                    "isCorrent" : true
                },
                {
                    "title" : "不能说的人",
                    "isCorrent" : false
                }
            ],
            "question" : "在山的那边海的那边有一群?"
        }
    ]
}

var index = 0
var indexArr = []
var selectArr = []
var correntArr = []

window.onload = function () {

    var objects = data.objects

    var arr = new Array(objects.length)
    var i = objects.length
    while (i--) {
        arr[i] = i
    }

    //获取随机序列
    randomSort(arr, indexArr)

    //第一题
    displayQAndA(objects)

    var btns = document.getElementsByClassName("answer")
    for (var j=0; j<btns.length; j++) {
        btns[j].dataset.selectid = j
        btns[j].onclick = function () {
            index += 1
            this.className = "answer_error"
            selectArr.push(this.dataset.selectid)

            setTimeout(function () {
                displayQAndA(objects)
            }, 100)
        }

    }

    //获取正确答案
    var tmpCorrentArr = []
    for (var k=0; k<objects.length; k++) {

        var options = objects[k].options
        for (var l=0; l<options.length; l++) {
            if (options[l].isCorrent === true) {
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


//刷新UI
function displayQAndA(objects) {

    if (index === indexArr.length) { //全部做完


        var correctCount = 0
        for (var i=0; i<selectArr.length; i++) {

            var select = selectArr[i]
            console.log("选择了" + select)
            var correct = correntArr[i]
            console.log("正确答案" + correct)
            if (select == correct) {
                correctCount += 1
            }
        }

        var score = correctCount / indexArr.length * 100
        console.log("得分" + score)
        console.log("正确数" + correctCount)
        localStorage.setItem("score", score)
        localStorage.setItem("name", "name")

        var selectlist = joinStringWithArr(selectArr)
        var indexlist = joinStringWithArr(indexArr)
        localStorage.setItem("selectArr",selectlist)
        localStorage.setItem("indexArr",indexlist)
        window.location.href = "score.html"
        return
    }


    var question = document.getElementById("question")
    question.textContent = objects[indexArr[index]].question

    for(var k=0; k<3; k++) {
        var op = document.getElementById("answer_" + k)
        op.className = "answer"
        op.textContent = objects[indexArr[index]].options[k].title
    }

    document.getElementById("progress").textContent = (index + 1) + "/" + objects.length

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

function joinStringWithArr(arr) {
    // if (arr.length == 1) {return arr[0]}

    var newArrString = arr.reduce(function (p1, p2) {
        return p1 + "," + p2
    }, "")

    return newArrString

}




