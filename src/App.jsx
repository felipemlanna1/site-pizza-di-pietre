import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  WhatsappLogo, Phone, MapPin, Clock, Pizza, FireSimple,
  Star, InstagramLogo, ArrowRight, Timer, Motorcycle,
  Users, CookingPot, Leaf, CalendarBlank
} from '@phosphor-icons/react'
import './index.css'

const WHATSAPP = 'https://wa.me/5548999766358?text=Olá! Gostaria de fazer um pedido na Pizza Di Pietre.'
const PHONE = '(48) 99976-6358'
const PHONE2 = '(48) 3369-6922'
const ADDRESS = 'R. Leonel Pereira, 337 — Cachoeira do Bom Jesus, Florianópolis/SC'
const INSTAGRAM = 'https://instagram.com/pizzadipietre'
const HOURS = 'Todos os dias, 18h às 00h'

function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}>{children}</motion.div>
  )
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])
  const links = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Cardápio', href: '#cardapio' },
    { label: 'Rodízio', href: '#rodizio' },
    { label: 'Delivery', href: '#delivery' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Avaliações', href: '#avaliacoes' },
    { label: 'Contato', href: '#contato' },
  ]
  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <a href="#" className="navbar-brand">
          <img src="./images/logo.png" alt="Pizza Di Pietre" />
        </a>
        <div className="navbar-links">
          {links.map(l => <a key={l.href} href={l.href} className="navbar-link">{l.label}</a>)}
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="navbar-cta">
            <WhatsappLogo size={14} weight="fill" /> Pedir
          </a>
        </div>
        <button className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>
      <div className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
        {links.map(l => <a key={l.href} href={l.href} className="mobile-nav-link" onClick={() => setMenuOpen(false)}>{l.label}</a>)}
        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: 20 }}>
          <WhatsappLogo size={18} weight="fill" /> Fazer Pedido
        </a>
      </div>
    </>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg"><img src="./images/hero-pizza.jpg" alt="Pizza artesanal Di Pietre" /></div>
      <div className="hero-content">
        <Reveal>
          <div className="hero-badge"><span className="hero-badge-dot" />15 Anos de Tradição — Norte da Ilha</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h1>Mais de 60 sabores<br />de pizza <em>artesanal</em></h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="hero-subtitle">
            Massa artesanal preparada diariamente, ingredientes selecionados e o sabor
            autêntico da verdadeira pizza italiana. Rodízio, delivery ou no salão —
            sua experiência começa aqui.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="hero-actions">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <WhatsappLogo size={18} weight="fill" /> Pedir Agora
            </a>
            <a href="#cardapio" className="btn-outline">Ver Cardápio <ArrowRight size={16} /></a>
          </div>
        </Reveal>
        <Reveal delay={0.4}>
          <div className="hero-info">
            <div className="hero-info-item"><MapPin size={16} weight="duotone" /><span>Cachoeira do Bom Jesus</span></div>
            <div className="hero-info-item"><Clock size={16} weight="duotone" /><span>18h às 00h</span></div>
            <div className="hero-info-item"><Star size={16} weight="fill" /><span>4.5 — 2.000+ avaliações</span></div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="history" id="sobre">
      <div className="container">
        <div className="history-grid">
          <Reveal>
            <div className="history-image"><img src="./images/forno.jpg" alt="Forno a lenha Di Pietre" /></div>
          </Reveal>
          <div>
            <Reveal>
              <div className="section-label">Nossa História</div>
              <div className="history-year">2009</div>
              <h2 className="section-title">15 anos dedicados à<br />arte de fazer <em>pizza</em></h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="history-text">
                A Pizza Di Pietre nasceu em 2009 na Cachoeira do Bom Jesus, no coração do
                Norte da Ilha de Florianópolis. Com paixão pela gastronomia italiana e
                ingredientes de primeira qualidade, construímos uma tradição que já
                conquistou mais de 2.000 avaliações no Google.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="history-text" style={{ marginTop: 16 }}>
                Nosso cardápio conta com mais de 60 sabores — das clássicas Margherita e
                Calabresa até criações exclusivas como a Maria Bonita (carne seca com queijo
                coalho) e a Camarão Supreme. Cada pizza é preparada com massa fresca do dia
                e assada no ponto perfeito.
              </p>
            </Reveal>
            <Reveal delay={0.35}>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: 32 }}>
                <CalendarBlank size={18} weight="duotone" /> Fazer Reserva
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

