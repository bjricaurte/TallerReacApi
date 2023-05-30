import React from 'react'

const Variables = () => {

    const saludo = "Hola mundo"
    const imagen = "data:image/jpeg;base64,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"
    const textoAlternativo = "San Sebastián, Magdalena"

    return (
    <div>
        <h1>{saludo}</h1>
        <img src={imagen} alt={textoAlternativo} />
    </div>
  )
}

export default Variables