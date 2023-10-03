import { EstadoDTO } from "../Dto/Estado.dto";
import { RolesDTO } from "../Dto/Roles.dto";


export interface UsuarioModel {
    id_usuarios: number;
    nombres: string;
    apellidos: string;
    clave: string;
    correo: string;
    identificacion: string;
    celular: string;
    id_estado: EstadoDTO | null;
    id_roles: RolesDTO | null;
}


export interface UpdateUsuarioDTO extends Partial<UsuarioModel> {

}
