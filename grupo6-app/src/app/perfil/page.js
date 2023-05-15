'use client';
import styles from './perfil.css';
import Image from 'next/image';
import Form from 'react-bootstrap/Form';

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
                <div className="perfilcentro">
                    <div className="titulo">
                        <h2>Mi Perfil</h2>
                        <button>Guardar</button>
                    </div>
                    <h4>Información Personal</h4>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Nombres</Form.Label>
                            <Form.Control required type="text" placeholder='Nombres' />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Apellidos</Form.Label>
                            <Form.Control required type="text" placeholder='Apellidos' />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Tipo de documento</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option></option>
                                <option value="1">DNI</option>
                                <option value="2">Carné de extranjeria</option>
                            </Form.Select>
                        </Form.Group>
                    </Form>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Rol</Form.Label>
                            <Form.Control required type="text" placeholder='Ingrese su rol'/>
                        </Form.Group>
                        <Form.Group className="mb-34">
                            <Form.Label>Número de documento</Form.Label>
                            <Form.Control required type="text" placeholder='Ingrese número' />
                        </Form.Group>
                    </Form>
                </div>
            </main>
        </div>
    )
}

export default Perfil