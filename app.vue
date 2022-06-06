<template>
  <title>Simulasi Biaya Balik Nama</title>
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
          <i-input disabled placeholder="Ketik untuk mencari di sini...">
            <template #append>
              <i-button color="primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
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
