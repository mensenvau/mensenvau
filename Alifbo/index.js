let d=document.getElementById('io');
let d2=document.getElementById('io2');
let l1=new Date();
let  s1;
function button()
{
 d.style.display='flex';
 d2.style.display='none';
 s1=(l1.getSeconds()+6)%60;
// console.log(s1,l1);
}

let alf=['Q','W','E','R','T','Y','U','I','O','P','A','S','F','D','G','H','J','K','L','Z','X','C','V','B','N','M'];
let p=document.getElementById('k');
let s=0;
let f=document.getElementById('f');
function biz(e)
{
    s1=l1.getSeconds()+6;

    if(e===p.innerHTML)
    {
    f.innerHTML+=e;
     p.innerHTML=alf[Math.floor(Math.random() * 26)];
     s++; 
     }
    else { 
        window.alert(s+" Ta to'gri natija "); s=0;
        d.style.display='none';
        d2.style.display='flex';
        f.innerHTML="";
        s1=undefined;
 }

}
 var id = setInterval(frame, 500);
  function frame() {
       l1=new Date();
       let s2=l1.getSeconds();
       if(s2===s1) {
        window.alert(s+" Ta to'gri natija "); s=0;
        d.style.display='none';
        d2.style.display='flex';
        f.innerHTML="";
        s1=undefined;
 }
    
    }