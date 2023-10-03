export class RolesDTO {
    id_roles: number;
    nombre:string;
    descripcion:string;


    constructor(data: RolesDTO) {
        this.id_roles = data.id_roles;
        this.nombre = data.nombre;
        this.descripcion = data.descripcion;
    }
}	