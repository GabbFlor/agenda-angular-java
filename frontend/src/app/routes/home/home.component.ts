import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { AtualizarContatosService } from '../../services/atualizar-contatos.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Title } from '@angular/platform-browser';

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
export class HomeComponent implements OnInit {
  public contatosService = inject(AtualizarContatosService)

  // cria a array de contatos vazia por enquanto
  public contatos: any[] = [];
  
  ngOnInit(): void {
    // chama o método (ou função)
    this.atualizarContatos();
  }

  atualizarContatos() {
    this.contatosService.getContatos().subscribe({
      // pega os dados que retornarem e manda para a array de contatos
      // semelhante ao .then e .catch do axios do react
      next: (dados) => {
        this.contatos = dados;
        // console.table(dados);
      },
      error: (erro) => {
        console.error(`Erro ao puxar os dados da API: ${erro}`)
      }
    })
  }

  constructor(
    private titleService: Title
  ) {
    this.titleService.setTitle("Agenda - Home")
  }

  deletarContato(id:number) {
    if(confirm("Tem certeza que deseja deletar esse contato?")) {
      // deleta o contato
      this.contatosService.deleteContato(id).subscribe({
        next: (dados) => {
          console.log("Contato deletado com sucessso")

          // atualiza dnv a lista de contatos
          this.atualizarContatos();
        },
        error: (erro) => {
          console.error(`Erro ao deletar contato: ${erro}`)
        }
      });

      
    }
  }
}
