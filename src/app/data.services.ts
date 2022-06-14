import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";

@Injectable()
export class DataServices{

    constructor(private httpClient:HttpClient){}

    guardarEmpleados(empleados:Empleado[]){
        this.httpClient.post('https://mis-clientes-429d7-default-rtdb.europe-west1.firebasedatabase.app/datos.json,empleados',empleados);
    }

}