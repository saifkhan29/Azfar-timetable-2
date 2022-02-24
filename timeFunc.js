const monday = document.querySelectorAll('.monday')
const tuesday = document.querySelectorAll('.tuesday')
const wednesday = document.querySelectorAll('.wednesday')
const thursday = document.querySelectorAll('.thursday')
const friday = document.querySelectorAll('.friday')

const date = new Date();

const timings = [10,11,12,13,14,15,16,17]
let i;
timings.forEach((time,idx) => {
    if(time == date.getHours()){
    i = idx
    }
})

const daysOfTheWeek = ['',monday, tuesday, wednesday, thursday, friday,''];

daysOfTheWeek.forEach((eachDay, idx) => {
    if(idx == date.getDay()){
        eachDay[i].classList.add('highlight')
    }
})





