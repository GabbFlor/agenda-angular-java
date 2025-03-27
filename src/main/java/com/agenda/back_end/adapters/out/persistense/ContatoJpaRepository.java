package com.agenda.back_end.adapters.out.persistense;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ContatoJpaRepository extends JpaRepository<ContatoEntity, Long> {
//    colocar consultas personalizadas aqui (tipo "FindByNome")
    List<ContatoEntity> findByNomeContainingIgnoreCase(String nome);

}
