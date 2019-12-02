import { Component } from '@angular/core';
import { Simulacion } from '../simulacion';
import { faUndo } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent {

  // Iconos de los botones
  faUndo = faUndo;
  faPlay = faPlay;

  // Variable para ocultar o no la simulacion
  protected mostrar: Boolean = false;

  // Objeto simulacion que obtiene los datos del formulario
  simulacion: Simulacion = {
    mss: null,
    datos: null,
    ipserv: "",
    ipclien: "",
    snserv: null,
    snclien: null,
    algort: null,
    segperd: null
  };

  // Objeto que se le enviara a SimulacionComponent para simular
  simulacionEnv: Simulacion = {
    mss: null,
    datos: null,
    ipserv: "",
    ipclien: "",
    snserv: null,
    snclien: null,
    algort: null,
    segperd: ""
  };

  constructor() { }


  /**
   * TODO: Revisar los parametros antes de asignalos a simulacionEnv
   * @description Asigna los parametros del formulario a la variable simulacionEnv por valor
   *              que es el atributo del componente hijo SimulacionComponents
   * @author javierorp
   */
  simular() {
    // Asi se consiguen que los datos se pasen por valor en lugar de por referencia
    var mss: number = this.simulacion.mss;
    var datos: number = this.simulacion.datos;
    var ipserv: string = this.simulacion.ipserv;
    var ipclien: string = this.simulacion.ipclien;
    var snserv: number = this.simulacion.snserv;
    var snclien: number = this.simulacion.snclien;
    var algort: number = this.simulacion.algort;
    var segperd: string = this.simulacion.segperd;

    this.simulacionEnv = { mss, datos, ipserv, ipclien, snserv, snclien, algort, segperd };

    // Permitimos que se visualice la simulacion
    this.mostrar = true;
  }


  /**
   * TODO:
   * @description Limpia el formulario y oculta la simulacion
   * @author javierorp
   */
  limpiar() {
    var mss: number = null;
    var datos: number = null;
    var ipserv: string = ""
    var ipclien: string = "";
    var snserv: number = null;
    var snclien: number = null;
    var algort: number = null;
    var segperd: string = "";

    this.simulacion = { mss, datos, ipserv, ipclien, snserv, snclien, algort, segperd };

    // Ocultamos la simulacion
    this.mostrar = false;
  }

}
