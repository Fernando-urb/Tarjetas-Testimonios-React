import './App.css';
import Testimonios from './components/Testimonios';
import fernando from  './img/testimonio-fernando.jpg';
import matias from  './img/testimonio-matias.jpg';
import santiago from  './img/testimonio-santiago.jpg';
 const imagen = {fernando , matias , santiago};




function App() {



  return (
    <div className="App">
      <div className='contenedor-principal'>
          <h1> Esto es lo que dicen nuestros alumnos</h1>
      <Testimonios
      nombre='Fernando Urbano'
      pais='Argentino'
      imagen='fernando'
      cargo='Estudiante de Programacion'
      empresa='RollingCode'
      testimonio='Gran a pasionado a la tecnologia , con muchas ganas de aprender ' />
      <Testimonios
      nombre='Santiago Rios'
      pais='Argentino'
      imagen='santiago'
      cargo='Estudiante de Programacion'
      empresa='RollingCode'
      testimonio='Gran a pasionado a la tecnologia , con muchas ganas de aprender ' />
      <Testimonios
      nombre='Matias Rarte'
      pais='Argentino'
      imagen='matias'
      cargo='Estudiante de Programacion'
      empresa='RollingCode'
      testimonio='Gran a pasionado a la tecnologia , con muchas ganas de aprender ' />

      </div>
      
    </div>
  );
}

export default App;
