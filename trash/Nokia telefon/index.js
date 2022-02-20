var k=1;
id=setInterval(fram,500);
function fram()
{
let s=new Date();
let soat=s.getHours(); if(soat<10) soat="0"+soat;
let minut=s.getMinutes(); if(minut<10) minut="0"+minut;
let sek=s.getSeconds(); if(sek<10) sek="0"+sek;

let p=document.getElementById('men');
if(p.innerHTML!==soat+":"+minut+":"+sek) 
{
     p.innerHTML=soat+":"+minut+":"+sek; 
}

}
function men(e)
{
    let p=document.getElementById("nokia");
    // p.innerHTML=e.innerHTML;
    if(e.innerHTML=="F" ) {if(p.innerHTML!=="Nokia") p.innerHTML="Nokia";}
    else
    if(e.innerHTML=="W")  p.innerHTML="Zvanok:<br><b>"+p.innerHTML+"</b>";
    else
    if(e.innerHTML=="OK") 
     {
        if(p.innerHTML!=="Nokia")  p.innerHTML=p.innerHTML;
        else
        {
            if(k==1) {document.getElementById("header").style.background="#FFF"; k=2;}
            else {document.getElementById("header").style.background="#ccc"; k=1;}
        }
     }
    else
    if(e.innerHTML=="---")
    {
       let d=p.innerHTML;
       d=d.substring(0,d.length-1,);
       p.innerHTML=d;
    }
    else
    if(e.innerHTML=="*")
    {
        if(p.innerHTML=="Nokia")  p.innerHTML="";

        let d=p.innerHTML;
        q=d[d.length-1];
        d=d.substring(0,d.length-1);
       if(q=='*')  p.innerHTML=d+"+"; 
       else  
       if(q=='+')  p.innerHTML=d+"*"; 
       else p.innerHTML+="+";
       console.log(q);
    }
    else    
    {
        if(p.innerHTML=="Nokia")  p.innerHTML="";
       p.innerHTML+=e.innerHTML;
    }

}

