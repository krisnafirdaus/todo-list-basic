# todo-list-basic

## You can see project

- https://krisnafirdaus.github.io/todo-list-basic

## What's you can learn

### Variabel dan Tipe Data:

- let tasks = [];: Inisialisasi array kosong.
- const taskInput = ...: const adalah cara lain untuk mendeklarasikan variabel yang nilainya tidak akan berubah.

### DOM (Document Object Model) Manipulasi:

Fungsi seperti document.getElementById() digunakan untuk mengakses elemen HTML dengan ID tertentu.

- value: Mengambil atau mengatur nilai dari elemen input.
- innerHTML: Mengambil atau mengatur konten HTML dari elemen.
- style: Mengakses properti gaya elemen.

### Pengendalian Aliran (Control Flow):

- if(taskValue) {...}: Sebuah pernyataan kondisional untuk memeriksa apakah variabel taskValue memiliki isi.
  Fungsi:

Ada beberapa fungsi yang didefinisikan seperti addTask(), renderTasks(), removeTask(index), dll.

### Array dan Metode Array:

- tasks.push(taskValue);: Menambahkan item ke array.
- tasks.splice(index, 1);: Menghapus item dari array.
- tasks.forEach(...): Mengiterasi melalui setiap item di array.

### String Manipulasi:

- taskInput.value.trim();: Menggunakan metode .trim() untuk menghapus spasi di awal dan akhir string.
  Template Literals:

- Menggunakan backticks (`) untuk membuat string yang memungkinkan penyisipan variabel atau ekspresi langsung ke dalam string, misalnya `${task}`.

### Event Handling:

Dalam elemen button, ada atribut onclick yang ditetapkan ke fungsi tertentu, seperti editTask(${index}). Ini adalah cara untuk menangani event klik pada elemen.
Interaksi dengan Pengguna:

- alert('Task tidak boleh kosong!');: Menampilkan pesan peringatan kepada pengguna.
