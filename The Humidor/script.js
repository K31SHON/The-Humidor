function myFunction(x){
    x.classList.toggle("close");
}
function slide(x){
    if(x.classList.contains("close")){
        x.classList.remove("close");
        document.getElementById("mySidenav").style.width="250px";
        document.getElementsByClassName("logopic").style.transition="0.4s";
        document.getElementById("logo").style.transition="0.4s";
    }else{
        document.getElementById("mySidenav").style.width="0";
        document.getElementsByClassName("logopic").style.transition="0.4s";
        document.getElementById("logo").style.transition="0.4s";
        }
    }