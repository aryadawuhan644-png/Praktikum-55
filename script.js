const form = document.getElementById('formPendaftaran');
const hasilPendaftaran = document.getElementById('hasilPendaftaran');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const umur = document.getElementById('umur').value;
    const hp = document.getElementById('hp').value;
    const pesan = document.getElementById('pesan').value;
    if (nama === "" || email === "" || umur === "" || hp === "" || pesan === "") {
        alert("Semua field harus diisi!");
        hasilPendaftaran.innerHTML = '<p>Silakan lengkapi semua field.</p>';
        return;
    } if (!email.includes('@')) {
        alert("Email tidak valid!");
        hasilPendaftaran.innerHTML = '<p>Silakan lengkapi semua field.</p>';
        return;
    } hasilPendaftaran.innerHTML = ` <h2>Terima Kasih Telah Mendaftar! ${nama}</h2>
    <div style=" margin-top: 20px; padding: 20px; background-color: #f0f0f0; border-radius: 5px;">
    <h3>Data Pendaftaran Berhasil</h3>
    <p><strong>Nama:</strong> ${nama}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Umur:</strong> ${umur}</p>
    <p><strong>HP:</strong> ${hp}</p>
    <p><strong>Pesan:</strong> ${pesan}</p>
    </div>
    `;

    alert("pesan berhasil dikirim!");
    form.reset();
    document.getElementById("nama").addEventListener("input", function () {
        console.log("user sedang mengetik nama");
    });
});