function Menu() {
  const pizzas = [
    { category: 'Clássica', title: 'Margherita', desc: 'Molho de tomate fresco, muçarela, manjericão e azeite extra virgem. A tradição italiana em cada fatia.', image: './images/hero-pizza.jpg' },
    { category: 'Especial', title: 'Maria Bonita', desc: 'Carne seca desfiada, queijo coalho gratinado, cebola caramelizada e cream cheese. Sabor nordestino na pizza.', image: './images/forno.jpg' },
    { category: 'Premium', title: 'Camarão Supreme', desc: 'Camarões grelhados, cream cheese, tomate seco e rúcula. Sofisticação e sabor do mar em harmonia.', image: './images/variedade.jpg' },
    { category: 'Especial', title: 'Linguiça Blumenau', desc: 'Linguiça artesanal de Blumenau, cebola roxa, pimentão e muçarela especial. Sabor catarinense.', image: './images/calzone.jpg' },
    { category: 'Doce', title: 'Bananex', desc: 'Banana caramelizada, doce de leite, canela e sorvete de creme. A sobremesa perfeita em forma de pizza.', image: './images/pizza-doce.jpg' },
    { category: 'Artesanal', title: 'Massa Fresca do Dia', desc: 'Toda a nossa massa é preparada diariamente com ingredientes selecionados. Crocante por fora, macia por dentro.', image: './images/massa.jpg' },
  ]
  return (
    <section className="cardapio" id="cardapio">
      <div className="container">
        <Reveal>
          <div className="section-label">Cardápio</div>
          <h2 className="section-title">Sabores que conquistam<br /><em>paladares</em></h2>
        </Reveal>
        <div className="cardapio-grid">
          {pizzas.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="cardapio-card">
                <div className="cardapio-card-image"><img src={p.image} alt={p.title} /></div>
                <div className="cardapio-card-content">
                  <div className="cardapio-card-category">{p.category}</div>
                  <h3 className="cardapio-card-title">{p.title}</h3>
                  <p className="cardapio-card-desc">{p.desc}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Rodizio() {
  const features = [
    { icon: Pizza, title: '60+ Sabores', desc: 'Rodízio com mais de 60 opções — tradicionais, especiais, premium e doces. Variedade infinita.' },
    { icon: FireSimple, title: 'Massa Fresca', desc: 'Toda massa preparada no dia com ingredientes selecionados. Crocância e sabor incomparáveis.' },
    { icon: CookingPot, title: 'Acompanhamentos', desc: 'Batata frita crocante e polenta dourada inclusas no rodízio. Complementos que fazem a diferença.' },
    { icon: Users, title: 'Ambiente Acolhedor', desc: 'Espaço confortável e aconchegante para família e amigos. Perfeito para reunir quem você ama.' },
  ]
  return (
    <section className="experience" id="rodizio">
      <div className="container">
        <div className="experience-grid">
          <div>
            <Reveal>
              <div className="section-label">Rodízio de Pizzas</div>
              <h2 className="section-title">Coma à vontade por<br /><em>R$ 69,90</em></h2>
            </Reveal>
            <div className="experience-features">
              {features.map((f, i) => (
                <Reveal key={f.title} delay={i * 0.1}>
                  <div className="experience-feature">
                    <div className="experience-feature-icon"><f.icon size={22} weight="duotone" /></div>
                    <div><h4>{f.title}</h4><p>{f.desc}</p></div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={0.2}>
            <div className="experience-image">
              <img src="./images/variedade.jpg" alt="Rodízio Pizza Di Pietre" />
              <div className="experience-image-badge">
                <span className="number">60+</span>
                <span className="label">Sabores no rodízio</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Delivery() {
  return (
    <section className="experience" id="delivery" style={{ background: 'var(--dark)' }}>
      <div className="container">
        <div className="experience-grid">
          <Reveal delay={0.1}>
            <div className="experience-image">
              <img src="./images/calzone.jpg" alt="Delivery Pizza Di Pietre" />
              <div className="experience-image-badge" style={{ background: 'var(--fire)' }}>
                <span className="number">30+</span>
                <span className="label">Bairros atendidos</span>
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <div className="section-label">Delivery</div>
              <h2 className="section-title">Sua pizza favorita<br />na porta de <em>casa</em></h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="history-text">
                Atendemos mais de 30 bairros em Florianópolis com o mesmo sabor e qualidade
                do salão. Pedidos pelo WhatsApp ou pelo nosso app com entrega rápida e pizza
                quentinha.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="history-text" style={{ marginTop: 16 }}>
                Embalagens térmicas que mantêm a crocância da massa e a temperatura ideal.
                O mesmo carinho do forno direto para a sua mesa.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
                {['Cachoeira', 'Canasvieiras', 'Ingleses', 'Jurerê', 'Daniela', 'Sambaqui'].map(b => (
                  <span key={b} style={{ padding: '8px 16px', border: '1px solid rgba(230, 126, 34, 0.2)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--fire)', fontWeight: 500 }}>{b}</span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: 24 }}>
                <Motorcycle size={18} weight="duotone" /> Pedir Delivery
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

function Gallery() {
  const images = [
    { src: './images/hero-pizza.jpg', alt: 'Pizza artesanal' },
    { src: './images/forno.jpg', alt: 'Forno' },
    { src: './images/calzone.jpg', alt: 'Calzone' },
    { src: './images/variedade.jpg', alt: 'Variedade' },
    { src: './images/pizza-doce.jpg', alt: 'Pizza doce' },
  ]
  return (
    <section className="gallery" id="galeria">
      <div className="container">
        <Reveal>
          <div className="section-label">Galeria</div>
          <h2 className="section-title">Momentos que ficam na <em>memória</em></h2>
        </Reveal>
        <div className="gallery-grid">
          {images.map((img, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="gallery-item"><img src={img.src} alt={img.alt} /></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Schedule() {
  const days = [
    { day: 'Segunda a Quinta', hours: '18h às 23h30', note: '' },
    { day: 'Sexta e Sábado', hours: '18h às 00h', note: 'Alta demanda — peça cedo' },
    { day: 'Domingo', hours: '18h às 23h30', note: '' },
    { day: 'Feriados', hours: '18h às 00h', note: 'Funcionamento normal' },
  ]
  return (
    <section className="experience" id="horarios" style={{ background: 'var(--dark-light)' }}>
      <div className="container">
        <div className="experience-grid">
          <div>
            <Reveal><div className="section-label">Horários</div><h2 className="section-title">Aberto todos os<br /><em>dias</em></h2></Reveal>
            <Reveal delay={0.1}><p className="history-text">De segunda a domingo, a Pizza Di Pietre abre as portas para receber você com o melhor da pizza artesanal. Recomendamos reservas nos finais de semana.</p></Reveal>
            <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {days.map((d, i) => (
                <Reveal key={d.day} delay={0.1 + i * 0.08}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px', background: 'var(--dark)', border: '1px solid rgba(230, 126, 34, 0.08)' }}>
                    <div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--cream)' }}>{d.day}</div>
                      {d.note && <div style={{ fontSize: '0.7rem', color: 'var(--fire)', marginTop: 2 }}>{d.note}</div>}
                    </div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'var(--amber)' }}>{d.hours}</div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.5}>
              <div style={{ display: 'flex', gap: 12, marginTop: 24, flexWrap: 'wrap' }}>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary"><WhatsappLogo size={18} weight="fill" /> Reservar</a>
                <a href={`tel:${PHONE2.replace(/\D/g, '')}`} className="btn-outline"><Phone size={18} weight="duotone" /> {PHONE2}</a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <div className="experience-image">
              <img src="./images/massa.jpg" alt="Massa artesanal" />
              <div className="experience-image-badge">
                <span className="number">15</span>
                <span className="label">Anos de tradição</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Reviews() {
  const reviews = [
    { text: 'Pizza muito saborosa! É nítido o uso de bons ingredientes. O delivery é super rápido e a pizza chega quentinha. A Margherita e a de Frango com Catupiry são espetaculares.', author: 'Cleber E.', rating: 5 },
    { text: 'A pizza doce é feita com chocolate de qualidade, o que não se encontra muito por aí. Ambiente aconchegante, atendimento profissional e preço justo. Voltaremos com certeza!', author: 'Sabrina F.', rating: 5 },
    { text: 'Melhor pizzaria do Norte da Ilha! Ambiente muito bom, aconchegante, pizzas boas e atendimento excelente. Recomendo a Maria Bonita e a Camarão Supreme. Nota 10!', author: 'Daiany F.', rating: 5 },
  ]
  return (
    <section className="reviews" id="avaliacoes">
      <div className="container">
        <div className="reviews-header">
          <div>
            <Reveal><div className="section-label">Avaliações Google</div><h2 className="section-title">O que dizem nossos <em>clientes</em></h2></Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="reviews-score">
              <div className="reviews-score-number">4.5</div>
              <div className="reviews-score-meta">
                <div className="reviews-stars">{[...Array(5)].map((_, i) => <Star key={i} size={18} weight={i < 4 ? 'fill' : 'duotone'} />)}</div>
                <div className="reviews-count">2.082 avaliações no Google</div>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="reviews-grid">
          {reviews.map((r, i) => (
            <Reveal key={i} delay={i * 0.12}>
              <div className="review-card">
                <div className="review-card-quote">&ldquo;</div>
                <div className="review-card-stars">{[...Array(r.rating)].map((_, j) => <Star key={j} size={14} weight="fill" />)}</div>
                <p className="review-card-text">{r.text}</p>
                <div className="review-card-author">{r.author}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function CtaSection() {
  return (
    <section className="cta-section">
      <div className="container">
        <Reveal>
          <h2>Bora de pizza<br /><em>hoje</em>?</h2>
          <p>Peça pelo WhatsApp ou venha nos visitar. Mais de 60 sabores esperando por você.</p>
          <div className="cta-actions">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary"><WhatsappLogo size={18} weight="fill" /> Pedir pelo WhatsApp</a>
            <a href={`tel:${PHONE.replace(/\D/g, '')}`} className="btn-outline"><Phone size={18} weight="duotone" /> {PHONE}</a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Contact() {
  const items = [
    { icon: MapPin, title: 'Endereço', text: ADDRESS },
    { icon: Clock, title: 'Horário', text: HOURS },
    { icon: Phone, title: 'Telefone', text: `${PHONE} | ${PHONE2}` },
    { icon: Motorcycle, title: 'Delivery', text: 'Pedidos pelo WhatsApp ou App' },
  ]
  return (
    <section className="contact" id="contato">
      <div className="container">
        <Reveal><div className="section-label">Localização</div><h2 className="section-title">Venha nos <em>visitar</em></h2></Reveal>
        <div className="contact-grid">
          <div className="contact-info">
            {items.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <div className="contact-item">
                  <div className="contact-item-icon"><item.icon size={20} weight="duotone" /></div>
                  <div><h4>{item.title}</h4><p>{item.text}</p></div>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.4}>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: 16 }}>
                <WhatsappLogo size={18} weight="fill" /> Fazer Pedido
              </a>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <div className="contact-map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.1!2d-48.4636!3d-27.4711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDI4JzE2LjAiUyA0OMKwMjcnNDkuMCJX!5e0!3m2!1spt-BR!2sbr!4v1" title="Localização Pizza Di Pietre" loading="lazy" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand-text">Pizza Di Pietre</div>
            <p className="footer-brand-desc">Pizzaria artesanal com mais de 60 sabores. Rodízio, delivery e salão. 15 anos de tradição no Norte da Ilha.</p>
          </div>
          <div>
            <div className="footer-title">Navegação</div>
            <ul className="footer-links">
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#cardapio">Cardápio</a></li>
              <li><a href="#rodizio">Rodízio</a></li>
              <li><a href="#delivery">Delivery</a></li>
              <li><a href="#avaliacoes">Avaliações</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </div>
          <div>
            <div className="footer-title">Contato</div>
            <ul className="footer-links">
              <li><a href={`tel:${PHONE.replace(/\D/g, '')}`}>{PHONE}</a></li>
              <li><a href={WHATSAPP} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              <li><a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">@pizzadipietre</a></li>
              <li><a>{ADDRESS}</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 Pizza Di Pietre — Todos os direitos reservados</span>
          <div className="footer-social">
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer"><InstagramLogo size={20} weight="regular" /></a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"><WhatsappLogo size={20} weight="regular" /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function WhatsAppFloat() {
  return <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="whatsapp-float"><WhatsappLogo size={28} weight="fill" /></a>
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Rodizio />
        <Delivery />
        <Gallery />
        <Schedule />
        <Reviews />
        <CtaSection />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
