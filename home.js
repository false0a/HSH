const interval = setInterval(function() {
    const deadline1 = new Date("May 13, 2021 00:00:00"); // 첫 번째 디데이가 주어진 시간
    const deadline2 = new Date("November 01, 2016 12:12:29"); // 두 번째 디데이가 주어진 시간
    const currentTime = new Date(); // 현재 시간
    let difference1 = deadline1 - currentTime; // 첫 번째 디데이의 현재 시간과 차이
    let difference2 = deadline2 - currentTime; // 두 번째 디데이의 현재 시간과 차이
    // 이미지 요소 생성
    var imgElement = document.createElement("img");
    // 새로운 이미지 요소 생성
    var newImgElement = document.createElement("img");

    // 이미지 요소의 속성 지정
    imgElement.src = "https://cdn.discordapp.com/attachments/1050769433804685403/1061655072603381861/5fc82385a1984554.png";
    // 새로운 이미지 요소의 속성 지정
    newImgElement.src = "https://cdn.discordapp.com/attachments/1050769433804685403/1061655073563873351/ce1ca202e2714826.png";


imgElement.style.width = "50px";
imgElement.style.height = "68px";

newImgElement.style.width = "50px";
newImgElement.style.height = "60px";


// 이미지 요소를 문자열로 변환
var imgElementString = imgElement.outerHTML;
var newImgElementString = newImgElement.outerHTML;
  
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
    // #days1 요소의 innerHTML 속성에 이미지 요소 삽입
document.getElementById("days1").innerHTML = imgElementString + '+' + ' ' + Math.abs(days1) + ' ' + ('0' + Math.abs(hours1)).slice(-2) + ':' + ('0' + Math.abs(minutes1)).slice(-2) + ':' + ('0' + Math.abs(seconds1)).slice(-2);
  } else {
    document.getElementById("days1").innerHTML = days1 + ' ' + ('0' + hours1).slice(-2) + ':' + ('0' + minutes1).slice(-2) + ':' + ('0' + seconds1).slice(-2);
  }
  
  if (difference2 < 0) {
    document.getElementById("days2").innerHTML = newImgElementString + '+' + Math.abs(days2) + ' ' + ('0' + Math.abs(hours2)).slice(-2) + ':' + ('0' + Math.abs(minutes2)).slice(-2) + ':' + ('0' + Math.abs(seconds2)).slice(-2);
  } else {
    document.getElementById("days2").innerHTML = days2 + ' ' + ('0' + hours2).slice(-2) + ':' + ('0' + minutes2).slice(-2) + ':' + ('0' + seconds2).slice(-2);
  }
  

})