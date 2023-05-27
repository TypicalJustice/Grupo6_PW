'use client';
import Form from 'react-bootstrap/Form'
import Titulo from '../../components/Titulo/Titulo.jsx'
import Button from '@/components/Button/Button.jsx';
import './CambioContra.css'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Label from '@/components/Label/Label.jsx'



const CambioContra = () => {

    const [password, setPassword] = useState('')
    const [newpassword, setNewPassword] = useState('')
    const [confirmpassword, setConfirmPassword] = useState('')

    const router = useRouter()
    const regresar = () =>{
        router.push('/Principal')
    }

    const handleClick = () => {
        if (password===newpassword) {
            alert('Las contraseña nueva coincide con la anterior')
        } if (newpassword===confirmpassword){
            alert('Cambio de contraseña Exitoso')
            }
    }

    return (
        <div className='container-principal'>
            <div>
                <Titulo text="Cambiar Contraseña del Usuario" />
                <div className='container-pantalla'>
                    <div className='container-contraseña'>
                        <Label text = "Contraseña Actual" />
                        <Form.Control type="password" 
                        placeholder="Ingrese su contraseña actual"
                        onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div className='container-contraseña-nueva'>
                        <Label text = "Nueva Contraseña" />
                        <Form.Control type="password" 
                        placeholder="Ingrese su nueva contraseña"
                        onChange={e => setNewPassword(e.target.value)} />
                    </div>
                    <div className='container-confirmar-contraseña-nueva'>
                        <Label text = "Confirmar Nueva Contraseña" />
                        <Form.Control type="password" 
                        placeholder="Confirme su contraseña nueva"
                        onChange={e => setConfirmPassword(e.target.value)} />
                    </div>
                </div>
                <br/>
            </div>
        <div className='contenedor-button-contraseña'>
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

export default CambioContra