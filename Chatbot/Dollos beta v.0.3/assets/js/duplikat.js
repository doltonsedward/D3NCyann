/*
  untuk perintah sesuai dengan rumus array untuk array pertama nya adalah 0, jadi jawabannya harus array 0 juga
  misal array pertama
  ["hi", dll....]

  jawabannya
  ["Halo", dll....]
*/

// perintah user
const prompts = [
    ["hi", "hai", "woi", "euy"],
    ["apa kabar?", "apa kabar?"]
]

// jawaban bot
const replies = [
    ["Halo", "Iya", "Ada yang bisa saya bantu?"],
    [
        "Wo jelas.. bagaimana dengan mu",
        "Tentu baik, kamu?",
        "Baik.. aku mau nanya nih"
    ]
]

// text random kalau tidak sesuai
const alternative = [
    "Apa?",
    "Gamao gasukak",
    "Bro?",
    "Tau ga?",
    "Coba lagi",
    "Saya tidak mengerti"
]

// bagian sini masih planning
const coronavirus = ["Stay at homee!", "Pakai maskermu", "Tentu, saya tidak terkena covid", "Terkadang begitu"]