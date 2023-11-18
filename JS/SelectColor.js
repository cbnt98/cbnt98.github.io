function SelectTheme(i){
    var col = "black";
    var pass = "0.JPG";
    var vlinkcol = "midiumpurple";
    switch(i){
        case 0:
            col = "black";
            vlinkcol = "midiumpurple";
            pass = "3.JPG";
            break;
        case 1:
            col = "gray";
            vlinkcol = "darksalmon";
            pass = "1.JPG";
            break;
        case 2:
            col = "red";
            vlinkcol = "black";
            pass = "2.JPG";
            break;
    }
    
    document.write(`
    <style>
    body{
        background-image: url(BGImg/`+pass+`);
        background-size:cover;
        background-attachment: fixed;
        background-position: right;
        min-width: 100vw;
        color:`+col+`;
        
    }
    a:visited {
        color:`+vlinkcol+`;
      }
    </style>`);

}