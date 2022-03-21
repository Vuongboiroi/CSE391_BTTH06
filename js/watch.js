function blink(){
    document.getElementById('content-text').style.color='black'
    setTimeout(function(){document.getElementById('content-text').style.color='red'},250)
}
function clock(){
    let hours = new Date().getHours()
    let minute = new Date().getMinutes()
    let secound = new Date().getSeconds()
    document.getElementsByClassName('hour1')[0].src="./img/0" + Math.floor(hours/10)+ ".gif"
    document.getElementsByClassName('hour2')[0].src="./img/0" + hours%10  + ".gif"
    document.getElementById('minute1').src="./img/0" + Math.floor(minute/10) + ".gif"
    document.getElementById('minute2').src="./img/0" + minute%10+ ".gif"
    document.getElementById('secound1').src="./img/0" + Math.floor(secound/10) + ".gif"
    document.getElementById('secound2').src="./img/0" + secound%10 + ".gif"
    if(hours>=0 && hours<12){
        document.getElementById('content-text').textContent = 'Chào buổi sáng'
        document.getElementById('content-text').style.fontSize='15x'
    }
    else if(hours>=12 && hours<17){
        document.getElementById('content-text').textContent= 'Chào buổi chiều'
        document.getElementById('content-text').style.fontSize='30px'
    }
    else{
        document.getElementById('content-text').textContent = 'Chào buổi tối'
        document.getElementById('content-text').style.fontSize='30px'
    }
}
setInterval('clock()',0)
setInterval('blink()',500)