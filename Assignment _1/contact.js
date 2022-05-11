function myfunction()
{
    alert("Ok")
}
function validate()
{
    var letter=/^[A-Za-z]+$/;
    var name=document.getElementById(name).value;
    if(name.match(letters))
    {
        alert("valid name");
        return true;
    }
    else
    {
        alert("inavlid name");
        return false;
    }
}