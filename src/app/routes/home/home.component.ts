import { Component, inject } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { AtualizarContatosService } from '../../services/atualizar-contatos.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public contatosService = inject(AtualizarContatosService)
  public contatos = this.contatosService.contatos;

  public contatoSelecionado : any;

  buscarContatoPorId(id:number) {
    this.contatoSelecionado = this.contatosService.getContatoPorId(id);

    if (this.contatoSelecionado) {
      console.log(this.contatoSelecionado)
    } else {
      console.error(`Contato com o Id: ${id} não foi encontrado.`)
    }
    
  }
}
