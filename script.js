/* Menu */
((d)=>{
    const $btnMenu =d.querySelector(".menu-btn"),
        $menu = d.querySelector(".menu");
    
    $btnMenu.addEventListener("click", (e)=>{
     $btnMenu.firstElementChild.classList.toggle("none");
     $btnMenu.lastElementChild.classList.toggle("none");
     $menu.classList.toggle("is-active");
    });
    /* rutina: que detecte que si hago click se cierre el menu. delegacion de eventos, delegando el click a unelemento superior en este caso el document */
    d.addEventListener("click", e=>{
        if(!e.target.matches(".menu a")) return false;
    
        /* evaluar cual es elemento q detona el click, target el objeto q origina el ebento, mathces se le pasa un selector valido */
        $btnMenu.firstElementChild.classList.remove("none");
        $btnMenu.lastElementChild.classList.add("none");
        $menu.classList.remove("is-active");
    });
    })(document);

    /* ContactForm */
((d) => {
    const $form = d.querySelector(".contact-form"),
      $loader = d.querySelector(".contact-form-loader"),
      $response = d.querySelector(".contact-form-response");
  
    $form.addEventListener("submit", (e) => {
      e.preventDefault();
      $loader.classList.remove("none");
      fetch("https://formsubmit.co/ajax/tefys.gz@gmail.com", {
        method: "POST",
        body: new FormData(e.target),
      })
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))
        .then((json) => {
          console.log(json);
          location.hash = "#gracias";
          $form.reset();
        })
        .catch((err) => {
          console.log(err);
          let message =
            err.statusText || "Ocurrió un error al enviar, intenta nuevamente";
          $response.querySelector(
            "h3"
          ).innerHTML = `Error ${err.status}: ${message}`;
        })
        .finally(() => {
          $loader.classList.add("none");
          setTimeout(() => {
            location.hash = "#close";
          }, 3000);
        });
    });
  })(document);