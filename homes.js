const interval = setInterval(function() {
    const deadline = new Date("January 1, 2021 00:00:00"); // 디데이가 주어진 시간
    const currentTime = new Date(); // 현재 시간
    const difference = deadline - currentTime; // 현재 시간과 디데이 시간의 차이
  
    const days = Math.floor(difference / (1000 * 60 * 60 * 24)); // 일 단위
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // 시간 단위
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)); // 분 단위
    const seconds = Math.floor((difference % (1000 * 60)) / 1000); //
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    
    
    }, 1000); // 1초마다 카운트다운 진행