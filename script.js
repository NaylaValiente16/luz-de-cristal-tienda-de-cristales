document.getElementById('formCristales').addEventListener('submit', function (e) {
  e.preventDefault();

  const emocion = document.getElementById('emocion').value;
  const color = document.getElementById('color').value;
  const intencion = document.getElementById('intencion').value;
  const intensidad = document.getElementById('intensidad').value;

  let resultado = "";

  // Decisión por combinación de respuestas
  if (
    (emocion === "amor" || intencion === "amor-propio" || color === "rosa") &&
    intensidad === "suave"
  ) {
    resultado = "💗 Tu cristal es el <strong>Cuarzo Rosa</strong>: ideal para sanar el corazón, abrirte al amor y conectarte con la dulzura.";
  } else if (
    (emocion === "protección" || intencion === "limpieza" || color === "negro") &&
    intensidad === "intensa"
  ) {
    resultado = "🖤 Tu cristal es la <strong>Obsidiana</strong>: poderosa para cortar la negatividad, proteger tu campo energético y conectar con tu sombra.";
  } else if (
    (emocion === "claridad" || intencion === "limpieza" || color === "blanco") &&
    intensidad === "suave"
  ) {
    resultado = "🤍 Tu cristal es el <strong>Cuarzo Cristal</strong>: amplificador de energía, ayuda a ordenar tus pensamientos y purifica.";
  } else if (
    (emocion === "calma" || intencion === "intuición" || color === "violeta") &&
    intensidad === "suave"
  ) {
    resultado = "💜 Tu cristal es la <strong>Amatista</strong>: calma la mente, te ayuda a meditar y a conectar con tu ser superior.";
  } else if (
    (emocion === "autoestima" || intencion === "energía" || color === "amarillo") &&
    intensidad === "intensa"
  ) {
    resultado = "🌞 Tu cristal es el <strong>Citrino</strong>: te llena de confianza, luz y abundancia.";
  } else if (
    (intencion === "sanación" || color === "verde")
  ) {
    resultado = "💚 Tu cristal es el <strong>Cuarzo Verde</strong>: ayuda a sanar tanto el cuerpo como las emociones, y equilibra el corazón.";
  } else if (color === "rojo" || emocion === "energía") {
    resultado = "❤️ Tu cristal es el <strong>Jaspe Rojo</strong>: te conecta con la tierra, da energía y seguridad para avanzar.";
  } else if (color === "azul" || intencion === "intuición") {
    resultado = "🔵 Tu cristal es el <strong>Lapislázuli</strong>: conecta con tu sabiduría interior, mejora la comunicación y la intuición.";
  } else if (color === "negro" && emocion === "protección" && intensidad === "suave") {
    resultado = "🛡️ Tu cristal es la <strong>Turmalina Negra</strong>: ideal para absorber la negatividad y mantenerte protegida de forma sutil.";
  } else {
    resultado = "✨ No pudimos definir un cristal exacto. Probá con otras combinaciones, o dejate llevar por tu intuición.";
  }

  document.getElementById('resultadoCristal').innerHTML = `<p>${resultado}</p>`;
});
