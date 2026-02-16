import fs from "fs";
import path from "path";

const repoName = process.argv[2];
if (!repoName) {
  console.error("Usage: node generate-index.mjs <repo-name>");
  process.exit(1);
}

const slidesDir = "slides";
const distDir = "dist";

const slides = fs
  .readdirSync(slidesDir, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => {
    const name = d.name;
    const mdPath = path.join(slidesDir, name, "slides.md");
    const content = fs.readFileSync(mdPath, "utf-8");
    const titleMatch = content.match(/^title:\s*(.+)$/m);
    const title = titleMatch ? titleMatch[1].trim() : name;
    return { name, title };
  });

const basePath = `/${repoName}`;

const cards = slides
  .map(
    (s) => `
      <div class="card" data-url="${basePath}/${s.name}/" data-title="${s.title}">
        <div class="card-preview">
          <iframe src="${basePath}/${s.name}/" loading="lazy" scrolling="no" tabindex="-1"></iframe>
        </div>
        <p class="card-title">${s.title}</p>
      </div>`
  )
  .join("\n");

const sidebarItems = slides
  .map(
    (s) => `<a class="sidebar-item" href="${basePath}/${s.name}/">${s.title}</a>`
  )
  .join("\n        ");

const html = `<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Presentations</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Zen+Old+Mincho:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box}
button{font-family:inherit}
body{
  font-family:'Zen Old Mincho',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',sans-serif;
  background:#f5f5f5;
  color:#333;
}
header{
  background:linear-gradient(to right,#1a3a5c,#1b6b7d,#2cc5c3,#56d8cd);
  padding:20px 40px;
}
header h1{font-size:1.3em;font-weight:600;color:#fff}

/* Sidebar */
.sidebar-toggle{
  position:fixed;
  top:50%;
  left:0;
  transform:translateY(-50%);
  z-index:900;
  width:28px;
  height:56px;
  background:rgba(26,58,92,.85);
  border:none;
  border-radius:0 8px 8px 0;
  color:#fff;
  font-size:14px;
  cursor:pointer;
  display:flex;
  align-items:center;
  justify-content:center;
  transition:background .2s;
}
.sidebar-toggle:hover{background:rgba(26,58,92,1)}
.sidebar{
  position:fixed;
  top:0;
  left:-280px;
  width:280px;
  height:100vh;
  background:#1a2a3a;
  z-index:950;
  transition:left .3s ease;
  overflow-y:auto;
  box-shadow:2px 0 12px rgba(0,0,0,.3);
}
.sidebar.open{left:0}
.sidebar-header{
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:16px 20px;
  background:linear-gradient(to right,#1a3a5c,#1b6b7d);
}
.sidebar-header span{
  color:#fff;
  font-size:1em;
  font-weight:600;
}
.sidebar-close{
  background:none;
  border:none;
  color:rgba(255,255,255,.7);
  font-size:20px;
  cursor:pointer;
  padding:0 4px;
  line-height:1;
}
.sidebar-close:hover{color:#fff}
.sidebar-list{
  padding:8px 0;
}
.sidebar-item{
  display:block;
  padding:12px 20px;
  color:rgba(255,255,255,.8);
  text-decoration:none;
  font-size:.9em;
  line-height:1.5;
  border-bottom:1px solid rgba(255,255,255,.08);
  transition:background .2s,color .2s;
}
.sidebar-item:hover{
  background:rgba(255,255,255,.08);
  color:#fff;
}
.sidebar-backdrop{
  display:none;
  position:fixed;
  inset:0;
  background:rgba(0,0,0,.4);
  z-index:940;
}
.sidebar-backdrop.active{display:block}

.container{
  max-width:1400px;
  margin:0 auto;
  padding:32px 24px;
}
.count{
  font-size:.9em;
  color:#888;
  margin-bottom:24px;
}
.grid{
  display:grid;
  grid-template-columns:repeat(auto-fill,minmax(320px,1fr));
  gap:28px;
}
.card{
  cursor:pointer;
  transition:transform .2s ease;
}
.card:hover{transform:translateY(-4px)}
.card-preview{
  position:relative;
  width:100%;
  aspect-ratio:16/9;
  overflow:hidden;
  border-radius:8px;
  box-shadow:0 2px 12px rgba(0,0,0,.1);
  background:#e0e0e0;
}
.card-preview iframe{
  position:absolute;
  top:0;left:0;
  width:960px;
  height:540px;
  transform-origin:top left;
  border:none;
  pointer-events:none;
}
.card-title{
  margin-top:12px;
  font-size:.95em;
  font-weight:500;
  line-height:1.5;
  padding:0 2px;
}

/* Modal */
.modal-overlay{
  display:none;
  position:fixed;
  inset:0;
  background:rgba(0,0,0,.85);
  z-index:1000;
  align-items:center;
  justify-content:center;
  flex-direction:column;
}
.modal-overlay.active{display:flex}
.modal-header{
  display:flex;
  justify-content:space-between;
  align-items:center;
  width:90vw;
  max-width:1200px;
  margin-bottom:12px;
}
.modal-title{
  color:#fff;
  font-size:1.1em;
  font-weight:500;
}
.modal-actions{display:flex;gap:12px}
.modal-actions a,
.modal-actions button{
  color:#fff;
  background:rgba(255,255,255,.15);
  border:1px solid rgba(255,255,255,.3);
  border-radius:6px;
  padding:6px 16px;
  font-size:.9em;
  cursor:pointer;
  text-decoration:none;
  transition:background .2s;
}
.modal-actions a:hover,
.modal-actions button:hover{
  background:rgba(255,255,255,.25);
}
.modal-body{
  width:90vw;
  max-width:1200px;
  aspect-ratio:16/9;
  border-radius:8px;
  overflow:hidden;
  background:#000;
}
.modal-body iframe{
  width:100%;
  height:100%;
  border:none;
}
</style>
</head>
<body>
<header><h1>Presentations</h1></header>

<button class="sidebar-toggle" id="sidebar-toggle" aria-label="Open sidebar">&#9776;</button>
<div class="sidebar-backdrop" id="sidebar-backdrop"></div>
<nav class="sidebar" id="sidebar">
  <div class="sidebar-header">
    <span>Slides</span>
    <button class="sidebar-close" id="sidebar-close" aria-label="Close sidebar">&times;</button>
  </div>
  <div class="sidebar-list">
    ${sidebarItems}
  </div>
</nav>

<div class="container">
  <p class="count">${slides.length} presentations</p>
  <div class="grid">
${cards}
  </div>
</div>

<div class="modal-overlay" id="modal">
  <div class="modal-header">
    <span class="modal-title" id="modal-title"></span>
    <div class="modal-actions">
      <a id="modal-open" href="#" target="_blank" rel="noopener">Open in new tab</a>
      <button id="modal-close" type="button">Close</button>
    </div>
  </div>
  <div class="modal-body">
    <iframe id="modal-iframe" src="" allow="fullscreen"></iframe>
  </div>
</div>

<script>
(function(){
  // Scale thumbnail iframes to fit card width
  function scaleIframes(){
    document.querySelectorAll('.card-preview').forEach(function(wrapper){
      var scale=wrapper.offsetWidth/960;
      wrapper.querySelector('iframe').style.transform='scale('+scale+')';
    });
  }
  window.addEventListener('load',scaleIframes);
  window.addEventListener('resize',scaleIframes);

  // Modal
  var modal=document.getElementById('modal');
  var modalIframe=document.getElementById('modal-iframe');
  var modalTitle=document.getElementById('modal-title');
  var modalOpen=document.getElementById('modal-open');

  document.querySelectorAll('.card').forEach(function(card){
    card.addEventListener('click',function(){
      var url=card.dataset.url;
      modalIframe.src=url;
      modalTitle.textContent=card.dataset.title;
      modalOpen.href=url;
      modal.classList.add('active');
    });
  });

  function closeModal(){
    modal.classList.remove('active');
    modalIframe.src='';
  }
  document.getElementById('modal-close').addEventListener('click',closeModal);
  modal.addEventListener('click',function(e){
    if(e.target===modal) closeModal();
  });
  document.addEventListener('keydown',function(e){
    if(e.key==='Escape'&&modal.classList.contains('active')) closeModal();
  });

  // Sidebar
  var sidebar=document.getElementById('sidebar');
  var backdrop=document.getElementById('sidebar-backdrop');
  function openSidebar(){
    sidebar.classList.add('open');
    backdrop.classList.add('active');
  }
  function closeSidebar(){
    sidebar.classList.remove('open');
    backdrop.classList.remove('active');
  }
  document.getElementById('sidebar-toggle').addEventListener('click',openSidebar);
  document.getElementById('sidebar-close').addEventListener('click',closeSidebar);
  backdrop.addEventListener('click',closeSidebar);
  document.addEventListener('keydown',function(e){
    if(e.key==='Escape'&&sidebar.classList.contains('open')) closeSidebar();
  });
})();
</script>
</body>
</html>`;

fs.mkdirSync(distDir, { recursive: true });
fs.writeFileSync(path.join(distDir, "index.html"), html);
console.log(`Generated index.html with ${slides.length} slides`);
