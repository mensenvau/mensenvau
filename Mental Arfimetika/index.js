var  p=document.getElementById('men');
var  q=document.getElementById('sen');
var  ish=['-','+'];
var k=10;
let vek=0;
function nat()
{
    p.style.display = 'none';
    q.style.display ='block';
    id=setInterval(men,500);
}
function men()
{
   if(k==0)
   {
       console.log(vek);
      clearInterval(id);
   }
   else
    {
        son=ish[Math.floor(Math.random() * 2)]+Math.floor(Math.random() * 20);
        vek=vek+son;
        q.innerHTML=son;
        console.log(k);
        k=k-1;
    }
}
