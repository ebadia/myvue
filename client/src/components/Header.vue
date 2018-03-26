<template>
  <header style="padding-left: 10%; padding-right: 10%;" class="x-navbar">
    <b-navbar toggleable="md">
      <b-navbar-toggle target="navbarToggler-menu"></b-navbar-toggle>
      <b-navbar-brand href="#"><img src="assets/img/xtremislogo-W.png" width="120" height="auto" alt=""></b-navbar-brand>
      <b-collapse is-nav id="navbarToggler-menu">
        <b-navbar-nav class="ml-auto">

          <b-nav-item to="/" class="header-link">inicio</b-nav-item>

          <b-nav-item-dropdown id="dd-servicios" text="servicios" class="header-link">
            <b-dropdown-item class="dropdown-item header-drop-link" href="software-a-medida.html">desarrollo de software a medida</b-dropdown-item>
            <b-dropdown-item class="dropdown-item header-drop-link" href="#">desarrollo de aplicaciones móviles</b-dropdown-item>
            <b-dropdown-item class="dropdown-item header-drop-link" href="desarrollo-web.html">desarrollo web</b-dropdown-item>
            <b-dropdown-item class="dropdown-item header-drop-link" href="#">consultoría informática</b-dropdown-item>
            <b-dropdown-item class="dropdown-item header-drop-link" href="#">diseño gráfico</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item to="/register" class="header-link">contacto</b-nav-item>

            <b-nav-item-dropdown id="dd-idioma" text="idioma" class="header-link">
              <b-dropdown-item class="dropdown-item header-drop-link" href="#">es</b-dropdown-item>
              <b-dropdown-item class="dropdown-item header-drop-link" href="#">en</b-dropdown-item>
            </b-nav-item-dropdown>

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
