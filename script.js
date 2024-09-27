//your JS code here. If required.
const counterText=document.getElementById('counter');
const counterBtn=document.getElementById('incrementBtn');
	alert("Current Value: "+0);


let counterValue=0;
counterBtn.addEventListener('click',function(){
	counterValue++;
	alert(`Current Value: ${counterValue}`);
	counterText.textContent=counterValue;
});
