
var clientWidth = document.documentElement.clientWidth
var clientHeight = document.documentElement.clientHeight


var alphabet = {"0": "A", "1": "B", "2": "C", "3": "D", "4": "E", "5": "F"}

var jsonData = {
    "objects" : [
        {
            "options" : [
                {
                    "title" : "A.镇子里的扶贫项目，种植成本太高，关爱农民",
                    "isCorrent" : false
                },
                {
                    "title" : "B.化肥忽悠团来了，哄骗农民买劣质肥、假肥料",
                    "isCorrent" : true
                },
                {
                    "title" : "C.慈善机构来了，农民不仅要学技术知识，还要吃好喝好",
                    "isCorrent" : false
                }
            ],
            "question" : "1、最近镇子里，在XX农庄里有集中培训，每天大量老人到此听课，上午听砖家讲课、发纪念品、中午吃饭、下午送肥，一条龙服务。这个最可能是因为以下什么原因",
            "analysis" : ""
        },
        {
            "options" : [
                {
                    "title" : "A.现场演示了一个实验：加入肥的水随即变成果冻状，因为肥里含有特有成分。",
                    "isCorrent" : false
                },
                {
                    "title" : "B.每隔一段时间，这个厂家的业务员都会来农民地里做田间示范",
                    "isCorrent" : true
                },
                {
                    "title" : "C.有吃喝，有酒拿，美国高科技进口产品，这次卖完就没有了",
                    "isCorrent" : false
                }
            ],
            "question" : "2、小李打算给老父亲普及忽悠团的知识，下边哪种最不可能是忽悠团的骗术？",
            "analysis" : ""
        },
        {
            "options" : [
                {
                    "title" : "A.以前的只卖一种农资变为多种产品相互搭配，买一赠一",
                    "isCorrent" : false
                },
                {
                    "title" : "B.从单纯售假变为暗地里偷减含量",
                    "isCorrent" : false
                },
                {
                    "title" : "C.从原来不开农民会到现在下地做田间示范",
                    "isCorrent" : true
                }
            ],
            "question" : "3、忽悠团的模式也在创新，下面哪个不是新的改变？",
            "analysis" : "这个新改变是正规厂家的改变，现在做田间示范、开观摩会的都是正规厂家，忽悠团一般都是卖完就走的，不在当地待很久。"
        },
        {
            "options" : [
                {
                    "title" : "A.“玉米专用肥”'，含有一种特有成分，能够保水保墒，用了这种肥料不用浇水不用除草。",
                    "isCorrent" : false
                },
                {
                    "title" : "B.今天用，当天就能见效果，亩产三千八，国家太空项目组技术专利。",
                    "isCorrent" : false
                },
                {
                    "title" : "C.买了我的叶面肥，不用追肥了，不用打药了。",
                    "isCorrent" : false
                },
                {
                    "title" : "D.以上都是扯淡",
                    "isCorrent" : true
                }
            ],
            "question" : "4、参加农民会时，见到下面哪种情况，不能相信？",
            "analysis" : "ABC都是过度夸大肥料的效果，为了抓住农民想肥料效果全、好的心理，忽悠付钱买肥。"
        },
        {
            "options" : [
                {
                    "title" : "A.贵的肥料一定不是假化肥",
                    "isCorrent" : false
                },
                {
                    "title" : "B.现款买的肥料一定不是假化肥",
                    "isCorrent" : false
                },
                {
                    "title" : "C.包装上标有高科技的进口肥料一定不是假化肥",
                    "isCorrent" : false
                },
                {
                    "title" : "D.以上说法都对",
                    "isCorrent" : true
                }
            ],
            "question" : "5、关于忽悠团假化肥的理解，下面哪个最有可能是错误的？",
            "analysis" : "某些人认为化肥忽悠团的肥料就是便宜，其实不然，有的不仅不便宜 ，而且一般是现款，直接听完课就付钱。C选项是忽悠团的肥料最常见的手法，借用名牌厂家称号，注有高科技之类的。"
        },
        {
            "options" : [
                {
                    "title" : "A.磷酸三铵、四铵、五铵",
                    "isCorrent" : true
                },
                {
                    "title" : "B.进口纳米磁性剂、美国情报局保密配方",
                    "isCorrent" : false
                },
                {
                    "title" : "C.包装上标注'N-PK-Cl15-15-15'",
                    "isCorrent" : false
                },
                {
                    "title" : "D.世界很危险，好人虽然不少，但防人之心不可无，以上都要小心",
                    "isCorrent" : false
                }
            ],
            "question" : "6、看到下面这些肥料包装，哪个描述有夸大，炒概念的可能，购肥时需要多留个心眼？",
            "analysis" : "A包装，磷酸二铵为公认地大众产品，很多人就想从这里做文章，例如“三铵”、“四铵”“五铵”之类的；B包装，打上外国进口旗号，用很多看似很专业的词汇来忽悠大家，其实与农业都不相关；C包装，一些厂家却用二元肥冒充三元肥。明明只含氮磷两元素，却在包装上标注呈“氮：15，磷：15，铜锌铁锰等：15，或N-PK-Cl15-15-15”，给人三元肥的感觉。"
        },
        {
            "options" : [
                {
                    "title" : "A.高仿尿素、二铵等数值品牌产品，实际以低含量充高含量、以其他低价肥料充高价肥料",
                    "isCorrent" : false
                },
                {
                    "title" : "B.盗用国外生产商名义或标注“进口许可证”，谎称进口原材料等",
                    "isCorrent" : false
                },
                {
                    "title" : "C.组织“专家讲师”和“业务员”进行虚假宣传，把农民请到特定的空间里，洗脑，称销售活动是“扶贫开发XX计划”的一部分",
                    "isCorrent" : false
                },
                {
                    "title" : "D.为了放低警惕心，可以签订合同，在合同或者公司名里做手脚",
                    "isCorrent" : false
                },
                {
                    "title" : "E.以上都是",
                    "isCorrent" : true
                }
            ],
            "question" : "7、如果你是忽悠团的人，可以有哪些操作方法，让大家买你的肥？",
            "analysis" : "C有实际案例，忽悠团卖种子，卖给村民后还像模像样跟他们签订了一份合同，上面盖的也是XX县三农种业的章，可是随后在XX种子站查询得知，XX根本就没有这个公司。"
        },
        {
            "options" : [
                {
                    "title" : "A.名头要响，冠上“农业部专家”“农业大学教授”等，最低的也要自称为厂家“技术顾问”",
                    "isCorrent" : false
                },
                {
                    "title" : "B.讲课时声音洪亮抑扬顿挫，说农民常见的身边事，比如什么辛苦打药磨破了肩膀、零售店为了赚钱而坏了良心等等，不要急着推产品",
                    "isCorrent" : false
                },
                {
                    "title" : "C.为了让农民相信，除了讲技术，做其他的，比如现场做肥料演示实验",
                    "isCorrent" : false
                },
                {
                    "title" : "D.上面选项都对，忽悠团擅长抓住农民心理，一环套一环。",
                    "isCorrent" : true
                }
            ],
            "question" : "8、如果你自己是个忽悠团，但掌握的农技知识只有皮毛，怎么办？",
            "analysis" : ""
        },
        {
            "options" : [
                {
                    "title" : "A.村里或镇上没有店铺，从外地来的流动商贩",
                    "isCorrent" : false
                },
                {
                    "title" : "B.专家讲课，有吃喝，有礼品，定期村里开产品观摩会、做示范",
                    "isCorrent" : true
                },
                {
                    "title" : "C.科技含量极高的“测土配方复合肥”，具有“不怕淋、不怕晒、不流失、全吸收、全营养”等特点",
                    "isCorrent" : false
                }
            ],
            "question" : "9、相比较来说，遇到下面哪种情况，是化肥忽悠团的可能性低？",
            "analysis" : "B现在有的厂家为了促销，也会办很多农民订货会，请老师讲课，参会还能吃饭，有礼品。但在当地长期进行投入，做示范，假肥忽悠团不可能干这种事，大多是赚完钱就走。"
        },
        {
            "options" : [
                {
                    "title" : "A.去当地有口碑的正规农资店购买农资",
                    "isCorrent" : false
                },
                {
                    "title" : "B.订货时，肥料便宜没关系，只要仔细查看推荐的肥料样品就可以 ",
                    "isCorrent" : false
                },
                {
                    "title" : "C.多学学产品知识，了解常见的忽悠团套路",
                    "isCorrent" : false
                },
                {
                    "title" : "D.相信天上不会掉馅饼，没有无缘无故的便宜，也没有无缘无故的好人",
                    "isCorrent" : false
                },
                {
                    "title" : "E.A+C+D",
                    "isCorrent" : true
                }
            ],
            "question" : "10、为了擦亮眼睛，不被忽悠团随意忽悠，我们买肥料的时候应该如何做？",
            "analysis" : "B项错误，忽悠团可能会在实际产品中，替换之前看到的样品肥。"
        },
        {
            "options" : [
                {
                    "title" : "A.产品是全能的",
                    "isCorrent" : false
                },
                {
                    "title" : "B.敢于随便承诺",
                    "isCorrent" : false
                },
                {
                    "title" : "C.在当地租一个废弃的厂房让农户去参考",
                    "isCorrent" : false
                },
                {
                    "title" : "D.以上都是",
                    "isCorrent" : true
                }
            ],
            "question" : "11.下列属于化肥忽悠团常用技巧的有：",
            "analysis" : ""
        },
        {
            "options" : [
                {
                    "title" : "A.当场拆穿他们是骗子，然后说服农户不要相信",
                    "isCorrent" : false
                },
                {
                    "title" : "B.会后告诉农民他们是骗子，让农户去退货",
                    "isCorrent" : false
                },
                {
                    "title" : "C.直接拨打报警电话",
                    "isCorrent" : true
                }
            ],
            "question" : "12、遇到化肥忽悠团，正确的做法是：",
            "analysis" : "有时候，农民被洗脑以后，你无论怎么对他们说，他们都不相信你，就只会相信化肥忽悠团，所以这个时候不要试图去说服农户，而是直接拨打报警电话110"
        },
        {
            "options" : [
                {
                    "title" : "A.用化肥忽悠团来卖真货也挺好的",
                    "isCorrent" : false
                },
                {
                    "title" : "B.化肥忽悠团为了卖货不择手段，乱承诺，就算真货也不能让他们去卖",
                    "isCorrent" : false
                },
                {
                    "title" : "C.化肥忽悠团的炒作宣传成本高，没有高利润无法支撑，所以真货让他们卖的价格太高了，农户用完效果达不到预期，以后再也不相信自己了",
                    "isCorrent" : true
                }
            ],
            "question" : "13、关于化肥忽悠团，下列哪种认识是错误的：",
            "analysis" : "有好多人说，我是做真货的，我用化肥忽悠团来做怎么样？结果是不行滴，因为化肥忽悠团会乱承诺，啥都说，到最后砸的还是自己的生意。"
        },
        {
            "options" : [
                {
                    "title" : "A.国家保密局技术，高新种子，可以不浇水，不打药，撒到地里就丰收",
                    "isCorrent" : false
                },
                {
                    "title" : "B.美国引进良种，用了我的种子可以不用肥料",
                    "isCorrent" : false
                },
                {
                    "title" : "C.国家最新专利技术种子，全程无药害，随便打除草剂都没事，出事儿了公司全部赔偿，当场签订合同",
                    "isCorrent" : false
                },
                {
                    "title" : "D.以上都是，全部胡扯",
                    "isCorrent" : true
                }
            ],
            "question" : "14、下面卖种子的最有可能是忽悠团的是：",
            "analysis" : ""
        }
    ]
}

