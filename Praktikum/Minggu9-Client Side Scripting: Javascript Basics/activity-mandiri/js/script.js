function fn_ValForm()
{
    var sMsg = "";
    var email = document.getElementById("email").value;
    var emailRegex = new RegExp("^[a-z0-9_\\-]+(\\.[a-z0-9_\\-]+)*@[a-z0-9_\\-]+(\\.[a-z0-9_\\-]+)*(\\.[a-z]{2,4})$", "i"); 

    if (document.getElementById("name").value == "")
        {
        sMsg += "\n* Anda belum mengisikan nama";
        }

    if (email == "")
        {
        sMsg += "\n* Anda belum mengisikan email";
        }
        else if (!emailRegex.test(email))
        {
        sMsg += "\n* Format email tidak valid";
        }

    if (document.getElementById("message").value == "")
        {
        sMsg += "\n* Anda belum mengisikan pesan";
        }

    if (sMsg != "")
        {
        alert("Peringatan:\n" + sMsg);
        return false;
        }
        else
        {
        return true;
        }
}