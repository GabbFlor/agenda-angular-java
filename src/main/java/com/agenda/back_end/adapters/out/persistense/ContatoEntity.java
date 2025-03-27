package com.agenda.back_end.adapters.out.persistense;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

@Data
@Entity
@Table(name = "Contatos")
public class ContatoEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "Nome", nullable = false)
    private String nome;

    @Column(name = "Email", nullable = false)
    private String email;

    @Column(name = "Telefone", nullable = false)
    private String telefone;

    @Column(name = "Obs", nullable = false)
    private String obs;
}
