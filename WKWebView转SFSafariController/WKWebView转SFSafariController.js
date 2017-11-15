/**
 * Created by meitiannongzi on 2017/10/13.
 */


var alinks = document.getElementsByTagName("a")
for (var j=0; j<alinks.length; j++) {
    var alink = alinks[j]


    alink.onclick = function () {

        window.webkit.messageHandlers.sfsafari.postMessage(this.href)

        return false
    }
    
}
