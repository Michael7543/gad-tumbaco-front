export class MensajeDTO {
    id: number;
    nick: string;
    mensaje: string;


    constructor(data: MensajeDTO) {
        this.id = data.id;
        this.nick = data.nick;
        this.mensaje = data.mensaje;
    }
}	