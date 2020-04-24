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
          <router-link class="project galeriabarwna" to="/galeriabarwna">Galeria Barwna</router-link>
        </div>
        <h3>NTNU</h3>
        <h4>Service Design</h4>
        <div class="wrapper">
          <router-link class="project" to="/livsglede">Livsglede hele livet</router-link>
        </div>
        <h4>User Centered Design</h4>
        <div class="wrapper">
          <router-link class="project" to="/drones">Drones Website</router-link>
          <router-link class="project scale" to="/scale">Scale</router-link>
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
  grid-template-columns: repeat(3, 180px);
  grid-auto-rows: 80px;
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
  padding-top: 25px;
  padding-left: 5px;
}

.project:hover {
  background-color: #f5d76e;
}

.galeriabarwna{
  background-image: linear-gradient(141deg, #f5d76e 27%, hsl(337, 80%, 54%) 43%, #acdb1f 63%, #1fc8db 82%);
}

.scale{
  /*background-image: linear-gradient(141deg, #f5d76e 27%, hsl(337, 80%, 54%) 43%, #acdb1f 63%, #1fc8db 82%);*/
  background-image: url("~@/assets/img/scale-front.png");
  background-size: cover;
}

.scale:hover{
  /*background-image: linear-gradient(141deg, #f5d76e 27%, hsl(337, 80%, 54%) 43%, #acdb1f 63%, #1fc8db 82%);*/
  background-image: url("~@/assets/img/scale-back.png");
  background-color: hsla(47, 87%, 60%, 0.6);
}
</style>