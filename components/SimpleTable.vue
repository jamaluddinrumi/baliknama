<template>
  <i-number-input
    v-model.number="hargaBeli"
    placeholder="Ketik harga belinya..."
    clearable
    :step="1000000"
    size="lg"
  >
    <template #prefix>Rp</template>
  </i-number-input>
  <i-table border hover class="mt-4">
    <tbody class="text-sm">
      <tr class="opacity-75">
        <th scope="row">Bea balik nama mobil</th>
        <td class="text-right">
          Rp{{ beaBalikNamaMobil.toLocaleString("id-ID") }}
        </td>
      </tr>
      <tr class="opacity-75">
        <th scope="row">Pajak kendaraan bermotor</th>
        <td class="text-right">
          Rp{{ pajakKendaraanBermotor.toLocaleString("id-ID") }}
        </td>
      </tr>
      <tr class="opacity-75">
        <th scope="row">SWDKLLJ</th>
        <td class="text-right">Rp{{ swdkllj.toLocaleString("id-ID") }}</td>
      </tr>
      <tr class="opacity-75">
        <th scope="row">Biaya administrasi STNK</th>
        <td class="text-right">
          Rp{{ biayaAdministrasiStnk.toLocaleString("id-ID") }}
        </td>
      </tr>
      <tr class="opacity-75">
        <th scope="row">Biaya penerbitan STNK</th>
        <td class="text-right">
          Rp{{ biayaPenerbitanStnk.toLocaleString("id-ID") }}
        </td>
      </tr>
      <tr class="opacity-75">
        <th scope="row">Penerbitan BPKB</th>
        <td class="text-right">
          Rp{{ penerbitanBpkb.toLocaleString("id-ID") }}
        </td>
      </tr>
      <tr class="opacity-75">
        <th scope="row">Pendaftaran</th>
        <td class="text-right">Rp{{ pendaftaran.toLocaleString("id-ID") }}</td>
      </tr>
      <tr class="opacity-75">
        <th scope="row">Penerbitan TNKB</th>
        <td class="text-right">
          Rp{{ penerbitanTnkb.toLocaleString("id-ID") }}
        </td>
      </tr>
      <tr>
        <th class="bg-black text-white" scope="row">Total Biaya</th>
        <td class="bg-black text-white text-right">
          <span class="font-bold"
            >Rp{{ totalBiaya.toLocaleString("id-ID") }}</span
          >
        </td>
      </tr>
    </tbody>
  </i-table>
</template>

<script setup lang="ts">
const hargaBeli = ref(0);
const beaBalikNamaMobil = computed(() => {
  return (1 / 100) * hargaBeli.value;
});
const pajakKendaraanBermotor = computed(() => {
  return (2 / 100) * hargaBeli.value;
});
const swdkllj = ref(143000);
const biayaAdministrasiStnk = ref(50000);
const biayaPenerbitanStnk = ref(200000);
const penerbitanBpkb = ref(350000);
const pendaftaran = ref(100000);
const penerbitanTnkb = ref(100000);
const totalBiaya = computed({
  get() {
    if (hargaBeli.value === 0 || hargaBeli.value === "") {
      return 0;
    }
    return (
      beaBalikNamaMobil.value +
      pajakKendaraanBermotor.value +
      swdkllj.value +
      biayaAdministrasiStnk.value +
      biayaPenerbitanStnk.value +
      penerbitanBpkb.value +
      pendaftaran.value +
      penerbitanTnkb.value
    );
  },
  set(newValue) {
    totalBiaya.value = newValue;
  },
});
const currency = "IDR"; // https://www.currency-iso.org/dam/downloads/lists/list_one.xml
const options = {
  maximumFractionDigits: 2,
  currency: currency,
  style: "currency",
  currencyDisplay: "symbol",
};

function localStringToNumber(s) {
  return Number(String(s).replace(/[^0-9.-]+/g, ""));
}

function onFocus(e) {
  var value = e.target.value;
  e.target.value = value ? localStringToNumber(value) : "";
}

function onBlur(e) {
  var value = e.target.value;

  e.target.value =
    value || value === 0
      ? localStringToNumber(value).toLocaleString(undefined, options)
      : "";
}

// function hitungTotalBiaya() {
//   beaBalikNamaMobil.value = 1 % hargaBeli;
//   pajakKendaraanBermotor.value = 2 % hargaBeli.value;
//   totalBiaya.value =
//     beaBalikNamaMobil.value +
//     pajakKendaraanBermotor.value +
//     swdkllj.value +
//     biayaAdministrasiStnk.value +
//     biayaPenerbitanStnk.value +
//     penerbitanBpkb.value +
//     pendaftaran.value +
//     penerbitanTnkb.value;
// }
</script>

<style>
.input-wrapper .input-prepend,
.input-wrapper .input-append {
  display: none;
}

.input-wrapper .input .input-prefix,
.input-wrapper .input .input-suffix {
  padding-left: 1rem;
  padding-right: 1rem;
}
</style>
