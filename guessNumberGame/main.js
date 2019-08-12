 //初始化数据
 let times = 0
 const div = document.querySelector('div')
 const input = document.querySelector('input')
 const submitBtn = document.querySelectorAll('button')[0]
 const restartBtn = document.querySelectorAll('button')[1]
 const span = document.getElementsByTagName('span')[0]
 let userNum
 let systemNum = randomNumber()
 let str = ''

 //系统随机选择一个数
 function randomNumber() {
     let randomNum = parseInt(Math.random() * 100)
     return randomNum
 }

 //input框变化时
 input.onchange = (e) => {
     userNum = e.target.value
 }

 //点击button提交数据时
 submitBtn.onclick = () => {
     if (div.children.length > 0) {
         div.removeChild(div.firstChild)
     }
     if (userNum > 0 && userNum < 100) {
         str = str + ' ' + userNum
         span.innerHTML = str
         compare(userNum)
     } else {
         alert('请输入0-100的正整数')
     }
     input.value = ''
 }

 //点击button重新开始游戏时
 restartBtn.onclick = () => {
     if (div.children.length > 0) {
         div.removeChild(div.firstChild)
     }
     str = ''
     span.innerHTML = ''
     times = 0
     systemNum = randomNumber()
 }

 //比较数据
 function compare(userNum) {
     let promptEl
     if (times < 10) {
         if (userNum > systemNum) {
             promptEl = prompt('大')
             div.appendChild(promptEl)
         } else if (userNum < systemNum) {
             promptEl = prompt('小')
             div.appendChild(promptEl)
         } else {
             promptEl = prompt('相等')
             div.appendChild(promptEl)
         }
         times++
     } else {
         alert(`很遗憾，次数已用完，请重新开始游戏吧，祝你好运！正确数字为${systemNum}`)
     }
 }

 function prompt(symbol) {
     const p = document.createElement('p')
     if (symbol !== '相等') {
         p.textContent = `你输入的数比目标数${symbol}`
         p.setAttribute('class', 'red')
         return p
     } else {
         p.textContent = `恭喜你，猜中啦！`
         p.setAttribute('class', 'green')
     }
     return p
 }