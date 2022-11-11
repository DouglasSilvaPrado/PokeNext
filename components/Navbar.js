import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
  return (
    <>
      <nav className="navbar-dark navbar-expand-lg navbar-light bg-dark py-3">
        <div className="container d-flex justify-content-between align-items-center">

          <div className={styles.logo}>
            <Link className="navbar-brand d-flex align-items-center" href={"/"}>
              <Image
                src="/images/pokeball.png"
                alt="pokeball"
                width="50"
                height="50"
                className="d-inline-block mx-3 rounded-circle"
              />
              <span className="nav-primary-text d-none d-sm-block">PokeNext</span>
            </Link>
          </div>
          
          <div className="navItens">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item px-2">
                  <Link className="nav-link active" aria-current="page" href="/">Home</Link>
                </li>
               <li className="nav-item px-2">
                  <Link className="nav-link" href="/about">Sobre</Link>
               </li>
            </ul>
          </div>

          </div>  

        </div>
      </nav>

    </>
  )
}