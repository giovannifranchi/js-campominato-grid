CAMPO MINATO LOGICA


------------
//Si crea una funzione che generi elementi html
//Si assegnano alla funzione tre 5 parametri(tipo di elemento, classe da assegnare, qunatità di elementi, valore del suo indice, contenitore)
    //Dentro la funzione si crea variabile fragment = document.createDocumentFragment()
    //Si crea variabile di container = document.querySelector(contenitore)
    //Si inizia un ciclo for che parte da uno e arriva a quantità
        //Dentro ciclo si dichiara variabile element = document.createElement(tipo di elemento)
        //Si aggiunge a element la classe determinata da classe da assegnare
        //Si dice che l'innerText dell'elemento è uguale a i
        //Si appende al fragment l'elemento
    //Si appende al container fragment