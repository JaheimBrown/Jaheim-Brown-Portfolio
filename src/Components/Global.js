import { createGlobalStyle } from 'styled-components';

// variables
export const BgColor = '#191923';
export const SecondaryBg = '#202027';
export const PrimaryColor = '#FFB400';
export const SecondaryColor = '#006DC3';
export const ParaCol = '#DAD5D5';
export const ButtonPro = '#212129';

export const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
}

body {
  background-color: ${BgColor};
  color: #fff;
}

abbr{
  text-decoration: none;
}

/* Activation Classes */
.activeUl{ 
position: absolute;
top: 0;
transition: all .5s ease-in-out;
}

// Activate Hamburger Menu
.activeHam{
    span{
     background-color: transparent;
    }
    span::before{
      opacity: 1;
      transition: .3s ease-in-out;
      transform:  rotate(45deg);
     }
    span::after{
      transition: .3s ease-in-out;
       transform:rotate(-45deg);
     }
}

.sendIcon{
  color: ${PrimaryColor};
}

/* Animations */
.scroll{
  position: absolute;
    width: 60px;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);

    @media screen and (max-width: 1024px) {
        bottom: 50px;
    }
}

.rel{
  position: relative;
  z-index: 10;
  transition: all .3s ease-in-out;
}
`;

// // GSAP
// const tl = gsap.timeline({
//   defaults: {opacity: 0, duration: .3, ease: 'ease-in-out'}
// });

// tl.from('.main', { opacity: .5, y: 50 })
// .from('.tech1', { y: 30 }, '-=.2')
// .from('.tech2', { y: 30 }, '-=.1')
// .from('.tech3', { y: 30 }, '-=.1')
// .from('.tech4', { y: 30 }, '-=.1')
// .from('.tech5', { y: 30 }, '-=.1')
// .from('.tech6', { y: 30 }, '-=.1')

