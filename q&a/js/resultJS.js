/**
 * Created by meitiannongzi on 2017/9/23.
 */
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

window.onload = function () {

    var selectArr = localStorage.getItem("selectArr")
    var indexlist = localStorage.getItem("indexArr")

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
        progress.textContent = (i + 1)
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

            if (!objects[index].options[k].isCorrent && selects[i] == k) {
                op.className = "answer_error"
            }else {

                if (objects[index].options[k].isCorrent) {
                    op.className = "answer_correct"
                }else {
                    op.className = "answer"
                }
            }

            op.textContent = objects[index].options[k].title
            content.appendChild(op)
        }

    }

    document.getElementById("background").onclick = function () {

        window.location.href = "ranking.html"
    }
}

