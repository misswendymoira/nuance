// export const bindEventListeners = () => {

// }
export const extractPickerHexValue = (event, mainColorValue, sliderPicker) => {
  const colorValue = event.target.value;
  mainColorValue = colorValue
  console.log(mainColorValue);
  sliderPicker.color.hexString = mainColorValue;
}

export const dragElement = (elmnt) => {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "nucleus")) {
    document.getElementById(elmnt.id + "nucleus").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // this I find the cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the user moves their cursor:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // finds the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // "places" the element after the mouse stops/release:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
// radial gradient exp
export const setGradient = (dragElementObj, mainColorValue) => {
  console.log('hi')
  dragElementObj.style.background =
    `radial-gradient(circle at 50% 50%, ${mainColorValue} 0%, #FFFFFF 100%)`
  // "linear-gradient(to right, " 
  // + color1.value 
  // + ", " 
  // + color2.value 
  // + ")";
  // css.textContent = body.style.background + ";";
}