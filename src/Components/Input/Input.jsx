import React from 'react'
import styles from './input.module.css'

const Input = ({placeholder, type,onchange}) => {

  return (
    <input className={styles.userInput} type={type} placeholder={placeholder} onChange={onchange}></input>
  )
}

export default Input