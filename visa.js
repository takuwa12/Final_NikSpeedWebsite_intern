function cardspace(){
    var carddigit = document.getElementById('cardno').value;
    if(carddigit.length == 4 || carddigit.length == 9 || carddigit.length == 14){
        document.getElementById('cardno').value = carddigit+" ";
        document.getElementById('cardno').max = 1;
    }
}

function addslashes(){
    var expiredate = document.getElementById('validtil').value;
    if(expiredate.length == 2){
        document.getElementById('validtil').value = expiredate+" ";
        document.getElementById('validtil').max = 1;
    }
}