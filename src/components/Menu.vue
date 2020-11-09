<template>
  <v-container>
    <navbar class="navbar navbar-expand-lg navbar-light bg-light">
        <span class="navbar-brand">FORMULAIRES</span>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav" id="navbarNavAltMarkup">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Accueil</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Formulaire1"
              >Formulaire 1 : Chercheur</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/Formulaire2" class="nav-link"
              >Formulaire 2 : Ouvrage</router-link
            >
          </li>
        </ul>
      </div>
    </navbar>
    
  </v-container>
</template>