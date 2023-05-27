'use client'

import React, { useState } from 'react';
import Image from 'next/image'
import busqueda from './busquedacitas.css'; 
import'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

class Profesor {
  constructor(nombre, nombreUniversidad, fecha) {
    this.nombre = nombre;
    this.nombreUniversidad = nombreUniversidad;
    this.fecha = fecha;
  }
}

const profesor1 = new Profesor("Juan Lopez", "Universidad de Lima", "2023-05-27");
const profesor2 = new Profesor("Adriana Sanchez", "Universidad de Lima", "2023-05-28");
const profesor3 = new Profesor("Felipe Lopez Sanchez", "Universidad de Lima", "2023-05-29");
const profesor4 = new Profesor("Felipe Andres Lopez", "Universidad de Lima", "2023-05-30");

const ReservaCitas = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchResults([]);

    const results = [];
    const query = searchTerm.toLowerCase();

    if (
      profesor1.nombre.toLowerCase().includes(query) ||
      profesor1.nombreUniversidad.toLowerCase().includes(query) ||
      profesor1.fecha.includes(query)
    ) {
      results.push(profesor1);
    }
    if (
      profesor2.nombre.toLowerCase().includes(query) ||
      profesor2.nombreUniversidad.toLowerCase().includes(query) ||
      profesor2.fecha.includes(query)
    ) {
      results.push(profesor2);
    }
    if (
      profesor3.nombre.toLowerCase().includes(query) ||
      profesor3.nombreUniversidad.toLowerCase().includes(query) ||
      profesor3.fecha.includes(query)
    ) {
      results.push(profesor3);
    }
    if (
      profesor4.nombre.toLowerCase().includes(query) ||
      profesor4.nombreUniversidad.toLowerCase().includes(query) ||
      profesor4.fecha.includes(query)
    ) {
      results.push(profesor4);
    }

    setSearchResults(results);
  };

  return (
    <main>
      <div className="Titulo">
        <h2>Atencion de Citas</h2>
      </div>
      <div className="container-fluid">
        <div className="row flex-sm-nowrap">
          <div className="col-md-4 col-xl-2 px-sm-2 px-0" id="Columna1">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <span className="fs-5 d-none d-sm-inline"></span>
              </a>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="">
                    Principal
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./busquedaCita/page.js">
                    Busqueda
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="">
                    Citas
                  </a>
                </li>
              </ul>
              <hr />
            </div>
          </div>
          <div className="col-md-8">
            <h2>Busqueda de Profesores</h2>
            <form id="formulario-busqueda" onSubmit={handleSearch}>
              <div className="mb-3">
                <label htmlFor="busqueda" className="form-label">
                  Buscar por nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="busqueda"
                  name="busqueda"
                  placeholder="Ingrese el término de búsqueda"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <button className="btn btn-primary btnBuscar" type="submit">
                Buscar
              </button>
            </form>
            <div id="resultado-busqueda">
              {searchResults.length > 0 ? (
                searchResults.map((profesor, index) => (
                  <div className="resultado" key={index}>
                    <h3>{profesor.nombre}</h3>
                    <p>Nombre de Universidad: {profesor.nombreUniversidad}</p>
                    <p>Fecha: {profesor.fecha}</p>
                  </div>
                ))
              ) : (
                <p>No se encontraron resultados.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ReservaCitas;