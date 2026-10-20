import { Component } from "@angular/core"

@Component ({
    selector: "app-deportes",
    standalone: false,
    templateUrl: "./deportes.component.html",
    styleUrl: "./deportes.component.css"
})

export class DeportesComponent {
    public sports: Array<string>
    public numeros: Array<number>
    constructor() {
        this.sports = ["Canicas", "Petanca", "Futbol", "Basket"]
        this.numeros = [4, 77, 81, 14, 15, 56]
    }
}