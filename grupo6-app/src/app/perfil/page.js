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
                    <div className='formularioarriba'>
                        <Form>
                            <Form.Group className="mb-3arriba">
                                <Form.Label>Nombres</Form.Label>
                                <Form.Control required type="text" placeholder='Nombres' className='arriba'/>
                            </Form.Group>
                            <Form.Group className="mb-3arriba">
                                <Form.Label>Apellidos</Form.Label>
                                <Form.Control required type="text" placeholder='Apellidos' className='arriba'/>
                            </Form.Group>
                            <Form.Group className="mb-3arriba">
                                <Form.Label>Tipo de documento</Form.Label>
                                <Form.Select aria-label="Default select example" className='arriba'>
                                    <option value="1">DNI</option>
                                    <option value="2">Carné de extranjeria</option>
                                </Form.Select>
                            </Form.Group>
                        </Form>
                        <Form>
                            <Form.Group className="mb-3arriba">
                                <Form.Label>Rol</Form.Label>
                                <Form.Control required type="text" placeholder='Ingrese su rol' className='arriba'/>
                            </Form.Group>
                            <Form.Group className="mb-34">
                                <Form.Label>Número de documento</Form.Label>
                                <Form.Control required type="text" placeholder='Ingrese número' className='arriba'/>
                            </Form.Group>
                        </Form>
                    </div>
                    <div className='encabezadoinferior'>
                        <p>Datos de Usuario</p>
                        <p>Universidad</p>
                        <p>Presentación</p>
                    </div>
                    <div className='formularioabajo'>
                        <Form>
                            <Form.Group className="mb-3abajo">
                                <Form.Label>Usuario</Form.Label>
                                <Form.Control required type="text" placeholder='Nombre del usuario' className='abajo'/>
                            </Form.Group>
                        </Form>
                        <Form>
                            <Form.Group className="mb-3abajo">
                                <Form.Label>Contraseña Actual</Form.Label>
                                <Form.Control required type="password" placeholder='Ingrese su contraseña' className='abajo'/>  
                            </Form.Group>
                            <Form.Group className="mb-3abajo">
                                <Form.Label>Nueva Contraseña</Form.Label>
                                <Form.Control required type="password" placeholder='Ingrese nueva contraseña' className='abajo'/>  
                            </Form.Group>
                            <Form.Group className="mb-3abajo">
                                <Form.Label>Repetir Contraseña</Form.Label>
                                <Form.Control required type="password" placeholder='Repita nueva contraseña' className='abajo'/>
                            </Form.Group>
                        </Form>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Perfil