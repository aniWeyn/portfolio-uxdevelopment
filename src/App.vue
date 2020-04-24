<template>
  <div id="app">
    <div class="home">
    <div class="title">
      <router-link class="project" to="/">
      <h2 class="small-font">
        Sabina
        <br />Niewiadomska
      </h2></router-link>
    </div>
    <router-view />
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 40px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.home {
  display: grid;
  grid-template-columns: 0.5fr 2fr 0.5fr;
  grid-gap: 10px;
}

.small-font {
  font-size: 1.5em;
  text-decoration: none;
  color: #2c3e50;;
}

.project{
  text-decoration: none;
}

h2 {
  font-size: 3em;
}

h3 {
  font-size: 2em;
}

h4{
  font-size: 1.5em;
}

.image-description {
  display: grid;
  grid-template-columns: auto;
  grid-auto-rows: auto;
  grid-gap: 30px;
  justify-items: center;
  align-items: center;
  padding-top: 60px;
}
.paragraph{
  text-align: center;
}

.project-description{
  font-size: 2em;
}
</style>
