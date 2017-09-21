
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

    randomSort(arr, indexArr)


    displayQAndA(objects)


    var btns = document.getElementsByClassName("answer")
    for (var j=0; j<btns.length; j++) {
        btns[j].dataset.selectid = j
        btns[j].onclick = function () {
            index += 1
            selectArr.push(this.dataset.selectid)
            displayQAndA(objects)
        }
    }


    var tmpCorrentArr = []
    for (var k=0; k<objects.length; k++) {

        var options = objects[k].options
        for (var l=0; l<options.length; l++) {
            if (options[l].isCorrent === true) {
                tmpCorrentArr.push(l)
            }
        }
    }

    for (var m=0; m<indexArr.length; m++) {
        var nIndex = indexArr[m]
        correntArr[m] = tmpCorrentArr[nIndex]
    }
}



function displayQAndA(objects) {

    if (index === indexArr.length) {
        alert("你选择的" + selectArr + "正确答案" + correntArr)
        return
    }

    var question = document.getElementById("question")
    question.textContent = objects[indexArr[index]].question

    for(var k=0; k<3; k++) {
        var op = document.getElementById("answer_" + k)
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



