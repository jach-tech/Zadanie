var zdj=1
function Psy(){
	document.getElementById('kontener-glowny').style.display="block";
}

function prev1()
{
		zdj-=1
	switch(zdj)
	{
		case 1:
		{	
			var tekst="BAYER Foresto Obroża dla kotów i psów poniżej 8kg + NIESPODZIANKA DLA PSA GRATIS !!";
			var cena="93.97 zł";
			document.getElementById('zdjecie').src='zdjecia/promocja1.png';
			document.getElementById('tekst').innerHTML=tekst;
			document.getElementById('cena_wazna').innerHTML=cena;
			
			break;
		}
		case 2:
		{
			var tekst="Karma Premium Hektor baton dla psa z wołowiną/ z drobiem 30x900g!<br><br>";
			var cena="122.20 zł";
			document.getElementById('zdjecie').src='zdjecia/promocja2.png';
			document.getElementById('tekst').innerHTML=tekst;
			document.getElementById('cena_wazna').innerHTML="93.97 zł";
			break;
		}
		case 3:
		{
			var tekst="PEDIGREE DentaStix (małe rasy) przysmak dentystyczny dla psów 56 szt. - 110g + Notes GRATIS";
			var cena="55.20 zł";
			document.getElementById('zdjecie').src='zdjecia/promocja3.png';
			document.getElementById('tekst').innerHTML=tekst;
			document.getElementById('cena_wazna').innerHTML=cena;
			break;
		}
		case 4:
		{
			var tekst="Green Paw Vitamin Sea 300ml - Olej z łososia norweskiego + Masło orzechowe z CBD dla psów 350g (Human Grade)";
			var cena="94.98 zł";
			document.getElementById('zdjecie').src='zdjecia/promocja4.png';
			document.getElementById('tekst').innerHTML=tekst;
			document.getElementById('cena_wazna').innerHTML=cena;
			break;
		}
		case 5:
		{
			var tekst="Paka Zwierzaka - Seventh heaven - Indyk z jagnięciną (turkey & lamb) 6 x 400g + BATON GRATIS !!!";
			var cena="56,60 zł";
			document.getElementById('zdjecie').src='zdjecia/promocja5.png';
			document.getElementById('tekst').innerHTML=tekst;
			document.getElementById('cena_wazna').innerHTML=cena;
			break;
		}
		case 6:
		{
			var tekst="NATURES PROTECTION Care Grain Free White Fish Adult Small Breeds 1,5kg + Dental Snack White Dogs 50g";
			var cena="56,90 zł";
			document.getElementById('zdjecie').src='zdjecia/promocja6.png';
			document.getElementById('tekst').innerHTML=tekst;
			document.getElementById('cena_wazna').innerHTML=cena;
			break;
		}
		default:
		{
			window.alert('Nie ma wczesniejszych zdjec');
			zdj=1;
		}
	}
}
function next1()
{
	zdj+=1
	switch(zdj)
	{
		case 1:
		{
			var tekst="BAYER Foresto Obroża dla kotów i psów poniżej 8kg + NIESPODZIANKA DLA PSA GRATIS !!";
			var cena="93.97 zł";
			document.getElementById('zdjecie').src='zdjecia/promocja1.png';
			document.getElementById('tekst').innerHTML=tekst;
			document.getElementById('cena_wazna').innerHTML=cena;
			break;
		}
		case 2:
		{
			var tekst="Karma Premium Hektor baton dla psa z wołowiną/ z drobiem 30x900g!<br><br>";
			var cena="122.20 zł";
			document.getElementById('zdjecie').src='zdjecia/promocja2.png';
			document.getElementById('tekst').innerHTML=tekst;
			document.getElementById('cena_wazna').innerHTML=cena;
			break;
		}
		case 3:
		{
			var tekst="PEDIGREE DentaStix (małe rasy) przysmak dentystyczny dla psów 56 szt. - 110g + Notes GRATIS";
			var cena="55.20 zł";
			document.getElementById('zdjecie').src='zdjecia/promocja3.png';
			document.getElementById('tekst').innerHTML=tekst;
			document.getElementById('cena_wazna').innerHTML=cena;
			break;
		}
		case 4:
		{
			var tekst="Green Paw Vitamin Sea 300ml - Olej z łososia norweskiego + Masło orzechowe z CBD dla psów 350g (Human Grade)";
			var cena="94.98 zł";
			document.getElementById('zdjecie').src='zdjecia/promocja4.png';
			document.getElementById('tekst').innerHTML=tekst;
			document.getElementById('cena_wazna').innerHTML=cena;
			break;
		}
		case 5:
		{
			var tekst="Paka Zwierzaka - Seventh heaven - Indyk z jagnięciną (turkey & lamb) 6 x 400g + BATON GRATIS !!!";
			var cena="56,60 zł";
			document.getElementById('zdjecie').src='zdjecia/promocja5.png';
			document.getElementById('tekst').innerHTML="Paka Zwierzaka - Seventh heaven - Indyk z jagnięciną (turkey & lamb) 6 x 400g + BATON GRATIS !!!";
			document.getElementById('cena_wazna').innerHTML="56,60 zł";
			break;
		}
		case 6:
		{
			var tekst="NATURES PROTECTION Care Grain Free White Fish Adult Small Breeds 1,5kg + Dental Snack White Dogs 50g";
			var cena="56,90 zł";
			document.getElementById('zdjecie').src='zdjecia/promocja6.png';
			document.getElementById('tekst').innerHTML=tekst;
			document.getElementById('cena_wazna').innerHTML=cena;
			break;
		}
		default:
		{
			window.alert('Nie ma dalszych zdjec');
			zdj=6;
		}
	}
}


