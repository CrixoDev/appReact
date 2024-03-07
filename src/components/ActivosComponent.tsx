import React, { useState, useEffect } from 'react';

const ActivosComponent: React.FC = () => {
  const [activos, setActivos] = useState<any[]>([]);

  useEffect(() => {
    obtenerActivosDesdeBackend();
  }, []);

  const obtenerActivosDesdeBackend = () => {
    fetch('http://localhost:8080/activos/todos')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setActivos(data);
        console.log('Datos obtenidos:', data);
      })
      .catch(error => {
        console.error('Error al obtener activos desde el backend:', error);
      });
  };

  const handleEditar = (id: number) => {
    // Lógica para editar el elemento con el ID proporcionado
    console.log(`Editar elemento con ID ${id}`);
  };

  const handleEliminar = (id: number) => {
    // Lógica para eliminar el elemento con el ID proporcionado
    console.log(`Eliminar elemento con ID ${id}`);
  };

  const cargarAcciones = () => {
    // Lógica para cargar acciones
    console.log('Cargar acciones');
  };

  return (
    <div>
      <h1>Todos los Activos</h1>
      <div className="container mt-3">
        <button className="btn btn-primary mb-2" onClick={cargarAcciones}>
          Cargar Acciones
        </button>
        <table className="table table-bordered table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nombre</th>
              <th scope="col">Riesgo</th>
              <th scope="col">Rendimiento Promedio</th>
              <th scope="col">Rendimiento Maximo</th>
              <th scope="col">Rendimiento Minimo</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {activos.map(activo => (
              <tr key={activo.id}>
                <td>{activo.id}</td>
                <td>{activo.nombre}</td>
                <td>{activo.riesgo.toFixed(2)}</td>
                <td>{activo.rendimientoPromedio.toFixed(2)}</td>
                <td>{activo.maxRendimiento.toFixed(2)}</td>
                <td>{activo.minRendimiento.toFixed(2)}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleEditar(activo.id)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-danger ml-2"
                    onClick={() => handleEliminar(activo.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActivosComponent;
