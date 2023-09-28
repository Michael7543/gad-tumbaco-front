export interface DepartamentoModel {
    id_departamentos: number;
    nombre: string;
    descripcion: string;
}


export interface UpdateDepartamentoDTO extends Partial<DepartamentoModel> {

}
