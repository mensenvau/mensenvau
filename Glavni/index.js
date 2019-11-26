let p=document.getElementById('men');
let sa=0;
function men()
{
    let yig=document.forms['yig']['yig'];
    let qiz=document.forms['qiz']['qiz'];
   
    if(yig.value=='')
    {
        alert("Yigtni ismi kiritilmadi...");
    }
    else
    if(qiz.value=='')
    {
        alert("Qizni ismi kiritilmadi...");
    }
    else{

     id=setInterval(from,150);

     function from()
     {
         if(sa==20) 
         {
            p.innerHTML="101%";
             clearInterval(id);
         }
           else
           {
               p.innerHTML=(Math.floor(Math.random() * 70)+30)+"%";
               sa++;
           }
     }
    }
}