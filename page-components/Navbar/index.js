import Link from 'next/link'
import styles from './styles.module.css'
import navigation_mapping from '@/navigation/navigation-mapping'

function Navbar() {
    return (
        <div className={styles.container}>
            {navigation_mapping.map((nav) => (
                <Link key={nav.href} className={styles.col} href={nav.href}>{nav.name}</Link>
            ))}
        </div>
    )
}

export default Navbar