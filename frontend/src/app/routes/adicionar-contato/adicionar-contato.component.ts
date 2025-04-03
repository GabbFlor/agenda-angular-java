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
    nome: "",
    email: "",
    telefone: "",
    obs: ""
  }

  enviarFormulario(form: any) {
    if (form.valid) {
      this.contatosService.addContato(this.contatoDetails).subscribe({
        next: (dados) => {
          console.log(`Contato adicionar com sucesso: ${dados}`)
        },
        error: (erro) => {
          console.error(`Erro ao adicionar o contato: ${erro}`)
        }
      })
    }

    // pausa para mandar o usuário ara a Home
    if(confirm(`Usuário "${this.contatoDetails.nome}" foi adicionado com sucesso.`)) {
      this.router.navigate(["/"])
    }
  }
}
