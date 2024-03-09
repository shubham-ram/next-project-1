import styles from './styles.module.css'

function Button({ size = 'md', onClick, children, className }) {
    return (
        <button className={`${styles.btn} ${styles[size]} ${className}`} onClick={onClick}>{children}</button>
    )
}

export default Button