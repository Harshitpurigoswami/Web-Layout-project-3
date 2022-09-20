function fun()
{
var nav=document.getElementById('nav');
var bar=document.getElementById('bar');
var check=document.getElementById('barclick').checked;
	if(check==true)
	{	
		document.getElementById('header').style.height="355px";
		nav.style.display="block"
	}
	else if(check==false){
		document.getElementById('header').style.height="75px";
		nav.style.display="none"

	}
}