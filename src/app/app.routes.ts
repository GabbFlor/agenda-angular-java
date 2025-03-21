import { Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { EditarContatoComponent } from './routes/editar-contato/editar-contato.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "editar-contato/:id",
        component: EditarContatoComponent
    }
];
