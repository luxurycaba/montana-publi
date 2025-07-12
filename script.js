document.addEventListener("DOMContentLoaded", function () {
    // Obtener los elementos    const btnBienvenida = document.getElementById("btn-bienvenida");
    const btnRegistrarUsuario = document.getElementById("btn-registrarUsuario");
    const referidoAcreditado = document.getElementById("btn-referidoAcreditado");
    const derivar = document.getElementById("btn-derivar");
    const derivar2 = document.getElementById("btn-derivar2");
    const derivar3 = document.getElementById("btn-derivar3");
    const derivar4 = document.getElementById("btn-derivar4");
    const overlayRegistrar = document.getElementById("overlay-registrar");
    const overlayReferidoAcreditado = document.getElementById("overlay-referidoAcreditado");
    const formRegistrar = document.querySelector("form"); // Seleccionamos el formulario
    const formReferidoAcreditado = document.querySelectorAll("form")[1]; // Seleccionamos el segundo formulario
  
    // Funcion para copiar texto al portapapeles
    function copyToClipboard(text) {
      const elementoTemporal = document.createElement("textarea");
      elementoTemporal.value = text;
      document.body.appendChild(elementoTemporal);
      elementoTemporal.select();
      document.execCommand("copy");
      document.body.removeChild(elementoTemporal);
    }
  
  
    derivar.addEventListener("click", () => {
      const texto = `DERIVAR 1: 

Buenísimo‼️Para una mejor atención escribinos a nuestro linea2 oficial de whatsapp  ✅ que le vamos a estar enviando debajo… Por favor envíenos:
 
🔹 Su u5u4ri0 asignad0
🔹 El c0mpr0b4nte de su tr4n5ferenc1a
 
+54 9 11 2694-6489
`;
      copyToClipboard(texto);
    });

    derivar2.addEventListener("click", () => {
      const texto = `DERIVAR 2:

Buenísimo‼️Para una mejor atención escribinos a nuestro linea3 oficial de whatsapp ✅ que le vamos a estar enviando debajo… Por favor envíenos:
 
🔸 Su u5u4ri0 asignad0
🔸 El c0mpr0b4nte de su tr4n5ferenc1a
 
+54 11 7627-7867
`;
      copyToClipboard(texto);
    });

    derivar3.addEventListener("click", () => {
      const texto = `DERIVAR 3: 

Buenísimo‼️Para una mejor atención escribinos a nuestro linea4 oficial de whatsapp ✅ que le vamos a estar enviando debajo… Por favor envíenos:
 
🔸 Su u5u4ri0 asignad0
🔸 El c0mpr0b4nte de su tr4n5ferenc1a


+54 9 11 7153-8062
`;
      copyToClipboard(texto);
    });

    derivar4.addEventListener("click", () => {
      const texto = `DERIVAR 4: 

Buenísimo‼️Para una mejor atención escribinos a nuestro linea5 oficial de whatsapp ✅ que le vamos a estar enviando debajo… Por favor envíenos:
 
🔺 Su u5u4ri0 asignad0
🔺 El c0mpr0b4nte de su tr4n5ferenc1a
 
54 9 11 2702-5488
`;
      copyToClipboard(texto);
    });
  
    // Función para abrir y cerrar el overlay del menú registrar usuario
    btnRegistrarUsuario.addEventListener("click", function () {
      if (overlayRegistrar.style.display === "flex") {
        overlayRegistrar.style.display = "none"; // Cerrar overlay del menú central
      } else {
        overlayRegistrar.style.display = "flex"; // Abrir overlay del menú central
        document.body.style.overflow = "hidden"; // Deshabilitar el scroll del body
      }
      document.getElementById("usuarioRegistrar").focus();
    });
  
    // Cerrar el overlay si se hace clic fuera del formulario del tercer menú
    overlayRegistrar.addEventListener("click", function (e) {
      if (e.target === overlayRegistrar) {
        overlayRegistrar.style.display = "none"; // Cerrar overlay si se hace clic fuera del formulario
        formRegistrar.reset(); // Limpiar los campos del formulario
        document.body.style.overflow = "auto"; // Permitir desplazamiento del body
      }
    });

    // Cerrar el overlay del tercer menú si se presiona ESC
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        // Verifica si la tecla presionada es Escape
        overlayRegistrar.style.display = "none"; // Cerrar overlay si se hace clic fuera del formulario
        formRegistrar.reset(); // Limpiar los campos del formulario
        document.body.style.overflow = "auto"; // Permitir desplazamiento del body
      }
    });
  
    // Prevenir el envío del formulario y cerrar el overlay del tercer menú
    formRegistrar.addEventListener("submit", function (e) {
      e.preventDefault(); // Evita el comportamiento por defecto del formulario
      overlayRegistrar.style.display = "none"; // Cerrar el overlay del tercer menú
      const user = document.getElementById("usuarioRegistrar").value.trim();
      const texto = `Bienvenid@ a MONTANA c4sin0! 🎰🔥 Tu suerte arranca HOY 🍀🫰🏼

💥 *200% de b0n0 de regalo en tu primer deposito*💃
💥 *150% en tu segunda c4rg4* 😱

📲 Usu4rio: ${user}
🔐 Cl4ve: vip123

L1NK: https://kingcash7.net 🫰🏼

🔺M1n1mo de c4rg4: *$1.000*
🔺M1n1m0 de retiro: *$3.000*
🔺 Atencion las 24 hs 🕒
🔺B0nus en todas tus c4rgas diarias 💃🥳

Te envio 4li4s? confirmame 🥰
`;
      copyToClipboard(texto);
      formRegistrar.reset(); // Limpiar los campos del formulario
      document.body.style.overflow = "auto"; // Permitir desplazamiento del body
    });

    referidoAcreditado.addEventListener("click", function () {
      if (overlayReferidoAcreditado.style.display === "flex") {
        overlayReferidoAcreditado.style.display = "none"; // Cerrar overlay
        document.body.style.overflow = "auto"; // Permitir desplazamiento del body
      } else {
        overlayReferidoAcreditado.style.display = "flex"; // Abrir overlay
        document.body.style.overflow = "hidden"; // Deshabilitar el scroll del body
      }
      document.getElementById("usuarioQueRefiere").focus();
    });

    overlayReferidoAcreditado.addEventListener("click", function (e) {
      if (e.target === overlayReferidoAcreditado) {
        overlayReferidoAcreditado.style.display = "none"; // Cerrar overlay si se hace clic fuera del formulario
        formReferidoAcreditado.reset(); // Limpiar los campos del formulario
        document.body.style.overflow = "auto"; // Permitir desplazamiento del body
      }
    });    

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        // Verifica si la tecla presionada es Escape
        overlayReferidoAcreditado.style.display = "none"; // Cerrar overlay si se hace clic fuera del formulario
        formReferidoAcreditado.reset(); // Limpiar los campos del formulario
        document.body.style.overflow = "auto"; // Permitir desplazamiento del body
      }
    });

    formReferidoAcreditado.addEventListener("submit", function (e) {
      e.preventDefault(); // Evita el comportamiento por defecto del formulario
      overlayReferidoAcreditado.style.display = "none"; // Cerrar el overlay del quinto menú
      const usuario1 = document.getElementById("usuarioQueRefiere").value.trim();
      const usuario2 = document.getElementById("usuarioReferido").value.trim();
      const texto = `El usu4ri0 *${usuario1}* recomendó al usu4ri0 *${usuario2}* y fue b0nific4d0!! ✅ 
Muchas gracias por tu recomendación ! exitooos ❤️🍀`;
      copyToClipboard(texto);
      formReferidoAcreditado.reset(); // Limpiar los campos del formulario
      document.body.style.overflow = "auto"; // Permitir desplazamiento del body
    });

});
