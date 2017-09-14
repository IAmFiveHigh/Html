/**
 * Created by meitiannongzi on 2017/9/14.
 */

window.onload = function() {

    addQiQiaoBan()
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

    var canvas = document.getElementById("canvas1")
    var context = canvas.getContext("2d")

    canvas.width = 1024
    canvas.height = 768

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



