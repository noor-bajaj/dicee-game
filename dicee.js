var a =Math.random()*6+1;
a=Math.floor(a);
var b =Math.random()*6+1;
b=Math.floor(b);

imagenumber1=a;
imagenumber2=b;
imagenumber1="images/dice"+imagenumber1+".png";
imagenumber2="images/dice"+imagenumber2+".png";
document.querySelectorAll("img")[0].setAttribute("src",imagenumber1);
document.querySelectorAll("img")[1].setAttribute("src",imagenumber2);
if (a>b)
{
  document.querySelector("h1").innerHTML="Player 1 wins!";
}
else if (b>a)
{
  document.querySelector("h1").innerHTML="Player 2 wins!";
}
else
{
  document.querySelector("h1").innerHTML="It's a tie!";
}
