import React, { useState } from 'react';
import Image from 'next/image'
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes realizar la lógica de autenticación, por ejemplo, verificar las credenciales con una API o una base de datos
    // En este ejemplo, simplemente verificaremos si el nombre de usuario y la contraseña no están vacíos
    if (username && password) {
      setLoggedIn(true);
      alert('Inicio de sesión exitoso');
    } else {
      alert('Nombre de usuario y/o contraseña inválidos');
    }
  };

  if (loggedIn) {
    return <div>Ha iniciado sesión correctamente</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Iniciar sesión</h2>
      <div>
        <label htmlFor="username">Nombre de usuario:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Iniciar sesión</button>
    </form>
  );
};

export default Login;