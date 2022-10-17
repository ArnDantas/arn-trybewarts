const loginButton = document.querySelector('#submitLogin');
const login = document.querySelector('#user');
const password = document.querySelector('#password');

loginButton.addEventListener('click', () => {
  if (login.value === 'tryber@teste.com' && password.value === '123456') {
    return alert('Olá, Tryber!');
  }
  alert('Email ou senha inválidos.');
});

const agreementCheckbox = document.getElementById('agreement');
const submitButton = document.getElementById('submit-btn');
agreementCheckbox.addEventListener('change', () => {
  if (submitButton.hasAttribute('disabled')) {
    submitButton.removeAttribute('disabled');
  } else {
    submitButton.setAttribute('enable', '');
  }
});

const areaText = document.querySelector('#textarea');
const getCounter = document.querySelector('#counter');
areaText.addEventListener('beforeInput', () => {
  getCounter.innerText = 500 - areaText.value.length;
});

areaText.addEventListener('keyup', () => {
  getCounter.innerText = 500 - areaText.value.length;
});

function formFild() {
  const getName = document.getElementById('nome');
  const getNick = document.getElementById('input-name');
  const getLastNick = document.getElementById('input-lastname');

  getName.innerText = `Nome: ${getNick.value} ${getLastNick.value}`;

  const getMail = document.getElementById('email');
  const inputEmail = document.getElementById('input-email');
  getMail.innerText = `Email: ${inputEmail.value}`;
}

function formFild2() {
  const getDic = document.getElementsByClassName('subject');
  const dic = [];
  for (let index = 0; index < getDic.length; index += 1) {
    const getArray = getDic[index];
    if (getArray.checked === true) {
      dic.push(getArray.value);
    }
  }
  return dic;
}

const resultadoFinal = document.getElementById('form-data');
const gFamily = () => {
  const create = document.createElement('p');
  const familys = document.querySelector('input[name="family"]:checked');

  create.innerText = `Família: ${familys.value}`;

  resultadoFinal.appendChild(create);
};
const obs = () => {
  const create = document.createElement('p');
  const txt = document.getElementById('textarea').value;

  create.innerText = `Observações: ${txt}`;
  resultadoFinal.appendChild(create);
};
const getForms = document.getElementById('evaluation-form');
submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  getForms.style.display = 'none';

  formFild();
  gFamily();
  obs();

  const getHouse = document.getElementById('casa');
  const inputHause = document.getElementById('house');
  getHouse.innerText = `Casa: ${inputHause.value}`;

  const getForm = document.getElementById('avaliacao');
  const inputForm = document.querySelector('input[name="rate"]:checked');
  getForm.innerText = `Avaliação: ${inputForm.value}`;

  const getMike = document.getElementById('materias');
  getMike.innerText = `Matérias: ${formFild2().join(', ')}`;
});
