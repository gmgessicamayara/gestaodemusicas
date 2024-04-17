package com.github.gm.GestaoDeMusicas.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.github.gm.GestaoDeMusicas.dto.MusicDTO;
import com.github.gm.GestaoDeMusicas.entities.Music;
import com.github.gm.GestaoDeMusicas.exception.ResourceNotFoundException;
import com.github.gm.GestaoDeMusicas.mapper.MusicMapper;
import com.github.gm.GestaoDeMusicas.repository.MusicRepository;
import com.github.gm.GestaoDeMusicas.service.MusicService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class MusicServiceImpl implements MusicService {

	private MusicRepository musicRepository;

	@Override
	public MusicDTO createMusic(MusicDTO musicDTO) {

		Music music = MusicMapper.mapToMusic(musicDTO);
		Music savedMusic = musicRepository.save(music);
		return MusicMapper.mapToMusicDto(savedMusic);
	}

	@Override
	public MusicDTO getMusicById(Long musicId) {
		Music music = musicRepository.findById(musicId)
				.orElseThrow(() -> new ResourceNotFoundException("Music is not exists with given ID: " + musicId));
		return MusicMapper.mapToMusicDto(music);
	}

	@Override
	public List<MusicDTO> getAllMusics() {
		List<Music> musics = musicRepository.findAll();
		return musics.stream().map((music) -> MusicMapper.mapToMusicDto(music)).collect(Collectors.toList());
	}

	@Override
	public MusicDTO updateMusic(Long musicId, MusicDTO updateMusicDto) {
		Music music = musicRepository.findById(musicId)
				.orElseThrow(() -> new ResourceNotFoundException("Music is not exists with given ID: " + musicId));

		music.setAlbum(updateMusicDto.getAlbum());
		music.setTitulo(updateMusicDto.getTitulo());
		music.setArtista(updateMusicDto.getArtista());
		music.setDisponibilidade(updateMusicDto.getDisponibilidade());
		music.setGenero(updateMusicDto.getGenero());
		music.setDuracao(updateMusicDto.getDuracao());

		Music updateMusicObject = musicRepository.save(music);
		return MusicMapper.mapToMusicDto(updateMusicObject);
	}

	@Override
	public void deleteMusic(Long musicId) {
		Music music = musicRepository.findById(musicId)
				.orElseThrow(() -> new ResourceNotFoundException("Music is not exists with given ID: " + musicId));
		musicRepository.delete(music);
	}

}
