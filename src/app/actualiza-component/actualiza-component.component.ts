import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrls: ['./actualiza-component.component.css']
})
export class ActualizaComponentComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute, miServicio:ServicioEmpleadosService, private empleadosService:EmpleadosService) { //inyectamos el servicio de enrutamiento

  }

  empleados:Empleado[]=[];
  accion:number;

  ngOnInit(): void {
    this.accion=parseInt(this.route.snapshot.queryParams['accion']);
    this.empleados=this.empleadosService.empleados; 
    this.indice=this.route.snapshot.params['id'] //con esto capturamos el id que nos llega por la url
    let empleado:Empleado=this.empleadosService.encontrarEmpleado(this.indice);// a este metodo le pasamos el indice para que devuelva un empleado
    this.cuadroNombre=empleado.nombre;
    this.cuadroApellido=empleado.apellido;
    this.cuadroCargo=empleado.cargo;
    this.cuadroSalario=empleado.salario;
  }

  volverHome(){
    this.router.navigate(['']);//con esto podemos navegar a cualquier ruta
    
    

  
  }
  actualizarEmpleado(){
    if(this.accion==1){
      let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo,this.cuadroSalario);
      //this.miServicio.muestraMensaje("Nombre del empleado: "+ miEmpleado.nombre);
      this.empleadosService.actualizarEmpleado(this.indice,miEmpleado);//pasamos el indice y la variable de tipo empleado
      this.router.navigate(['']);}
    else{
      this.empleadosService.eliminarEmpleado(this.indice);//pasamos el indice y la variable de tipo empleado
      this.router.navigate(['']);}
  }

  /*eliminaEmpleado(){
    this.empleadosService.eliminarEmpleado(this.indice);//pasamos el indice y la variable de tipo empleado
    this.router.navigate(['']);
  }*/
    
  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;
  indice:number=0;

}
