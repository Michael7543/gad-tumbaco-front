

export interface UsuarioModel {
    id: number;
    nombre: string;
    apellido: string;
    cedula: string;
    departamento: string;
}


export interface UpdateUsuarioDTO extends Partial<UsuarioModel> {

}
