/**
 * Created by meitiannongzi on 2017/9/22.
 */


window.onload = function () {

    var clientWidth = document.documentElement.clientWidth
    var clientHeight = document.documentElement.clientHeight


    var photoBackground = document.getElementById("photoBackground")

    var scoreNum = parseInt(localStorage.getItem("score"))

    var photo = document.getElementById("photo")
    var photo_img = photo.getElementsByTagName("img")[0]

    if (scoreNum === 100) {
        photoBackground.src = "images/农资学神100.png"
    }else if (scoreNum < 100 && scoreNum >= 80) {
        photoBackground.src = "images/农资学霸80-90.png"
    }else if (scoreNum < 80 && scoreNum >= 50) {
        photoBackground.src = "images/农资学徒50-70.png"
    }else if (scoreNum < 50 && scoreNum >= 20) {
        photoBackground.src = "images/农资学渣20-40.png"
    }else if (scoreNum < 20 && scoreNum >=0) {
        photoBackground.src = "images/农资学残0-10.png"
    }


    var maxWidth = 0
    var maxleft = 0
    if (clientWidth >= 500) {
        maxWidth = 500
        maxleft = (clientWidth - 500) / 2
    }else {
        maxWidth = clientWidth
    }

    photoBackground.style.width = maxWidth * 0.85 + "px"
    photoBackground.style.left = maxleft + maxWidth * 0.0725 + "px"
    photoBackground.style.height = maxWidth * 0.85 * 0.773 + "px"
    photoBackground.style.top = 66 + "px"

    photo.style.left = (maxWidth - maxWidth / 4.3) / 2 + maxleft + "px"
    photo_img.style.width = maxWidth / 4.3 + "px"
    photo_img.style.height = maxWidth / 4.3 + "px"
    // photo.style.borderRadius = clientWidth / 4.3 / 2 + "px"

    var centerY = (maxWidth * 0.85 * 0.773) * 0.56 +  66
    console.log(photoBackground.offsetHeight)
    photo.style.top = centerY - maxWidth / 4.3 / 2 + "px"


    var scoreNum = localStorage.getItem("score")
    document.getElementById("title").textContent = "恭喜你获得" + parseInt(scoreNum) + "分!"

    //二维码
    var qr_code = document.getElementById("QR_code")
    var qr_code_img = qr_code.getElementsByTagName("img")[0]
    qr_code_img.style.width = maxWidth / 3.5 + "px"
    qr_code_img.style.height = maxWidth / 3.5 + "px"

    qr_code.style.top = photoBackground.offsetTop + photoBackground.offsetHeight + 30 + "px"
    qr_code.style.left = maxWidth / 8.1 + maxleft + "px"


    //指纹
    var finger_print = document.getElementById("fingerprint")
    var finger_print_img = finger_print.getElementsByTagName("img")[0]
    finger_print_img.style.width = maxWidth / 10 + "px"
    finger_print_img.style.height = maxWidth / 10 + "px"

    finger_print.style.top = photoBackground.offsetTop + photoBackground.offsetHeight + 40 + "px"
    finger_print.style.left = maxWidth / 8.1 + maxWidth / 3.5 + maxWidth / 6.25 + maxleft + "px"

    //提示语
    var span1 = document.getElementById("span1")
    span1.style.left = finger_print.style.left
    span1.style.top = photoBackground.offsetTop + photoBackground.offsetHeight + 40 + maxWidth / 10 + 15 + "px"

    var span2 = document.getElementById("span2")
    span2.style.left = finger_print.style.left
    span2.style.top = photoBackground.offsetTop + photoBackground.offsetHeight + 40 + maxWidth / 10 + 15 + 19 + "px"

    //解析按钮
    var analysis = document.getElementById("analysis_btn")
    analysis.style.left = qr_code.style.left
    analysis.style.top = photoBackground.offsetTop + photoBackground.offsetHeight + maxWidth / 3.5 + 30 + 30 + "px"

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