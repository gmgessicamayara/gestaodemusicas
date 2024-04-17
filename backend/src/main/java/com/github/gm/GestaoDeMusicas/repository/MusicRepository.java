package com.github.gm.GestaoDeMusicas.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.github.gm.GestaoDeMusicas.entities.Music;

public interface MusicRepository extends JpaRepository<Music, Long>{

}
