# Auto-Fill-CeLOE-and-EDOM
-----------------
## Anda memiliki waktu yang terbatas? namun belum mengisi Survey CeLOE & EDOM? ini adalah solusinya

script ini dibuat dengan tujuan untuk menghemat waktu bagi kalian yang tidak ingin membuang waktu yang cukup banyak hanya untuk mengisi survey.
fitur automasi yang saya tawarkan pada script ini cukup untuk bisa menghemat waktu anda yang sangat berharga.


----------------------
## Fitur Utama
 - mengisi radio button otomatis jika mempunyai pilihan: sangat tidak puas, tidak puas, puas, sangat puas
 - belum bisa menerima input iya/tidak. karena biasanya pertanyaan tersebut penting untuk diisi manual
 - mengisi inputan text dengan karakter "titik"(default script)
 - auto click save, sehingga bisa next page dengan mudah. untuk klik submit tetap dilakukan secara manual

--------------------
## Cara penggunaan:
1. silahkan akses file script.js atau bisa [klik disini](/script.js)
2.  copy atau unduh code tersebut
3.  buka EDOM pengisian survey, sampai kehalaman pengisian form yang diinginkan
4.  buka inspect element
5.  pindah ke console
6.  untuk pertama kali membuka console ketik `allow pasting` agar bisa copy paste code pada console
7.  paste code
8.  lalu tekan `enter`
9.  harap di cek jika ada kesalahan atau ingin mengoreksi

#### #Gunakanlah_dengan_bijak

--------------------------------
## Panduan pengeditan
### 1. Jika ingin mengubah pengisian radio button, perhatikan potongan code berikut ini:
```js
    for (let name in groups) {
        if (groups[name][2]) {
            groups[name][2].checked = true;
            groups[name][2].click();
        }
    }
    console.log("Radio button 'Puas' telah dipilih.");
```
Defaul pengisian merupakan jawaban "puas", jika ingin mengubah, silahkan ganti angka 2 dengan index jawaban yang diinginkan.
| index | Jawaban|
|----|-----|
|0| Sangat tidak puas|
|1| Tidak puas |
|2| Puas |
|3| Sangat Puas |

### 2. Jika ingin mengganti inputan text, perhatikan potongan code berikut ini:
```js
    const textInputs = document.querySelectorAll('input[type="text"], textarea');
    textInputs.forEach(input => {
        input.value = ".";
        input.dispatchEvent(new Event('input', { bubbles: true }));
        input.dispatchEvent(new Event('change', { bubbles: true }));
    });
    console.log("Input teks telah diisi dengan titik.");
```
untuk mengubah input value silahkan ganti isi variabel dardi `input.value` dengan teks yang diinginkan
