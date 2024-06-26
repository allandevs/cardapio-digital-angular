import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'cardapio',
    loadChildren: () =>
      import('./feature/cardapio/cardapio.module').then(m => m.CardapioModule),
  },
  {
    path: 'pedido',
    loadChildren: () =>
      import('./feature/pedido/pedido.module').then(m => m.PedidoModule),
  },
  {
    path: 'error',
    loadChildren: () => import('./error/error.module').then(m => m.ErrorModule),
  },
  { path: '', redirectTo: '/cardapio', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
