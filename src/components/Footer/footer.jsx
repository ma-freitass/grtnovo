

export default function Footer() {

    const currentYear = new Date().getFullYear();

  return (
   <footer>
   <section className="informations">
     <div className="logo">
       <a href="/" ><img src="" alt="Logo GRT" className="Logomarca"/></a>
     </div>
     <div className="contacts">
       <h3>CONTATO</h3>
       <a href="https://wa.me/552433501815" target="_blank" rel="noopener noreferrer">+(24) 3350-1815</a>
       <a href="https://wa.me/5524981417949" target="_blank" rel="noopener noreferrer">+(24) 98141-7949</a>
       <a href="mailto:contato@grtengenharia.com.br" className="email-link">contato@grtengenharia.com.br</a>
     </div>
     <div className="nav">
       <h3>INFORMAÇÕES</h3>
       <nav>
         <ul>
           <li><a href="/about">Sobre</a></li>
           <li><a href="/portifolio">Portifólio</a></li>
           <li><a href="/contact">Contato</a></li>
         </ul>
       </nav>
     </div>
     <div className="social-media">
       <h3>SIGA-NOS</h3>
       <div className="icons">
         <a href="https://www.instagram.com/grt.engenharia" target="_blank" rel="noopener noreferrer"><img src="" alt="Instagram"/></a>
         <a href="https://wa.me/5524981417949" target="_blank" rel="noopener noreferrer"><img src="" alt="Whatsapp"/></a>
       </div>
     </div>
   </section>

   <section className="adress">
     <div>
       <p> Avenida Paulo Erlei Alves Abrantes, Nº 1110, Três Poços - Volta Redonda / RJ | CEP: 27240-560</p>
     </div>
   </section>

   <section className="rights">
     <p> &copy; {currentYear} GRT Engenharia - Todos os direitos reservados. </p>
   </section>
  </footer>
  );
}
