/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        custom:{
          headerBlack: "#222222",
          black: "#161513",
          lightGrey: "#3a3a3a",
          orange: "#df5f17",
          darkOrange: '#ae4c13',
          blue:"#5BADFF",
          arrowBlack: "#272727",
          timeColor: "#9b9b9b",
          queryBorderColor: "#727272",
          queryHoverColor: "#565656",
          queryTimeColor: "rgb(189, 189, 189)"
        }
      },
      width:{
        boxBig: "14.5rem",
        boxSmall: "2.2rem",
        innerCont: "47rem",
        profileWidth: "30rem",
        drawerWidth: "87%",
        notContWidth: "95%",
        blogmgtWidth: "85%",
        blogTitleWidth: "38%",
        blogOverlayWidth: "40rem"
      },
      maxWidth:{
        notificationWidth: "66%"
      },
      height:{
        boxBig: "14.5rem",
        boxSmall: "2.2rem",
        projectImgHeight: "55%",
        projectDescHeight: "45%",
        blogContHeight: "30rem",
        blogOverlayHeight: "32rem"
      },
      minHeight:{
        dashboardHeight: "36rem",
        notContHeight: "55%",
        loginHeight: "33.33%"
      },
      borderWidth:{
        boxBig: "1.5px"
      }
    },
  },
  plugins: [],
}

