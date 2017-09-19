/**
 * Created by meitiannongzi on 2017/9/14.
 */

var Radius = 7
var BeginX = 20

var today = new Date()
var endDate = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 18, 30, 0)

var curentDistanceSec = 0
var balls = [];
const colors = ["#33B5E5","#0099CC","#AA66CC","#9933CC","#99CC00","#669900","#FFBB33","#FF8800","#FF4444","#CC0000"]

window.onload = function() {
    // 倒计时
    // main()
    // 七巧板
    // addQiQiaoBan()
    // 美国队长盾牌
    rectShelid()
}

//获取画布
function getCanvas() {
    var canvas = document.getElementById("canvas1")
    var context = canvas.getContext("2d")

    canvas.width = 1024
    canvas.height = 768

    return context
}

//绘制七巧板
function addQiQiaoBan() {

    var tangram = [
        {p: [{x: 0, y: 0}, {x: 80, y: 0}, {x: 40, y: 40}], color: "#caff67"},
        {p: [{x: 0, y: 0}, {x: 40, y: 40}, {x: 0, y: 80}], color: "#67becf"},
        {p: [{x: 80, y: 0}, {x: 80, y: 40}, {x: 60, y: 60}, {x :60, y :20}], color: "#ef3d61"},
        {p: [{x: 60, y: 20}, {x: 60, y: 60}, {x: 40, y: 40}], color: "#f9f51a"},
        {p: [{x: 40, y: 40}, {x: 60, y: 60}, {x: 40, y: 80}, {x :20, y :60}], color: "#a594c0"},
        {p: [{x: 20, y: 60}, {x: 40, y: 80}, {x: 0, y: 80}], color: "#fa8ecc"},
        {p: [{x: 80, y: 40}, {x: 80, y: 80}, {x: 40, y: 80}], color: "#f6ca29"}
    ]

    var context = getCanvas()

    for (var i=0; i<tangram.length; i++) {
        darw(tangram[i], context)
    }
}

function darw(piece, ctx) {

    ctx.beginPath()
    ctx.moveTo(piece.p[0].x, piece.p[0].y)
    for (var i=1; i<piece.p.length; i++) {
        ctx.lineTo(piece.p[i].x, piece.p[i].y)

    }
    ctx.closePath()
    ctx.fillStyle = piece.color
    ctx.fill()
}


//往下绘制倒计时
function main() {

    var context = getCanvas()


    setInterval( function () {
        render(context)
        update()
    }, 50)

}

function update() {

    var nextShowTimeSeconds = getTimeDistanceSec();

    var nextHours = parseInt( nextShowTimeSeconds / 3600);
    var nextMinutes = parseInt( (nextShowTimeSeconds - nextHours * 3600) / 60 )
    var nextSeconds = nextShowTimeSeconds % 60

    var curHours = parseInt( curentDistanceSec / 3600);
    var curMinutes = parseInt( (curentDistanceSec - curHours * 3600) / 60 )
    var curSeconds = curentDistanceSec % 60

    if( nextSeconds !== curSeconds ){

        if (parseInt(nextHours / 10) !== parseInt(curHours / 10)) {
            addBalls(BeginX, 200, parseInt(curHours / 10))
        }

        if (parseInt(nextHours % 10) !== parseInt(curHours % 10)) {
            addBalls(BeginX + 8 * (Radius + 1) * 2 , 200, parseInt(curHours % 10))
        }

        if (parseInt(nextMinutes / 10) !== parseInt(curMinutes / 10)) {
            addBalls(BeginX + (16 + 5) * (Radius + 1) * 2, 200, parseInt(curMinutes / 10))
        }

        if (parseInt(nextMinutes % 10) !== parseInt(curMinutes % 10)) {
            addBalls(BeginX + (16 + 5 + 8) * (Radius + 1) * 2, 200, parseInt(curMinutes % 10))
        }

        if (parseInt(nextSeconds / 10) !== parseInt(curSeconds / 10)) {
            addBalls(BeginX + (16 + 5 + 16 + 5) * (Radius + 1) * 2, 200, parseInt(curSeconds / 10))
        }

        if (parseInt(nextSeconds % 10) !== parseInt(curSeconds % 10)) {
            addBalls(BeginX + (16 + 5 + 16 + 5 + 8) * (Radius + 1) * 2, 200, parseInt(curSeconds % 10))
        }

        curentDistanceSec = nextShowTimeSeconds;
    }
    
    updateBalls()
}

