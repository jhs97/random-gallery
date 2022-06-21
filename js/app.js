 // 이미지 변경 함수
const img_url = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg',
    'images/image4.jpg',
    'images/image5.jpg',
    'images/image6.jpg',
];
  
$(function(){

    // 년/월/일
    let d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    let date = d.getDate();
    console.log(year,month,date);

    // html에 날짜 표시하기
    $('.year').html(year);
    $('.month').html(month);
    $('.date').html(date);


  
    function changeBg() {
      // 0 ~ 2 랜덤값 생성(이미지 번호)
      let imgNum = Math.floor(Math.random() * 6)
      console.log(imgNum);
  
      // 이미지 변경
      $('body').css({
        background: `url('images/filter-box.png'),
        url(${img_url[imgNum]})`
      })
    }
  
    // setInterval(함수, 시간ms)
    setInterval(changeBg, 5000);
  
});
  
  // 응용과제: 이미지를 총 6장으로 추가 랜덤 수정 