//Timer
let my_timer = document.getElementById("countdown");
let time = my_timer.innerHTML;
let arr = time.split(":");
let m = arr[0];
let s = arr[1];
let startTimer =() => {
    if (s == 0) {
      if (m == 0) {
        alert("Время вышло");
        return;
      }
      m--;
      if (m < 10) m = "0" + m;
      s = 59;
    }
    else s--;
    if (s < 10) s = "0" + s;
    document.getElementById("countdown").innerHTML = `${m}:${s}`;
    setTimeout(startTimer, 1000);
}
// InfButton
const infoButton = document.querySelector(`.informTable`);
let clickInfo =() =>{
    event.preventDefault();
   return infoButton.classList.remove('hide')
}

let hideInfo = ()=>{
    event.preventDefault();
    return infoButton.classList.add('hide')
}

const cvcBind = document.querySelector('.CVC_bind');
let cvcInput = cvcBind.innerHTML;
let cvcErr =()=>{
  event.preventDefault();
  if(cvcInput == ""){
    cvcBind.classList.add('CVC_bind_err')
  }
    if(cvcInput!==""){
    return cvcBind.classList.remove('CVC_bind_err')
  }
}

