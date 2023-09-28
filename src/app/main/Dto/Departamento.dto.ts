export class DepartamentoDTO {
    id_departamentos?: number;
    nombre: string;
    descripcion: string;

    constructor(data: DepartamentoDTO) {
      this.id_departamentos = data.id_departamentos;
      this.nombre = data.nombre;
      this.descripcion = data.descripcion;
   
    }
  }