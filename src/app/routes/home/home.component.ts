import { Component, inject } from '@angular/core';
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
export class HomeComponent {
  public contatosService = inject(AtualizarContatosService)
  public contatos = this.contatosService.contatos;

  constructor(
    private titleService: Title
  ) {
    this.titleService.setTitle("Agenda - Home")
  }
}
