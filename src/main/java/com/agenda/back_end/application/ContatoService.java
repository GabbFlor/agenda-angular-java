package com.agenda.back_end.application;

import com.agenda.back_end.application.domain.Contato;
import com.agenda.back_end.application.ports.in.ContatoUseCases;
import com.agenda.back_end.application.ports.out.ContatoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class ContatoService implements ContatoUseCases {

    @Autowired
    private ContatoRepository contatoRepository;

    @Override
    public Contato PostContato(Contato contato) {
        return contatoRepository.save(contato);
    }

    @Override
    public List<Contato> GetAllContatos() {
        return contatoRepository.getAllContatos();
    }

    @Override
    public Contato GetContatoPorID(Long id) {
        return contatoRepository.getContatoPorId(id).orElseThrow(() ->
                new NoSuchElementException("Contato com o id: " + id + " não foi encontrado."));
    }

    @Override
    public List<Contato> GetContatoPorNome(String nome) {
        return contatoRepository.findContatoPorNome(nome);
    }

    @Override
    public Contato EditarContato(Contato contatoDetails, Long id) {
        Contato contato = contatoRepository.getContatoPorId(id).orElseThrow(() ->
                new NoSuchElementException("Contato com o id: " + id + " não foi encontrado."));

        contato.setNome(contatoDetails.getNome());
        contato.setEmail(contatoDetails.getEmail());
        contato.setTelefone(contatoDetails.getTelefone());
        contato.setObs(contatoDetails.getObs());

        return contatoRepository.save(contato);
    }

    @Override
    public void DeleteContato(Long id) {
        contatoRepository.deleteById(id);
    }
}
