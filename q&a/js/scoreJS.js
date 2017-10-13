/**
 * Created by meitiannongzi on 2017/9/22.
 */


window.onload = function () {

    var clientWidth = document.documentElement.clientWidth
    var clientHeight = document.documentElement.clientHeight

    var photoBackground = document.getElementById("photoBackground")

    var scoreNum = 10
    var photo = document.getElementById("photo")
    var photo_img = photo.getElementsByTagName("img")[0]

    var maxWidth = 0
    var maxleft = 0
    if (clientWidth >= 500) {
        maxWidth = 500
        maxleft = (clientWidth - 500) / 2
    }else {
        maxWidth = clientWidth
    }

    document.getElementById("title").textContent = "获得" + scoreNum + "分"

    var sub_title = document.getElementById("subTitle")
    sub_title.style.width = maxWidth - 20 * 2 + "px"
    sub_title.style.left = maxleft + 20 + "px"
    sub_title.style.top = 64 + "px"


    var sub_title_span = sub_title.getElementsByTagName("span")[0]

    var comment = document.getElementById("comment")

    var percent = Math.floor(Math.random() * 10)
    var percent2 = Math.floor(Math.random() * 10)
    if (scoreNum === 100) {
        photoBackground.src = "images/超神.png"
        comment.textContent = "战斗实力可怕，什么病虫害都难不倒他！专业、靠谱、牛气冲天——大神，等着大家来膜拜吧"
        sub_title_span.textContent = scoreNum + ".0%"

    }else if (scoreNum < 100 && scoreNum >= 80) {
        photoBackground.src = "images/高级.png"
        comment.textContent = "在本卷中，只错了" + (scoreNum >= 90 ? 1 : 2) + "道题，病虫害识别又快又好，达到了高级病虫害技术阶段，技术杠杠的！一般人都比不过你了，不服来比~"
        sub_title_span.textContent = (scoreNum + percent2) + "." + percent + "%"

    }else if (scoreNum < 80 && scoreNum >= 50) {
        photoBackground.src = "images/中级.png"
        comment.textContent = "及格了！对一些常见病虫害有所了解，但还要更努力才能称得上是一个优秀农资人哦~"
        sub_title_span.textContent = (scoreNum + percent2) + "." + percent + "%"

    }else if (scoreNum < 50 && scoreNum > 10) {
        photoBackground.src = "images/新手.png"
        comment.textContent = "赶紧的，病虫害技术升级之路还任重而道远，抓紧时间再重新刷一遍题！！！"
        sub_title_span.textContent = (scoreNum + percent2) + "." + percent + "%"

    }else {
        photoBackground.src = "images/门外汉.png"
        comment.textContent = "肯定是故意得分这么少的，对不对？不敢相信……蒙都不至于蒙这点分啊——"
        sub_title_span.textContent = (scoreNum + percent2) + "." + percent + "%"
        sub_title.innerHTML = "<div style='text-align: center; font-size: 16px; color: #333333'>刚才，" + "XX" +"做题时，有<span>" + 9 + percent + "." + percent2 + "%</span>" + "人的分数超过了他"

    }

    photoBackground.style.height = clientHeight * 0.425 + "px"

    if (clientHeight * 0.425 / 0.7 > maxWidth) {
        photoBackground.style.width = maxWidth + "px"
        photoBackground.style.left = maxleft + "px"

    } else {
        photoBackground.style.width = clientHeight * 0.425 / 0.7 + "px"
        photoBackground.style.left = maxleft + (maxWidth - clientHeight * 0.425 / 0.7) / 2 + "px"

    }

    var sub_title_bottom = sub_title.offsetTop + sub_title.offsetHeight - 20
    photoBackground.style.top = sub_title_bottom + "px"

    photo.style.left = (maxWidth - maxWidth / 4.3) / 2 + maxleft + "px"
    photo_img.style.width = maxWidth / 4.3 + "px"
    photo_img.style.height = maxWidth / 4.3 + "px"

    var centerY = (maxWidth * 0.85 * 0.773) * 0.56 +  sub_title_bottom
    photo.style.top = centerY - maxWidth / 4.3 / 2 + "px"

    comment.style.top = photoBackground.offsetTop + photoBackground.offsetHeight + 20 + "px"
    comment.style.left = maxleft + 12 + "px"
    comment.style.width = clientWidth - 12 * 2 + "px"

    var tmpH = comment.offsetHeight

    var tmpT = photoBackground.offsetTop + photoBackground.offsetHeight + 20 + tmpH

    //二维码
    var qr_code = document.getElementById("QR_code")
    var qr_code_img = qr_code.getElementsByTagName("img")[0]
    qr_code_img.style.width = maxWidth / 3.5 + "px"
    qr_code_img.style.height = maxWidth / 3.5 + "px"

    qr_code.style.top = tmpT + 20 + "px"
    qr_code.style.left = maxWidth / 8.1 + maxleft + "px"


    //指纹
    var finger_print = document.getElementById("fingerprint")
    var finger_print_img = finger_print.getElementsByTagName("img")[0]
    finger_print_img.style.width = maxWidth / 10 + "px"
    finger_print_img.style.height = maxWidth / 10 + "px"

    finger_print.style.top = tmpT + 30 + "px"
    finger_print.style.left = maxWidth / 8.1 + maxWidth / 3.5 + maxWidth / 6.25 + maxleft + "px"

    //提示语
    var span1 = document.getElementById("span1")
    span1.style.left = finger_print.style.left
    span1.style.top = tmpT + 30 + maxWidth / 10 + 15 + "px"

    var span2 = document.getElementById("span2")
    span2.style.left = finger_print.style.left
    span2.style.top = tmpT + 30 + maxWidth / 10 + 15 + 19 + "px"

    //解析按钮
    var analysis = document.getElementById("analysis_btn")
    analysis.style.left = qr_code.style.left
    analysis.style.top = tmpT + maxWidth / 3.5 + 30 + 20 + "px"

    analysis.onclick = function () {
        window.location.href = "result.html"
    }

    //分享按钮
    var share_btn = document.getElementById("share_btn")
    share_btn.style.left = maxWidth / 8.1 + maxWidth / 3.5 + 23 + maxleft + "px"
    share_btn.style.top = analysis.style.top

    share_btn.onclick = function () {
        var shadow = document.createElement("div")
        shadow.className = "shadow"
        shadow.style.height = clientHeight + "px"
        shadow.style.width = clientWidth + "px"
        shadow.style.left = maxleft + "px"
        console.log(maxleft)
        console.log(maxWidth)
        var shadow_img = document.createElement("img")
        shadow_img.src = "images/分享底色.png"
        shadow_img.style.height = clientHeight + "px"
        shadow_img.style.width = maxWidth + "px"
        shadow.appendChild(shadow_img)

        var alert = document.createElement("div")
        alert.className = "alert"
        alert.style.left = maxWidth * 0.3 + maxleft  + "px"
        alert.style.width = maxWidth * 0.7 + "px"
        alert.style.height = maxWidth * 0.7 * 0.82 + "px"

        var alert_img = document.createElement("img")
        alert_img.style.width = maxWidth * 0.7 + "px"
        alert_img.style.height = maxWidth * 0.7 * 0.82 + "px"
        alert_img.src = "images/点击分享.png"
        alert.appendChild(alert_img)

        shadow.appendChild(alert)

        document.body.appendChild(shadow)

        shadow.onclick = function () {
            document.body.removeChild(this)
        }
    }

}