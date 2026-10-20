import { Component } from "@angular/core";

// SIEMPRE DEBEMOS DECLARAR EL CONTENIDO DEL COMPONTENT
@Component({
    selector: "primer-component",
    standalone: false,
    templateUrl: "./primer.component.html",
    styleUrls:["./primer.component.css"]
})

export class PrimerComponent {
    public nombre: string;
    public year: number;

    constructor() {
        this.nombre = "Alumno";
        this.year = 2026;
    }
}