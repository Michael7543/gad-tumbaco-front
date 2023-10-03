export class EstadoDTO {
    id_estados: number;
    nombre_estado:string;
    acronimo:string;
    descripcion_estado:string;


    constructor(data: EstadoDTO) {
        this.id_estados = data.id_estados;
        this.nombre_estado = data.nombre_estado;
        this.acronimo = data.acronimo;
        this.descripcion_estado = data.descripcion_estado;
    }
}	