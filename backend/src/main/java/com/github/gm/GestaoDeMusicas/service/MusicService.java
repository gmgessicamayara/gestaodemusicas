package com.github.gm.GestaoDeMusicas.service;

import java.util.List;

import com.github.gm.GestaoDeMusicas.dto.MusicDTO;

public interface MusicService {
	
	MusicDTO createMusic(MusicDTO musicDTO);
	
	MusicDTO updateMusic(Long musicId, MusicDTO musicDto);
	
	MusicDTO getMusicById(Long musicId);
	
	List<MusicDTO> getAllMusics();
	
	void deleteMusic(Long musicId);

}
