import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component'
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NuevoComponent } from './pages/cliente/nuevo/nuevo.component';
import { EditarComponent } from './pages/cliente/editar/editar.component';
import { ListaComponent } from './pages/cliente/lista/lista.component';
import { DetalleComponent } from './pages/cliente/detalle/detalle.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'client/new', component: NuevoComponent },
  { path: 'client/edit', component: EditarComponent },
  { path: 'client/list', component: ListaComponent },
  { path: 'client/detail', component: DetalleComponent }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  DashboardComponent,
  NuevoComponent,
  ListaComponent,
  EditarComponent,
  DetalleComponent]
