const hover = document.getElementById("trigger");
const a = document.getElementById("target");
hover.addEventListener('mouseover', () => {
    a.src=`img/picB.jpg`
  });
hover.addEventListener('mouseout', () => {
    a.src=`img/picA.jpg`
  });

  