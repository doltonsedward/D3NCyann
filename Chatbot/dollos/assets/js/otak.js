/*
  untuk perintah sesuai dengan rumus array untuk array pertama nya adalah 0, jadi jawabannya harus array 0 juga
  misal array pertama
  ["hi", dll....]

  jawabannya
  ["Halo", dll....]

  !noted
  tidak perlu gunakan tanda tanya di perintah / promp karena saya sudah atur tanda tanya nilai nya kosong
*/

// perintah user 
const prompts = [
  // pertanyaan formal
  ["hi", "hai", "hai kamu", "halo", "woi", "euy", "oi", "hey", "hey kamu"],
  ["apa kabar", "apa kabar hari ini", "kabarnya gimana"],
  ["lagi apa", "lagi apa ni", "lagi apa kamu", "ngapain", "lagi ngapain"],
  ["siapa namamu", "siapa nama mu", "siapa kamu", "siapa kau", "siapa ini", "dengan siapa ini", "kamu siapa"],
  ["selamat pagi", "pagi"],
  ["selamat malam", "malam"],
  ["siapa pencipta mu", "siapa yang menciptakan mu", "siapa yang membuat mu"],


  // bucin
  ["tau apa", "gatau", "engga", "ga"],
  ["ajarin apa", "ajar apa"],


  // pertanyaan advanced
  ["_help"],
  ["_jam", "jam berapa sekarang", "sekarang jam berapa", "jam berapa ini", "jam berapa", "sekarang jam"],
  ["_bucin"]
]

// jawaban bot
const replies = [
  // jawaban untuk pertanyaan formal
  ["Halo", "Iya", "Hai.. ada yang bisa saya bantu?"],
  [
    "Wo jelas baik.. bagaimana dengan mu",
    "Tentu baik, kamu?",
    "Baik.. aku mau nanya nih"
  ],
  ["Biasalaaah", "lagi memikirkan hidup kedepannya",],
  ["Namaku DollosChat", "DollosChat", "DollosChat biasa disingkat DC", "Chatbot DC"],
  ["Selamat pagi", "pagi juga", "pagi juga kamunya", "pagi :D"],
  ["Selamat malam", "malam juga", "malam juga kamunya", "malam :)"],
  ["Saya diciptakan dengan kasih sayang", "Mereka banyak", "Orang orang hebat"],


  // bucin
  ["tau ga sebelah tulang rusuk ku ada di kamu... avv"],
  ["ajarin aku cara dapetin kamu.. avv"],


  // jawaban pertanyaan advanced
  [
    `Ini adalah beberapa kumpulan shorcut yang bisa kamu gunakan
    _help untuk kumpulan shorcut
    _jam untuk lihat jam sekarang
    _bucin untuk percakapan bucin`
  ],
  [hoursNow()],
  ["tau ga?", "yaudah ajarin aku aja"]
]

// text random kalau tidak sesuai
const alternative = [
  "Jadi ngantuk",
  "Gini amat hidup",
  "Percakapan absurd macam apa ini",
  "Coba lagi.. mungkin ada typo",
  "Saya masih belajar sih.. ajar dong",
  "Ya sudah biarkan saya cerita",
  "Saya tidak mengerti.. :("
]

// masih planning
const happyness = [
  "haha"
]

// bagian sini masih planning
const coronavirus = ["Stay at homee!", "Pakai maskermu", "Tentu, saya tidak terkena covid", "Terkadang begitu"]

// sesi ngoding
var date;
var hours;
var minutes;
function hoursNow() {
  date = new Date();
  hours = date.getHours();
  minutes = date.getMinutes();
  return this.innerHTML = "sekarang sudah jam " + hours + ":" + minutes;
}
