(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $(document).ready(function(){
    $('.materialboxed').materialbox();
    });
    $(document).ready(function() {
    M.updateTextFields();
    });

    function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i){

    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 75 * i)

  });
}

 const titulo = document.querySelector('.titulo-principal');
 typeWrite(titulo);

  }); // end of document ready
})(jQuery); // end of jQuery name space
