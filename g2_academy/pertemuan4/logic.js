// var today = new Date('July 20, 60 07:40:00');
// var day = today.getDay();
// var daylist = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis"];
// console.log("Hari ini : " + daylist[day]);

// var hour = today.getHours();
// var minute = today.getMinutes();
// var second = today.getSeconds();
// var prepand = (hour >= 12) ? " PM " : " AM";
// hour = (hour >= 12) ? hour - 12 : hour;

// if (hour === 0 && prepand === " PM ") {
//     if (minute == 0 && prepand == " AM ") {
//         hour = 12;
//         prepand == "Siang";
//     } else {
//         hour = 12;
//         prepand == " PM ";
//     }
// }

// if (hour === 0 && prepand === " AM ") {
//     if (minute == 0 && prepand == " PM ") {
//         hour = 12;
//         prepand == "Malam";
//     } else {
//         hour = 12;
//         prepand == " AM ";
//     }
// }

// console.log(daylist[day] + " " + hour + prepand + " : " + minute + " : " + second)

for (var year = 2014; year <= 2050; year++) {
    var d = new Date(year, 0, 1);
    if (d.getDay() === 0) {
        console.log('Setiap tanggal 1 januari ada pada tahun ' + year)
    }
}


