/**
 * Created by meitiannongzi on 2017/9/14.
 */

Radius = 7
BeginX = 20

const endDate = new Date(2017, 8, 16, 0, 0, 0)

curentDistanceSec = 0

window.onload = function() {

    main()
}

function getCanvas() {
    var canvas = document.getElementById("canvas1")
    var context = canvas.getContext("2d")

    canvas.width = 1024
    canvas.height = 768

    return context
}

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

function main() {

    var context = getCanvas()


    setInterval( function () {
        render(context)
        update()
    }, 50)


}

function update() {

    var nextShowTimeSeconds = getTimeDistanceSec();

    // var nextHours = parseInt( nextShowTimeSeconds / 3600);
    // var nextMinutes = parseInt( (nextShowTimeSeconds - nextHours * 3600) / 60 )
    var nextSeconds = nextShowTimeSeconds % 60

    // var curHours = parseInt( curentDistanceSec / 3600);
    // var curMinutes = parseInt( (curentDistanceSec - curHours * 3600) / 60 )
    var curSeconds = curentDistanceSec % 60

    if( nextSeconds != curSeconds ){

        curentDistanceSec = nextShowTimeSeconds;
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



