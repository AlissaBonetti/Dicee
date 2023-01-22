

    var n1 = Math.random();
    n1= Math.floor((n1*6)+1);
    var imgSource1 = "images/dice"+ n1 +".png";
    document.querySelectorAll("img")[0].setAttribute("src", imgSource1);
    


    var n2 = Math.random();
    n2= Math.floor((n2*6)+1);
    var imgSource2 = "images/dice"+ n2 +".png";
    document.querySelectorAll("img")[1].setAttribute("src", imgSource2);


    if (n1>n2){
        document.querySelector("h1").innerHTML="Player 1 Wins!";
    }
    else if(n1<n2){
        document.querySelector("h1").innerHTML= "Player 2 Wins!";
    }
    else {
        document.querySelector("h1").innerHTML= "It'a Draw!";
    }