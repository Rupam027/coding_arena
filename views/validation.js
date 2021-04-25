function checkname() {
        nameexp = /^[a-zA-Z ]{3,10}$/;
        custname = document.getElementById("name").value;
        if (nameexp.test(custname)) {
            document.getElementById('nameerrormessage').style.visibility = 'hidden';
            }
        else {
            document.getElementById('nameerrormessage').style.visibility = 'visible';
			document.getElementById('nameerrormessage').innerText = "Enter Valid Name";
			
	   }
	}

function checkcontact() {
        mobnoexp = /\d{10}$/;
		custmobno = document.getElementById("contact").value;
        if (mobnoexp.test(custmobno)) {
            document.getElementById('mobnoerrormessage').style.visibility = 'hidden';
        }
        else {
            document.getElementById('mobnoerrormessage').style.visibility = 'visible';
            document.getElementById('mobnoerrormessage').innerText = "Enter Valid Contact No";
        }
	}

function checkemail() {
        emailexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

        custemail = document.getElementById("email").value;
        if (emailexp.test(custemail)) {
            document.getElementById('emailerrormessage').style.visibility = 'hidden';
        }
        else {
            document.getElementById('emailerrormessage').style.visibility = 'visible';
            document.getElementById('emailerrormessage').innerText = "Enter Valid Email ID";
        }
    }

function checkpassword() {
		passwordexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{4,8}$/;

        custpassword = document.getElementById("pwd").value;
		if (passwordexp.test(custpassword)) {
            document.getElementById('passerrormessage').style.visibility = 'hidden';
        }
        else {
            document.getElementById('passerrormessage').style.visibility = 'visible';
            document.getElementById('passerrormessage').innerText = "Enter Valid Password";
        }
    }
	
function clearname()
{
	document.getElementById("name").style.background = 'White';
	document.getElementById('nameerrormessage').style.visibility = 'hidden';
	
}

function clearemail()
{
	document.getElementById("email").style.background = 'White';
	document.getElementById('emailerrormessage').style.visibility = 'hidden';
	
}

function clearcontact()
{
	document.getElementById("contact").style.background = 'White';
	document.getElementById('mobnoerrormessage').style.visibility = 'hidden';
	
}


