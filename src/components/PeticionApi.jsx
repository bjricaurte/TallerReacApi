import React from 'react'

const PeticionApi = () => {


    const limite = 10 
    const [personajes, setPersonajes] = React.useState([])
    const [paginacion, setPaginacion] = React.useState(1)

    const traerPersonajes = async() =>{
        try {
            const res = await fetch(`https://apisimpsons.fly.dev/api/personajes?limit=${limite}+"&page=${paginacion}`)
            const results = await res.json()
            console.log(results.docs)
            setPersonajes(results.docs)
        } catch (error) {
            console.log(error)
        }
        
    }

    const siguiente = () =>{
        setPaginacion(paginacion+1)
        console.log(paginacion)
        traerPersonajes()
    }

    const atras = () =>{
        if(paginacion>0){
            setPaginacion(paginacion-1)
            console.log(paginacion)
            traerPersonajes()
        }        
    }

  return (
    <div>
        <h1>Petición al API de Los Simpsons</h1>
        &nbsp;&nbsp;<button onClick={traerPersonajes}>  Traer personajes    </button>&nbsp;&nbsp;
        &nbsp;<button onClick={atras}>Atrás</button>&nbsp;&nbsp;
        &nbsp;&nbsp;<button onClick={siguiente}>Siguiente</button>&nbsp;&nbsp;        
        <br/><br />     

        {
            personajes.map(({_id, Nombre, Imagen, Historia}) => (
                <div className='row' key={_id}> 
                    <div className='col-2'></div>
                    <div className='col-4'>
                        <h4>{Nombre}</h4>
                        <img src={Imagen} alt={Nombre} />
                    </div> 
                    <div className='col-4'>
                        <br /><br /><br /><br />
                        <p>{Historia}</p>
                    </div> 
                    <div className='col-2'></div> 
                    <br />                
                </div>
            ))            
        }
    </div>
  )
}

export default PeticionApi