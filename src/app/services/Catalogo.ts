export class Catalogo {
    id: number;
    descripcion: string;
    fechaAlta: Date;
    fechaModificacion: Date;
    idUsuarioAlta: number;
    idUsuarioModificacion: number;
    idCatEstatus: number;

    constructor(
        id: number,
        descripcion: string,
        fechaAlta: Date,
        fechaModificacion: Date,
        idUsuarioAlta: number,
        idUsuarioModificacion: number,
        idCatEstatus: number
    ) {

    }
}
