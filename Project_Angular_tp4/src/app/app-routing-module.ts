import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Welcome } from './welcome/welcome';
import { Articles } from './articles/articles';
import { Produits } from './produits/produits';
import { Taches } from './taches/taches';
import { Etudiant } from './etudiant/etudiant';

/**
 * Configuration des routes de l'application
 * Chaque route correspond à un composant spécifique
 */
const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: Welcome },
  { path: 'articles', component: Articles },
  { path: 'produits', component: Produits },
  { path: 'taches', component: Taches },
  { path: 'etudiant', component: Etudiant }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
