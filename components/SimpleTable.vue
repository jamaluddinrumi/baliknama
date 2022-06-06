<template>
  <i-input
    v-model="hargaBeli"
    placeholder="Ketikkan Harga Beli Mobil Anda..."
  />
  <i-table border class="mt-4">
    <thead>
      <tr>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody class="text-sm">
      <tr>
        <th scope="row">Bea balik nama mobil</th>
        <td class="text-right">Rp0</td>
      </tr>
      <tr>
        <th scope="row">Pajak kendaraan bermotor</th>
        <td class="text-right">Rp0</td>
      </tr>
      <tr>
        <th scope="row">SWDKLLJ</th>
        <td class="text-right">Rp{{ swdkllj.toLocaleString("id-ID") }}</td>
      </tr>
      <tr>
        <th scope="row">Biaya administrasi STNK</th>
        <td class="text-right">
          Rp{{ biayaAdministrasiStnk.toLocaleString("id-ID") }}
        </td>
      </tr>
      <tr>
        <th scope="row">Biaya penerbitan STNK</th>
        <td class="text-right">
          Rp{{ biayaPenerbitanStnk.toLocaleString("id-ID") }}
        </td>
      </tr>
      <tr>
        <th scope="row">Penerbitan BPKB</th>
        <td class="text-right">
          Rp{{ penerbitanBpkb.toLocaleString("id-ID") }}
        </td>
      </tr>
      <tr>
        <th scope="row">Pendaftaran</th>
        <td class="text-right">Rp{{ pendaftaran.toLocaleString("id-ID") }}</td>
      </tr>
      <tr>
        <th scope="row">Penerbitan TNKB</th>
        <td class="text-right">
          Rp{{ penerbitanTnkb.toLocaleString("id-ID") }}
        </td>
      </tr>
      <tr>
        <th scope="row">Total Biaya</th>
        <td class="text-right">
          <span class="font-bold"
            >Rp{{ totalBiaya.toLocaleString("id-ID") }}</span
          >
        </td>
      </tr>
    </tbody>
  </i-table>
</template>

<script setup>
const hargaBeli = ref(null);
const swdkllj = ref(143000);
const biayaAdministrasiStnk = ref(50000);
const biayaPenerbitanStnk = ref(200000);
const penerbitanBpkb = ref(350000);
const pendaftaran = ref(100000);
const penerbitanTnkb = ref(100000);
const totalBiaya = ref(0);
</script>
