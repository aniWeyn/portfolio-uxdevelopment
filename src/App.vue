<template>
  <div id="app">
    <section class="content">
      <header>
        <nav>
          <router-link class="project" to="/">
            <h2 class="small-font">
              Sabina
              <br />Niewiadomska
            </h2>
          </router-link>
        </nav>
      </header>
      <main>
        <router-view />
      </main>
    </section>
    <footer>Made by Sabina Niewiadomska with VueJS, HTML5, WCAG, CSS3, CSS Grid, GitHub Pages</footer>
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

h2 {
  font-size: 3em;
}

h3 {
  font-size: 2em;
}

h4{
  font-size: 1.5em;
}

.small-font {
  font-size: 1.5em;
  text-decoration: none;
  color: #2c3e50;;
}

.paragraph{
  text-align: center;
}

.project-description{
  font-size: 2em;
}

.project{
  text-decoration: none;
}

footer {
  padding-top: 40px;
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
</style>
