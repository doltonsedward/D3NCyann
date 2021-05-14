document.addEventListener(
  "DOMContentLoaded", () => {
      new Mmenu( "#menu", {
         "extensions": [
            "pagedim-black",
            "theme-dark"
         ],
         "counters": true,
         "iconbar": {
            "use": true,
            "top": [
               "<a href='#/'><i class='fa fa-home'></i></a>",
               "<a href='#/'><i class='fa fa-user'></i></a>"
            ],
            "bottom": [
               "<a href='#/'><i class='fab fa-whatsapp'></i></a>",
               "<a href='#/'><i class='fab fa-instagram'></i></a>",
               "<a href='#/'><i class='fab fa-facebook'></i></a>",
               "<a href='#/'><i class='fab fa-linkedin'></i></a>"
            ]
         },
         "navbars": [
            {
               "position": "top",
               "content": [
                  "searchfield"
               ]
            }
         ]
      });
  }
);