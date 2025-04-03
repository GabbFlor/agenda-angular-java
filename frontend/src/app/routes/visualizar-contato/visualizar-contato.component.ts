import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AtualizarContatosService } from '../../services/atualizar-contatos.service';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-visualizar-contato',
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './visualizar-contato.component.html',
  styleUrl: './visualizar-contato.component.css'
})
export class VisualizarContatoComponent implements OnInit {
  nomeContato : string;
  emailContato : string;
  telefoneContato : string;
  obsContato : string;
  public contatoSelecionado : any;
  public id: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private contatosService: AtualizarContatosService,
    private titleService: Title,
    private routerService: Router
  ) {
    this.nomeContato = '';
    this.emailContato = '';
    this.telefoneContato = '';
    this.obsContato = '';
    this.titleService.setTitle("Agenda - Visualizar")
  }

  // chamando módulo para executar comandos na montagem do componente
  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.id = idParam ? Number(idParam) : 0;

    if (this.id !== null) {
      this.buscarContatoPorId(this.id);
    } else {
      console.error("Id inválido ou não fornecido na URL");
    }
  }

  // buscando o contato pelo id
  buscarContatoPorId(id:number):void {
    this.contatosService.getContatoPorId(id).subscribe({
      next: (dados) => {
        this.contatoSelecionado = dados;
        console.log("Dados recuperados com sucesso!")

        this.nomeContato = this.contatoSelecionado.nome;
        this.emailContato = this.contatoSelecionado.email;
        this.telefoneContato = this.contatoSelecionado.telefone;
        this.obsContato = this.contatoSelecionado.obs;
      },
      error: (erro) => {
        console.error(`Erro ao recuperar contato: ${erro}`)
      }
    })
  }

  deletarContato(id:number):void {
    if(id !== null) {
      if(confirm("Tem certeza que deseja deletar esse contato?")) {
        // deleta o contato
        this.contatosService.deleteContato(id);
  
        this.routerService.navigate(["/"])
      }
    }
  }
}
