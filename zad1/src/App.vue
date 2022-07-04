<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="navbar-collapse collapse">
      <span class="navbar-brand">Sellit</span>
    </div>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item"><router-link to="/" class="nav-link active">Strona główna</router-link></li>
        <li class="nav-item"><router-link to="/offer" class="nav-link">Oferta</router-link></li>
        <li class="nav-item"><router-link to="/contact" class="nav-link">Kontakt</router-link></li>
      
      </ul>
    </div>
  </nav>
  <div class="card mx-auto" id="main" style="min-height:550px">
    <div class="card-body" >
      <router-view/>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
#main { width: 80%;

}
</style>
