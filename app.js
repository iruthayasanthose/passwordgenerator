var alertbox = document.querySelector('.alertbox')
		
function getPass() {
    var chsets = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+=-<>:{}[]";
    var alphanum  = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var alphasym = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+=-<>:{}[]";
    var numsym = "0123456789!@#$%^&*()_+=-<>:{}[]";
    var alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "0123456789";
    var symbols = "!@#$%^&*()_+=-<>:{}[]";

    var ralphabets = document.getElementById('alphabets');
    var rnumber = document.getElementById('numbers');
    var rsymbols = document.getElementById('symbols');


    var passlen = document.getElementById("userInput").value;
    var password = "";
    
    if(passlen <= 16 && passlen >= 2){
        if(ralphabets.checked == true && rnumber.checked == true && rsymbols.checked == true){
            for(var i=0 ; i<passlen ; i++)
            {
                var rNum = Math.floor(Math.random() * chsets.length);
                password += chsets.substring(rNum,rNum+1);
            }
        }
        else if(ralphabets.checked == true && rnumber.checked == true && rsymbols.checked != true){
            for(var i=0 ; i<passlen ; i++)
            {
                var rNum = Math.floor(Math.random() * alphanum.length);
                password += alphanum.substring(rNum,rNum+1);
            }
        }
        else if(ralphabets.checked == true && rnumber.checked != true && rsymbols.checked == true){
            for(var i=0 ; i<passlen ; i++)
            {
                var rNum = Math.floor(Math.random() * alphasym.length);
                password += alphasym.substring(rNum,rNum+1);
            }
        }
        else if(ralphabets.checked != true && rnumber.checked == true && rsymbols.checked == true){
            for(var i=0 ; i<passlen ; i++)
            {
                var rNum = Math.floor(Math.random() * numsym.length);
                password += numsym.substring(rNum,rNum+1);
            }
        }
        else if(ralphabets.checked != true && rnumber.checked != true && rsymbols.checked == true){
            for(var i=0 ; i<passlen ; i++)
            {
                var rNum = Math.floor(Math.random() * symbols.length);
                password += symbols.substring(rNum,rNum+1);
            }
        }
        else if(ralphabets.checked != true && rnumber.checked == true && rsymbols.checked != true){
            for(var i=0 ; i<passlen ; i++)
            {
                var rNum = Math.floor(Math.random() * numbers.length);
                password += numbers.substring(rNum,rNum+1);
            }
        }
        else if(ralphabets.checked == true && rnumber.checked != true && rsymbols.checked != true){
            for(var i=0 ; i<passlen ; i++)
            {
                var rNum = Math.floor(Math.random() * alphabets.length);
                password += alphabets.substring(rNum,rNum+1);
            }
        }

        else{
            alert("Dear User,Please select an option.");
        }
    }
    else 
    {
        alert("Your Password is so small! :(");
    }
  document.getElementById("result").value = password ;
    
  alertbox.innerHTML = "Password copied :<br> " + password;
}

function copypass() 
{
    var copypasstext = document.getElementById("result");
    copypasstext.select();
    copypasstext.setSelectionRange(0,9999);
    document.execCommand("copy");
    alertbox.classList.toggle('active');
    setTimeout(function() {
        alertbox.classList.toggle('active');
    },2000)
}

function myFunction() {
    alert("The form was reset");
  }


