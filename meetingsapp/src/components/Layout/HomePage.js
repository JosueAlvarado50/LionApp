import { useState } from "react";
import classes from "./HomePage.module.css";

import imagen1 from "../../assets/imagen1.png";
import imagen2 from "../../assets/imagen2.png";
import imagen3 from "../../assets/imagen3.png";
import imagen4 from "../../assets/imagen4.png";

const HomePage = () => {
  const [image, setImage] = useState(imagen2);
  const [tittle, setTittle] = useState("Desarrollo de Software");
  //TODO: metodo para obetener la primer foto
  const test1 = () => {
    setImage(imagen1);
    setTittle("Virtual Reality Simulators");
  };
  const test2 = () => {
    setImage(imagen2);
    setTittle("Desarrollo de Software");
  };
  const test3 = () => {
    setImage(imagen3);
    setTittle("Desarrollo de Hardware");
  };
  const test4 = () => {
    setImage(imagen4);
    setTittle("Comercio Digital");
  };
  return (
    <div>
      <div className={classes.homePage}>
        <div className={classes.firstImage}>
          <div className={classes.carousel}>
            <h1>{tittle} </h1>
            <img alt="foto" src={image}></img>
            <div className={classes.tabla}>
              <ul>
                <li onClick={test2}>
                  <h1>DESARROLLO DE SOFTWARE</h1>
                  <p>
                    Constamos con la experiencia en desarrollos e
                    implementaciones de ERP'S y CRM'S personalizados en mas de
                    20 diferentes ramas de la industria.
                  </p>
                </li>
                <li onClick={test1}>
                  <h1>VIRTUAL REALITY SIMULATORS</h1>
                  <p>
                    Desarrollamos soluciones utilizando simulación de realidad
                    virtual y aumentada. Pregunta por nuestros demos.
                  </p>
                </li>
                <li onClick={test3}>
                  <h1>DESARROLLO DE HARDWARE</h1>
                  <p>
                    Desarrollamos y somos integradores de soluciones de hardware
                    a medida: drones, sensores, tags, gps, handhelds,etcétera.
                  </p>
                </li>
                <li onClick={test4}>
                  <h1>COMERCIO DIGITAL</h1>
                  <p>
                    Nuestra plataforma digital amigable y personalizada gestiona
                    publicaciones y ventas en linea.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <hr></hr>
        </div>
      </div>
      <div>
        <div className={classes.services}>
          <h2>| EXPERIENCIA EN TECNOLOGÍAS Y LENGUAJES DE PROGRAMACIÓN</h2>
          <div className={classes.servicesLef}>
            <div className={classes.gridimage}>
              <div className={classes.ladoIzquierdo}>
                <h4>Technologies</h4>
                <img
                  alt="imagen-services"
                  src="https://lionintel.com/img/techs/techs-min.png"
                ></img>
              </div>
              <div className={classes.ladoDerecho}>
                <p className={classes.p}>
                  Nuestra experiencia en el conocimiento y en la aplicación de
                  las tecnologías de información construyen un punto clave para
                  el éxito de nuestros desarrollos.
                </p>
              </div>
            </div>
          </div>
          <div className={classes.segundoNivel}>
            <h2>Programming Languages</h2>
            <div className={classes.segundoNivelGrid}>
              <div className={classes.ladoIsq}>
                <p className={classes.p2}>
                  Patrones de diseño, metodologías ágiles, arquitectura,
                  orientación a objetos, control de versiones, programación
                  funcional y algoritmos son algunas de nuestras buenas
                  prácticas que fundamentan nuestro seniority en el uso de
                  lenguajes de programación. Programming Languages
                </p>
              </div>
              <div className={classes.ladoDer}>
                <img
                  alt="segunda-imagen"
                  src="https://lionintel.com/img/techs/languages-min.png"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.tercerNivel}>
        <div className={classes.container}>
          <h1>| TRANSFORMACIÓN DIGITAL</h1>
          <div className={classes.parraf}>
            <p>Profesionales dedicados a ayudarte.</p>
            <p>
              Transformamos tus necesidades, retos y objetivos en la solución
              digital cloud más robusta y eficaz.
            </p>
          </div>
          <div className={classes.row}>
            <div className={classes.column}>
              <p>1 »</p>
              <h2>ASESORAMOS</h2>
              <p className={classes.columnp}>
                El cliente nos plantea sus necesidades y nuestro equipo de
                business analysis le asesora para estructurar un estudio
                detallado, de esta forma se minimizan los riesgos y la
                incertidumbre, alineando el enfoque del equipo con las
                expectativas del cliente.
              </p>
            </div>
            <div className={classes.column}>
              <p>2 »</p>
              <h2>PLANIFICAMOS</h2>
              <p className={classes.columnp}>
                En cada proyecto aprobado establecemos la metodología de gestión
                y plan de trabajo más adecuado adaptándonos a las
                características de cliente y proyecto, tenemos experiencia en
                Scrum, Agile, Critical Path Method (CPM), Critical Chain Project
                Management (CCPM), IT-PMO, Waterfall, entre otras.
              </p>
            </div>
            <div className={classes.column}>
              <p>3 »</p>
              <h2>DISEÑAMOS UI/UX</h2>
              <p className={classes.columnp}>
                El equipo de diseño realizará el diseño de la interfaz gráfica y
                experiencia de usuario a partir del análisis de requerimientos.
              </p>
            </div>
          </div>
          <div className={classes.row}>
            <div className={classes.column}>
              <p>4 »</p>
              <h2>IMPLANTAMOS</h2>
              <p className={classes.columnp}>
                En la fase de análisis investigamos y evaluamos las soluciones
                existentes y su capacidad para dar solución a los requerimientos
                del proyecto.
              </p>
            </div>
            <div className={classes.column}>
              <p>5 »</p>
              <h2>DESARROLLAMOS</h2>
              <p className={classes.columnp}>
                Desarrollamos aplicaciones cloud a medida con una visión
                fullstack y devops a través de las principales tecnologías y
                lenguajes de programación.
              </p>
            </div>
            <div className={classes.column}>
              <p>6 »</p>
              <h2>ASEGURAMOS</h2>
              <p className={classes.columnp}>
                El equipo de beta-testing y ciberseguridad validará el correcto
                funcionamiento y auditará las soluciones antes de puesta en
                producción definitivos.
              </p>
            </div>
          </div>
          <div className={classes.row}>
            <div className={classes.column}>
              <p>7 »</p>
              <h2>DESPLEGAMOS</h2>
              <p className={classes.columnp}>
                Nuestro equipo de sistemas trabaja con las principales
                infraestructuras cloud orientadas tanto a smalldata como a
                bigdata.
              </p>
            </div>
            <div className={classes.column}>
              <p>8 »</p>
              <h2>LANZAMOS</h2>
              <p className={classes.columnp}>
                Nuestro equipo especializado en marketing digital realiza planes
                de lanzamiento para apoyar el correcto despegue de la solución.
              </p>
            </div>
            <div className={classes.column}>
              <p>9 »</p>
              <h2>ACOMPAÑAMOS Y EVOLUCIONAMOS</h2>
              <p className={classes.columnp}>
                En base a la naturaleza y tipología de proyectos se planteará un
                plan de continuidad, mantenimiento y evolución. Asegurando
                convergencia, disponibilidad del servicio y su adaptación a los
                cambios del entorno.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
