package com.github.gm.GestaoDeMusicas.dto;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class MusicDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private Long id;

	private String titulo;

	private String artista;

	private String album;

	private String genero;

	private String duracao;

	private String disponibilidade;

}
