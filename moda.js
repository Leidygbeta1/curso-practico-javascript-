const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
  ];
  
  const lista1Count = {};
  
  lista1.map(
    function (elemento) {
      if (lista1Count[elemento]) {
        lista1Count[elemento] += 1;
      } else {
        lista1Count[elemento] = 1;
      }
    }
  );
  
  const lista1Array = Object.entries(lista1Count).sort(
    function (elementoA, elementoB) {
      return elementoA[1] - elementoB[1];
    }
  );
  
  const moda = lista1Array[lista1Array.length - 1];

  //moda con la funcion 

  function calcularModa(lista){
    const listaCount = {};
    lista.map(
        function (elemento){
            if (listaCount[elemento]){
                listaCount[elemento]+=1
            }
            else{
                listaCount[elemento]=1;
            }       
        }
    );
    const listaArray = Object.entries(listaCount).sort( 
        function (valorAcumulado, nuevoValor){
            return valorAcumulado[1] - nuevoValor[1]; 
        }
    );
    const moda = listaArray[listaArray.length - 1];
    return "La moda es: " +moda[0] + " que se repité " + moda[1] + " veces";
} 
