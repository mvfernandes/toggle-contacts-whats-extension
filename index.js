btn = document.createElement('button');
btn.id = 'vns-btn-menu';
btn.style = 'top: 16px; left: 20px; background: teal; padding: 5px; color: #fff; z-index: 9999; position: fixed;';
btn.innerHTML = 'Esconder Contatos';
btn.onclick = function () {
  if (btn.innerHTML.includes('Esconder Contatos')) {
    btn.innerText = 'Mostrar Contatos';
    document.querySelector('#side').parentNode.style = 'display: none;';
  } else {
    btn.innerText = 'Esconder Contatos';
    document.querySelector('#side').parentNode.style = 'display: block;';
  }
};

document.querySelector('body').appendChild(btn);

const MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

const observer = new MutationObserver(function () {
  const items = document.querySelectorAll('#pane-side [data-testid="cell-frame-container"]');
  if (items) {
    items.forEach((el, index) => {
      if (index > 0) {
        if ('haveListenerBlur' in el.dataset === false) {
          el.dataset.haveListenerBlur = 'ok';
          
          el.style.filter = 'blur(3px)';

          el.addEventListener('mouseenter', () => {
            el.style.filter = '';
          });
          el.addEventListener('mouseleave', () => {
            el.style.filter = 'blur(3px)';
          });
        }
      }
    });
  }
});

setTimeout(() => {
  const target = document.querySelector('#pane-side');
  if (target) {
    observer.observe(target, {
      subtree: true,
      attributes: true,
    });
  }
}, 5000);
