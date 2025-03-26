import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AtualizarContatosService {

  constructor() { }

  contatos = [
    { id: 1, Nome: "Gabriel Florindo", Email: "gabrielflorindoduarte@gmail.com", Telefone: "11970441052", Obs: "Um bom dev (talvez)." },
    { id: 2, Nome: "Ana Souza", Email: "ana.souza@example.com", Telefone: "11987654321", Obs: "Especialista em UX/UI." },
    { id: 3, Nome: "Carlos Silva", Email: "carlos.silva@example.com", Telefone: "11976543210", Obs: "Full-stack developer." },
    { id: 4, Nome: "Mariana Costa", Email: "mariana.costa@example.com", Telefone: "11965432109", Obs: "Entusiasta de IA." },
    { id: 5, Nome: "Pedro Henrique", Email: "pedro.henrique@example.com", Telefone: "11954321098", Obs: "Backend com Node.js." },
    { id: 6, Nome: "Fernanda Lima", Email: "fernanda.lima@example.com", Telefone: "11943210987", Obs: "React Native expert." },
    { id: 7, Nome: "João Pedro", Email: "joao.pedro@example.com", Telefone: "11932109876", Obs: "Focado em segurança da informação." },
    { id: 8, Nome: "Beatriz Almeida", Email: "beatriz.almeida@example.com", Telefone: "11921098765", Obs: "Desenvolvedora Python." },
    { id: 9, Nome: "Lucas Oliveira", Email: "lucas.oliveira@example.com", Telefone: "11910987654", Obs: "Curte automação com scripts." },
    { id: 10, Nome: "Camila Santos", Email: "camila.santos@example.com", Telefone: "11909876543", Obs: "Apaixonada por front-end." }
  ];

  // método para procurar usuário pelo seu id
  getContatoPorId(id:number) {
    return this.contatos.find(contato => contato.id == id);
  }

  // retorna uma unidade a mais do maior id da array "contatos" (trabalha em conjunto com a função "addContato")
  getIdDoContato(): number {
    // verifica se a lista ta vazia, se sim, retorna id 1
    if (this.contatos.length == 0) {
      return 1;
    }

    // pega o maior id da lista e retorna ele+1 (semelhante ao AUTO INCREMENT do banco de dados)
    return Math.max(...this.contatos.map(c => c.id)) + 1;
  }

  // metodo para adicionar um novo usuário
  addContato(contato: any) {
    contato.id = this.getIdDoContato();
    this.contatos.push(contato);
  }

  // método para deletar um contato
  deleteContato(idContato:number) {
    // filtra a lista deixando só os contatos que não tem o id igual ao id contato
    this.contatos = this.contatos.filter(contato => contato.id !== idContato)
  }
}
