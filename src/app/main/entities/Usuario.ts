

export interface UsuarioModel {
    id_usuarios: number;
    nombres: string;
    apellidos: string;
    clave: string;
    correo: string;
    identificacion: string;
    celular: string;
}


export interface UpdateUsuarioDTO extends Partial<UsuarioModel> {

}
