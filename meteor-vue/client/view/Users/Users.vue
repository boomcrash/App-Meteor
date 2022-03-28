<template>
<v-container>
  <v-row justify="center">
      <v-col xs="12" sm="12" md="10" lg="8" xl="5">
        <v-data-table :headers="headers" :items="users" sort-by="name" class="elevation-1">

        </v-data-table>
      </v-col>
  </v-row>
</v-container>
</template>

<script>
export default {
  name: "Users",
  data(){
    return{
      headers:[
        {value:'name',text:'Nombre',sortable:true},
        {value:'username',text:'Usuario',sortable:true},
        {value:'email',text:'Correo',sortable:true}
      ],
      users:[
        {name:'Mario Vegeti',username:'MVetugi',email:"MVgi@gmail.com"},
        {name:'Carlos Vegeti',username:'CVetugi',email:"CVgi@gmail.com"},
        {name:'Ramon Vegeti',username:'RVetugi',email:"RVgi@gmail.com"},
        {name:'Jose Vegeti',username:'JVetugi',email:"JVgi@gmail.com"}
      ]
    }
  }


}
</script>

<style scoped>

</style>