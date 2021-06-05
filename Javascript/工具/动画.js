function getStyle(elements, style) {
    if (window.getComputedStyle) {
        return getComputedStyle(elements, null)[style];
    } else {
        return elements.currentStyle[style];
    }
}
//obj 要移动的元素 target目标位置 speed速度 style要修改的样式 callBack回调函数

function work(obj, target, speed, style, callBack) {
    clearInterval(obj.timer);
    current = parseInt((getStyle(obj, style)));
    if (current > target) {
        speed = -speed;
    }
    obj.timer = setInterval(function () {
        var oldValue = parseInt((getStyle(obj, style)));
        var newValue = oldValue + speed;
        if (speed < 0 && newValue < target || speed > 0 && newValue > target) {
            newValue = target;
        }
        obj.style[style] = newValue + 'px';
        if (newValue == target) {
            clearInterval(obj.timer);
            //结束当次动画后 调用callBack回调函数
            callBack && callBack();
        }
    }, 30)
}