function Polecane(){
	document.getElementById('kontener-polecane1').style.display="block";
	document.getElementById('kontener_karma_dla_psow1').style.display="none";
	document.getElementById('Zabawki_dla_psow_kontener1').style.display="none";
	document.getElementById('menu21').style.color="#32b97e";
	document.getElementById('menu22').style.color="black";
	document.getElementById('menu23').style.color="black";
}

function Karma_dla_psow(){
	document.getElementById('kontener-polecane1').style.display="none";
	document.getElementById('kontener_karma_dla_psow1').style.display="block";
	document.getElementById('Zabawki_dla_psow_kontener1').style.display="none";
	document.getElementById('menu21').style.color="black";
	document.getElementById('menu22').style.color="#32b97e";
	document.getElementById('menu23').style.color="black";
}

function Zabawki_dla_psow(){
	document.getElementById('kontener-polecane1').style.display="none";
	document.getElementById('kontener_karma_dla_psow1').style.display="none";
	document.getElementById('Zabawki_dla_psow_kontener1').style.display="block";
	document.getElementById('menu21').style.color="black";
	document.getElementById('menu22').style.color="black";
	document.getElementById('menu23').style.color="#32b97e";
}

function prev2()
{
		zdj-=1
	switch(zdj)
	{
		case 1:
		{
			var tekst="BAYER Foresto Obroża dla kotów i psów poniżej 8kg + NIESPODZIANKA DLA PSA GRATIS !!";
			var cena="93.97 zł";
			document.getElementById('zdjecie1').src='zdjecia/promocja1.png';
			document.getElementById('tekst1').innerHTML=tekst;
			document.getElementById('cena_wazna1').innerHTML=cena;
			
			var tekst="Karma Premium Hektor baton dla psa z wołowiną/ z drobiem 30x900g!<br><br>";
			var cena="122.20 zł";
			document.getElementById('zdjecie2').src='zdjecia/promocja2.png';
			document.getElementById('tekst2').innerHTML=tekst;
			document.getElementById('cena_wazna2').innerHTML=cena;
			
			var tekst="PEDIGREE DentaStix (małe rasy) przysmak dentystyczny dla psów 56 szt. - 110g + Notes GRATIS";
			var cena="55.20 zł";
			document.getElementById('zdjecie3').src='zdjecia/promocja3.png';
			document.getElementById('tekst3').innerHTML=tekst;
			document.getElementById('cena_wazna3').innerHTML=cena;
			break;
		}
		case 2:
		{
			var tekst="Green Paw Vitamin Sea 300ml - Olej z łososia norweskiego + Masło orzechowe z CBD dla psów 350g (Human Grade)";
			var cena="94.98 zł";
			document.getElementById('zdjecie1').src='zdjecia/promocja4.png';
			document.getElementById('tekst1').innerHTML=tekst;
			document.getElementById('cena_wazna1').innerHTML=cena;
			
			var tekst="Paka Zwierzaka - Seventh heaven - Indyk z jagnięciną (turkey & lamb) 6 x 400g + BATON GRATIS !!!";
			var cena="56,60 zł";
			document.getElementById('zdjecie2').src='zdjecia/promocja5.png';
			document.getElementById('tekst2').innerHTML=tekst;
			document.getElementById('cena_wazna2').innerHTML=cena;
			
			var tekst="NATURES PROTECTION Care Grain Free White Fish Adult Small Breeds 1,5kg + Dental Snack White Dogs 50g";
			var cena="56,90 zł";
			document.getElementById('zdjecie3').src='zdjecia/promocja6.png';
			document.getElementById('tekst3').innerHTML=tekst;
			document.getElementById('cena_wazna3').innerHTML=cena;
			break;
		}
		default:
		{
			window.alert('Nie ma wczesniejszych zdjec');
			zdj=1;
		}
	}
}
function next2()
{
	zdj+=1
	switch(zdj)
	{
		case 1:
		{
			var tekst="BAYER Foresto Obroża dla kotów i psów poniżej 8kg + NIESPODZIANKA DLA PSA GRATIS !!";
			var cena="93.97 zł";
			document.getElementById('zdjecie1').src='zdjecia/promocja1.png';
			document.getElementById('tekst1').innerHTML=tekst;
			document.getElementById('cena_wazna1').innerHTML=cena;
			
			var tekst="BAYER Foresto Obroża dla kotów i psów poniżej 8kg + NIESPODZIANKA DLA PSA GRATIS !!";
			var cena="93.97 zł";
			document.getElementById('zdjecie2').src='zdjecia/promocja2.png';
			document.getElementById('tekst2').innerHTML=tekst;
			document.getElementById('cena_wazna2').innerHTML=cena;
			
			var tekst="PEDIGREE DentaStix (małe rasy) przysmak dentystyczny dla psów 56 szt. - 110g + Notes GRATIS";
			var cena="55.20 zł";
			document.getElementById('zdjecie3').src='zdjecia/promocja3.png';
			document.getElementById('tekst3').innerHTML=tekst;
			document.getElementById('cena_wazna3').innerHTML=cena;
			break;
		}
		case 2:
		{
			var tekst="Green Paw Vitamin Sea 300ml - Olej z łososia norweskiego + Masło orzechowe z CBD dla psów 350g (Human Grade)";
			var cena="94.98 zł";
			document.getElementById('zdjecie1').src='zdjecia/promocja4.png';
			document.getElementById('tekst1').innerHTML=tekst;
			document.getElementById('cena_wazna1').innerHTML=cena;
			
			var tekst="Paka Zwierzaka - Seventh heaven - Indyk z jagnięciną (turkey & lamb) 6 x 400g + BATON GRATIS !!!";
			var cena="56,60 zł";
			document.getElementById('zdjecie2').src='zdjecia/promocja5.png';
			document.getElementById('tekst2').innerHTML=tekst;
			document.getElementById('cena_wazna2').innerHTML=cena;
			
			var tekst="NATURES PROTECTION Care Grain Free White Fish Adult Small Breeds 1,5kg + Dental Snack White Dogs 50g";
			var cena="56,90 zł";
			document.getElementById('zdjecie3').src='zdjecia/promocja6.png';
			document.getElementById('tekst3').innerHTML=tekst;
			document.getElementById('cena_wazna3').innerHTML=cena;
			break;
		}
		default:
		{
			window.alert('Nie ma dalszych zdjec');
			zdj=2;
		}
	}
}