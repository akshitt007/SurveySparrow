function openBox1(){
    document.getElementById("first-box").style.display = "inline-block";
    document.getElementById("img").style.marginTop = "10px";
    document.getElementById("sparrow").style.display = "none";
    document.getElementById("cross").style.display = "block";
    

}





function cross(){
    document.getElementById("first-box").style.display = "none";
    document.getElementById("sparrow").style.display = "inline-block";
    document.getElementById("cross").style.display = "none";
    document.getElementById("img").style.marginTop = "615px";
    document.getElementById("second-box").style.display = "none";

}
function openBox2(){

    document.getElementById("second-box").style.display = "block";
    document.getElementById("first-box").style.display = "none";

}


