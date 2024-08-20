// const download = document.querySelector(".download");
// const dark = document.querySelector(".dark");
// const light = document.querySelector(".light");
// const qrContainer = document.querySelector("#qr-code");
// const qrText = document.querySelector(".qr-text");
// const shareBtn = document.querySelector(".share-btn");
// const sizes = document.querySelector(".sizes");

// dark.addEventListener("input", handleDarkColor);
// light.addEventListener("input", handleLightColor);
// qrText.addEventListener("input", handleQRText);
// sizes.addEventListener("change", handleSize);
// shareBtn.addEventListener("click", handleShare);

// const defaultUrl = "https://youtube.com/@AsmrProg";
// let colorLight = "#fff",
//   colorDark = "#000",
//   text = defaultUrl,
//   size = 300;

// function handleDarkColor(e) {
//   colorDark = e.target.value;
//   generateQRCode();
// }

// function handleLightColor(e) {
//   colorLight = e.target.value;
//   generateQRCode();
// }

// function handleQRText(e) {
//   const value = e.target.value;
//   text = value;
//   if (!value) {
//     text = defaultUrl;
//   }
//   generateQRCode();
// }

// async function generateQRCode() {
//   qrContainer.innerHTML = "";
//   new QRCode("qr-code", {
//     text,
//     height: size,
//     width: size,
//     colorLight,
//     colorDark,
//   });
//   download.href = await resolveDataUrl();
// }

// async function handleShare() {
//   setTimeout(async () => {
//     try {
//       const base64url = await resolveDataUrl();
//       const blob = await (await fetch(base64url)).blob();
//       const file = new File([blob], "QRCode.png", {
//         type: blob.type,
//       });
//       await navigator.share({
//         files: [file],
//         title: text,
//       });
//     } catch (error) {
//       alert("Your browser doesn't support sharing.");
//     }
//   }, 100);
// }

// function handleSize(e) {
//   size = e.target.value;
//   generateQRCode();
// }

// function resolveDataUrl() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const img = document.querySelector("#qr-code img");
//       if (img.currentSrc) {
//         resolve(img.currentSrc);
//         return;
//       }
//       const canvas = document.querySelector("canvas");
//       resolve(canvas.toDataURL());
//     }, 50);
//   });
// }
// generateQRCode();

// Seleção dos elementos do DOM
const downloadBtn = document.querySelector(".download");
const darkColorPicker = document.querySelector(".dark");
const lightColorPicker = document.querySelector(".light");
const qrContainer = document.querySelector("#qr-code");
const qrTextInput = document.querySelector(".qr-text");
const shareButton = document.querySelector(".share-btn");
const sizeSelector = document.querySelector(".sizes");

// Configurações padrão do QR Code
const defaultUrl = "https://www.google.com.br";
let colorLight = "#ffffff";
let colorDark = "#000000";
let qrText = defaultUrl;
let qrSize = 300;

// Adicionando ouvintes de eventos
darkColorPicker.addEventListener("input", updateDarkColor);
lightColorPicker.addEventListener("input", updateLightColor);
qrTextInput.addEventListener("input", updateQRText);
sizeSelector.addEventListener("change", updateSize);
shareButton.addEventListener("click", shareQRCode);

// Função para atualizar a cor escura do QR Code
function updateDarkColor(event) {
  colorDark = event.target.value;
  generateQRCode();
}

// Função para atualizar a cor clara do QR Code
function updateLightColor(event) {
  colorLight = event.target.value;
  generateQRCode();
}

// Função para atualizar o texto do QR Code
function updateQRText(event) {
  qrText = event.target.value || defaultUrl;
  generateQRCode();
}

// Função para atualizar o tamanho do QR Code
function updateSize(event) {
  qrSize = event.target.value;
  generateQRCode();
}

// Função para gerar o QR Code com as configurações atuais
async function generateQRCode() {
  qrContainer.innerHTML = ""; // Limpa o container antes de gerar um novo QR Code
  new QRCode(qrContainer, {
    text: qrText,
    width: qrSize,
    height: qrSize,
    colorLight,
    colorDark,
  });
  downloadBtn.href = await resolveQRCodeDataUrl(); // Atualiza o link de download
}

// Função para compartilhar o QR Code
async function shareQRCode() {
  try {
    const base64url = await resolveQRCodeDataUrl();
    const blob = await (await fetch(base64url)).blob();
    const file = new File([blob], "QRCode.png", { type: blob.type });

    await navigator.share({
      files: [file],
      title: qrText,
    });
  } catch (error) {
    alert("Seu navegador não suporta compartilhamento.");
  }
}

// Função para resolver a URL de dados do QR Code gerado
function resolveQRCodeDataUrl() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const img = document.querySelector("#qr-code img");
      if (img?.currentSrc) {
        resolve(img.currentSrc);
      } else {
        const canvas = document.querySelector("canvas");
        resolve(canvas.toDataURL());
      }
    }, 50);
  });
}

// Gera o QR Code inicial com as configurações padrão
generateQRCode();
