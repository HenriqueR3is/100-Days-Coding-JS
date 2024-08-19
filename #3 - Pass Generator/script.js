// const lengthSlider = document.querySelector(".pass-length input");
// const options = document.querySelectorAll(".option input");
// const copyIcon = document.querySelector(".input-box span");
// const passwordInput = document.querySelector(".input-box input");
// const passIndicator = document.querySelector(".pass-indicator");
// const generateBtn = document.querySelector(".generate-btn");

// const characters = {
//   lowercase: "abcdefghijklmnopqrstuvwxyz",
//   uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
//   numbers: "0123456789",
//   symbols: "!$%&|[](){}:;.,*+-#@<>~",
// };

// const generatePassword = () => {
//   let staticPassword = "",
//     randomPassword = "",
//     excludeDuplicate = false,
//     passLength = lengthSlider.value;

//   options.forEach((option) => {
//     if (option.checked) {
//       if (option.id !== "exc-duplicate" && option.id !== "spaces") {
//         staticPassword += characters[option.id];
//       } else if (option.id === "spaces") {
//         staticPassword += `  ${staticPassword}  `;
//       } else {
//         excludeDuplicate = true;
//       }
//     }
//   });

//   for (let i = 0; i < passLength; i++) {
//     let randomChar =
//       staticPassword[Math.floor(Math.random() * staticPassword.length)];
//     if (excludeDuplicate) {
//       !randomPassword.includes(randomChar) || randomChar == " "
//         ? (randomPassword += randomChar)
//         : i--;
//     } else {
//       randomPassword += randomChar;
//     }
//   }
//   passwordInput.value = randomPassword;
// };

// const updatePassIndicator = () => {
//   passIndicator.id =
//     lengthSlider.value <= 8
//       ? "weak"
//       : lengthSlider.value <= 16
//       ? "medium"
//       : "strong";
// };

// const updateSlider = () => {
//   document.querySelector(".pass-length span").innerText = lengthSlider.value;
//   generatePassword();
//   updatePassIndicator();
// };
// updateSlider();

// const copyPassword = () => {
//   navigator.clipboard.writeText(passwordInput.value);
//   copyIcon.innerText = "check";
//   copyIcon.style.color = "#4285f4";
//   setTimeout(() => {
//     copyIcon.innerText = "copy_all";
//     copyIcon.style.color = "#707070";
//   }, 1500);
// };

// copyIcon.addEventListener("click", copyPassword);
// lengthSlider.addEventListener("input", updateSlider);
// generateBtn.addEventListener("click", generatePassword);

const comprimentoSlider = document.querySelector(".pass-length input");
const opcoes = document.querySelectorAll(".option input");
const iconeCopiar = document.querySelector(".input-box span");
const inputSenha = document.querySelector(".input-box input");
const indicadorSenha = document.querySelector(".pass-indicator");
const botaoGerar = document.querySelector(".generate-btn");

const caracteres = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "!$%&|[](){}:;.,*+-#@<>~",
};

const gerarSenha = () => {
  let senhaEstatica = "",
    senhaAleatoria = "",
    excluirDuplicados = false,
    comprimentoSenha = comprimentoSlider.value;

  opcoes.forEach((opcao) => {
    if (opcao.checked) {
      if (opcao.id !== "exc-duplicate" && opcao.id !== "spaces") {
        senhaEstatica += caracteres[opcao.id];
      } else if (opcao.id === "spaces") {
        senhaEstatica += `  ${senhaEstatica}  `;
      } else {
        excluirDuplicados = true;
      }
    }
  });

  for (let i = 0; i < comprimentoSenha; i++) {
    let caractereAleatorio =
      senhaEstatica[Math.floor(Math.random() * senhaEstatica.length)];
    if (excluirDuplicados) {
      !senhaAleatoria.includes(caractereAleatorio) || caractereAleatorio == " "
        ? (senhaAleatoria += caractereAleatorio)
        : i--;
    } else {
      senhaAleatoria += caractereAleatorio;
    }
  }
  inputSenha.value = senhaAleatoria;
};

const atualizarIndicadorSenha = () => {
  indicadorSenha.id =
    comprimentoSlider.value <= 8
      ? "fraca"
      : comprimentoSlider.value <= 16
      ? "media"
      : "forte";
};

const atualizarSlider = () => {
  document.querySelector(".pass-length span").innerText =
    comprimentoSlider.value;
  gerarSenha();
  atualizarIndicadorSenha();
};
atualizarSlider();

const copiarSenha = () => {
  navigator.clipboard.writeText(inputSenha.value);
  iconeCopiar.innerText = "check";
  iconeCopiar.style.color = "#4285f4";
  setTimeout(() => {
    iconeCopiar.innerText = "copy_all";
    iconeCopiar.style.color = "#707070";
  }, 1500);
};

iconeCopiar.addEventListener("click", copiarSenha);
comprimentoSlider.addEventListener("input", atualizarSlider);
botaoGerar.addEventListener("click", gerarSenha);
