import Image from 'next/image'
import React from 'react'

export default function about() {
  return (
    <div className='conatiner'>
      <div className="d-flex flex-column align-items-center justify-content-center my-4">
        <h1>SOBRE O PROJETO</h1>
        <p>Projeto desenvolvido em NextJS com jsx e bootstrap</p>
        <Image
          src="/images/charizard.png"
          width="300"
          height="300"
          alt='Pokemom charizard'
        />
      </div>
    </div>
  )
}
