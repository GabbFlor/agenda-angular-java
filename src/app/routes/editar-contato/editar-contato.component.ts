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
    id: 0,
    Nome: "",
    Email: "",
    Telefone: "",
    Obs: ""
  }

  buscarContatoPorId(id:number):void {
    this.contatoSelecionado = this.contatosService.getContatoPorId(id);

    if (this.contatoSelecionado) {
      this.contatoDetailsEdit.id = id;
      this.contatoDetailsEdit.Nome = this.contatoSelecionado.Nome;
      this.contatoDetailsEdit.Email = this.contatoSelecionado.Email;
      this.contatoDetailsEdit.Telefone = this.contatoSelecionado.Telefone;
      this.contatoDetailsEdit.Obs = this.contatoSelecionado.Obs;
    }
  }

  ngOnInit(): void {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'))
    this.buscarContatoPorId(this.id);
  }

  editarUsuario(form:any) {
    if(form.valid && this.id !== null) {
      this.contatosService.editarContato(this.id, this.contatoDetailsEdit)

      if(confirm(`Usuário: "${this.contatoDetailsEdit.Nome}" foi editado com sucesso!`)) {
        this.router.navigate(["/"]);
      }
    } else {
      console.error(`Id : "${this.id}" é inválido.`);
    }
  }
}
