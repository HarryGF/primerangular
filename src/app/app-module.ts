import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { PrimerComponent } from '../components/primer.component/primer.component';
import { HooksComponent } from '../components/hookscomponent/hooks.component';
import { DeportesComponent } from '../components/deportescomponent/deportes.component';
import { FormsModule } from '@angular/forms';
import { FormsBindingComponent } from '../components/formsbindingcomponent/forms.binding.component';
import { SumarNumerosComponent } from '../components/sumarnumeroscomponent/sumar.numeros.component';
import { TablaMultiplicarComponent } from '../components/tabla-multiplicar-component/tabla-multiplicar-component';
import { TablaMultiplicarComponentV2 } from '../components/tabla-multiplicar-component-v2/tabla-multiplicar-component-v2';

@NgModule({
  declarations: [
    App,
    PrimerComponent,
    HooksComponent,
    DeportesComponent,
    FormsBindingComponent,
    SumarNumerosComponent,
    TablaMultiplicarComponent,
    TablaMultiplicarComponentV2
  ],
  imports: [BrowserModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
