// Ultimate Taekwondo Academy — site JS
(function(){
  // Mobile drawer
  const ham = document.getElementById('hamburger');
  const drawer = document.getElementById('drawer');
  const scrim = document.getElementById('scrim');
  function closeDrawer(){ ham?.classList.remove('open'); drawer?.classList.remove('open'); scrim?.classList.remove('open'); document.body.style.overflow=''; }
  function openDrawer(){ ham?.classList.add('open'); drawer?.classList.add('open'); scrim?.classList.add('open'); document.body.style.overflow='hidden'; }
  ham?.addEventListener('click', ()=> drawer.classList.contains('open') ? closeDrawer() : openDrawer());
  scrim?.addEventListener('click', closeDrawer);
  drawer?.querySelectorAll('a').forEach(a=> a.addEventListener('click', closeDrawer));

  // Scroll reveal
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);}});
  },{threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=> io.observe(el));

  // Animated counters
  const counters = document.querySelectorAll('.stat-num[data-count]');
  const cio = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(!e.isIntersecting) return;
      const el = e.target;
      const target = parseInt(el.dataset.count,10);
      const dur = 1400; const start = performance.now();
      function tick(now){
        const p = Math.min((now-start)/dur, 1);
        el.textContent = Math.floor(target * (0.2 + 0.8*p*(2-p))) + (el.dataset.suffix||'');
        if(p<1) requestAnimationFrame(tick); else el.textContent = target + (el.dataset.suffix||'');
      }
      requestAnimationFrame(tick);
      cio.unobserve(el);
    });
  },{threshold:.4});
  counters.forEach(c=> cio.observe(c));

  // Gallery filter
  document.querySelectorAll('.filter-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      document.querySelectorAll('.gallery img').forEach(img=>{
        img.style.display = (f==='all' || img.dataset.cat===f) ? '' : 'none';
      });
    });
  });

  // Lightbox
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightbox-img');
  document.querySelectorAll('.gallery img').forEach(img=>{
    img.addEventListener('click', ()=>{ if(!lb) return; lbImg.src = img.src; lb.classList.add('open'); });
  });
  lb?.addEventListener('click', ()=> lb.classList.remove('open'));

  // Forms — WhatsApp handoff
  document.querySelectorAll('form[data-wa]').forEach(f=>{
    f.addEventListener('submit', (e)=>{
      e.preventDefault();
      const data = new FormData(f);
      const lines = []; data.forEach((v,k)=> v && lines.push(`*${k}:* ${v}`));
      const msg = encodeURIComponent(`*New ${f.dataset.wa}*\n\n${lines.join('\n')}\n\n— Sent via website`);
      window.open(`https://wa.me/917220986313?text=${msg}`,'_blank');
      f.reset();
      alert('Thanks! Your details opened in WhatsApp. Hit send to deliver.');
    });
  });

  // Active link highlight
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .drawer a').forEach(a=>{
    const href = a.getAttribute('href');
    if(href && href.endsWith(path)) a.classList.add('active');
  });
})();
