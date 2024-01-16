// A través de mapReduce recuperar el balance global por género.

var map=function(){
    var key = this.gender;
    var values = {sumaSaldo:this.balance, saldo:this.balance};
    emit(key, values);
}

var reduce=function(key, values){
    var sumaSaldo = 0;
    var money = "";
    var money2 = 0;

    for(var i=0; i < values.length; i++){
        money = values[i].saldo;
        money = money.replace("$","");
        money = money.replace(",","");
        // sumaSaldo += money2;
    }
    
    return sumaSaldo;
}

db.people.mapReduce(map, reduce,{out: { inline: 1 }});





