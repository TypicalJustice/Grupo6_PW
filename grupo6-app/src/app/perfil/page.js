'use client';
import styles from './perfil.css';  
import Image from 'next/image';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Link, Switch, Route } from 'react-router-dom';

const Perfil = () => {

    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setSelectedImage(URL.createObjectURL(file));
    };

    const router = useRouter();
    const handlePrincipalClick = () => {
        router.push('/principal')
    }

    const router1 = useRouter();
    const handleUniversidadClick = () => {
        router1.push('/universidadpage')
    }

    const router2 = useRouter();
    const handlePresentacionClick = () => {
        router2.push('/presentacion')
    }

    

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
                        <li onClick={handlePrincipalClick} className='cursor'>Principal</li>
                        <li className='cursor'>Perfil</li>
                        <li className='cursor'>Horarios</li>
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
                                <Form.Control required type="text" placeholder='Nombres' className='arriba' />
                            </Form.Group>
                            <Form.Group className="mb-3arriba">
                                <Form.Label>Apellidos</Form.Label>
                                <Form.Control required type="text" placeholder='Apellidos' className='arriba' />
                            </Form.Group>
                            <Form.Group className="mb-3arriba">
                                <Form.Label>Tipo de documento</Form.Label>
                                <Form.Select aria-label="Default select example" className='arriba'>
                                    <option value="1">DNI</option>
                                    <option value="2">Pasaporte</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3arribafoto">
                                {selectedImage && (
                                    <img src={selectedImage} alt="Selected" className="selected-image" style={{ width: '265px', height: '220px' }} />
                                )}
                                <Form.Control type="file" onChange={handleImageChange} />
                                <p style={{ width: '265px', color: '#8000b2', textAlign: 'center', marginTop: '5px', marginBottom: '0px', fontSize: '14px' }}>Adjuntar Foto</p>
                            </Form.Group>
                        </Form>
                        <Form>
                            <Form.Group className="mb-3arriba">
                                <Form.Label>Rol</Form.Label>
                                <Form.Select aria-label="Default select example" className='arriba'>
                                    <option value="1">Docente</option>
                                    <option value="2">Alumno</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-34">
                                <Form.Label>Número</Form.Label>
                                <Form.Control required type="text" placeholder='Ingrese número de documento' className='arriba' />
                            </Form.Group>
                        </Form>
                    </div>
                    <div className='encabezadoinferior'>
                        <p>Datos de Usuario</p>
                        <p onClick={handleUniversidadClick} className='cursor'>Universidad</p>
                        <p onClick={handlePresentacionClick} className='cursor'>Presentación</p>
                    </div>
                    <div className='formularioabajo'>
                        <Form>
                            <Form.Group className="mb-3abajo">
                                <Form.Label>Usuario</Form.Label>
                                <Form.Control required type="text" placeholder='Nombre del usuario' className='abajo' />
                            </Form.Group>
                        </Form>
                        <Form>
                            <Form.Group className="mb-3abajo">
                                <Form.Label>Contraseña Actual</Form.Label>
                                <Form.Control required type="password" placeholder='Ingrese su contraseña' className='abajo' />
                            </Form.Group>
                            <Form.Group className="mb-3abajo">
                                <Form.Label>Nueva Contraseña</Form.Label>
                                <Form.Control required type="password" placeholder='Ingrese nueva contraseña' className='abajo' />
                            </Form.Group>
                            <Form.Group className="mb-3abajo">
                                <Form.Label>Repetir Contraseña</Form.Label>
                                <Form.Control required type="password" placeholder='Repita nueva contraseña' className='abajo' />
                            </Form.Group>
                        </Form>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Perfil