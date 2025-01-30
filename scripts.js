function kuldes() {
    let nev = document.getElementById("name").value;
    let eletkor = document.getElementById("years").value;
    let email = document.getElementById("email").value;
    let jegyek = document.getElementById("tickets").value;
    let szallasEtel = document.adatok.etelSzallas.value;
    let hibaUzenetek = "";

    if (nev === "") {
        hibaUzenetek += "A név megadása kötelező!<br>";
    }
    
    if (eletkor === "" || isNaN(eletkor)) {
        hibaUzenetek += "Az életkor megadása kötelező!<br>";
    } else if (parseInt(eletkor) < 18) {
        hibaUzenetek += "Csak 18 év felettiek vehetnek részt a konferencián!<br>";
    }
    
    if (email === "") {
        hibaUzenetek += "Az e-mail cím megadása kötelező!<br>";
    }
    
    if (jegyek === "" || isNaN(jegyek)) {
        hibaUzenetek += "A jegyek számának megadása kötelező!<br>";
    }
    
    let hibaSzekció = document.getElementById("errorContainer");
    if (!hibaSzekció) {
        hibaSzekció = document.createElement("p");
        hibaSzekció.id = "errorContainer";
        document.forms["adatok"].appendChild(hibaSzekció);
    }
    
    hibaSzekció.innerHTML = hibaUzenetek;
    hibaSzekció.style.color = "red";
}