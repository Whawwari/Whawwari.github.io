/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      //place the nickname of the colour you want and than the actual colore code.
      colors:{
//ex: "gray 10": "#982739",

       "DPurple": "#352F44",
       "MPurple": "#5C5470",
       "LPurple": "#B9B4C7",
       "Paige": "#FAF0E6",
       "Black": "#000000"
      },
      
backgroundImage: (theme) => ({
  //might have to change
  "gradient-yellowred": "linear-gradient(90deg, #982739 0%)"
}),
fontFamily:{
  lato: ["lato", "sans-serif"]
},
content:{
  //evolvetext:"url('./assests/evolveText/png')"
  titleName: "url(@/assets/titleName.png)",
  PlaceHolder: "url(@/assets/PNGimg.png)",
  MainTitle: "url(@/assets/img/MainTitle.png)",
  MainTT: "url(@/assets/img/MainTT.png)",
},

},
screens:{
  xs:"480px",
  sm:"768px",
  md:"1060px"
    },

  },
  plugins: [],
}

