var user = prompt("please enter time in 0000 to 2359 format" , "where 1300 = 1pm etc");

if(user >= 0000 && user <= 1200){
    alert("Good Morning");
}

else if(user >= 1200 && user <= 1700){
    alert("Good afternoon");
}

else if(user >= 1700 && user <= 2100){
    alert("Good evening");
}

else if(user >= 2100 && user <= 2359){
    alert("Good night");
}