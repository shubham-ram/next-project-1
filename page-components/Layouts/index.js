import styles from './styles.module.css'
import Navbar from '../Navbar';

function Layout({ children }) {
    return (
        <div className={styles.container}>

            <div className={styles.navbar_div}>
                <Navbar />
            </div>

            <div className={styles.content_div}>
                {children}
            </div>
        </div>
    )
}

export default Layout