package com.agenda.back_end.adapters.in.web;

import com.agenda.back_end.application.domain.Contato;
import com.agenda.back_end.application.ports.in.ContatoUseCases;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/contato")
@CrossOrigin(origins = "*", maxAge = 3600)
public class ContatoController {
    @Autowired
    private ContatoUseCases contatoUseCases;

    @PostMapping()
    public ResponseEntity<?> adicionarContato(@RequestBody Contato contato) {
        try {
            Contato resultado = contatoUseCases.PostContato(contato);
            return ResponseEntity.status(HttpStatus.OK).body(contato);
        } catch (Exception e) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("Mensagem: ", "Erro interno no servidor: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }
    }

    @GetMapping()
    public ResponseEntity<List<Contato>> pegarTodosOsContatos() {
        try {
            List<Contato> contatoList = contatoUseCases.GetAllContatos();

            if(contatoList.isEmpty()) {
                ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
            }

            return ResponseEntity.ok(contatoList);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @GetMapping("/pegarPorId/{id}")
    public ResponseEntity<?> PegarContatoPorId (@PathVariable(value = "id") Long id) {
        try {
            Contato contato = contatoUseCases.GetContatoPorID(id);
            return ResponseEntity.status(HttpStatus.OK).body(contato);
        } catch (NoSuchElementException e) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("Mensagem: ", e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResponse);
        } catch (Exception e) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("Mensagem: ", "Erro interno no servidor: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }
    }

    @GetMapping("/pegarPorNome/{nome}")
    public ResponseEntity<List<Contato>> PegarContatoPorNome (@PathVariable(value = "nome") String Nome) {
        try {
            List<Contato> contatoList = contatoUseCases.GetContatoPorNome(Nome);

            if (contatoList.isEmpty()) {
                ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
            }

            return ResponseEntity.ok(contatoList);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @PutMapping("/editar/{id}")
    public ResponseEntity<?> EditarContatoPorID (@RequestBody Contato contatoDetails, @PathVariable(value = "id") Long id) {
        try {
            Contato contato = contatoUseCases.EditarContato(contatoDetails, id);
            return ResponseEntity.status(HttpStatus.OK).body(contato);
        } catch (NoSuchElementException e) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("Mensagem: ", e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResponse);
        } catch (Exception e) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("Mensagem: ", "Erro interno no servidor: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }
    }

    @DeleteMapping("/deletarContato/{id}")
    public ResponseEntity<Map<String, String>> deleteContato(@PathVariable(value = "id") Long id) {
        try {
            List<Contato> contatoList = contatoUseCases.GetAllContatos();

            boolean idExiste = contatoList.stream().anyMatch(contato -> contato.getId().equals(id));

            if (!idExiste) {
                Map<String, String> errorRepsponse = new HashMap<>();
                errorRepsponse.put("Mensagem", "Erro: Contato com o id " + id + " não foi encontrada");
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorRepsponse);
            }

            contatoUseCases.DeleteContato(id);

            Map<String, String> response = new HashMap<>();
            response.put("message", "Tag com o id: " + id + " foi deletada com sucesso");
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("Mensagem", "Erro interno no servidor: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }
    }
}
