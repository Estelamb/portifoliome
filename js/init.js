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

 document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.fixed-action-btn').floatingActionButton();
  });

  }); // end of document ready
})(jQuery); // end of jQuery name space
