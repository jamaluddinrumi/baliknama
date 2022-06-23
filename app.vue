<template>
  <Head>
    <Title>Simulasi Biaya Balik Nama</Title>
  </Head>
  <i-layout>
    <i-layout-header
      ><i-navbar>
        <i-navbar-brand to="/">
          <span class="font-bold">Hitung Biaya Balik Nama</span>
        </i-navbar-brand>
        <i-navbar-collapsible>
          <i-nav>
            <i-nav-item disabled to="/"> Halaman Depan </i-nav-item>
            <i-nav-item disabled to="/about"> Tentang Kami </i-nav-item>
            <i-nav-item disabled to="/contact"> Kontak </i-nav-item>
          </i-nav>
          <div class="mt-2 text-sm text-slate-400 text-center">
            dibuat oleh Jamaluddin Rumi
          </div>
        </i-navbar-collapsible>
      </i-navbar></i-layout-header
    >
    <i-layout-content class="p-4"><SimpleTable></SimpleTable></i-layout-content>
    <i-layout-footer class="text-center text-slate-400/75"></i-layout-footer>
  </i-layout>
</template>

<style lang="scss">
@import "@inkline/inkline/css/variables";
@import "@inkline/inkline/css/mixins";
@import "@inkline/inkline/inkline";

:root {
  --color--primary--h: 195deg;
  --color--primary--s: 77%;
  --color--primary--l: 39%;
}
</style>
