import React from 'react'

const PeticionApi = () => {

    const [personajes, setPersonajes] = React.useState([])
    const [paginacion, setPaginacion] = React.useState(1)

    const traerPersonajes = async() =>{
        try {
            const res = await fetch("https://apisimpsons.fly.dev/api/personajes")
            const results = await res.json()
            console.log(results.docs)
            setPersonajes(results.docs)
        } catch (error) {
            console.log(error)
        }
        
    }
  return (
    <div>
        <h1>Petición al API de Los Simpsons</h1>
        &nbsp;&nbsp;<button onClick={traerPersonajes}>  Traer personajes    </button>&nbsp;&nbsp;
        &nbsp;&nbsp;<button className='btn-primary'>Siguiente</button>&nbsp;&nbsp;
        &nbsp;<button>Atrás</button>&nbsp;&nbsp;
        <br/><br />     

        {
            personajes.map(({_id, Nombre, Imagen, Historia}) => (
                <div className='row'> 
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