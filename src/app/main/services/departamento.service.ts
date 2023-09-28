import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DepartamentoModel } from "../entities/Departamento";
import { Observable } from "rxjs";
import { DepartamentoDTO } from "../Dto/Departamento.dto";

@Injectable({
    providedIn: 'root'
  })
  export class DepartamentoService {
  
    readonly API_URL:string="http://localhost:3000/api/departamentos/listardepartamento";
    readonly apiUrl:string="http://localhost:3000/api/departamentos";
  
  
    constructor(private http:HttpClient) { }
  
    getDepartamento(): Observable<DepartamentoModel[]> {
      return this.http.get<DepartamentoModel[]>(this.API_URL);
    }
  
    getDepartamentoid(id: number): Observable<any> {
      return this.http.get(`${this.apiUrl}/departamentos/${id}`);
    }
  
  
    crearDepartamento(departamento: DepartamentoModel): Observable<any>{
      return this.http.post(`${this.apiUrl}/creardepartamento`, departamento);
    }
  
  
  
    /* eliminarMensaje(id: number): Observable<MensajeModel[]> {
      return this.http.delete<MensajeModel>('http://localhost:3000/mensajes' + id ).pipe(
        map(data => data.listado)
      );
    } */
  
    eliminarDepartamento(id_departamentos: number): Observable<any>{
      return this.http.delete(`${this.apiUrl}/eliminardepartamento/${id_departamentos}`);
    }
  
   /*  updateUsuario(usuario: UsuarioDTO,id: UsuarioModel['id'] ): Observable<any>{
      const url = `${this.apiUrl}/actualizarusuario/${id}`;
      return this.http.put<UsuarioModel>(url, usuario);
    }
   */
    updateDepartamento(id: number, report: DepartamentoDTO): Observable<any>{
      return this.http.put(`${this.apiUrl}/actualizardepartamento/${id}`, report )
    }
    
    
  }
  