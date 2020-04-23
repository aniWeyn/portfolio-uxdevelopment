<template>
<div>
  <div class="home">
    <div class="title">
      <h2 class="small-font">
        Sabina
        <br />Niewiadomska
      </h2>
    </div>
    <div class="casestudies">
      <h2>Case Studies</h2>
      <h3>Inmeta</h3>
      <div class="wrapper">
        <router-link class="project" to="/">KPMG</router-link>
        <router-link class="project" to="/about">Orkla</router-link>
        <router-link class="project" to="/about">Aprila Bank</router-link>
      </div>
      <h3>Other</h3>
      <div class="wrapper">
        <router-link class="project" to="/">Galeria Barwna</router-link>
      </div>
      <h3>NTNU</h3>
      <h4>Service Design</h4>
      <div class="wrapper">
        <router-link class="project" to="/">Diakonhjemmet huset</router-link>
      </div>
      <h4>User Centered Design</h4>
      <div class="wrapper">
        <router-link class="project" to="/">Drones Website</router-link>
        <router-link class="project" to="/">Scale</router-link>
      </div>
      <h4>Interaction Design</h4>
      <div class="wrapper">
        <router-link class="project" to="/">Bird Cage</router-link>
      </div>
      <h4>Virtual Reality</h4>
      <div class="wrapper">
        <router-link class="project" to="/">Conductor Game</router-link>
      </div>
    </div>
  </div>
<div class="footer">
  <div></div>
  <div>
    <h2>About</h2>
    Hello! Here will be some info about me!
  </div>
  <div></div>
  <div>
This page is made with: VueJS, CSS Grid
</div>
</div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {}
};
</script>

<style scoped>
.home {
  display: grid;
  grid-template-columns: 0.5fr 2fr;
  grid-gap: 10px;
}

.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 200px);
  grid-auto-rows: 100px;
  grid-gap: 30px;
}

.project {
  color: #2c3e50;;
  text-align: left;
  vertical-align: middle;
  text-decoration: none;
  line-height: 1.8;
  font-weight: bold;
  background-color: hsla(47, 87%, 60%, 1);
}

.project:hover {
  background-color: #F5D76E;
}

.small-font {
  font-size: 1.5em;
}

h2 {
  font-size: 3em;
}

h3 {
  font-size: 2em;
}

.footer {
  display: grid;
  grid-template-columns: 0.5fr 2fr;
  grid-gap: 10px;
}
</style>