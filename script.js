function hitung() {
  // Ambil nilai dari input
  const modal = parseFloat(document.getElementById("modal").value);
  const pengeluaran = parseFloat(document.getElementById("pengeluaran").value);
  const keuntungan = parseFloat(document.getElementById("keuntungan").value);
  const jumlahBarang = parseFloat(
    document.getElementById("jumlahBarang").value
  );
  // Validasi input
  if (isNaN(modal) || isNaN(pengeluaran) || isNaN(keuntungan)) {
    alert("Harap isi semua field dengan angka yang valid!");
    return;
  }

  // Hitung sisa uang dan total penjualan
  const sisaUang = modal - pengeluaran;
  const totalPenjualan = pengeluaran + keuntungan;
  const totalUang = sisaUang + totalPenjualan;

  // Hitung keuntungan per barang
  const keuntunganPerBarang = keuntungan / jumlahBarang;
  // Tampilkan hasil
  const hasil = `
            <p><strong>Modal Awal:</strong> Rp ${modal.toLocaleString()}</p>
            <p><strong>Pengeluaran:</strong> Rp ${pengeluaran.toLocaleString()}</p>
            <p><strong>Sisa Uang:</strong> Rp ${sisaUang.toLocaleString()}</p>
            <p><strong>Total Penjualan:</strong> Rp ${totalPenjualan.toLocaleString()}</p>
            <p><strong>Total Keuntungan:</strong> Rp ${keuntungan.toLocaleString()}</p>
            <p><strong>Keuntungan per Barang (jika dibagi rata):</strong> Rp ${keuntunganPerBarang.toLocaleString()}</p>
            <p><strong>Total Uang Setelah Penjualan:</strong> Rp ${totalUang.toLocaleString()}</p>
        `;

  document.getElementById("hasil").innerHTML = hasil;
}
function refresh() {
  // Reset semua input dan hasil
  document.getElementById("modal").value = "";
  document.getElementById("pengeluaran").value = "";
  document.getElementById("keuntungan").value = "";
  document.getElementById("jumlahBarang").value = "";
  document.getElementById("hasil").innerHTML = "";
}
