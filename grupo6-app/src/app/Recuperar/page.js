'use client';
import Form from 'react-bootstrap/Form'
import Titulo from '../../components/Titulo/Titulo.jsx'
import Button from '@/components/Button/Button.jsx';
import './Recuperar.css'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Label from '@/components/Label/Label.jsx'



const Recuperar = () => {
    
    const router = useRouter()
    const regresar = () =>{
        router.push('/principal')
    }

    const handleClick = () => {
        alert("se envio a su correo la contraseña")
    }

    return (
        <div className='container-principal'>
            <div>
                <Titulo text="Recuperar Contraseña del Usuario" />
                <div className='container-pantalla'>
                    <div className='container-usuarios'>
                        <Label text = "Usuario" />
                        <Form.Control type="text" 
                        placeholder="Ingrese su Usuario actual" />
                    </div>
                    <div className='container-correo'>
                        <Label text = "Correo" />
                        <Form.Control type="text" 
                        placeholder="Ingrese su correo Actual" />
                    </div>
                </div>
                <br/>
            </div>
        <div className='contenedor-button-contraseñas'>
            <div className='contenedor-salir'>
                <Button value="Salir" onClick={regresar}></Button>
            </div>
            <div className='contenedor-ingresar'>
                <Button value="Aceptar" onClick={handleClick}></Button>
            </div>
        </div>
        </div>
    )
} 

export default Recuperar