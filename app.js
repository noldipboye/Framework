function OnN() {
    document.getElementById("dropdown_items").style.display="block";
    document.getElementById("dropdown_button").style.display="none";
    document.getElementById("dropdown_button2").style.display="block";
    document.getElementById("dropdown_button2").style.display="flex";
}

function OffN() {
    document.getElementById("dropdown_items").style.display="none";
    document.getElementById("dropdown_button").style.display="block";
    document.getElementById("dropdown_button2").style.display="none";
    document.getElementById("dropdown_button").style.display="flex";
    
}

function Off() {
    document.getElementById("Accept").style.display="block";
    document.getElementById("Modal-Body").style.display="none";
    document.getElementById("Decline").style.display="none";
}

function On() {
    document.getElementById("Decline").style.display="block";
    document.getElementById("Modal-Body").style.display="block";
    document.getElementById("Accept").style.display="none";

}