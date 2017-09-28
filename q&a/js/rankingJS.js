/**
 * Created by meitiannongzi on 2017/9/22.
 */
window.onload = function () {



    var requset = new XMLHttpRequest()
    requset.open("POST", "http://192.168.3.3:8888/under/app/findWenDaJiLu", true)
    requset.setRequestHeader("Content-type","application/x-www-form-urlencoded");

    requset.send("OPENID=" + "111")
    requset.onreadystatechange = function() {

        if (requset.readyState === 4) {

            if (requset.status === 200) {
                var result = requset.responseText
                var jsonOBJ = JSON.parse(result)
                console.log(jsonOBJ)

                var objects = jsonOBJ.object



                for (var i=0; i<objects.length; i++) {

                    var rank = document.createElement("div")
                    rank.className = "rank"

                    var left_block = document.createElement("div")
                    left_block.className = "left block"
                    var left_span = document.createElement("span")
                    left_span.textContent = (i + 1).toString()
                    left_block.appendChild(left_span)

                    var middle_block = document.createElement("div")
                    middle_block.className = "middle block"
                    var middle_img = document.createElement("img")
                    middle_img.src = objects[i].HEADIMGURL
                    middle_block.appendChild(middle_img)
                    var middle_span = document.createElement("span")
                    middle_span.textContent = objects[i].NICKNAME
                    middle_block.appendChild(middle_span)

                    var right_block = document.createElement("div")
                    right_block.className = "right block"
                    var right_span = document.createElement("span")
                    right_span.textContent = objects[i].FRACTION
                    right_block.appendChild(right_span)

                    rank.appendChild(left_block)
                    rank.appendChild(middle_block)
                    rank.appendChild(right_block)

                    document.getElementById("background").appendChild(rank)
                }


                var myRank = jsonOBJ.PAIMING
                var ranks = document.getElementsByClassName("rank")
                var myRankDiv = ranks[myRank - 1]
                myRankDiv.style.backgroundColor = "#fcf9e4"

            }
        }
    }
}