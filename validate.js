function validate() {
    if(document.myForm.firstName.value==" ")
    {
        alert("Please Enter the name");
        return false;

    }
    return true;
}