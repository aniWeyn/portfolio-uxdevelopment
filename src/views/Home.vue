<template>
  <div>
    <div class="home">
      <div class="casestudies">
        <h2>Case Studies</h2>
        <h3>Inmeta Consulting AS</h3>
        <div class="wrapper">
          <router-link class="project" to="/kpmg">KPMG</router-link>
          <router-link class="project" to="/orkla">Orkla</router-link>
          <router-link class="project" to="/aprilabank">Aprila Bank</router-link>
        </div>
        <h3>Other</h3>
        <div class="wrapper">
          <router-link class="project" to="/galeriabarwna">Galeria Barwna</router-link>
        </div>
        <h3>NTNU</h3>
        <h4>Service Design</h4>
        <div class="wrapper">
          <router-link class="project" to="/diakonhjemmet">Diakonhjemmet huset</router-link>
        </div>
        <h4>User Centered Design</h4>
        <div class="wrapper">
          <router-link class="project" to="/drones">Drones Website</router-link>
          <router-link class="project" to="/scale">Scale</router-link>
        </div>
        <h4>Interaction Design</h4>
        <div class="wrapper">
          <router-link class="project" to="/birdcage">Bird Cage</router-link>
        </div>
        <h4>Virtual Reality</h4>
        <div class="wrapper">
          <router-link class="project" to="/conductor">Conductor Game</router-link>
        </div>
      </div>
    </div>
    <div class="footer">
      <h2>About</h2>Hello! I'm working in Inmeta as Junior Consultant. 
      <div>This page is made with: VueJS, CSS Grid</div>
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
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 200px);
  grid-auto-rows: 100px;
  grid-gap: 30px;
}

.project {
  color: #2c3e50;
  text-align: left;
  vertical-align: middle;
  text-decoration: none;
  line-height: 1.8;
  font-weight: bold;
  background-color: hsla(47, 87%, 60%, 1);
}

.project:hover {
  background-color: #f5d76e;
}
</style>