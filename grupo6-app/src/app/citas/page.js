import React from 'react';

const Citas = () => {
  // Datos genéricos de próximas citas
  const proximasCitas = [
    { id: 1, date: '2023-06-28', time: '10:00 AM', estudiante: 'Cristiano Cuccitini' },
    { id: 2, date: '2023-06-30', time: '2:00 PM', estudiante: 'Lionel Dos Santos' },
    { id: 3, date: '2023-07-01', time: '11:30 AM', estudiante: 'Kevin de Bruyne' },
  ];

  const userType = 'estudiante'; // El usuario por default es estudiante, se debe cambiar a 'docente' para el perfil del docente.

  const perfilEstudiante = () => {
    return (
      <div>
        <h2>Próximas citas</h2>
        <ul>
          {proximasCitas.map((citas) => (
            <li key={citas.id}>
              <strong>Fecha:</strong> {citas.date} | <strong>Hora:</strong> {citas.time} | <strong>Estudiante:</strong> {citas.estudiante}
            </li>
          ))}
        </ul>
        <a href="/nueva-cita">Sacar una nueva cita</a>
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
      </div>
    );
  };

  return (
    <div>
      {userType === 'student' ? perfilEstudiante() : perfilDocente()}
    </div>
  );
};

export default Citas;
