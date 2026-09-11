const menu=document.querySelector('.hamburger');
const nav=document.querySelector('nav');
menu.addEventListener('click',()=>nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const items=document.querySelectorAll('.specialty-grid article,.cap-grid>div,.edu-list>div');
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.style.animationDelay=(Math.random()*0.15)+'s';entry.target.classList.add('reveal')}}),{threshold:.12});
items.forEach(i=>observer.observe(i));
