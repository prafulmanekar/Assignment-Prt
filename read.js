function result() {
    let eng = document.querySelector("#Eng").value;
    let mt = document.querySelector("#mt").value;
    let phy = document.querySelector("phy").value;
    let che = document.querySelector("che").value;
    let com = document.querySelector("com").value;

    let to = parseFloat(eng) + parseFloat(mt) + parseFloat(phy) + parseFloat(che) + parseFloat(com);
    let ave = (to * 100) / 500;
    if(ave >= 90){
        document.querySelector(".gra").innerHTML = "A";
    }else if(ave >= 80){
        document.querySelector(".gra").innerHTML = "B";
    }else if(ave >= 70){
        document.querySelector(".gra").innerHTML = "C";
    }else if(ave >= 60){
        document.querySelector(".gra").innerHTML = "D";
    }else{
        document.querySelector(".gra").innerHTML = "F";
    }

    document.querySelector(".to").innerHTML = to;

    document.querySelector(".ave").innerHTML = ave;

    if(ave > 35){
        document.querySelector(".result h2").innerHTML = "You Are Pass"
    }else{
        document.querySelector(".result h2").innerHTML = "You Are Fail"
    }

}