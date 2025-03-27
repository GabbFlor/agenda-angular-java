package com.agenda.back_end.adapters.out.persistense;

import com.agenda.back_end.application.domain.Contato;
import com.agenda.back_end.application.ports.out.ContatoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Component
public class ContatoRepositoryImp implements ContatoRepository {

    @Autowired
    private ContatoJpaRepository contatoJpaRepository;

    @Override
    public Contato save(Contato contato) {
        ContatoEntity contatoEntity = toEntity(contato);
        return toDomain(contatoJpaRepository.save(contatoEntity));
    }

    @Override
    public List<Contato> getAllContatos() {
        return contatoJpaRepository.findAll().stream().map(this::toDomain).collect(Collectors.toList());
    }

    @Override
    public Optional<Contato> getContatoPorId(Long id) {
        return contatoJpaRepository.findById(id).map(this::toDomain);
    }

    @Override
    public List<Contato> findContatoPorNome(String nome) {
        return contatoJpaRepository.findByNomeContainingIgnoreCase(nome).stream().map(this::toDomain).collect(Collectors.toList());
    }

    @Override
    public void deleteById(Long id) {
        contatoJpaRepository.deleteById(id);
    }

    private Contato toDomain(ContatoEntity entity) {
        Contato contato = new Contato();
        contato.setId(entity.getId());
        contato.setNome(entity.getNome());
        contato.setEmail(entity.getEmail());
        contato.setTelefone(entity.getTelefone());
        contato.setObs(entity.getObs());

        return contato;
    }

    private ContatoEntity toEntity(Contato contato) {
        ContatoEntity entity = new ContatoEntity();
        entity.setId(contato.getId());
        entity.setNome(contato.getNome());
        entity.setEmail(contato.getEmail());
        entity.setTelefone(contato.getTelefone());
        entity.setObs(contato.getObs());

        return entity;
    }
}
