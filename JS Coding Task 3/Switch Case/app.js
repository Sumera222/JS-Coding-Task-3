function myFunction(){
    var percentage = prompt("Enter your Percentage");
    pass = parseFloat(percentage);

    if(pass > 85) {
        Grade = 'A';
    }
    else if (pass > 80 && pass <=85) {
        Grade = 'A-';
    }
    else if (pass > 70 && pass <=80) {
        Grade = 'B';
    }
    else if (pass > 60 && pass <=70) {
        Grade = 'C';
    }
    else if (pass > 40 && pass <=60) {
        Grade = 'D';
    }
    else if (pass <= 40 && pass <=35) {
        Grade = 'E';
    }
    else
    {"It is failed"}

    switch(Grade) {
      case "A":
      console.log(Grade)
      break;
      case "A-":
      console.log(Grade)
      break;
      case "B":
      console.log(Grade)
      break;
      case "C":
      console.log(Grade)
      break;
      case "D":
      console.log(Grade) 
      break;
      case "E":
      console.log(Grade)     
      break;
      default:
      console.log ('it is failed')
    }
}
