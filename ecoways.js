/* Base Styles */
body, html {
  margin:0;
  padding:0;
  font-family: 'Arial', sans-serif;
  color:#0A0F1A;
  scroll-behavior: smooth;
}
a { text-decoration:none; color:inherit; }

/* Navbar */
.navbar {
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:15px 30px;
  background:#0A0F1A;
  position:fixed;
  width:100%;
  z-index:1000;
}
.nav-links {
  display:flex;
  gap:25px;
}
.nav-links li { list-style:none; }
.nav-links a { color:#fff; font-weight:600; }
.logo-img { height:40px; margin-right:10px; vertical-align:middle; }
.hamburger { display:none; flex-direction:column; cursor:pointer; gap:5px; }
.hamburger span { background:#fff; height:3px; width:25px; }

/* Hero */
.hero-section {
  height:100vh;
  background-size:cover;
  background-position:center;
  display:flex;
  align-items:center;
  justify-content:center;
  position:relative;
  color:#fff;
  text-align:center;
}
.hero-section .overlay {
  position:absolute;
  top:0; left:0;
  width:100%; height:100%;
  background:rgba(0,0,0,0.6);
}
.hero-content { position:relative; z-index:2; max-width:700px; }
.hero-content h1 { font-size:2.5rem; margin-bottom:15px; }
.hero-content p { font-size:1.2rem; margin-bottom:20px; }

/* Buttons */
.btn-primary {
  background:#4CAF50;
  color:#fff;
  padding:12px 25px;
  border:none;
  border-radius:5px;
  font-size:1rem;
  cursor:pointer;
  transition:0.3s;
}
.btn-primary:hover { background:#F57C00; }

/* Sections */
.section { padding:80px 20px; text-align:center; }
h2 { font-size:2rem; margin-bottom:40px; }

/* Services Grid */
.services-grid {
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
  gap:25px;
}
.service-card {
  background:#fff;
  padding:25px;
  border-radius:10px;
  box-shadow:0 5px 20px rgba(0,0,0,0.1);
  opacity:0;
  transform:translateY(50px);
  transition:0.6s;
}
.service-card.show { opacity:1; transform:translateY(0); }

/* Projects Grid */
.projects-grid {
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
  gap:25px;
}
.project-card {
  position:relative;
  overflow:hidden;
  border-radius:10px;
  opacity:0;
  transform:translateY(50px);
  transition:0.6s;
}
.project-card.show { opacity:1; transform:translateY(0); }
.project-card img { width:100%; height:auto; display:block; }
.project-card .overlay {
  position:absolute;
  bottom:0;
  width:100%;
  padding:15px;
  background:rgba(0,0,0,0.6);
  color:#fff;
  text-align:center;
  opacity:0;
  transition:0.3s;
}
.project-card:hover .overlay { opacity:1; }

/* Contact */
.contact-info p { margin:10px 0; }
form { max-width:500px; margin:20px auto; display:flex; flex-direction:column; gap:15px; }
form input, form textarea { padding:12px; border:1px solid #ccc; border-radius:5px; font-size:1rem; }
form button { align-self:center; }

/* WhatsApp Button */
.whatsapp-btn {
  position:fixed;
  bottom:20px; right:20px;
  background:#25D366;
  color:#fff;
  padding:15px 20px;
  border-radius:50px;
  font-weight:bold;
  box-shadow:0 5px 15px rgba(0,0,0,0.2);
  text-decoration:none;
  z-index:1000;
}
.whatsapp-btn:hover { background:#128C7E; }

/* Footer */
footer { background:#0A0F1A; color:#fff; padding:20px; text-align:center; }

/* Responsive */
@media(max-width:768px){
  .nav-links { display:none; flex-direction:column; background:#0A0F1A; position:absolute; top:60px; right:0; width:200px; padding:20px; }
  .nav-links.active { display:flex; }
  .hamburger { display:flex; }
}
