package com.sebastianabril.profile.controller;

import com.sebastianabril.profile.model.Profile;
import com.sebastianabril.profile.service.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ProfileController {

    @Autowired
    private ProfileService profileService;

    @PostMapping("/profile")
    public void create(@RequestBody Profile profile){
        String name = profile.getName();
        String lastName = profile.getLastName();
        String email = profile.getEmail();
        String phoneNumber = profile.getPhoneNumber();
        String city = profile.getCity();
        String country = profile.getCountry();

        profileService.createProfile(name,lastName,email,phoneNumber,city,country);

    }

    @GetMapping("/profile")
    public List<Profile> get(){
        return profileService.getProfiles();
    }

    @GetMapping("/profile/{id}")
    public Profile getById(@PathVariable Long id){
        return profileService.getProfileById(id);
    }


}
