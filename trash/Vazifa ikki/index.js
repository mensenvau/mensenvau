function men()
{
    let m=document.forms['form']['email'].value;
    let n=document.forms['form']['parol'].value;
    if(m=='') alert("Email maydoni bo'sht");
    else 
    if(n=='') alert("Parol maydoni bo'sht");
    else 
    {
    alert("Salom ,Sizning \nEmail: "+m+"\nParolingiz: "+n);
    // if(m==="abduzoir@gmail.com") alert('shoshuk');
}
}