import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RoomComponent } from './components/room/room.component';
import { LoginComponent } from './components/login/login.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/room' },
  {
    path: 'room',
    component: RoomComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login'])),
  },
  {
    path: 'room/:id',
    component: RoomComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login'])),
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
