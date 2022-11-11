import React from 'react'
import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className="bg-dark text-center text-white text-lg-start py-3 mt-5">
      <div className={`text-center p-3 ${styles.bgShadow}`}>
        © 2022 Copyright: 
        <a className='px-2' target="_blank" href="https://github.com/DouglasSilvaPrado" rel="noreferrer">Douglas Prado</a>
      </div>
    </footer>
  )
}
