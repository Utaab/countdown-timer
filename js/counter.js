const selectStartBTN = document.getElementById("counter_start");
const selectResetBTN = document.getElementById("counter_reset");

let seconds = 120;
let intervalseconds = 60;
let iscounting = false; // this is flag


const updateTimeinDOM = () =>{
    document.querySelector("#counter_box .time").innerHTML = convertSecondtoTime();
}

const startSecondCounter = () =>{
    if(iscounting) return; 
    iscounting = true;
    intervalseconds =  setInterval(() => {
        if(seconds <= 0){
            clearInterval(intervalseconds);
            document.querySelector("#counter_box .time").innerHTML = "CountDown Finished";
        }else{
            seconds--;
            updateTimeinDOM();
        }
    },1000)
    
}

const resetSecondCounter =() =>{
    clearInterval(intervalseconds);
    seconds = 120;
    updateTimeinDOM();
}

const convertSecondtoTime = () =>{
    let minutesNumber = Math.floor(seconds / 60) ;
    let secondsNumber = seconds % 60;

    if(minutesNumber < 10){
        minutesNumber = `0${minutesNumber}`;
    } 

    if(secondsNumber < 10){
        secondsNumber = `0${secondsNumber}`;
    }
    
    return `${minutesNumber}:${secondsNumber}`; 
}



//clearInterval(autoCounter);


selectStartBTN.addEventListener("click", () =>{
    startSecondCounter();
    selectStartBTN.disabled = true;
})

selectResetBTN.addEventListener("click", () =>{
    iscounting = false;
    resetSecondCounter();
    selectStartBTN.disabled = false;
});
