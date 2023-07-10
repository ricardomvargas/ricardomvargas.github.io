/* Será executado toda a vez que a visibilidade de um dos elementos observados mudar. */
const displayObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry?.target?.classList?.contains('hidden-soft-skill')) {
      entry.target.style.transitionDelay = `${1 + index}00ms`;
    }

    if (entry.isIntersecting && !entry.target.classList.contains('show')) {
      entry.target.classList.add('show');
    }
    /* Se eu quiser fazer o efeito acontecer sempre que a visibilidade do scroll
         * mundar, basta adicionar: 
        else {
           entry.target.classList.remove('show');
        }
        */
  });
});

/** Oberserver configurado no elemento pai do conteúdo da li. É buscado um dos filhos
 * que tem o valor da porcentagem e esse valor é setado como sendo largura da barra
 * de progresso. */
const growingObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const spanPercent = entry.target.querySelector('.skill-percent');
    const spanToAnimate = entry.target.querySelector('.skill-title-bg');
    const percent = spanPercent.innerHTML.replace(' ', '').replace('%', '').trim();

    if (entry.isIntersecting && !spanToAnimate.classList.contains('growing')) {
      spanToAnimate.style.width = percent + '%';
      spanToAnimate.classList.add('growing');
    }
  });
});

const hiddenSections = document.querySelectorAll('.hidden');
const hiddenSoftSkills = document.querySelectorAll('.hidden-soft-skill');
const hiddenRightSections = document.querySelectorAll('.hidden-right');
const hiddenTopSections = document.querySelectorAll('.hidden-top');
const techSkills = document.querySelectorAll('.skill-description');
hiddenSections.forEach((el) => displayObserver.observe(el));
hiddenSoftSkills.forEach((el) => displayObserver.observe(el));
hiddenRightSections.forEach((el) => displayObserver.observe(el));
hiddenTopSections.forEach((el) => displayObserver.observe(el));
techSkills.forEach((el) => growingObserver.observe(el));
