<template>
  <div id="app" class="container">
      <form class="form-group">
    <legend>Ajouter un chercheur : </legend><br />
    <div class="form-group">
    <label>Nom : </label><input v-model="chercheur.nom" class="form-control" placeholder="Votre Nom">
    </div>
    <div class="form-group">
    <label>Prenom : </label><input v-model="chercheur.prenom" class="form-control">
    </div>

    <div class="form-group">
    <label>URL Page Web : </label><input v-model="chercheur.urlPageWeb" class="form-control">
    </div>


    <div class="form-group" v-if="checkImage()">
    <label>Photo de Profil :  </label><br><img :src="chercheur.imageDeProfil" fluid class="img-profil"><br><br><input type="file" @change="getphoto">
    </div>
    <div class="form-group" v-if="!checkImage()">
    <label>Photo de Profil :  </label><br><img src="http://camelbacksportstherapy.com/wp-content/uploads/2019/04/Facebook-no-profile-picture-icon-620x389-1-e1554752800220.jpg" fluid class="img-profil"><br><br><input type="file" @change="getphoto">
    </div>

    <div class="form-group">
    <label>Affiliation :</label>  <textarea v-model="chercheur.affiliation" class="form-control" rows ="3"></textarea>
    </div>

    <div v-if="checkForm()">
        <v-btn @click="addToChercheurArray(chercheur)"> Ajouter </v-btn>
    </div>
    <div v-if="!checkForm()">
        <v-btn disabled @click="addToChercheurArray(chercheur)"> Ajouter </v-btn>
    </div></form>
    <br>
    <table class="table">
        <tr>
            <th>
                Nom</th>
            <th>
                Prenom
            </th>
            <th>
                URL Page WEB
            </th>
            <th>
                Photo De Profil
            </th>
            <th>
                Affiliation
            </th>
        </tr>
        <tr v-for="chercheur in chercheurs" v-bind:key="chercheur.chercheur.nom">
            <td>{{ chercheur.chercheur.nom }}</td>
            <td>{{ chercheur.chercheur.prenom }}</td> 
            <td>{{ chercheur.chercheur.urlPageWeb }}</td> 
            <td> <img :src="chercheur.chercheur.imageDeProfil" fluid class="img-profil-in-tab"> </td> 
            <td>{{ chercheur.chercheur.affiliation }}</td>
        </tr>
    </table>
  </div>
</template>
  
  <script>

export default {
  data() {
      return{
          chercheurs:[],
          chercheur:{
              nom:undefined,
              prenom:undefined,
              urlPageWeb:undefined,
              imageDeProfil:undefined,
              affiliation:undefined
          }
      }
  },
  methods: {
      addToChercheurArray: function(chercheurToAdd){
          let chercheur = new Object();
          chercheur.nom = chercheurToAdd.nom,
          chercheur.prenom = chercheurToAdd.prenom,
          chercheur.urlPageWeb = chercheurToAdd.urlPageWeb,
          chercheur.imageDeProfil = chercheurToAdd.imageDeProfil,
          chercheur.affiliation = chercheurToAdd.affiliation,
          this.chercheurs.push({
              chercheur
              });
          this.chercheur.nom = undefined;
          this.chercheur.prenom = undefined;
          this.chercheur.urlPageWeb = undefined;
          this.chercheur.imageDeProfil = undefined;
          this.chercheur.affiliation = undefined;
      },
      checkForm: function(){
          if (!this.chercheur.nom){
              return false;
          }
          else if (!this.chercheur.prenom){
              return false;
          }
          else{
              return true;
          }

      },
      checkImage(){
          if (this.chercheur.imageDeProfil){
              return true;
          }
          return false;
      },
       getphoto(event) {
            this.chercheur.imageDeProfil = URL.createObjectURL(event.target.files[0]);

    },
  },

};
</script>
  
  <style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}
table {
  border: 2px solid #42b983;
  border-radius: 3px;
  background-color: #fff;
}

th {
  background-color: #42b983;
  color: rgba(255, 255, 255, 0.66);
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.img-profil{
    width:200px;
    height:200px;
}

.img-profil-in-tab{
    width:100px;
    height:100px;
}
</style>