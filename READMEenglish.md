# Profile-App

This great project has an interface with three screens where you can add new Profiles with their personal information (name, last name, email, phone number, country, and city), check for all the Profiles and search a Profile by its unique id. Profile-App uses React as Frontend Framework with Material UI and Java with Springboot, JPA and Hibernate for handling the backend with a h2 in memory database.

  
## Architecture
This application uses a layer architecture that is divided into Frontend (Profile-App) and Backend (Profile-API).

![Architecture](./Architecture.png)

### Frontend

The Frontend was built with a two-layer architecture: screens and service.

- Screens: contains the screens that compound the user interface:

    - ProfileListScreen.
    - NewProfileScreen.
    - ViewProfileScreen.

- Service: contains the functions that allows the Frontend to communicate with the Backend API.

    - getProfiles.
    - getProfileById.
    - createProfile.

#### Routes
The Routes established with React Router are:
- "/": this is the homepage, also you can go to `ProfileListScreen` by clicking on "PROFILE LIST" button.

- "/new": go to `NewProfileScreen` by cliking on "NEW" button.

- "/profile/:id": go to `ViewProfileScreen` by clicking on a table row.


### Backend

The Profile-API was built with Springboot, it has a 3 layer architecture: controller, service and repository. JPA with SpringData was used for the repository layer; in memory data base h2 was was used as database.

- Profile: this class represents the model which has the following attributes:
    - Name.
    - Lastname.
    - Email.
    - PhoneNumber.
    - City.
    - Country.

- ProfileController: this class exposes the following endpoints:
    - Post("/profile")
    - Get("/profile")
    - Get("/profile/{id}")
- ProfileService: this class contains the business rules with the following methods:
    - createProfile
    - getProfiles
    - getProfileById
- ProfileRepository: data persistency layer that uses JPA.
- WebConfig: code that enables CORS.

## Instructions to run the Project
Requirements:
- Java 17
- Node 16

### Instrucciones para correr el backend:
 - 1. Go to backend folder and open a new terminal  there (Gitbash if it's Windows). Execute the sentence: 
 
    ```console
    ./gradlew bootRun
    ```

### instrucciones para correr  el frontend:

1. Go to frontend folder and open a new terminal. Execute the following sentences:

    ```console
    npm install
    npm run start
    ```








