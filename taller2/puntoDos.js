
function recibirPlanos(n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, callback){
    //PROCESO DE LA FUNCION PRINCIPAL
    setTimeout(function(){
        let planos=[n1, n2, n3, n4, n5, n6, n7, n8, n9, n10]
        let planosFiltrados = planos.filter(function(plano){
                return(plano>=1 && plano <= 10)

        })

        callback(planosFiltrados)

    },0)

}
recibirPlanos(10,5,9,80,70,50,30,400,5,10, function(planosFiltrados){
    if (planosFiltrados.length>0){
        console.log("pueden despegar, hay " + planosFiltrados.length + 
        " planos verdades.")
    }

    else{
        console.log("devuelvete aun hay : " + planosFiltrados.length + "planos filtrados")
    }
})


