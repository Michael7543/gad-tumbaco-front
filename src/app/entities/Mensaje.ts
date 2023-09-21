export interface MensajeModel {
    id:      number;
    nick:    string;
    mensaje: string;

}

export interface UpdateMensajeDTO extends Partial<MensajeModel> {

}

