package com.sebastianabril.profile.service;

import com.sebastianabril.profile.model.Profile;
import com.sebastianabril.profile.repository.ProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProfileService {

    @Autowired
    private ProfileRepository profileRepository;

    public void createProfile(String name, String lastName, String email, String phoneNumber, String city, String country ){

        Profile profile = new Profile();
        profile.setName(name);
        profile.setLastName(lastName);
        profile.setEmail(email);
        profile.setPhoneNumber(phoneNumber);
        profile.setCity(city);
        profile.setCountry(country);

        profileRepository.save(profile);
    }

    public List<Profile> getProfiles(){
        return profileRepository.findByOrderByIdAsc();
    }

    public Profile getProfileById(Long id){
        Optional<Profile> optionalProfile = profileRepository.findById(id);
        if(optionalProfile.isEmpty()){
            throw new RuntimeException("There's not a profile with the requested id");
        }
        return optionalProfile.get();
    }
}


