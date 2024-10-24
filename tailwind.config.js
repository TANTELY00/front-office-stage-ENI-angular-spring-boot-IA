
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors:{
        autoPinks : '#F90086'
      }
    },

    // pour container
    container : {
      center:true,
      padding : {
        DEFAULT : "12px",
        md : "32px",
      },

      
    },


    // pour l'écran
    screens:{
      sm : "340px",
      md : "540px",
      lg : "768px",
      xl : "1180px"
    },

    //pour le fonts 
    fontFamily:{
      Ubuntu : ["Ubuntu", "sans-serif"]
    },

  },

  plugins: [],
}

