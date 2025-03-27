import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AtualizarContatosService } from '../../services/atualizar-contatos.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-visualizar-contato',
  imports: [],
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
    private titleService: Title
  ) {
    this.nomeContato = '';
    this.emailContato = '';
    this.telefoneContato = '';
    this.obsContato = '';
    this.titleService.setTitle("Agenda - Visualizar")
  }

  // chamando módulo para executar comandos na montagem do componente
  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.buscarContatoPorId(this.id);
  }

  // buscando o contato pelo id
  buscarContatoPorId(id:number):void {
    this.contatoSelecionado = this.contatosService.getContatoPorId(id);

    if (this.contatoSelecionado) {
      console.log("Contato recuperado com sucesso");

      this.nomeContato = this.contatoSelecionado.Nome;
      this.emailContato = this.contatoSelecionado.Email;
      this.telefoneContato = this.contatoSelecionado.Telefone;
      this.obsContato = this.contatoSelecionado.Obs;
    } else {
      console.error (`Contato com o id: ${id} não foi encontrado.`)
    }
  }
}
