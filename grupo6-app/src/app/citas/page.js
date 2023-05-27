import React, { useState } from 'react';

const Citas = () => {
  // Datos genéricos de próximas citas visible
  const proximasCitas = [
    { id: 1, date: '2023-06-18', time: '8:00 AM', estudiante: 'Alfonso Carrión' },
    { id: 2, date: '2023-06-18', time: '8:00 AM', estudiante: 'Alfonso Carrión' },
  ];

  const citasPasadas = [
    { id: 4, date: '2023-05-15', time: '3:00 PM', profesor: 'Juan López' },
    { id: 5, date: '2023-05-20', time: '9:30 AM', profesor: 'Adriana Sánchez' },
  ];

  const userType = 'estudiante'; // El usuario por defecto es estudiante, se debe cambiar a 'docente' para el perfil del docente.

  const perfilEstudiante = () => {
    return (
      <div>
        <h2>Próximas citas</h2>
        <ul>
          {proximasCitas.map((cita) => (
            <li key={cita.id}>
              <strong>Fecha:</strong> {cita.date} | <strong>Hora:</strong> {cita.time} | <strong>Estudiante:</strong> {cita.estudiante}
            </li>
          ))}
        </ul>
        <a href="/nueva-cita">Sacar una nueva cita</a>
        <br />
        <a href="/citas-pasadas">Ver citas pasadas</a>
      </div>
    );
  };

  const perfilDocente = () => {
    return (
      <div>
        <h2>Próximas citas</h2>
        <ul>
          {proximasCitas.map((cita) => (
            <li key={cita.id}>
              <strong>Fecha:</strong> {cita.date} | <strong>Hora:</strong> {cita.time} | <strong>Estudiante:</strong> {cita.estudiante}
            </li>
          ))}
        </ul>
        <a href="/administrar-horarios">Administrar horarios</a>
        <br />
        <a href="/ver-calificaciones">Ver calificaciones</a>
        <br />
        <a href="/citas-pasadas">Ver citas pasadas</a>
      </div>
    );
  };

  const detalleCita = (cita) => {
    const [calificacion, setCalificacion] = useState(null);

    const calificarAsesoria = () => { //Esto es para backend 
      alert(`Has calificado la asesoría con ${calificacion} estrellas!`);
    };

    return (
      <div>
        <h2>Detalle de la cita</h2>
        <p>
          <strong>Fecha:</strong> {cita.date} | <strong>Hora:</strong> {cita.time} | <strong>Estudiante:</strong> {cita.estudiante}
        </p>
        {userType === 'estudiante' && !calificacion && (
          <div>
            <p>Califica la asesoría:</p>
            <div>
              <button onClick={() => setCalificacion(1)}>1 estrella</button>
              <button onClick={() => setCalificacion(2)}>2 estrellas</button>
              <button onClick={() => setCalificacion(3)}>3 estrellas</button>
              <button onClick={() => setCalificacion(4)}>4 estrellas</button>
              <button onClick={() => setCalificacion(5)}>5 estrellas</button>
            </div>
            <button onClick={calificarAsesoria}>Calificar asesoría</button>
          </div>
        )}
        {calificacion && <p>Has calificado la asesoría con {calificacion} estrellas</p>}
      </div>
    );
  };

  // Obtener el parámetro de la URL para el detalle de la cita
  const urlParametros = new URLSearchParams(window.location.search);
  const citaId = urlParametros.get('citaId');
  const citaSeleccionada = proximasCitas.find((cita) => cita.id.toString() === citaId);

  return (
    <div>
      {citaSeleccionada ? (
        detalleCita(citaSeleccionada)
      ) : (
        userType === 'estudiante' ? perfilEstudiante() : perfilDocente()
      )}
    </div>
  );
};

export default Citas;
