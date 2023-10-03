export class UsuarioDTO {
    id_usuarios?: number;
    nombres: string;
    apellidos: string;
    clave: string;
    correo: string;
    identificacion: string;
    celular: string;
    id_estado: {id_estados:number;};
    id_roles: {id_roles:number;};
  
    constructor(data: UsuarioDTO) {
      this.id_usuarios = data.id_usuarios;
      this.nombres = data.nombres;
      this.apellidos = data.apellidos;
      this.clave = data.clave;
      this.correo = data.correo;
      this.identificacion = data.identificacion;
      this.celular = data.celular;
      this.id_estado = data.id_estado;
      this.id_roles =data.id_roles;
    }
  }