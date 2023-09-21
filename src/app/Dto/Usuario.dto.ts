export class UsuarioDTO {
    id: number;
    nombre: string;
    apellido: string;
    cedula: string;
    departamento: string;
  
    constructor(data: UsuarioDTO) {
      this.id = data.id;
      this.nombre = data.nombre;
      this.apellido = data.apellido;
      this.cedula = data.cedula;
      this.departamento = data.departamento;
    }
  }