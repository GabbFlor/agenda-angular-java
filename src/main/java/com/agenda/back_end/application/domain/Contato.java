package com.agenda.back_end.application.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Contato {
    private Long id;

    private String nome;

    private String email;

    private String telefone;

    private String obs;
}
