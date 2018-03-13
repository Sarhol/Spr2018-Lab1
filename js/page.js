<script>
function ValidateForm()
{
	var Fname = document.SignUp.FirstName;
    var email = document.SignUp.email;
    var Lname = document.SignUp.LastName;

if (FirstName.value == "")
{
    window.alert("Please enter your name.");
    name.focus();
    return false;
}
if (LastName.value == "")
{
    window.alert("Please enter your name.");
    name.focus();
    return false;
}

if (email.value == "")
{
    window.alert("Please enter a valid e-mail address.");
    email.focus();
    return false;
}

if (email.value.indexOf("@", 0) < 0)
{
    window.alert("Please enter a valid e-mail address.");
    email.focus();
    return false;
}

if (email.value.indexOf(".", 0) < 0)
{
    window.alert("Please enter a valid e-mail address.");
    email.focus();
    return false;
}

return true;
}
</script>