var index = 0
// var indexArr = []
var selectArr = []
var correntArr = []

window.onload = function () {

    var objects = jsonData.objects

    console.log(objects)



    //获取随机序列
    // randomSort(arr, indexArr)

    //第一题
    displayQAndA(objects, jsonData)

    //调整位置
    var answerContent = document.getElementById("answerContent")
    answerContent.style.top = clientWidth * 0.8453 * 0.612 + 73 + "px"

    var progress = document.getElementById("progress")
    progress.style.top = 77 + "px"


    //获取正确答案
    correntArr = []
    for (var k=0; k<objects.length; k++) {

        var options = objects[k].options
        for (var l=0; l<options.length; l++) {
            if (options[l].isCorrent === true) {
                correntArr.push(l)
            }
        }
    }


}


//刷新UI
function displayQAndA(objects, jsonObj) {

    if (index === objects.length) { //全部做完

        var correctCount = 0
        for (var i=0; i<selectArr.length; i++) {

            var select = selectArr[i]
            var correct = correntArr[i]
            console.log("选择了" + select + "正确答案" + correct)
            if (select == correct) {
                correctCount += 1
            }
        }

        // //传结果
        // var result = new Array()
        //
        // for (var q=0; q<objects.length; q++) {
        //     var wenda = objects[indexArr[q]]
        //     var wenda_id = wenda.WENDA_ID
        //     var wenda_info_id = wenda.COMMENT[selectArr[q]].WENDA_INFO_ID
        //     var nowDate = new Date()
        //     var dateStr = nowDate.getFullYear() + "-" + parseInt(nowDate.getMonth() + 1).toString() + "-" + nowDate.getDate() + " " + nowDate.getHours() + ":" + nowDate.getMinutes() + ":" + nowDate.getSeconds()
        //     var wendaObject = {"OPENID": "111",
        //         "WENDA_ID": wenda_id,
        //         "WENDA_INFO_ID": wenda_info_id,
        //         "DATE": dateStr}
        //     result.push(wendaObject)
        // }

        //得分
        var score = correctCount / objects.length * 100

        console.log(score)
        // var requsetResult = new XMLHttpRequest()
        // requsetResult.open("POST", "http://192.168.3.3:8888/under/app/saveWenDa", true)
        // requsetResult.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        //
        // requsetResult.send("OPENID=" + "111" + "&object=" + JSON.stringify(result) + "&FRACTION=" + score.toString() + "&data=" + JSON.stringify(jsonObj))
        // requsetResult.onreadystatechange = function() {
        //     if (requsetResult.readyState === 4) {
        //         if (requsetResult.status === 200) {
        //             var resultt = requsetResult.responseText
        //             var jsonOBJ = JSON.parse(resultt)
        //             console.log(jsonOBJ)
        //         }
        //     }
        // }


        console.log("得分" + score + "正确数" + correctCount)
        localStorage.setItem("score", score)
        localStorage.setItem("name", "name")

        var selectlist = joinStringWithArr(selectArr)
        // var indexlist = joinStringWithArr(indexArr)
        localStorage.setItem("selectArr",selectlist)
        // localStorage.setItem("indexArr",indexlist)
        localStorage.setItem("jsonData",JSON.stringify(objects))

        //跳转
        window.location.href = "result2.html"
        return
    }
    //
    //题目
    var question = document.getElementById("questionTitle")
    //清空paddingBottom

    question.textContent = objects[index].question


    document.getElementById("questionIndex").getElementsByTagName("img")[0].src = "images/" + (index + 1) +".png"
    // var rect = question.getBoundingClientRect()
    // if (rect.height + 60 + 25 < 240) {
    //     question.style.paddingBottom = 180 - rect.height + "px"
    // }else {
    //     question.style.paddingBottom = 60 + 25 + "px"
    //
    // }
    //题号
    var progress = document.getElementById("progress")
    progress.textContent = (index + 1) + "/" + objects.length
    progress.style.left = (clientWidth - progress.offsetWidth) / 2 + "px"

    //清空当前选项
    var removeQuestions = document.getElementsByClassName("answer")
    var qLength = removeQuestions.length
    for (var j=0; j<qLength; j++) {
        document.getElementById("answerContent").removeChild(removeQuestions[0])
    }

    for(var k=0; k<objects[index].options.length; k++) {

        var optionData = objects[index].options[k]

        var op = document.createElement("div")
        op.className = "answer"


        var imgUp = document.createElement("img")
        imgUp.src = "images/未选中/上.png"
        imgUp.className = "topIMG optionIMG"
        op.appendChild(imgUp)

        var imgMid = document.createElement("div")
        imgMid.className = "middleDisSelect optionIMG"
        imgMid.textContent = optionData.title
        op.appendChild(imgMid)

        var imgDown = document.createElement("img")
        imgDown.src = "images/未选中/下.png"
        imgDown.className = "bottomIMG optionIMG"
        op.appendChild(imgDown)

        document.getElementById("answerContent").appendChild(op)
    }
    //
    //
    var btns = document.getElementsByClassName("answer")
    for (var m=0; m<btns.length; m++) {
        btns[m].dataset.selectid = m
        btns[m].onclick = function () {
            for (var w=0; w<btns.length; w++) {
                btns[w].onclick = function () {}
            }
            index += 1
            this.getElementsByClassName("middleDisSelect")[0].className = "middleSelect optionIMG"
            this.getElementsByClassName("topIMG")[0].src = "images/选中/上.png"
            this.getElementsByClassName("bottomIMG")[0].src = "images/选中/下.png"

            var fade = new Fade()
            fade.hide(document.getElementById("questionTitle"))

            selectArr.push(this.dataset.selectid)

            setTimeout(function () {
                displayQAndA(objects,jsonObj)
                fade.show(document.getElementById("questionTitle"))
            }, 500)
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

var Fadeflag = true;
function Fade() {
    /**
     * 淡入效果
     * @param {Object} obj
     */
    this.show = function(obj) {
        var num = 0;
        if (Fadeflag) {
            var st = setInterval(function(){
                num++;
                Fadeflag = false;
                obj.style.opacity = num/10;
                if (num>=10) {
                    clearInterval(st);
                    Fadeflag = true;
                }
            },30);
        }
    }
    /**
     * 淡出效果
     * @param {Object} obj
     */
    this.hide = function(obj) {
        var num = 10;
        if (Fadeflag) {
            var st = setInterval(function(){
                num--;
                Fadeflag = false;
                obj.style.opacity = num/10;
                if (num<=0) {
                    clearInterval(st);
                    Fadeflag = true;
                }
            },30);
        }
    }
}




