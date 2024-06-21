// function topFunction() {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
// }
function validation()
{
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


    if(document.getElementById("name").value=="")
    {
        
        document.getElementById("name").style.borderColor = 'red';
    }
    else if(document.getElementById("mail").value=="")
    {
        
        document.getElementById("name").style.borderColor = 'black';

        document.getElementById("mail").style.borderColor = 'red';
        
    }
    else if(!(document.getElementById("mail").value.match(validRegex)))
    {
        document.getElementById("mail").style.borderColor = 'black';
        document.getElementById("invalid").innerHTML='Invalid mail';
    }
    else if(document.getElementById("mobileno").value=="")
    {
        document.getElementById("invalid").style.display='none';
        document.getElementById("mobileno").style.borderColor = 'red';
    }
    else if(document.getElementById("mobileno").value>='a' && document.getElementById("mobileno").value<='z')
    {
        document.getElementById("mobileno").style.borderColor = 'black';
        document.getElementById("no").innerHTML='must be a number';
    }
    else if(document.getElementById("mobileno").value.length!=10)
    {
        document.getElementById('no').style.display='none';
        document.getElementById('validno').innerHTML='invalid number';
    }
    else if(document.getElementById("message").value=="")
    {
        document.getElementById('validno').style.display='none';
        document.getElementById('message').style.borderColor='red';
    }
    else{
        document.getElementById('message').style.borderColor='black';
        alert("submited");
        document.getElementById("name").value="";
        document.getElementById("mail").value="";
        document.getElementById("mobileno").value="";
        document.getElementById("message").value="";
        }
}

