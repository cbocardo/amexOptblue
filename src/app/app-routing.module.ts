import { AdquirienteComponent } from './page/adquiriente/adquiriente.component';
import { HomeComponent } from './page/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeAmexComponent } from './page/home-amex/home-amex.component';
import { RechazosBanorteComponent } from './page/fuentepapel/rechazos-banorte/rechazos-banorte.component';
import { LoginComponent } from './page/login/login.component';
////////////////Banorte////////////////////////////////

import { RechazosComponent } from './page/rechazos/rechazos.component';
import { CapturamanualComponent } from './page/capturamanual/capturamanual.component';
import { DetallerechazosModalComponent } from './page/detallerechazos-modal/detallerechazos-modal.component';

const routes: Routes = [
  { path: 'select_acquirer',component: AdquirienteComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home-amex', component: HomeAmexComponent },
 
  { path: 'rechazos-banorte', component: RechazosBanorteComponent },
  { path: 'rechazos-nacional', component: RechazosComponent },
  { path: 'detallerechazo/:id', component: DetallerechazosModalComponent},
  
  { path: 'captura-manual', component: CapturamanualComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
