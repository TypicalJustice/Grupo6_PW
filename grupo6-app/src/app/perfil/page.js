import styles from './perfil.css'
import Image from 'next/image';

const Perfil = () => {
    return (
        <div className="perfil">
            <header>
                <div className='cabecera'>
                    <figure>
                        <Image src='/menu.png' alt="Menu" width={25} height={25}></Image>
                    </figure>
                    <h1>Atención de Citas</h1>
                    <figure>
                        <Image src='/usuario.png' alt="Usuario" width={25} height={25}></Image>
                    </figure>
                </div>
            </header>
            <main>
                <div className='ladoizquierdo'>
                    <ol className="menuaside">
                        <li>Principal</li>
                        <li>Perfil</li>
                        <li>Horarios</li>
                    </ol>
                    <p>SAC v1.0.1-alpha</p>
                </div>
                <div class="titulo">
                   <h2>Mi Perfil</h2>
                   <button>Guardar</button>
                </div>
            </main>
        </div>
    )
}

export default Perfil