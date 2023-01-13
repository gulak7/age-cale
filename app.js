//variable for datepicker

var datePicker = document.getElementById('datePicker');
var choseDate = document.getElementById('choseDate');


//variable for printting values

var ageYear  = document.getElementById('ageYear');
var ageMonth = document.getElementById('ageMonth');
var ageDays = document.getElementById('ageDays');
var ageHours = document.getElementById('ageHours');
var ageSeconds = document.getElementById('ageSeconds');
var ageMiliSecond = document.getElementById('ageMiliSecond');



// bangi varakan dakain 


datePicker.addEventListener('change', function(){
    
    // 26 september 2022
    var options = {year: 'numeric' , month:'long', day:'numeric' };
    var selecteDate = new Date(this.value);
    var DOB = selecteDate.toLocaleDateString('en', options); // en wata ba englizi bnusa 'ar' arabi

   // console.log("DOB IS : " + DOB); [bas bo test]


   choseDate.innerHTML ="DOB: " + " " + DOB;



   // zhmarai sal u mang u ruzhakan
   var MiliSeconds_Btw_DOB = Date.parse(DOB);
   var MiliSeconds_Btw_Now = Date.now();

  
   var age_in_MiliSeconds = MiliSeconds_Btw_Now - MiliSeconds_Btw_DOB;

  // console.log(age_in_MiliSeconds);  bo test labashi console log dardakawet

    var miliSeconds = age_in_MiliSeconds;
    var second = 1000;
    var minute = second*60;
    var hour =  minute*60;
    var day = hour * 24;
    var mounth = day*30;
    var year = day *365;



    // now start the calculation

    var years = Math.round(miliSeconds/year);
    var months = years*12;
    var days = years*365;
    var hours = Math.round(miliSeconds/hour);
    var seconds = Math.round(miliSeconds/second);

    
    // now it is time to print values in boxes
    
    ageYear.innerHTML =  years;
    ageMonth.innerHTML = months;
    ageDays.innerHTML = days;
    ageHours.innerHTML = hours;
    ageSeconds.innerHTML = seconds;
    ageMiliSecond.innerHTML = miliSeconds ;

    
//esta clasi age-calc expand remove bka kai bakari beni awkat dardakawet

     document.querySelector('.age-calc').classList.add('expand');
     // bam rstaia katek barwar diari dakai salu shtakan dardakawit

})