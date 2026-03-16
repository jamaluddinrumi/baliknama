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
    <i-layout-footer class="text-center text-slate-400/75">
      <i-card>
        <template #header>
          <span class="font-bold">Mau sukses mempromosikan produk anda di <span class="italic">event offline</span>?</span>
        </template>
        <p><a href="https://www.indomascot.com/" class="text-blue-500" target="_blank">Kostum Badut</a> Custom dengan desain dari anda sendiri bisa jadi jawabannya.</p>
        <p class="mt-1">Kunjungi <span class="font-semibold">www.indomascot.com</span> untuk info lebih lanjut.</p>
      </i-card>
      <br>
      <p class="text-sm"><span class="font-bold">Disclaimer:</span> Data di website ini bisa jadi sudah <span class="italic">out of date</span>.</p>
      <br>
    </i-layout-footer>
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
