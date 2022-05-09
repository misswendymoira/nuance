import { dragElement, extractPickerHexValue, setGradient } from './modules/utilities.js'
import { selectPaletteElement, swatchesContainer, colorSquare, dropDown, dragElementObj, hexInput, colorView, aa1, a22, a33, a44, a55, a66, a77, a88, a99, a110, a111, a112, bb1, b22, b33, b44, b55, b66, b77, b88, b99, b110, b111, b112, cc1, c22, c33, c44, c55, c66, c77, c88, c99, c110, c111, c112 } from './modules/querySelections.js'
import { mainPalatte } from './modules/colorPalettes.js'


// variables //
let mainColorValue = ""
let userSelectedCard1 = false
const { sadBlue, happyYellow, freshGreen, pickAVibe } = mainPalatte

const colorBox = (userSelection) => {
  const { a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, c1, c2, c3, c4, c5, c6 } = userSelection;

  aa1.style.backgroundColor = a1;
  aa1.dataset.backgroundColor = a1;
  a22.style.backgroundColor = a2;
  a33.style.backgroundColor = a3;
  a44.style.backgroundColor = a4;
  a55.style.backgroundColor = a5;
  a66.style.backgroundColor = a6;
  a77.style.backgroundColor = a7;
  a88.style.backgroundColor = a8;
  a99.style.backgroundColor = a9;
  a110.style.backgroundColor = a10;
  a111.style.backgroundColor = a11;
  a112.style.backgroundColor = a12;

  bb1.style.backgroundColor = b1;
  b22.style.backgroundColor = b2;
  b33.style.backgroundColor = b3;
  b44.style.backgroundColor = b4;
  b55.style.backgroundColor = b5;
  b66.style.backgroundColor = b6;
  b77.style.backgroundColor = b7;
  b88.style.backgroundColor = b8;
  b99.style.backgroundColor = b9;
  b110.style.backgroundColor = b10;
  b111.style.backgroundColor = b11;
  b112.style.backgroundColor = b12;
  
  cc1.style.backgroundColor = c1;
  c22.style.backgroundColor = c2;
  c33.style.backgroundColor = c3;
  c44.style.backgroundColor = c4;
  c55.style.backgroundColor = c5;
  c66.style.backgroundColor = c6;
};


dropDown.addEventListener('change', (event) => {
  const { value } = event.target;
  switch (value) {
    case "sadBlue":
      colorBox(sadBlue)
      break;
    case "happyYellow":
      colorBox(happyYellow)
      break;
    case "freshGreen":
      colorBox(freshGreen)
      break;
    default:
      colorBox(pickAVibe)
      return;
  }
});


const sliderPicker = new iro.ColorPicker("#sliderPicker", {
  width: 200,
  color: "rgb(255, 0, 0)",
  borderWidth: .44,
  borderColor: "#EAE8E8",
  handleRadius: 6.5,
  margin: 25,
  padding: 4,
  layout: [
    {
      component: iro.ui.Slider,
      options: {
        sliderType: 'hue'
      }
    },
    {
      component: iro.ui.Slider,
      options: {
        sliderType: 'saturation'
      }
    },
    {
      component: iro.ui.Slider,
      options: {
        sliderType: 'value'
      }
    },
  ]
});

sliderPicker.on(['color:init', 'color:change'], function (color) {
  const { hexString } = color
  hexInput.value = hexString;
  colorView.style.backgroundColor = hexString;
  // dragElementObj.style.backgroundColor = hexString;
  setGradient(dragElementObj, hexString)
});

hexInput.addEventListener('change', (event) => extractPickerHexValue(event, mainColorValue, sliderPicker));
colorView.addEventListener('click', (event) => {
  if (userSelectedCard1 === false) {
    userSelectedCard1 = true
  } else if (userSelectedCard1 === true) {
    userSelectedCard1 = false
  }
  console.log(`userSelectedCard1 state: ${userSelectedCard1}`)
});


dragElement(dragElementObj);

swatchesContainer.addEventListener('click', (event) => {
  console.log(event.target.id)
  // first read user selected car 1 state
  // if true, then when user selects swatch pipe to hexInput.value
  // then, set userSelectedCard1 = false;
  if (userSelectedCard1 === true) {
    const id = event.target.id;
    const dropDownValue = selectPaletteElement.value
    // I.E.
    //   mainPalatte.sadBlue.a1
    const colorCombo = mainPalatte[dropDownValue][id]
    sliderPicker.color.onChange(function (color) {
      const { hexString } = color
      hexInput.value = hexString;
      colorView.style.backgroundColor = hexString;
      // dragElementObj.style.backgroundColor = hexString;
      setGradient(dragElementObj, hexString)
    })
    hexInput.value = colorCombo
  }



});



