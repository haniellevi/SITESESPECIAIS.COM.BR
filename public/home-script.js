// Global Popup Logic
window.togglePopup = (show) => {
  const leadPopup = document.getElementById('lead-popup')
  const popupContainer = document.getElementById('popup-container')
  if (!leadPopup || !popupContainer || !window.gsap) return

  if (show) {
    leadPopup.classList.remove('pointer-events-none')
    gsap.to(leadPopup, { opacity: 1, duration: 0.5 })
    gsap.fromTo(
      popupContainer,
      { scale: 0.9, y: 20 },
      { scale: 1, y: 0, duration: 0.6, ease: 'expo.out' },
    )
  } else {
    leadPopup.classList.add('pointer-events-none')
    gsap.to(leadPopup, { opacity: 0, duration: 0.4 })
    gsap.to(popupContainer, { scale: 0.9, y: 20, duration: 0.4, ease: 'expo.in' })
  }
}

const initHome = () => {
  // Check for GSAP and other libs
  if (!window.gsap || !window.Lenis) {
    console.log('Waiting for libs...')
    setTimeout(initHome, 100)
    return
  }

  console.log('Initializing home logic...')

  gsap.registerPlugin(ScrollTrigger)

  // Smooth Scroll
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    smooth: true,
  })
  lenis.stop()

  lenis.on('scroll', ScrollTrigger.update)
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })
  gsap.ticker.lagSmoothing(0)

  // Preloader animation
  const loaderBar = document.getElementById('loader-bar')
  const counterElement = document.getElementById('counter')
  const preloader = document.getElementById('preloader')

  // Fail-safe: hide preloader after 5 seconds regardless
  setTimeout(() => {
    if (preloader && preloader.style.display !== 'none') {
      console.log('Preloader fail-safe triggered')
      gsap.to(preloader, {
        yPercent: -100,
        duration: 1,
        ease: 'power4.inOut',
        onComplete: () => {
          preloader.style.display = 'none'
          lenis.start()
        },
      })
    }
  }, 5000)

  if (!preloader) {
    console.warn('Preloader not found')
    lenis.start()
    return
  }

  const preloaderTl = gsap.timeline({
    onComplete: () => {
      lenis.start()
    },
  })

  preloaderTl
    .to(loaderBar, { scaleX: 1, duration: 1.5, ease: 'power2.inOut' })
    .to(
      counterElement,
      {
        innerText: 100,
        duration: 1.5,
        snap: { innerText: 1 },
        ease: 'power2.inOut',
        onUpdate: function () {
          if (counterElement) counterElement.innerText = Math.ceil(this.targets()[0].innerText)
        },
      },
      '<',
    )
    .to(preloader, {
      yPercent: -100,
      duration: 1,
      ease: 'power4.inOut',
      delay: 0.2,
      onComplete: () => {
        preloader.style.display = 'none'
      },
    })
    .fromTo(
      '.reveal-nav',
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
      '-=0.5',
    )
    .to('.reveal-text', { y: '0%', duration: 1.2, stagger: 0.05, ease: 'power4.out' }, '-=0.8')
    .to(
      '.reveal-hero-fade',
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out' },
      '-=0.8',
    )

  // Custom Cursor
  const cursorDot = document.querySelector('.cursor-dot')
  const cursorOutline = document.querySelector('.cursor-outline')
  const cursorText = document.querySelector('.cursor-text')
  const spotlightCards = document.querySelectorAll('.spotlight-card')

  if (cursorDot && cursorOutline) {
    gsap.set(cursorDot, { xPercent: -50, yPercent: -50 })
    gsap.set(cursorOutline, { xPercent: -50, yPercent: -50 })

    window.addEventListener('mousemove', (e) => {
      const mouseX = e.clientX
      const mouseY = e.clientY

      gsap.set(cursorDot, { x: mouseX, y: mouseY })
      gsap.to(cursorOutline, { x: mouseX, y: mouseY, duration: 0.15, ease: 'power2.out' })

      spotlightCards.forEach((card) => {
        const rect = card.getBoundingClientRect()
        card.style.setProperty('--mouse-x', `${mouseX - rect.left}px`)
        card.style.setProperty('--mouse-y', `${mouseY - rect.top}px`)
      })
    })
  }

  const archCards = document.querySelectorAll('#cards-track .spotlight-card')
  archCards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
      if (cursorOutline) {
        gsap.to(cursorOutline, {
          width: 110,
          height: 110,
          backgroundColor: '#4FD1C5',
          boxShadow: '0 0 30px #4FD1C5',
          borderColor: 'transparent',
          duration: 0.4,
          ease: 'power3.out',
        })
      }
      if (cursorDot) gsap.to(cursorDot, { opacity: 0, duration: 0.2 })
      if (cursorText) {
        gsap.to(cursorText, {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          delay: 0.1,
          color: '#0b0e14',
        })
      }
    })

    card.addEventListener('mouseleave', () => {
      if (cursorOutline) {
        gsap.to(cursorOutline, {
          width: 40,
          height: 40,
          backgroundColor: 'transparent',
          boxShadow: 'none',
          borderColor: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(2px)',
          duration: 0.4,
          ease: 'power3.out',
        })
      }
      if (cursorDot) gsap.to(cursorDot, { opacity: 1, duration: 0.2 })
      if (cursorText) gsap.to(cursorText, { opacity: 0, scale: 0.5, duration: 0.2 })
    })
  })

  // GSAP MatchMedia for Responsiveness
  let mm = gsap.matchMedia()

  // NARRATIVE (Amplify)
  const narrativeSection = document.getElementById('amplify')
  const words = gsap.utils.toArray('.highlight-word')
  const stat = document.getElementById('amplify-stat')

  if (narrativeSection && words.length > 0) {
    mm.add('(min-width: 768px)', () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: narrativeSection,
          start: 'top top',
          end: '+=150%',
          pin: true,
          scrub: 0.5,
        },
      })

      tl.fromTo(
        words,
        { opacity: 0.1, filter: 'blur(8px)', y: 20 },
        {
          opacity: 1,
          filter: 'blur(0px)',
          y: 0,
          stagger: 0.1,
          duration: 1,
          ease: 'power2.out',
        },
      )

      if (stat) {
        gsap.to(stat, {
          scrollTrigger: {
            trigger: narrativeSection,
            start: 'center center',
            end: '+=50%',
            scrub: 1,
          },
          opacity: 1,
          y: 0,
        })
      }
    })

    mm.add('(max-width: 767px)', () => {
      gsap.fromTo(
        words,
        { opacity: 0.1, filter: 'blur(4px)', y: 10 },
        {
          scrollTrigger: {
            trigger: narrativeSection,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: 0.5,
          },
          opacity: 1,
          filter: 'blur(0px)',
          y: 0,
          stagger: 0.05,
        },
      )

      if (stat) {
        gsap.to(stat, {
          scrollTrigger: {
            trigger: stat,
            start: 'top 90%',
          },
          opacity: 1,
          y: 0,
          duration: 1,
        })
      }
    })
  }

  // Horizontal scroll for Architecture/Solucao
  const track = document.getElementById('cards-track')
  const pinSection = document.getElementById('architecture-pin')

  mm.add('(min-width: 1024px)', () => {
    if (track && pinSection) {
      gsap.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth + 100),
        ease: 'none',
        scrollTrigger: {
          trigger: pinSection,
          start: 'top top',
          end: () => `+=${track.scrollWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      })
    }

    const maturityBar = document.getElementById('maturity-bar')
    if (maturityBar) {
      gsap.to(maturityBar, {
        height: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: '#como-funciona',
          start: 'top center',
          end: 'bottom center',
          scrub: true,
        },
      })
    }
  })

  mm.add('(max-width: 1023px)', () => {
    const archCards = document.querySelectorAll('#cards-track .spotlight-card')
    archCards.forEach((card) => {
      gsap.fromTo(
        card,
        { y: 30, opacity: 0 },
        {
          scrollTrigger: { trigger: card, start: 'top 90%' },
          y: 0,
          opacity: 1,
          duration: 0.8,
        },
      )
    })
  })

  // Particles
  if (window.particlesJS && document.getElementById('particles-js')) {
    particlesJS('particles-js', {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#ffffff' },
        shape: { type: 'circle' },
        opacity: { value: 0.2, random: false },
        size: { value: 3, random: true },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#ffffff',
          opacity: 0.1,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.5,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
        },
      },
      interactivity: {
        detect_on: 'window',
        events: {
          onhover: { enable: true, mode: 'grab' },
          onclick: { enable: true, mode: 'push' },
          resize: true,
        },
        modes: {
          grab: { distance: 200, line_linked: { opacity: 0.3 } },
          push: { particles_nb: 4 },
        },
      },
      retina_detect: true,
    })
  }

  // FAQ Logic
  const faqItems = document.querySelectorAll('.faq-item')
  faqItems.forEach((item) => {
    const button = item.querySelector('button')
    const content = item.querySelector('.faq-content')
    const icon = item.querySelector('.faq-icon')
    if (button) {
      button.addEventListener('click', () => {
        const isOpen = item.classList.contains('active')
        faqItems.forEach((otherItem) => {
          const otherContent = otherItem.querySelector('.faq-content')
          const otherIcon = otherItem.querySelector('.faq-icon')
          if (otherContent) gsap.to(otherContent, { height: 0, opacity: 0, duration: 0.3 })
          if (otherIcon) gsap.to(otherIcon, { rotation: 0, duration: 0.3 })
          otherItem.classList.remove('active')
        })
        if (!isOpen) {
          gsap.to(content, { height: 'auto', opacity: 1, duration: 0.4 })
          gsap.to(icon, { rotation: 180, duration: 0.3 })
          item.classList.add('active')
        }
      })
    }
  })

  // Scroll Animations
  document.querySelectorAll('.animate-on-scroll').forEach((el) => {
    gsap.fromTo(
      el,
      { y: 40, opacity: 0 },
      {
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
      },
    )
  })

  // CTA Listeners
  document.addEventListener('click', (e) => {
    const target = e.target.closest('a, button')
    if (!target) return

    const isWhatsApp = target.tagName === 'A' && target.href && target.href.indexOf('wa.me') > -1
    const isTrigger = target.classList.contains('open-popup-trigger')
    const isAgendar =
      (target.textContent && target.textContent.includes('Agendar')) ||
      (target.innerText && target.innerText.includes('Agendar'))

    if (isWhatsApp || isTrigger || isAgendar) {
      if (target.getAttribute('href') !== 'javascript:void(0)') {
        e.preventDefault()
        window.togglePopup(true)
      }
    }
  })

  // Form Logic
  const leadForm = document.getElementById('lead-form')
  document.querySelector('.close-popup')?.addEventListener('click', () => window.togglePopup(false))
  document
    .querySelector('.popup-overlay')
    ?.addEventListener('click', () => window.togglePopup(false))

  const whatsappInput = document.getElementById('whatsapp-input')
  whatsappInput?.addEventListener('input', (e) => {
    let x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/)
    e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '')
  })

  leadForm?.addEventListener('submit', async (e) => {
    e.preventDefault()
    const btn = leadForm.querySelector('button[type="submit"]')
    const btnText = btn.querySelector('span')
    const originalText = btnText.innerHTML

    btn.disabled = true
    btnText.innerHTML = 'Enviando...'

    const formData = new FormData(leadForm)
    const data = Object.fromEntries(formData.entries())

    try {
      await fetch('https://formspree.io/f/rvstecnologia@gmail.com', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      })
    } catch (err) {
      console.warn('Email fail')
    }

    const message = `*Novo Diagnóstico Solicitado*\n*Nome:* ${data.name}\n*Empresa:* ${data.company}\n*Cidade:* ${data.city}\n*Já possui site:* ${data.has_site}\n*WhatsApp:* ${data.whatsapp}\n*E-mail:* ${data.email}`
    const whatsappUrl = `https://wa.me/5589994315927?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')

    btn.disabled = false
    btnText.innerHTML = originalText
    leadForm.reset()
    window.togglePopup(false)
  })
}

// Start polling for initialization
initHome()
