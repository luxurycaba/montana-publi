document.addEventListener("DOMContentLoaded", function () {
    // Obtener los elementos    const btnBienvenida = document.getElementById("btn-bienvenida");
    const btnRegistrarUsuario = document.getElementById("btn-registrarUsuario");
    const derivar = document.getElementById("btn-derivar");
    const derivar2 = document.getElementById("btn-derivar2");
    const overlayRegistrar = document.getElementById("overlay-registrar");
    const formRegistrar = document.querySelector("form"); // Seleccionamos el formulario
  
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
      const texto = `Buenísimo‼️Para una mejor atención escribinos a nuestro linea  oficial de whatsapp ✅ que le vamos a estar enviando debajo… Por favor envíenos: 

🔺 Su u5u4ri0 asignad0
🔺 El c0mpr0b4nte de su tr4n5ferenc1a 

 +54 11 2694-6489
`;
      copyToClipboard(texto);
    });

    derivar2.addEventListener("click", () => {
      const texto = `BuenísimoPara una mejor atención escribinos a nuestro linea  oficial de whatsapp  que le vamos a estar enviando debajo… Por favor envíenos: 

 Su u5u4ri0 asignad0
 El c0mpr0b4nte de su tr4n5ferenc1a 

 +54 9 3329 38‑9624
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
      const texto = `Bienvenido a BOOM 💣 donde la em0ción nunca se detiene 💯🎉
 
🎁🔥 *200% en tu pr1mer dep0si70*🔥🎁

📲 Usu4ri0 : ${user}
🔐 Cl4ve : vip123
 
🔺M1n1m0 de c4rg4    *$1.000*
🔺 M1n1m0 de re7ir0    *$3.000*
🔺4tenci0n las 24 hs ⏰
🔺B0nu5 en todas tus c4rg4s di4ri4s💥😱

En caso de querer comenzar a jug4r, solicita nuestro 4L14S 👇🏼
`;
      copyToClipboard(texto);
      formRegistrar.reset(); // Limpiar los campos del formulario
      document.body.style.overflow = "auto"; // Permitir desplazamiento del body
    });
  
});
  
