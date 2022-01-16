let demo = document.querySelector('#html')
let style = document.querySelector('#style')
let string = `
/*
你好，我是一名前端新人。
写代码这事还不是很熟
接下来我要写一个八卦
我需要先准备一个div
*/
#div1{
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/*
我们都知道八卦是圆形
接下来就是我们的第一步
把div变成一个圆形
*/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*
八卦是阴阳形成的
那么它需要变成一黑一白
*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*
给它加上两个神秘的小球
*/
#div1::before{
    width:100px;
    height:100px;
    border-radius: 50%;
    bottom:0;
    left: 50%;
    transform: translateX(-50%);
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
#div1::after{
    width:100px;
    height:100px;
    border-radius: 50%;
    top:0;
    left: 50%;
    transform: translateX(-50%);
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
/*
八卦已经做出来了
现在我们试着让它动起来
*/
#div1{
    animation: 5s x linear infinite reverse;
}
`
let n = 0
let string2 = ''
let step = () => {
    setTimeout(() => {
        if (string[n] === '\n') {
            string2 += "<br>"
        } else if (string[n] === " ") {
            string2 += '&nbsp'
        } else {
            string2 += string[n]
        }
        window.scrollTo(0, 99999)
        html.scrollTo(0,99999)
        demo.innerHTML = string2
        style.innerHTML = string.substring(0, n)
        if (n < string.length - 1) {
            n += 1
            step()
        }
    }, 0)
}
step()