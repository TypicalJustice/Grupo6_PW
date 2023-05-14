import styles from './estilosaside.css'

const Aside = () => {
    return (
        <div className='ladoizquierdo'>
            <ol className="menuaside">
                <li>Principal</li>
                <li>Perfil</li>
                <li>Horarios</li>
            </ol>
            <p>SAC v1.0.1-alpha</p>
        </div>
    )
}

export default Aside