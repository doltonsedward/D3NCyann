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
  ["hi", "hai", "halo", "woi", "euy", "oi", "hey", "hey kamu"],
  ["apa kabar", "apa kabar hari ini"],
  ["siapa namamu", "siapa nama mu", "siapa kamu", "siapa kau", "kamu siapa"],


  // pertanyaan advanced
  ["_jam", "jam berapa sekarang", "sekarang jam berapa", "jam berapa ini", "jam berapa", "sekarang jam"]
]

// jawaban bot
const replies = [
  // jawaban untuk pertanyaan formal
  ["Halo", "Iya", "Ada yang bisa saya bantu?"],
  [
    "Wo jelas baik.. bagaimana dengan mu",
    "Tentu baik, kamu?",
    "Baik.. aku mau nanya nih"
  ],
  ["Namaku DollosChat"],


  // jawaban pertanyaan advanced
  [hoursNow()]
]

// text random kalau tidak sesuai
const alternative = [
  "Apa?",
  "Tolong gunakan bahasa yang baik dan benar yahh",
  "Tau ga?",
  "Coba lagi.. saya kurang paham",
  "Saya masih belajar tolong bersabar",
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