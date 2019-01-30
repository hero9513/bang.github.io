var user = prompt("剪刀?石頭?布?");
var computer = Math.random();
if (computer < 0.33){
    computer="剪刀";
}
else if (computer <= 0.67){
    computer="石頭";
}
else {
    computer="布";
}

alert("電腦出"+computer);

    if (user==computer){
        alert("平手!!");
}
    else if (computer=="剪刀"){
        if (user=="石頭"){
            alert("玩家勝利!!");
    }
        else if(user=="布"){
            alert("電腦勝利!!");
    }
}
    if (computer=="石頭"){
        if (user=="布"){
            alert("玩家勝利!!");
    }
        else if(user=="剪刀"){
            alert("電腦勝利!!");
    }
}
    if (computer=="布"){
        if (user=="剪刀"){
            alert("玩家勝利!!");
    }
        else if(user=="石頭"){
            alert("電腦勝利!!");
    }
}