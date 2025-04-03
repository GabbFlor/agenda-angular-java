import { Component, OnInit } from '@angular/core';
import { Contato } from './contato';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AtualizarContatosService } from '../../services/atualizar-contatos.service';

@Component({
  selector: 'app-editar-contato',
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    FormsModule
  ],
  templateUrl: './editar-contato.component.html',
  styleUrl: './editar-contato.component.css'
})
export class EditarContatoComponent implements OnInit {
  public id: number | null = null;
  public contatoSelecionado : any;

  constructor(
    private titleService: Title, 
    private router: Router,
    private contatosService: AtualizarContatosService,
    private activatedRoute : ActivatedRoute
  ) {
    this.titleService.setTitle("Agenda - Editar")
  }

  contatoDetailsEdit: Contato = {
    nome: "",
    email: "",
    telefone: "",
    obs: ""
  }

  buscarContatoPorId(id:number):void {
    this.contatosService.getContatoPorId(id).subscribe({
      next: (dados) => {
        this.contatoSelecionado = dados;

        this.contatoDetailsEdit.nome = this.contatoSelecionado.nome;
        this.contatoDetailsEdit.email = this.contatoSelecionado.email;
        this.contatoDetailsEdit.telefone = this.contatoSelecionado.telefone;
        this.contatoDetailsEdit.obs = this.contatoSelecionado.obs;
      },
      error: (erro) => {
        console.error(`Erro ao recuperar contato: ${erro}`)
      }
    })
  }

  ngOnInit(): void {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'))
    // buscar as informações do id
    this.buscarContatoPorId(this.id);
  }

  editarUsuario(form:any) {
    if(form.valid && this.id !== null) {
      this.contatosService.editarContato(this.id, this.contatoDetailsEdit).subscribe({
        next: (dados) => {
          if(confirm(`Usuário: "${this.contatoDetailsEdit.nome}" foi editado com sucesso!`)) {
            this.router.navigate(["/"]);
          }
        },
        error: (erro) => {
          console.error(`Erro ao editar o contato: ${erro}`)
        }
      })
    } else {
      console.error(`Id : "${this.id}" é inválido.`);
    }
  }
}
