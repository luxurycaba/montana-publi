document.addEventListener("DOMContentLoaded", function () {
    // Obtener los elementos
    const btnBienvenida = document.getElementById("btn-bienvenida");
    const btnRegistrarUsuario = document.getElementById("btn-registrarUsuario");
    const derivar = document.getElementById("btn-derivar");
    const derivar2 = document.getElementById("btn-derivar2");
    const bono = document.getElementById("btn-bono");
    const sistemaDePagos = document.getElementById("btn-sistemaDePagos");
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
      const texto = `Buenísimo‼️Para una mejor atención escribinos a nuestro *WHATSAPP PRINCIPAL* que le vamos a estar enviando debajo… Por favor envíenos: 

🔺 Su usuario asignado
🔺 El comprobante de su transferencia 

‪+54 11 2694-6489‬
`;
      copyToClipboard(texto);
    });

    derivar2.addEventListener("click", () => {
      const texto = `Buenísimo‼️Para una mejor atención escribinos a nuestro *WHATSAPP PRINCIPAL* que le vamos a estar enviando debajo… Por favor envíenos: 

🔺 Su usuario asignado
🔺 El comprobante de su transferencia 

‪+54 9 3329 38‑9624‬
`;
      copyToClipboard(texto);
    });
  
    bono.addEventListener("click", () => {
      const texto = `⬇️ *INFO IMPORTANTE* ⬇️

Hay juegos que *NO* permiten usar la bonificación, y estos se encuentran en la sección *BUY BONUS*. 

Los juegos que SI permiten usarla son los que tienen *FS* en la imagen. En estos juegos, puedes gastar la bonificación sin problemas, y si ganas, el dinero ganado se podrá retirar! 🥳

En caso de no usar la bonificación, no es posible retirarla 🚫`;
      copyToClipboard(texto);
    });
  
    btnBienvenida.addEventListener("click", () => {
      const texto = `Bienvenido a montana donde la emoción nunca se detiene 💯🎰

🎁🔥 *200% en tu primer deposito*🔥🎁

Sitio web: http://kingcash7.net

🔺Minimo de carga *$1.000*💸
🔺Minimo de retiro *$3.000*💸
🔺Atención las 24 hs ⏰
🔺Bonus en todas tus cargas diarias 💃

(Consultar por cronograma de pagos) 🙏🏻

Como empezar❓dejame tu nombre o apodo y te creamos una cuenta para comenzar a jugar 🫡🍀`;
      copyToClipboard(texto);
    });
  
  
    sistemaDePagos.addEventListener("click", () => {
      const texto = `*Horarios de retiros* : 
  
♦️ Días hábiles: De 13:00hs a 00:00hs 
♦️ Fines de semana: De 13:00hs a 02:00hs

*Limite de retiros*:

♦️Mínimo de retiro: $2.000
♦️Máximo de retiro por día: $100.000

*Importante* ‼⬇

♦️ Usuario que retire desde $2.000 a $20.000 puede realizar un retiro mas, luego se tiene que cumplir 24hs para volver a retirar

♦️ Para retiros superiores a $20.000, se permite solo un retiro cada 24 horas.
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
      const texto = `Usuario registrado ✅

🔺Usuario: ${user}
🔺Clave: vip123

Plataforma: http://kingcash7.net 🎰

te dejo alias para cargar? confirmame 😊
`;
      copyToClipboard(texto);
      formRegistrar.reset(); // Limpiar los campos del formulario
      document.body.style.overflow = "auto"; // Permitir desplazamiento del body
    });
  
});
  
