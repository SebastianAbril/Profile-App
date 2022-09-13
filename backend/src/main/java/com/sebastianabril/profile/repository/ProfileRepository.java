package com.sebastianabril.profile.repository;

import com.sebastianabril.profile.model.Profile;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProfileRepository extends JpaRepository<Profile, Long> {
    public List<Profile> findByOrderByIdAsc();
}
