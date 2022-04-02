let sables = [
    {color:"verde",energia:50,portador:"ana"},
    {color:"amarillo",energia:10,portador:"maria"},
    {color:"azul",energia:17,portador:"juanita"},
    {color:"verde",energia:30,portador:"sandra"},
    {color:"verde",energia:19,portador:"Sebastian"},
    {color:"verde",energia:20,portador:"juan"},
    {color:"verde",energia:11,portador:"carmona"},
    {color:"verde",energia:13,portador:"morado"},
    {color:"verde",energia:25,portador:"alverto"},
    {color:"verde",energia:50,portador:"rulitos"},
    {color:"verde",energia:60,portador:"Ron"},
    {color:"verde",energia:70,portador:"aguardiente"},
    {color:"verde",energia:1,portador:"fabio"},
    {color:"verde",energia:2,portador:"leonardo"},
    {color:"verde",energia:5,portador:"camilo"},
    {color:"verde",energia:22,portador:"eva"},
    {color:"verde",energia:43,portador:"adan"},
    {color:"verde",energia:90,portador:"jesus"},
    {color:"verde",energia:21,portador:"jose"},
    {color:"verde",energia:9,portador:"lucifer"},
    {color:"verde",energia:50,portador:"andres"}

]
let filtrado=sables.filter(function(sable){
    return(sable.energia<=19)

})
console.log(filtrado)
