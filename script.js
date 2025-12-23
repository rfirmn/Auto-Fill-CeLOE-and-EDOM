(function () {
    // 1. Mengisi semua input teks atau textarea dengan titik (.)
    const textInputs = document.querySelectorAll('input[type="text"], textarea');
    textInputs.forEach(input => {
        input.value = ".";
        input.dispatchEvent(new Event('input', { bubbles: true }));
        input.dispatchEvent(new Event('change', { bubbles: true }));
    });
    console.log("Input teks telah diisi dengan titik.");

    // 2. Mengelompokkan dan memilih radio button "Puas" (Indeks ke-2)
    const groups = {};
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        if (!groups[radio.name]) {
            groups[radio.name] = [];
        }
        groups[radio.name].push(radio);
    });

    for (let name in groups) {
        if (groups[name][2]) {
            groups[name][2].checked = true;
            groups[name][2].click();
        }
    }
    console.log("Radio button 'Puas' telah dipilih.");

    // 3. Menunggu 1 detik lalu klik tombol Simpan
    setTimeout(() => {
        const btnSave = document.querySelector('input[type="image"][value="simpan"]');

        if (btnSave) {
            console.log("Mengklik tombol simpan...");
            btnSave.click();
        } else {
            console.log("Tombol simpan tidak ditemukan.");
        }
    }, 1000);
})();