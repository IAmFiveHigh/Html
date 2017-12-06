/**
 * Created by meitiannongzi on 2017/12/6.
 */

var endDate = new Date(2017, 11, 7, 15, 30, 0)

$(function () {

    setInterval( function () {
        update()
    }, 50)

})


function getTimeDistanceSec() {

    var current = new Date()
    var dist = endDate.getTime() - current.getTime()
    return dist > 0 ? Math.round(dist / 1000) : 0
}

function update() {

    var nextShowTimeSeconds = getTimeDistanceSec();

    var nextDays = parseInt(nextShowTimeSeconds / 3600 / 24)
    var nextHours = parseInt( (nextShowTimeSeconds - nextDays * 24 * 3600) / 3600);
    var nextMinutes = parseInt( (nextShowTimeSeconds - nextDays * 24 * 3600 - nextHours * 3600) / 60 )
    var nextSeconds = nextShowTimeSeconds % 60

    $("#count_down_num_day").text(nextDays.toString() + "天")
    $("#count_down_num_hour").text(nextHours.toString() + "时")
    $("#count_down_num_minus").text(nextMinutes.toString() + "分")
    $("#count_down_num_sec").text(nextSeconds.toString() + "秒")
}