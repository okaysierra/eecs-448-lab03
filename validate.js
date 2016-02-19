function validate()
{
  var a = document.getElementById("a").value;
  var b = document.getElementById("b").value;

  if(b !== a)
    {
      alert("The entered passwords don't match. please reenter the passwords");
    }
  else if(a.length<8)
    {
      alert("The password is not long enough. The password needs to be at least 8 characters long");
    }
  else
    {
      alert("the password is acceptable.");
    }
}
