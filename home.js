const interval = setInterval(function() {
    const deadline1 = new Date("May 13, 2021 00:00:00"); // 첫 번째 디데이가 주어진 시간
    const deadline2 = new Date("May 14, 2021 00:00:00"); // 두 번째 디데이가 주어진 시간
    const currentTime = new Date(); // 현재 시간
    let difference1 = deadline1 - currentTime; // 첫 번째 디데이의 현재 시간과 차이
    let difference2 = deadline2 - currentTime; // 두 번째 디데이의 현재 시간과 차이
  
  // 첫 번째 디데이의 일, 시, 분, 초 계산
  const days1 = Math.floor(difference1 / (1000 * 60 * 60 * 24));
  const hours1 = Math.floor((difference1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes1 = Math.floor((difference1 % (1000 * 60 * 60)) / (1000 * 60));
  const seconds1 = Math.floor((difference1 % (1000 * 60)) / 1000);
  
  // 두 번째 디데이의 일, 시, 분, 초 계산
  const days2 = Math.floor(difference2 / (1000 * 60 * 60 * 24));
  const hours2 = Math.floor((difference2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes2 = Math.floor((difference2 % (1000 * 60 * 60)) / (1000 * 60));
  const seconds2 = Math.floor((difference2 % (1000 * 60)) / 1000);

  if (difference1 < 0) {
    document.getElementById("days1").innerHTML = 'ㄴ' + '+' + Math.abs(days1) + ' ' + ('0' + Math.abs(hours1)).slice(-2) + ':' + ('0' + Math.abs(minutes1)).slice(-2) + ':' + ('0' + Math.abs(seconds1)).slice(-2);
  } else {
    document.getElementById("days1").innerHTML = days1 + ' ' + ('0' + hours1).slice(-2) + ':' + ('0' + minutes1).slice(-2) + ':' + ('0' + seconds1).slice(-2);
  }
  
  if (difference2 < 0) {
    document.getElementById("days2").innerHTML = 'ㄴ' + '+' + Math.abs(days2) + ' ' + ('0' + Math.abs(hours2)).slice(-2) + ':' + ('0' + Math.abs(minutes2)).slice(-2) + ':' + ('0' + Math.abs(seconds2)).slice(-2);
  } else {
    document.getElementById("days2").innerHTML = days2 + ' ' + ('0' + hours2).slice(-2) + ':' + ('0' + minutes2).slice(-2) + ':' + ('0' + seconds2).slice(-2);
  }
  

})