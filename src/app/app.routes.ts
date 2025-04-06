import { Routes } from '@angular/router';

export const routes: Routes = [
    { 
        path: '', 
        redirectTo: 'products', 
        pathMatch: 'full' 
    },
    {
        path: 'products',
        loadComponent: () => import('@components/product-list/product-list.component').then(c => c.ProductListComponent)
    },
    // { path: 'products', loadChildren: () => import('@components/product-list/product-list.component').then(m => m.ProductListComponent) },
    // { path: 'products/:id', component: ProductComponent },
    { path: '**', redirectTo: 'products' }
];
