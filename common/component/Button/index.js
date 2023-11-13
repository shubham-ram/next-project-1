import styles from './styles.module.css'

function Button({size='md', onClick, children}) {
  return (
    <button className={`${styles.btn} ${styles[size]}`} onClick={onClick}>{children}</button>
  )
}

export default Button