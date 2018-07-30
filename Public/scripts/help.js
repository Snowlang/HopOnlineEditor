

function loadHelp() {
    var helpArea = document.getElementById('help-area');

    var result = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "https://raw.githubusercontent.com/OMTS/Hop/develop/Docs/LanguageReference.md", false);
    xmlhttp.send();

    if (xmlhttp.status==200) {
        result = xmlhttp.responseText;
        var md = new Remarkable();
        helpArea.innerHTML = md.render(xmlhttp.responseText);
    }
    return result;
}


