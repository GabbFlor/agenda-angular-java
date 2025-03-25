import { Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { EditarContatoComponent } from './routes/editar-contato/editar-contato.component';
import { VisualizarContatoComponent } from './routes/visualizar-contato/visualizar-contato.component';
import { AdicionarContatoComponent } from './routes/adicionar-contato/adicionar-contato.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "visualizar-contato/:id",
        component: VisualizarContatoComponent
    },
    {
        path: "editar-contato/:id",
        component: EditarContatoComponent
    },
    {
        path: "adicionar-contato",
        component: AdicionarContatoComponent
    }
];
