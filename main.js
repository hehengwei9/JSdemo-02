var div1 = document.createElement('div');
document.body.appendChild(div1);
div1.className = 'demo'

div1.style.top = 'auto'

var lastX
var lastY

var dragging = false

document.onmousedown = function (e) {
    lastX = e.clientX
    lastY = e.clientY
    dragging = true

}
document.onmousemove = function (e) {
    if (dragging === true) {
        var deltaX = e.clientX - lastX
        var deltaY = e.clientY - lastY
        var top = parseInt(div1.style.top) || 0
        var left = parseInt(div1.style.left) || 0
        var resultY = top + deltaY
        var resultX = left + deltaX
        // if (resultX < 0) {
        //     resultX = 0
        // }
        // if (resultY < 0) {
        //     resultY = 0
        // }  
        // 防止用户找不到div
        div1.style.top = top + deltaY + 'px'
        div1.style.left = left + deltaX + 'px'
        lastX = e.clientX
        lastY = e.clientY

    }
}
document.onmouseup = function (e) {
    dragging = false
}