window.onload = () => {
    const h = document.querySelector("#h");
    const tv = document.querySelector(".tv");
    const cuadroL = document.querySelector(".cuadro-l");
    const cuadroR = document.querySelector(".cuadro-r");
    const modal = document.getElementById('modal');
    const modal2 = document.getElementById('modal2');
    const modal3 = document.getElementById('modal3');
    
  
    
    const base = (e) => {
        // Calculate the x and y coordinates of the mouse pointer
        // relative to the window, with the origin at the center
        var x = e.pageX / window.innerWidth - 0.5;
        var y = e.pageY / window.innerHeight - 0.5;
        console.log(`x: ${x}, y: ${y}`);
        // Apply a 3D transformation to the h element
        h.style.transform = `
          perspective(90vw)
          rotateX(${y * 4 + 75}deg)
          rotateZ(${-x * 12 + 45}deg)
          translateZ(-9vw)
        `;
    }
      



    
      h.addEventListener("pointermove", base);
  
  
      tv.addEventListener('click', () => {
        // 모달 창을 표시합니다.
        modal.style.display = 'block';
      });
        
      cuadroL.addEventListener('click', () => {
        // 모달 창을 표시합니다.
        modal2.style.display = 'block';
      });
      cuadroR.addEventListener('click', () => {
        // 모달 창을 표시합니다.
        modal3.style.display = 'block';
      });
        



      
    // 모달 창 외부를 클릭하면 모달 창을 숨깁니다.
    modal.addEventListener("click", function(event) {
     // 모달 창 내부 컨텐츠가 아닌 곳을 클릭했을 때
     if (event.target === modal) {
      // 검정 반투명 배경과 모달 창을 숨김
      modal.style.display = "none";
    }
  });

     // 모달 창 외부를 클릭하면 모달 창을 숨깁니다.
     modal2.addEventListener("click", function(event) {
        // 모달 창 내부 컨텐츠가 아닌 곳을 클릭했을 때
        if (event.target === modal2) {
         // 검정 반투명 배경과 모달 창을 숨김
         modal2.style.display = "none";
       }
     });
   


      // 모달 창 외부를 클릭하면 모달 창을 숨깁니다.
      modal3.addEventListener("click", function(event) {
        // 모달 창 내부 컨텐츠가 아닌 곳을 클릭했을 때
        if (event.target === modal3) {
         // 검정 반투명 배경과 모달 창을 숨김
         modal3.style.display = "none";
       }
     });
   
      

                }
    















