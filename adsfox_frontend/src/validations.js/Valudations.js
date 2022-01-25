const Validations = (errorsText, nameId) => {
  errorsText
    ? (document.getElementById(nameId).innerHTML = errorsText)
    : (document.getElementById(nameId).innerHTML = "");
};

export default Validations;
