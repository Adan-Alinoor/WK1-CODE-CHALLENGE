
function calculateGrade(mark) { 
    if(mark > 100 || mark < 0 ) {
    return "invalid mark"
}
   else if (mark > 79) {
        return 'A';
    } else if (mark >= 60 && mark <= 79) {
        return 'B';
    } else if (mark >= 49 && mark <= 59) {
        return 'C';
    } else if (mark >= 40 && mark <= 49) {
        return 'D';
    } else {
        return 'E';
    }
}

 console.log(calculateGrade());