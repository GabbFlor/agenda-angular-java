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

    @Column(name = "Nome", nullable = false, length = 50)
    private String nome;

    @Column(name = "Email", nullable = false, unique = true, length = 75)
    private String email;

    @Column(name = "Telefone", nullable = false, unique = true, length = 12)
    private String telefone;

//    Lob significa que é uma grande quantidade de dados (Texto)
    @Lob
//    columnDefinition define o tipo da coluna como TEXT
    @Column(name = "Obs", nullable = true, columnDefinition = "TEXT")
    private String obs;
}
