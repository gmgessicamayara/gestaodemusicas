package com.github.gm.GestaoDeMusicas.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.github.gm.GestaoDeMusicas.dto.MusicDTO;
import com.github.gm.GestaoDeMusicas.service.MusicService;

import lombok.AllArgsConstructor;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/musics")
public class MusicController {

	private MusicService musicService;

	@PostMapping()
	public ResponseEntity<MusicDTO> createMusic(@RequestBody MusicDTO musicDto) {
		MusicDTO savedMusic = musicService.createMusic(musicDto);
		return new ResponseEntity<>(savedMusic, HttpStatus.CREATED);
	}

	@GetMapping(value = "/{id}")
	public ResponseEntity<MusicDTO> getMusicById(@PathVariable Long id) {
		MusicDTO musicDto = musicService.getMusicById(id);
		return ResponseEntity.ok(musicDto);
	}

	@GetMapping()
	public ResponseEntity<List<MusicDTO>> getAllMusics() {
		List<MusicDTO> musics = musicService.getAllMusics();
		return ResponseEntity.ok(musics);
	}

	@PutMapping(value = "/{id}")
	public ResponseEntity<MusicDTO> updateMusic(@PathVariable("id") Long id, @RequestBody MusicDTO updateMusic) {
		MusicDTO musicDto = musicService.updateMusic(id, updateMusic);
		return ResponseEntity.ok(musicDto);
	}
	
	@DeleteMapping(value = "/{id}")
	public ResponseEntity<String> deleteMusic(@PathVariable("id") Long id) {
		musicService.deleteMusic(id);
		return ResponseEntity.ok("Music deleted successfully.");
	}

}
