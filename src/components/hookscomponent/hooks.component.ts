import { Component, OnInit } from "@angular/core";

@Component({
    selector: "hooks-component",
    standalone: false,
    templateUrl: "./hooks.component.html"
})

export class HooksComponent implements OnInit{
    public mensaje: string
    constructor() {
        console.log("Construtor: Primer metodo del component")
        this.mensaje = "Hoy es lunes..."
    }

    ngOnInit(): void {
        console.log("OnInit: Me ejecuto despues del constructor")
    }

    ngDoCheck(): void{
        console.log("DoCheck: Me ejecuto al cambiar el render")
    }

    cambiarMensaje(): void {
        this.mensaje = "Y mañana martes!!!"
    }
}