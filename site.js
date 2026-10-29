// Progressive enhancement only: every page and all language links work without JavaScript.
(()=>{
 const header=document.querySelector('.site-header'),menu=document.querySelector('.menu-button'),language=document.getElementById('site-language');
 const closeMenu=()=>{header?.removeAttribute('data-menu-open');menu?.setAttribute('aria-expanded','false');};
 menu?.addEventListener('click',()=>{const open=!header.hasAttribute('data-menu-open');header.toggleAttribute('data-menu-open',open);menu.setAttribute('aria-expanded',String(open));});
 document.querySelectorAll('.site-nav a').forEach(a=>a.addEventListener('click',closeMenu));
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&header?.hasAttribute('data-menu-open')){closeMenu();menu.focus();}});
 document.addEventListener('click',e=>{if(!header?.contains(e.target))closeMenu();});
 language?.addEventListener('change',()=>{const target=language.selectedOptions[0]?.dataset.href;if(target)location.assign(target);});
 const dialog=document.getElementById('shot-dialog');let opener=null;
 document.querySelectorAll('[data-shot]').forEach(button=>button.addEventListener('click',()=>{
  if(!dialog?.showModal){location.assign(button.dataset.shot);return;}
  opener=button;const image=dialog.querySelector('img');image.src=button.dataset.shot;image.alt=button.dataset.title;dialog.querySelector('h2').textContent=button.dataset.title;dialog.querySelector('p').textContent=button.dataset.caption;dialog.showModal();
 }));
 dialog?.querySelector('[data-close]')?.addEventListener('click',()=>dialog.close());
 dialog?.addEventListener('click',e=>{if(e.target===dialog){const b=dialog.getBoundingClientRect();if(e.clientX<b.left||e.clientX>b.right||e.clientY<b.top||e.clientY>b.bottom)dialog.close();}});
 dialog?.addEventListener('close',()=>opener?.focus({preventScroll:true}));
})();