function updateBalls() {

    console.log(balls.length)
    for (var i=0; i<balls.length; i++) {
        balls[i].x += balls[i].vx
        balls[i].y += balls[i].vy
        balls[i].vy += balls[i].g

        if (balls[i].y >= 768) {
            balls[i].y = 768
            balls[i].vy = -balls[i].vy * 0.75
        }
    }

    var cnt = 0
    for (var i=0; i<balls.length; i++) {
        if (balls[i].x + Radius > 0 && balls[i].x - Radius < 1024) {
            balls[cnt++] = balls[i]
        }
    }

    while (balls.length > cnt) {
        balls.pop()
    }
}

function addBalls(x, y, num) {

    for (var i=0; i<digit[num].length; i++) {
        for (var j=0; j<digit[num][i].length; j++) {
            if (digit[num][i][j] === 1) {
                var aBall = {
                    x: x + j * 2 * (Radius + 1) + (Radius + 1),
                    y: y + i * 2 * (Radius + 1) + (Radius + 1),
                    g: 1.5 + Math.random(),
                    vx: Math.pow(-1, Math.ceil(Math.random() * 1000)) * 4,
                    vy: -5,
                    color: colors[Math.floor(Math.random() * colors.length)]
                }

                balls.push(aBall)
            }

        }
    }
}

function render(ctx) {

    var finishTime = getTimeDistanceSec()
    var hour = parseInt(finishTime / 3600)
    var min = parseInt((finishTime - hour * 3600) / 60)
    var sec = parseInt((finishTime - hour * 3600 - min * 60) % 60)

    ctx.clearRect(0, 0, 1024, 768)

    paintArc(BeginX, 200, parseInt(hour / 10),ctx)
    paintArc(BeginX + 8 * (Radius + 1) * 2, 200, parseInt(hour % 10),ctx)   //时
    paintArc(BeginX + 16 * (Radius + 1) * 2, 200, 10,ctx)   //冒号
    paintArc(BeginX + (16 + 5) * (Radius + 1) * 2, 200, parseInt(min / 10),ctx)
    paintArc(BeginX + (16 + 5 + 8) * (Radius + 1) * 2, 200, parseInt(min % 10),ctx)   //分
    paintArc(BeginX + (16 + 5 + 16) * (Radius + 1) * 2, 200, 10,ctx)   //冒号
    paintArc(BeginX + (16 + 5 + 16 + 5) * (Radius + 1) * 2, 200, parseInt(sec / 10),ctx)
    paintArc(BeginX + (16 + 5 + 16 + 5 + 8) * (Radius + 1) * 2, 200, parseInt(sec % 10),ctx)   //秒

    for (var i=0; i<balls.length; i++) {
        ctx.fillStyle = balls[i].color
        ctx.beginPath()
        ctx.arc(balls[i].x, balls[i].y, Radius, 0, 2 * Math.PI)
        ctx.closePath()
        ctx.fill()
    }
}

function paintArc(x, y, num, ctx) {

    for (var i=0; i<digit[num].length; i++) {
        var row = digit[num][i]

        for (var k=0; k<row.length; k++) {

            if (row[k] === 1) {
                ctx.beginPath()
                ctx.fillStyle = "#67becf"
                ctx.arc(x + k * 2 * (Radius + 1) + (Radius + 1), y + i * 2 * (Radius + 1) + (Radius + 1), Radius, 0, 2 * Math.PI)
                ctx.closePath()
                ctx.fill()
            }

        }
    }
}

function getTimeDistanceSec() {

    var current = new Date()
    var dist = endDate.getTime() - current.getTime()
    return dist > 0 ? Math.round(dist / 1000) : 0
}

//绘制美国队长盾牌

function rectShelid() {

    var context = getCanvas()
    drawArc(1024 / 2, 768 / 2, 350, "#dd5870", context)
    drawArc(1024 / 2, 768 / 2, 300, "#e0dedf", context)
    drawArc(1024 / 2, 768 / 2, 250, "#dd5870", context)
    drawArc(1024 / 2, 768 / 2, 200, "#2773d3", context)
    rectStar(1024 / 2, 768 / 2, 80, 200, 0, "#dedce1", context)
}

function rectStar(x, y, r, R, changeDeg, fillColor, ctx) {

    ctx.beginPath()
    for (var i=0; i<5; i++) {
        ctx.lineTo(Math.cos((18 + i * 72 - changeDeg) / 180 * Math.PI) * R + x, -Math.sin((18 + i * 72 - changeDeg) / 180 * Math.PI) * R + y)
        ctx.lineTo(Math.cos((54 + i * 72 - changeDeg) / 180 * Math.PI) * r + x, -Math.sin((54 + i * 72 - changeDeg) / 180 * Math.PI) * r + y)
    }
    ctx.closePath()
    ctx.fillStyle = fillColor
    ctx.fill()
}

function drawArc(x, y, r, fillColor, ctx) {
    ctx.beginPath()
    ctx.arc(x, y, r, 0, Math.PI * 2)
    ctx.fillStyle = fillColor
    ctx.fill()
}



