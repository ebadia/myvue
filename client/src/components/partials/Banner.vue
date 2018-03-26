<template>
  <section :style="{ backgroundImage: `url(${imagen})` }" class="d-md-flex bg-secondary d-flex align-items-center x-banner" data-pgc-define="banner" data-pgc-define-name="banner-superior" data-pgc-edit="banner-bg-image" data-pgc-edit-bckimage>
    <div class="row no-gutters" style="width: 100%;">
      <div class="offset-1 col-10 offset-md-2 col-md-6">
        <h1 class="banner-title">{{title}}</h1>
        <h3 class="banner-subtitle" style="color">{{subtitle}}<br></h3>
      </div>
    </div>
  </section>

</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      title: 'Titulo',
      subtitle: 'Subtitulo',
      imagen: '~assets/img/medida-cap.png',
      color: ''
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
