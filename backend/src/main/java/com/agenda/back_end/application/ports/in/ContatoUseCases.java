package com.agenda.back_end.application.ports.in;

import com.agenda.back_end.application.domain.Contato;

import java.util.List;

public interface ContatoUseCases {
    Contato PostContato(Contato contato);

    List<Contato> GetAllContatos();

    Contato GetContatoPorID(Long id);

    List<Contato> GetContatoPorNome(String nome);

    Contato EditarContato(Contato contatoDetails, Long id);

    void DeleteContato(Long id);
}
