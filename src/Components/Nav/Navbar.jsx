import React from 'react'
import styles from './navbar.module.css'
import { FaRegCheckCircle } from 'react-icons/fa'

const Navbar = () => {
  return (
    <>
    <div className={styles.nav} >
        <ul className={styles.list}>
            <li className={styles.listItem}>TOD{<FaRegCheckCircle />}</li>
        </ul>
    </div>
    </>
  )
}

export default Navbar