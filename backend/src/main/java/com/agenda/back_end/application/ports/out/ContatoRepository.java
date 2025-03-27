package com.agenda.back_end.application.ports.out;

import com.agenda.back_end.application.domain.Contato;

import java.util.List;
import java.util.Optional;

public interface ContatoRepository {
    Contato save (Contato contato);

    List<Contato> getAllContatos ();

    Optional<Contato> getContatoPorId (Long id);

    List<Contato> findContatoPorNome (String nome);

    void deleteById(Long id);
}
