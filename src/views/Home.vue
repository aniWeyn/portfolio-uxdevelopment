<template>
  <div>
    <div class="home">
      <div class="casestudies">
        <h2>Case Studies</h2>
        <h3>Zoopit</h3>
        <div class="wrapper">
          <router-link class="project zoopit" to="/zoopit"
            ><div class="cover">Zoopit</div></router-link
          >
        </div>
        <h3>Inmeta Consulting AS</h3>
        <div class="wrapper">
          <router-link class="project multiconsult" to="/multiconsult"
            ><div class="cover">Multiconsult</div></router-link
          >
          <router-link class="project w3schools" to="/w3schools"
            ><div class="cover">W3school</div></router-link
          >
          <router-link class="project azzista" to="/azzista"
            ><div class="cover">Azzista Sports Innovation</div></router-link
          >
          <router-link class="project kroppskontroll" to="/kroppskontroll"
            ><div class="cover">Kroppskontroll AS</div></router-link
          >
          <router-link class="project crayon" to="/crayon"
            ><div class="cover">Crayon</div></router-link
          >
          <router-link class="project aprila" to="/aprilabank"
            ><div class="cover">Aprila Bank</div></router-link
          >
          <router-link class="project kpmg" to="/kpmg"
            ><div class="cover">KPMG</div></router-link
          >
        </div>
        <h3>After work</h3>
        <div class="wrapper">
          <router-link class="project galeriabarwna" to="/galeriabarwna"
            ><div class="cover">Galeria Barwna</div></router-link
          >
        </div>
        <h3>
          Student projects for Norwegian University of Science and Technology
        </h3>
        <h4>Course: Service Design</h4>
        <div class="wrapper">
          <router-link class="project livesglede" to="/livsglede"
            ><div class="cover">Livsglede hele livet</div></router-link
          >
        </div>
        <h4>Course: User Centered Design</h4>
        <div class="wrapper">
          <router-link class="project drones" to="/drones"
            ><div class="cover">Drones Website</div></router-link
          >
          <router-link class="project scale" to="/scale"
            ><div class="cover">Scale</div></router-link
          >
        </div>
      </div>
    </div>
    <div class="about">
      <h2>About</h2>
      <p>
        Hello! I'm working in Inmeta as Consultant. I'm interested into
        user experience, interaction design, accessibility and front-end
        development in VueJS. I also know .Net and databases.
      </p>
      Contact me at
      <address>sabina.niewiadomska@inmeta.no</address>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
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
  padding-top: 25px;
  position: relative;
}

.project-color {
  background-color: hsla(47, 87%, 60%, 1);
}

.project-color:hover {
  background-color: #f5d76e;
}

.galeriabarwna {
  background-image: linear-gradient(
    141deg,
    #f5d76e 27%,
    hsl(337, 80%, 54%) 43%,
    #acdb1f 63%,
    #1fc8db 82%
  );
}

.scale {
  background-image: url("~@/assets/img/scale-front.png");
  background-size: cover;
}

.scale:hover {
  background-image: url("~@/assets/img/scale-back.png");
  background-size: cover;
}

.drones {
  background-image: url("~@/assets/img/drones-home.png");
  background-size: cover;
}

.livesglede {
  background-image: url("~@/assets/img/livsglede-home.png");
  background-size: cover;
}

.aprila {
  background-image: url("~@/assets/img/aprila-bank-logo.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #3b2c7c;
  background-position-y: 50%;
}

.multiconsult {
  background-image: url("~@/assets/img/multiconsult.png");
  background-size: cover;
}

.kpmg {
  background-image: url("~@/assets/img/kpmg-building.jpg");
  background-size: cover;
}

.w3schools {
  background-image: url("~@/assets/img/w3schools.png");
  background-size: cover;
}

.kroppskontroll {
  background-image: url("~@/assets/img/kropp.png");
  background-size: cover;
}

.azzista {
  background-image: url("~@/assets/img/azzista.png");
  background-size: cover;
}

.zoopit {
  background-image: url("~@/assets/img/zoopit.png");
  background-size: cover;
}

.crayon {
  background-image: url("~@/assets/img/crayon.png");
  background-size: cover;
}

.cover {
  background-color: hsla(0, 0%, 100%, 0.8);
  padding-left: 5px;
  padding-top: 25px;
  position: absolute;
  top: 0%;
  bottom: 0%;
  right: 0%;
  left: 0%;
  vertical-align: middle;
}

.cover:hover {
  background-color: hsla(0, 0%, 90%, 0.7);
  padding-left: 5px;
}
</style>
