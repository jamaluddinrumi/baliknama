<template>
  <i-layout>
    <i-layout-header
      ><i-navbar>
        <i-navbar-brand to="/"> Simulasi Biaya Balik Nama </i-navbar-brand>
        <i-navbar-collapsible>
          <i-nav>
            <i-nav-item disabled to="/"> Halaman Depan </i-nav-item>
            <i-nav-item disabled to="/about"> Tentang Kami </i-nav-item>
            <i-nav-item disabled to="/contact"> Kontak </i-nav-item>
          </i-nav>
          <i-input disabled placeholder="Ketik untuk mencari di sini...">
            <template #append>
              <i-button color="primary">
                <i-icon name="ink-search" />
              </i-button>
            </template>
          </i-input>
        </i-navbar-collapsible> </i-navbar
    ></i-layout-header>
    <i-layout-content class="p-4"><SimpleTable></SimpleTable></i-layout-content>
    <i-layout-footer class="text-center text-slate-400/75"></i-layout-footer>
  </i-layout>
</template>

<style lang="scss">
@import "@inkline/inkline/css/variables";
@import "@inkline/inkline/css/mixins";

:root {
  --color--primary--h: 195deg;
  --color--primary--s: 77%;
  --color--primary--l: 39%;
}
</style>
