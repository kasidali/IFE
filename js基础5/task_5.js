num = 1;
function queueIn(obj) {
    var input = document.getElementById("input");
    var text = input.value;
    if (!text || (text < 10) || (text > 100) || (isNaN(text))) {
        alert("请输入10-100的数!");
        return 0;
    }
    if (num > 60) {
        alert("输入的元素已超过60个!");
        return 0;
    }
    var element = document.createElement("li");
    if (obj.id == "left_in") {
        queue.insertBefore(element, queue.firstChild);
    } else{
        queue.appendChild(element);
    }
    element.style.height = text + "px";
    num++;
}

var left_in = document.getElementById("left_in");
var right_in = document.getElementById("right_in");
var left_out = document.getElementById("left_out");
var right_out = document.getElementById("right_out");
var queue = document.getElementById("queue");

left_in.onclick = function() {
    queueIn(this);
};

right_in.onclick = function() {
    queueIn(this);
};

left_out.addEventListener("click", function() {
    if (!queue.children[0]) {
        alert("队列已空!");
        return 0;
    }
    var first = queue.removeChild(queue.children[0]);
    text = parseInt(first.style.height);
    alert(text);
    num--;
}, false);

right_out.onclick = function() {
    if (!queue.children[queue.children.length-1]) {
        alert("队列已空!");
        return 0;
    }
    var last = queue.removeChild(queue.children[queue.children.length-1]);
    text = parseInt(last.style.height);
    alert(text);
    num--;
}

var li = queue.getElementsByTagName("li");

queue.onmouseover = function() {
    for (var i in li) {
        li[i].index = i;
        li[i].onclick = function() {
            text = parseInt(queue.children[this.index].style.height);
            alert(text);
            queue.removeChild(queue.children[this.index]);
            num--;
        }
    }
}

var sort = document.getElementById("sort");

sort.onclick = function() {
    if (li.length >= 1) {
        quickSort(li, 0, li.length-1);
    }
};

function quickSort(a, lo, hi) {
    if (lo < hi) {
        var j = partition(a, lo, hi);
        quickSort(a, lo, j-1);
        quickSort(a, j+1, hi);
    }
}

function partition(a, lo, hi) {
    var i = lo, j = hi;
    var v = parseInt(a[lo].style.height);
    while (i < j) {
        while (v >= parseInt(a[i].style.height)) {
            ++i;
            if (i == hi) {
                break;
            }
        }
        while (v <= parseInt(a[j].style.height)) {
            --j;
            if (j == lo) {
                break;
            }
        }
        if (i > j) {
            break;
        }
        var temp = a[i].style.height;
        a[i].style.height = a[j].style.height;
        a[j].style.height = temp;
    }
    a[lo].style.height = a[j].style.height;
    a[j].style.height = v + "px";
    return j;
}/**
 * Created by kasidali on 2017/5/5.
 */
