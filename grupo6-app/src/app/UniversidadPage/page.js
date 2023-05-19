'use client';

import styles from './universidadpage.css';
import React from 'react'

const UniversidadPage = () => {
    return (
        <div className='perfilcentro'>
            <div className='encabezadoinferior'>
                <p>Datos de Usuario</p>
                <p>Universidad</p>
                <p className='cursor' onClick={handlePresentacionClick}>Presentación</p>
            </div>
            <div className='formularioabajo'>
                <Form>
                    <Form.Group className="mb-3abajo">
                        <Form.Label>Universidad</Form.Label>
                        <Form.Control required type="text" placeholder='Ingrese nombre de universidad' className='abajo' />
                    </Form.Group>
                    <Form.Group className="mb-3abajo">
                        <Form.Label>Agregar Cursos</Form.Label>
                        <Form.Control required type="text" placeholder='Ingrese nuevo curso' className='abajoderecha' />
                    </Form.Group>
                </Form>
                <Form>
                    <Form.Group className="mb-3abajo">
                        <Form.Label>Carrera</Form.Label>
                        <Form.Control required type="text" placeholder='Ingrese carrera' className='abajo' />
                    </Form.Group>
                </Form>
            </div>
        </div>

    )
}

export default UniversidadPage