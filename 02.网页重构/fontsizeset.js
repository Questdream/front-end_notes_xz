(function(doc,win){
    var docE1 = doc.documentElement,
    resizeEvt = "orientatinchange" in window ? 'orientationchange': 'resize',
    recalc = function(){
        var clientWidth = docE1.clientWidth;
        if (!clientWidth) return;
        docE1.style.fontSize = 100 * (clientWidth/720) + 'px';
    };
    if(!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document,window);