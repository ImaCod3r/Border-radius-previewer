const valuesForm = document.getElementById("values-form");
const rectangle = document.getElementById("rectangle");

valuesForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let values = {
    topLeft: e.target.elements.topLeft.value,
    topRight: e.target.elements.topRight.value,
    bottomLeft: e.target.elements.bottomLeft.value,
    bottomRight: e.target.elements.bottomRight.value
  };

  console.log(values);

  let type = e.target.elements.type.value;

  updateElement(values, type)
});

function updateElement(values, type) {
  rectangle.style.borderTopLeftRadius = values.topLeft + type;
  rectangle.style.borderTopRightRadius = values.topRight + type;
  rectangle.style.borderBottomRightRadius = values.bottomRight + type;
  rectangle.style.borderBottomLeftRadius = values.bottomLeft + type;

  resultBox.value = `
  border-radius: ${rectangle.style.borderRadius};
  `;
}

const resultBox = document.getElementById("result");

document.getElementById("copy").addEventListener("click", (e)=>{
    e.preventDefault();

    resultBox.select()
    document.execCommand("copy");
})

const colorPicker = document.getElementById("background");

colorPicker.addEventListener("input", (e)=>{
    e.preventDefault();

    rectangle.style.backgroundColor = e.target.value;
})