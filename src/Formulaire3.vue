<template>
  <div id="app" class="container">
      <form class="form-group">
    <legend>Ajouter une publication: </legend><br />
    <div class="form-group">
    <label>Titre : </label><input v-model="ouvrage.nomOuvrage" class="form-control" placeholder="Nom de l'ouvrage">
    </div>
    <div class="form-group">
    <label>Acronyme : </label><input v-model="ouvrage.acronyme" class="form-control" placeholder="Acronyme">
    </div>

    <div v-if="checkForm()">
        <v-btn @click="addToChercheurArray(ouvrage)"> Ajouter </v-btn>
    </div>
    <div v-if="!checkForm()">
        <v-btn disabled @click="addToChercheurArray(ouvrage)"> Ajouter </v-btn>
    </div></form>
    <br>
    <table class="table">
        <tr>
            <th>
                Nom de l'ouvrage</th>
            <th>
                Acronyme
            </th>
        </tr>
        <tr v-for="ouvrage in ouvrages" v-bind:key="ouvrage.ouvrage.nomOuvrage">
            <td>{{ ouvrage.ouvrage.nomOuvrage }}</td>
            <td>{{ ouvrage.ouvrage.acronyme }}</td> 
        </tr>
    </table>
  </div>
</template>
  
  <script>

export default {
  data() {
      return{
          publications:[],
          publication:{
              nomOuvrage:undefined,
              acronyme:undefined
          }
      }
  },
  methods: {
      addToChercheurArray: function(ouvrageToAdd){
          let ouvrage = new Object();
          ouvrage.nomOuvrage = ouvrageToAdd.nomOuvrage;
          ouvrage.acronyme = ouvrageToAdd.acronyme;
          this.ouvrages.push({
              ouvrage
              });
          this.ouvrage.nomOuvrage = undefined;
          this.ouvrage.acronyme = undefined;
      },
      checkForm: function(){
          if (!this.ouvrage.nomOuvrage){
              return false;
          }
          else if (!this.ouvrage.acronyme){
              return false;
          }
          else{
              return true;
          }

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
</style>