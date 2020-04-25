import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Clima from './components/Clima';
import Error from './components/Error'

function App() {

  const [search, setSearch]= useState({
    ciudad:'',
    pais:''
});

const [consult, setConsult] = useState(false)
const {ciudad , pais} = search;
const [result, setResult] = useState({})
const [error, setError] = useState(false)

useEffect(()=>{
    const consultAPI = async () => {
      if(consult){
        const appId=process.env.REACT_APP_TOKENAPI;
        const url=`//api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
  
        const res = await(await fetch(url)).json();
        setResult(res)
        setConsult(false)

        
        if(res.cod==='404'){
          setError(true);
        }else{
          setError(false)
        }
      }
    }

    consultAPI();
    // eslint-disable-next-line
}, [consult]);

let componente;
if(error){
  componente = <Error 
                  title='No hay resultados'
                />
}else{
  componente= <Clima
                result={result}
              />
}

  return (
    <Fragment>      
       <Header
        titulo='Clima React App'
       />
       <div className="contenedor-form">
         <div className="container">
           <div className="row">
             <div className="col m6 s12">
                <Formulario 
                search={search}
                setSearch={setSearch}
                setConsult={setConsult}
                /> 
             </div>
             <div className="col m6 s12">
                {componente}
             </div>
           </div>
         </div>
       </div>
    </Fragment>
  );
}

export default App;
