import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pesquisa',
  imports: [],
  templateUrl: './pesquisa.component.html',
  styleUrl: './pesquisa.component.css'
})
export class PesquisaComponent implements OnInit {
  public parametro: string | null = null

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const parametroText = this.route.snapshot.paramMap.get("consulta");
    this.parametro = parametroText ? String(parametroText) : "";

    if (parametroText !== null) {
      // comando para recuperar a pesquisa por nome
    } else {
      console.error("Parâmetro de pesquisa inválido ou não fornecido na URL");
    }
  }

  
}
