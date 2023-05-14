import styles from './estilosheader.css'
import Image from 'next/image';

const Header = () => {
    return (
        <div className='cabecera'>
            <figure className={styles.imagen}>
                <Image src='/menu.png' alt="Menu" width={25} height={25}></Image>
            </figure>
            <h1>Atención de Citas</h1>
            <figure className={styles.imagen}>
                <Image src='/usuario.png' alt="Usuario" width={25} height={25}></Image>
            </figure>
        </div>  
    )
}

export default Header