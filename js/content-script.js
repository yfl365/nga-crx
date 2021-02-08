setName()
function setName() {
    const nod = document.createElement('style')
    // let str = '.row1 .c1,.row1 .c2,.row1 .c3,.row1 .c4{background:#fff}';
    // str += '.row2 .c1,.row2 .c2,.row2 .c3,.row2 .c4{background: rgb(204,232,207)}';
    // let str = '.row2 .c1,.row2 .c2,.row2 .c3,.row2 .c4{background: #fff8e7}';
    // let str = '.row1 .c1,.row1 .c2,.row1 .c3,.row1 .c4{background: #fff}';
    // let str = '.row1 .c1,.row1 .c3,.row1 .c4,.row2 .c1,.row2 .c3,.row2 .c4{background: #fff6df}';
    let str = '.row2 .c2,.row1 .c2{background: #fff8e7}';
    // str += '.row2 .c2{background: #fff8e7}';
    str += '.row2 .c1{background: #ffedc3}';
    str += '.quote{background: rgb(204,232,207)}'
    str += 'a{color:#10273f}'
    nod.type='text/css';
    nod.innerHTML = str
    document.getElementsByTagName('head')[0].appendChild(nod);
}
