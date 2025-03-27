import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Contato } from './contato';
import { AtualizarContatosService } from '../../services/atualizar-contatos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adicionar-contato',
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    FormsModule
  ],
  templateUrl: './adicionar-contato.component.html',
  styleUrl: './adicionar-contato.component.css'
})
export class AdicionarContatoComponent {
  constructor(private titleService: Title, private router: Router) {
    this.titleService.setTitle("Agenda - Adicionar")
  }

  public contatosService = inject(AtualizarContatosService)

  // usa a interface de Contato que criei para seguir o protótipo, tipo java.
  contatoDetails: Contato = {
    id: 0,
    Nome: "",
    Email: "",
    Telefone: "",
    Obs: ""
  }

  enviarFormulario(form: any):void {
    if (form.valid) {
      this.contatosService.addContato(this.contatoDetails);
    }

    if(confirm(`Usuário "${this.contatoDetails.Nome}" foi adicionado com sucesso.`)) {
      this.router.navigate(["/"])
    }
  }
}
