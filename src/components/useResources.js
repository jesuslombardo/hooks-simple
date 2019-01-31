import { useState, useEffect} from 'react';
import axios from 'axios';

const useResources = (resource) => {
    const [resources, setResources] = useState([]);

    //si [resource] cambia, ejecuta la arrow function, por eso si cliqueas varias vees el mismo boton no hace de nuevo la peticion
    //usamos funciones que se definen y se ejecutan function(){lalalla}()
    useEffect(
        () => {
        (async resource => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
            setResources(response.data);
        }        
        )(resource);
    }, [resource]
    );
    return resources;
}

export default useResources;