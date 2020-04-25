import React, {useState} from 'react';
import Error from './Error';
import PropTypes from 'prop-types'

const Formulario = ({search, setSearch, setConsult}) => {

    
    const {ciudad , pais} = search;
    const [error, setError]= useState(false);

    

    const handleChange= e =>{
        setSearch({
            ...search,
            [e.target.name]: e.target.value    
        })
    };

    const handleSubmit = e =>{
        e.preventDefault();
        if(ciudad.trim()==='' || pais.trim()===''){
               setError(true);
               return; 
        }
        setError(false);
        setConsult(true)
    };

    return(
        <form onSubmit={handleSubmit}>
            {error ? <Error title='Todos los campos son requeridos'/> : null}
            <div className="input-field col s12">
                <input 
                type="text"
                name="ciudad"
                id="ciudad"
                value={ciudad}
                onChange={handleChange}
                />
                <label htmlFor="ciudad">Ciudad :</label>
            </div>
            <div className="input-field col s12">
                <select 
                type="text"
                name="pais"
                id="pais"
                value={pais}
                onChange={handleChange}
                >
                 <option value="">-- Seleccione un país --</option> 
                 <option value="US">Estados Unidos</option>
                <option value="MX">México</option>
                <option value="AR">Argentina</option>
                <option value="CO">Colombia</option>
                <option value="CR">Costa Rica</option>
                <option value="ES">España</option>
                <option value="PE">Perú</option>  
                </select>
                <label htmlFor="pais">País :</label>
            </div>
            <div className="input-field col s12">
            <input 
            type="submit"
            value="Buscar Clima"
            className="waves-effect waves-light btn-large btn-block yellow accent-4"
            />
            </div>

        </form>

    );
}

Formulario.propTypes = {
    search : PropTypes.object.isRequired,
    setSearch : PropTypes.func.isRequired,
    setConsult: PropTypes.func.isRequired
}


export default Formulario;