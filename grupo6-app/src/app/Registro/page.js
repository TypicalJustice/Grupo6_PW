'use client';
import Form from 'react-bootstrap/Form'
import Titulo from '../../components/Titulo/Titulo.jsx'
import Button from '@/components/Button/Button.jsx';
import './Registro.css'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Label from '@/components/Label/Label.jsx'
import Subtitle from '@/components/Subtitle/Subtitle.jsx';


const Registro = () => {

    const [rol, setRol] = useState('')


    const router = useRouter()

    const volver = () =>{
        router.push('/LoginAlumno')
    }

    const handleClick = () => {
        if (rol==="Estudiante") {
            alert('Estudiante Registrado')
        } else
            alert('Docente Registrado')

    }

    return (
        <div className='container-principal'>
            <div>
                <Titulo text="Sistema de Citas para Atencion de Estudiantes" />
                <Titulo text="Registro de usuario"/>
                <div>    
                    <div className='container-block1'>
                        <div className='container-usuario'>
                            <Label text="Usuario"/>
                            <Form.Control type="text" 
                            placeholder="Ingrese un nuevo usuario"/>
                        </div>
                        <div className='container-correo'>
                            <Label text="Correo"/>
                            <Form.Control type="text" 
                            placeholder="Ingrese un nuevo correo electronico"/>
                        </div>
                        <div className='container-contraseña'>
                            <Label text = "Contraseña" />
                            <Form.Control type="password" 
                            placeholder="Ingrese una nueva contraseña"/>
                        </div>
                        <div className='container-rep-contraseña'>
                            <Label text = "Confirmar contraseña" />
                            <Form.Control type="password" 
                            placeholder="Confirme la contraseña"/>
                        </div>
                    </div>


                        <div className='subtitle'>
                            <Subtitle text="Datos Personales"/>
                        </div>
                    
                    
                    
                    <div className='container-nombres'>
                        <Label text = "Nombres" />
                        <Form.Control type="text" 
                        placeholder="Ingresar los nombres del usuario"/>
                    </div>
                    <div className='container-apellidos'>
                        <Label text = "Apellidos" />
                        <Form.Control type="text" 
                        placeholder="Ingresar los apellidos del usuario" />
                    </div>
                    <div className='container-tipo'>
                        <Label text = "Tipo de Documento" />
                        <Form.Select aria-label="Default select example">
                            <option value="1">DNI</option>
                            <option value="2">Carnet Extranjeria</option>
                            <option value="2">Pasaporte</option>
                        </Form.Select>
                    </div>
                    <div className='container-numerodoc'>
                        <Label text = "Numero de Documento" />
                        <Form.Control type="text" 
                        placeholder="Ingresar el numero de documento"
                         />
                    </div>
                    <div className='container-rol'>
                        <Label text = "Rol del Usuario" />
                        <Form.Select aria-label="Default select example"
                                     onChange={e => setRol(e.target.value)}>
                            <option value="1">Eliga un rol obligatoriamente</option>
                            <option value="2">Estudiante</option>
                            <option value="3">Docente</option>
                        </Form.Select>
                    </div>
                </div>
            </div>
        <div className='contenedor-button'>
            <div className='contenedor-salir'>
                <Button value="Volver" onClick={volver}></Button>
            </div>
            <div className='contenedor-ingresar'>
                <Button value="Registrar" onClick={handleClick}></Button>
            </div>
        </div>
        </div>
    )
} 
export default Registro