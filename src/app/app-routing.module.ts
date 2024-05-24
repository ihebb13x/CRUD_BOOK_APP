import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivresComponent } from './livres/livres.component';
import { AddLivreComponent } from './add-livre/add-livre.component';
import { UpdateLivreComponent } from './services/update-livre/update-livre.component';
import { LoginComponent } from './login/login.component';
 
const routes: Routes = [
  { path: "livres", component: LivresComponent },
  { path: "add-livre", component: AddLivreComponent },
  { path: "", redirectTo: "livres", pathMatch: "full" },
  { path: "updateLivre/:id", component: UpdateLivreComponent },
  {path: 'login', component: LoginComponent},
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
