import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/Card.module.css'

export default function Card({pokemon}) {
  return (
    <>
      <div className="card border-danger bg-secondary text-white text-center py-4">
        <div className="px-5">
          <Image 
            src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
            className="card-img-top"
            width="120"
            height="120"
            alt={pokemon.name}
          />
        </div>
        

        <div className="card-body">
          <p className="card-text">
            <span className="bg-danger rounded p-2">#{pokemon.id}</span>
          </p>
          <h5 className="card-title fw-bold my-4">{pokemon.name}</h5>
          <Link href={`/pokemon/${pokemon.id}`} className="btn btn-light fw-bold">
            Detalhes
          </Link>
        </div>
      </div>
    </>
  )
}
