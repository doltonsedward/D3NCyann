

// jawaban bot
const replies = [
  // jawaban untuk pertanyaan formal
  ["Halo", "Hai", "Iya, selamat datang", "Hai.. apa kabar hari ini", "Halo, selamat datang di chatbot :D", "Iya", "Iya.."],
  [
    "Wo jelas baik.. bagaimana dengan mu", "Tentu baik, kamu?", "Baik.. aku mau nanya nih",
    "Baik.. gimana kabar mu?", "Sepertinya baik", "Tentu saja baik"
  ],
  ["Biasalaaah", "lagi memikirkan hidup kedepannya", "Hanya berdiam diri disini karena saya di desain hanya untuk membalas chat mu"],
  [
    "Namaku DollosChat", "DollosChat.. nama yang keren bukan?", "DollosChat biasa disingkat DC", "Chatbot DC",
    "Oh iya kenalin aku DollosChat", "Biasa dipanggil DollosChat :D"
  ],
  ["Selamat pagi", "Pagi juga", "Pagi juga kamunya", "Pagi :D", "Pagi.."],
  ["Selamat siang", "Siang juga", "Siang juga kamunya", "Siang ;)", "Siang.."],
  ["Selamat malam", "Malam juga", "Malam juga kamunya", "Malam :)", "Malam.."],
  ["Saya diciptakan dengan kasih sayang", "Mereka banyak", "Orang orang hebat"],

  // bucin 
  ["Tau ga sebelah tulang rusuk ku ada di kamu... avv"],
  ["Ajarin aku cara dapetin kamu.. avv"],

  // respon tanya kabar dll
  ["Okay senang mengetahui nya", "Senang mengetahui nya :D", "Siap"],

  // respon baik + true
  ["Makasihh", "Oh Tentu saja ;)", "Terima kasih teman.. kamu juga", "Senang mendengar nya"],
  ["Eh tidak.. nanti saja deh"],

  // respon buruk + false
  ["Okay", "Oh okay", "Yahhh :)", "Okay nanti saja", "Okay kapan kapan saja", "Okay makasih ^_^"],

  // cover alternative + random chat
  ["Yo watsap", "Apa sayang"],
  ["Kemarin saya ketemu user random yang chatnya kasar :)"],
  [
    "Saya di desain untuk menghibur kamu", "Saya bisa menemani mu 24 jam non stop ^_^", "Bisa menemanimu yang kesepian ;)",
    "Jadikan saya teman curhat mu maka kamu akan tau kegunaan ku", "Bisa jadi teman hidupmu.. avv", "Bisa chattan seharian denganmu"
  ],

  // jawaban pertanyaan advanced
  [
    `Ini adalah beberapa kumpulan shorcut yang bisa kamu gunakan:
    
    _help untuk kumpulan shorcut
    _jam untuk lihat jam sekarang
    _bucin untuk percakapan bucin
    _q untuk quotes
    _qmem untuk quotes meme 
    
    cara lain untuk menggunakan shorcut ialah dengan menambah bot di depan contoh:
    bothelp, botjam dll`
  ],
  [hoursNow()],
  ["tau ga?", "yaudah ajarin aku aja", "Jadi sebenarnya salah satu pencipta ku menyukai kamu"],
  [
    `“ Hidup tak selamanya tentang pacar ”`,
    `“ Hidup memang tidak adil jadi biasakan dirimu kawan ”
    - DollosChatbot 2k21`,
    `“ Dan sepahit-pahitnya kehidupan mulai melebur saat ku terbiasa dengan keberadaanmu yang manis ”`,
    `“ Jangan menyerah atas impianmu, impian memberi tujuan hidup. Ingatlah sukses bukan kunci kebahagiaan, kebahagiaan adalah kunci kesuksesan ”`,
    `“ Bukanlah kesabaran jika masih mempunyai batas, dan bukanlah keikhlasan jika masih merasakan sakit ”`,
    `“ Aku adalah hujan, kalau ga suka tidak masalah silahkan berteduh ”`,
    `“ Gapapa masuk neraka, asal usaha sendiri ”`,
    `“ Masa depan adalah milih mereka yang menyiapkan hari ini ”
    - DollosChatbot 2k21`,
    `“ Seberapa indah mimpi jika tetap mimpi? ”
    - DollosChatbot 2k21`,
    `“  ”`,
    `“  ”`
  ],
  [
    `Programmer adalah kuli dibidang komputer
    # change my mind 
    `,
    `Hacker berasal dari programmer patah hati
    # change my mind 
    `,
    `Developer adalah programmer tapi punya proyek
    # change my mind 
    `,
    `Dosen adalah guru yang patah hati
    # change my mind 
    `,
    `Pacar adalah istri versi trial
    # change my mind 
    `,
    `Python tanpa bahasa komputer dan backend web dev hanyalah bahasa scripting biasa
    # change my mind 
    `
  ],

  ["Yah kok dikosongin.. :(", "Kosong? kayak keseharianmu ya?", "Tolong diisi saya bingung mau balas apa"]
]

