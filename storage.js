const addLocalstorage = () => {
  const idInput = document.getElementById("input-id");
  const id = idInput.value;
  const valueInput = document.getElementById("input-value");
  const value = valueInput.value;
  if (id && value) {
    localStorage.setItem(id, value);
  }
  idInput.value = "";
  valueInput.value = "";
};
