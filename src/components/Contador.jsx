import React, { useState }  from "react";

const Contador = () => {

    const [contador, setContador] = useState(0);

    return <div>
        <p>Valor actual del contador:  {contador} veces</p>
        <button onClick={() => setContador( contador + 1 )}> Aumentar</button>
        <button onClick={() => setContador( contador - 1 )}>Disminuir</button>
        <button onClick={() => setContador(0)}> Reestablecer</button>
    </div>
}

export default Contador;