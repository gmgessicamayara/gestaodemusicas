package com.github.gm.GestaoDeMusicas.mapper;

import com.github.gm.GestaoDeMusicas.dto.MusicDTO;
import com.github.gm.GestaoDeMusicas.entities.Music;

public class MusicMapper {
	
	public static MusicDTO mapToMusicDto(Music music) {
		return new MusicDTO(
				music.getId(),
				music.getTitulo(),
				music.getArtista(),
				music.getAlbum(),
				music.getGenero(),
				music.getDuracao(),
				music.getDisponibilidade());
	}
	
	public static Music mapToMusic(MusicDTO musicDTO) {
		return new Music(
				musicDTO.getId(),
				musicDTO.getTitulo(),
				musicDTO.getArtista(),
				musicDTO.getAlbum(),
				musicDTO.getGenero(),
				musicDTO.getDuracao(),
				musicDTO.getDisponibilidade());
	}
 

}
