import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()
export class EmpleadosService{

  constructor(private servicioVentanaEmergente: ServicioEmpleadosService){

  }
    empleados:Empleado[]=[
        new Empleado("Juan","Diaz","Presidente",7500),
        new Empleado("Ana","Martin","Directora",5500),
        new Empleado("María","Fdez","Jefe sección",3500),
        new Empleado("Laura","López","Administrativo",2500),
      ];

      agregarEmpleadoServicio(empleado:Empleado){
        this.servicioVentanaEmergente.muestraMensaje("Persona que va agregar"+ "\n"+
        empleado.nombre + "\n" +empleado.cargo);
        this.empleados.push(empleado);
      }

      encontrarEmpleado(indice:number){// a este empleado le pasamos el indice para que nos devuelva un empleado
        let empleado:Empleado=this.empleados[indice];
        
        return empleado
      }

      actualizarEmpleado(indice:number, empleado:Empleado){

        let empleadoModificado=this.empleados[indice];
        empleadoModificado.nombre=empleado.nombre;
        empleadoModificado.apellido=empleado.apellido;
        empleadoModificado.cargo=empleado.cargo;
        empleadoModificado.salario=empleado.salario;

      }
      eliminarEmpleado(indice:number){
        this.empleados.splice(indice,1
          );
      }
}