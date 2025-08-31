(function(){
  const form = document.getElementById('contactForm');
  const alertBox = document.getElementById('formAlert');
  const btnLimpar = document.getElementById('btnLimpar');

  form.addEventListener('submit', function(e){
    e.preventDefault();
    // HTML5 validation combined with custom rules
    let valid = true;
    for (const el of form.querySelectorAll('input, textarea')){
      if (!el.checkValidity()) {
        el.classList.add('is-invalid');
        valid = false;
      } else {
        el.classList.remove('is-invalid');
      }
    }
    // Extra: minimum lengths
    const nome = form.elements['nome'].value.trim();
    const assunto = form.elements['assunto'].value.trim();
    const mensagem = form.elements['mensagem'].value.trim();
    if (nome.length < 3) { valid = false; form.elements['nome'].classList.add('is-invalid'); }
    if (assunto.length < 3) { valid = false; form.elements['assunto'].classList.add('is-invalid'); }
    if (mensagem.length < 10) { valid = false; form.elements['mensagem'].classList.add('is-invalid'); }

    if (valid){
      alertBox.classList.remove('d-none');
      alertBox.focus();
      form.reset();
    }
  });

  btnLimpar.addEventListener('click', function(){
    form.reset();
    for (const el of form.querySelectorAll('.is-invalid')){
      el.classList.remove('is-invalid');
    }
    alertBox.classList.add('d-none');
  });

  // Smooth scroll for nav links
  document.querySelectorAll('a.nav-link[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
        // collapse on mobile
        const nav = document.getElementById('navbarNav');
        if (nav.classList.contains('show')) new bootstrap.Collapse(nav).hide();
      }
    });
  });
})();