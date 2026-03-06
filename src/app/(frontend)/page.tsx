import type { Metadata } from 'next'
import Script from 'next/script'
import './home.css'

export default function HomePage() {
  return (
    <>
      <div
        dangerouslySetInnerHTML={{
          __html: `
    <!-- Texture Overlay -->
    <div class="noise"></div>
    <!-- Ambient Background -->
    <div class="ambient-light">
      <div class="blob blob-1"></div>
      <div class="blob blob-2"></div>
      <div class="blob blob-3"></div>
    </div>

    <!-- PRELOADER -->
    <div id="preloader">
      <div class="flex flex-col items-center justify-center gap-6 text-center z-50">
        <div class="relative">
          <div
            class="text-[12rem] font-medium leading-none tracking-tighter text-white/5 relative z-10 font-sans"
          >
            <span id="counter">0</span>%
          </div>
          <div
            class="absolute inset-0 bg-gradient-to-t from-luxota-bg via-transparent to-transparent z-20"
          ></div>
        </div>
        <div class="flex flex-col items-center gap-2">
          <div
            class="flex items-center gap-3 text-xs font-mono text-luxota-accent uppercase tracking-[0.2em]"
          >
            <iconify-icon
              icon="solar:refresh-circle-linear"
              class="animate-spin text-lg"
            ></iconify-icon>
            <span>System Initialization</span>
          </div>
          <div class="w-48 h-[1px] bg-white/10 mt-2 overflow-hidden rounded-full">
            <div
              id="loader-bar"
              class="w-full h-full bg-gradient-to-r from-luxota-accent to-white origin-left scale-x-0"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Custom Cursor -->
    <div class="cursor-dot hidden md:block"></div>
    <div class="cursor-outline hidden md:flex">
      <span class="cursor-text">DESCUBRA</span>
    </div>

    <!-- Noise Overlay -->

    <!-- Navbar -->
    <nav
      class="fixed top-8 left-0 right-0 z-50 flex justify-center pointer-events-none opacity-0 reveal-nav px-4"
    >
      <div
        class="pointer-events-auto bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-full p-2 py-2 flex items-center gap-0 md:gap-1 shadow-2xl transition-all duration-500 hover:border-white/20 hover:bg-white/[0.08]"
      >
        <a
          href="#ds-hero"
          class="px-3 md:px-5 py-2.5 text-[9px] md:text-[10px] font-bold text-white/50 hover:text-white uppercase tracking-[0.2em] rounded-full hover:bg-white/5 transition-all"
          >Início</a
        >
        <a
          href="#problema"
          class="px-3 md:px-5 py-2.5 text-[9px] md:text-[10px] font-bold text-white/50 hover:text-white uppercase tracking-[0.2em] rounded-full hover:bg-white/5 transition-all"
          >Problema</a
        >
        <a
          href="#architecture-pin"
          class="px-3 md:px-5 py-2.5 text-[9px] md:text-[10px] font-bold text-white/50 hover:text-white uppercase tracking-[0.2em] rounded-full hover:bg-white/5 transition-all hidden md:block"
          >Solução</a
        >
        <a
          href="#portfolio"
          class="px-3 md:px-5 py-2.5 text-[9px] md:text-[10px] font-bold text-white/50 hover:text-white uppercase tracking-[0.2em] rounded-full hover:bg-white/5 transition-all"
          >Portfólio</a
        >
        <a
          href="#como-funciona"
          class="px-3 md:px-5 py-2.5 text-[9px] md:text-[10px] font-bold text-white/50 hover:text-white uppercase tracking-[0.2em] rounded-full hover:bg-white/5 transition-all hidden md:block"
          >Processo</a
        >
        <a
          href="#duvidas"
          class="px-3 md:px-5 py-2.5 text-[9px] md:text-[10px] font-bold text-white/50 hover:text-white uppercase tracking-[0.2em] rounded-full hover:bg-white/5 transition-all hidden lg:block"
          >FAQ</a
        >

        <div class="w-px h-4 bg-white/10 mx-1 md:mx-2"></div>

        <a
          href="javascript:void(0)"
          onclick="if (window.togglePopup) window.togglePopup(true)"
          class="group px-4 md:px-6 py-2.5 text-[10px] md:text-xs font-bold text-luxota-bg bg-white rounded-full hover:bg-luxota-accent transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)] whitespace-nowrap uppercase tracking-widest open-popup-trigger"
        >
          Agendar
          <span class="hidden group-hover:inline-block ml-1 transition-all">→</span>
        </a>
      </div>
    </nav>

    <!-- Logo Mark (Corner) -->
    <div
      class="fixed top-9 left-4 md:left-8 z-40 mix-blend-difference pointer-events-none opacity-0 reveal-nav"
    >
      <div class="text-sm font-semibold tracking-tight text-white flex items-center gap-3">
        <div class="relative flex h-3 w-3">
          <span
            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-luxota-accent opacity-75"
          ></span>
          <span
            class="relative inline-flex rounded-full h-3 w-3 bg-luxota-accent shadow-[0_0_15px_#4FD1C5]"
          ></span>
        </div>
        <a href="#" class="tracking-[0.2em] text-[10px] md:text-xs uppercase pointer-events-auto">
          Sites Especiais
        </a>
      </div>
    </div>

    <main>
      <!-- HERO -->
      <section
        class="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
        id="ds-hero"
      >
        <div class="perspective-grid opacity-30"></div>
        <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-luxota-accent/10 rounded-full blur-[150px] pointer-events-none"
        ></div>

        <!-- Particles Background -->
        <div id="particles-js" class="absolute inset-0 -z-10"></div>

        <div class="relative z-10 text-center max-w-7xl px-6 pt-20 md:pt-32 pb-16 md:pb-24">
          <div
            class="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 md:mb-10 opacity-0 reveal-hero-fade shadow-lg"
          >
            <span
              class="w-1.5 h-1.5 bg-luxota-accent rounded-full shadow-[0_0_10px_#4FD1C5]"
            ></span>
            <span class="text-[10px] uppercase tracking-widest text-white/80 font-medium"
              >Sites Premium Personalizados</span
            >
          </div>

          <h1
            class="text-5xl md:text-7xl lg:text-[5.5rem] font-medium tracking-tightest text-white leading-[0.9] mb-10 font-display"
          >
            <div class="overflow-hidden py-2">
              <span class="block reveal-text drop-shadow-2xl">Enquanto você não</span>
            </div>
            <div class="overflow-hidden flex justify-center gap-4 items-center flex-wrap py-2">
              <span class="block reveal-text text-white">aparece no Google,</span>
            </div>
            <div class="overflow-hidden flex justify-center gap-4 items-center flex-wrap py-2">
              <span class="block reveal-text text-white/30 italic font-serif tracking-tight pr-2"
                >seu concorrente</span
              >
              <span class="block reveal-text text-gradient-premium">aparece.</span>
            </div>
          </h1>

          <p
            class="text-lg md:text-xl text-luxota-dim max-w-3xl mx-auto leading-relaxed mb-14 font-light opacity-0 reveal-hero-fade translate-y-4"
          >
            Cada dia sem um site profissional é um dia em que clientes prontos para comprar
            encontram outra empresa — não a sua. Nós criamos sites premium que transformam
            visitantes em clientes e sua marca em referência.
          </p>

          <div
            class="flex flex-col sm:flex-row justify-center items-center gap-6 opacity-0 reveal-hero-fade delay-200 mb-20"
          >
            <a
              href="javascript:void(0)"
              onclick="if (window.togglePopup) window.togglePopup(true)"
              class="group relative px-9 py-4 bg-white text-luxota-bg rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(255,255,255,0.4)] inline-flex open-popup-trigger"
            >
              <div class="btn-glow"></div>
              <span
                class="relative z-10 text-sm font-bold flex items-center gap-2 tracking-widest uppercase"
              >
                Agendar Diagnóstico Gratuito
                <iconify-icon
                  icon="solar:arrow-right-linear"
                  class="group-hover:translate-x-1 transition-transform"
                ></iconify-icon>
              </span>
              <div
                class="absolute inset-0 bg-luxota-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-expo"
              ></div>
            </a>
            <a
              href="#portfolio"
              class="px-9 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all text-white font-medium text-sm hover:border-white/30 hover:shadow-lg tracking-widest uppercase"
            >
              Ver projetos realizados
            </a>
          </div>

          <!-- PROOF -->
          <div
            class="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 border-t border-white/10 opacity-0 reveal-hero-fade delay-500 max-w-4xl mx-auto"
          >
            <div class="flex flex-col items-center">
              <span class="text-5xl font-mono tracking-tighter mb-2 text-white/90"
                >12<span class="text-luxota-accent">+</span></span
              >
              <span class="text-xs text-white/50 tracking-[0.2em] font-mono uppercase"
                >Sites entregues</span
              >
            </div>
            <div
              class="flex flex-col items-center border-t sm:border-t-0 sm:border-l border-white/10 pt-8 sm:pt-0"
            >
              <span class="text-5xl font-mono tracking-tighter mb-2 text-white/90"
                >98<span class="text-luxota-accent">%</span></span
              >
              <span class="text-xs text-white/50 tracking-[0.2em] font-mono uppercase"
                >Clientes satisfeitos</span
              >
            </div>
            <div
              class="flex flex-col items-center border-t sm:border-t-0 sm:border-l border-white/10 pt-8 sm:pt-0"
            >
              <span class="text-5xl font-mono tracking-tighter mb-2 text-white/90"
                >7<span class="text-luxota-accent">+</span></span
              >
              <span class="text-xs text-white/50 tracking-[0.2em] font-mono uppercase"
                >Anos de mercado</span
              >
            </div>
          </div>
        </div>

        <div
          class="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-0 reveal-hero-fade delay-500 z-20"
        >
          <span class="text-[9px] text-white/30 tracking-[0.3em] uppercase">Scroll to explore</span>
          <div
            class="w-[1px] h-12 bg-gradient-to-b from-transparent via-white/20 to-transparent"
          ></div>
        </div>
      </section>

      <!-- LEAD CAPTURE POPUP -->
      <div
        id="lead-popup"
        class="fixed inset-0 z-[10000] flex items-center justify-center pointer-events-none opacity-0 transition-opacity duration-500"
      >
        <!-- Overlay -->
        <div
          class="absolute inset-0 bg-[#020203]/90 backdrop-blur-md popup-overlay cursor-pointer"
        ></div>

        <!-- Popup Container -->
        <div
          class="relative w-full max-w-xl mx-4 bg-luxota-card border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden transform scale-95 transition-transform duration-500 ease-expo spotlight-card"
          id="popup-container"
        >
          <button
            class="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-50 p-2 close-popup"
          >
            <iconify-icon icon="solar:close-circle-linear" class="text-3xl"></iconify-icon>
          </button>

          <div class="p-8 md:p-12 relative z-10">
            <div class="mb-10">
              <span class="ds-title">[ DIAGNÓSTICO GRATUITO ]</span>
              <h2 class="text-3xl md:text-4xl font-medium text-white font-display mt-2">
                Comece sua <span class="text-luxota-accent italic font-serif">Transformação</span>
              </h2>
              <p class="text-luxota-dim mt-4">
                Preencha os dados abaixo e entraremos em contato para o seu diagnóstico estratégico.
              </p>
            </div>

            <form id="lead-form" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label class="text-[10px] uppercase tracking-widest text-white/50 ml-1"
                    >Nome Completo</label
                  >
                  <input
                    type="text"
                    name="name"
                    required
                    class="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-luxota-accent transition-colors placeholder:text-white/10"
                    placeholder="Seu nome"
                  />
                </div>
                <div class="space-y-2">
                  <label class="text-[10px] uppercase tracking-widest text-white/50 ml-1"
                    >Nome da Empresa</label
                  >
                  <input
                    type="text"
                    name="company"
                    required
                    class="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-luxota-accent transition-colors placeholder:text-white/10"
                    placeholder="Empresa"
                  />
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label class="text-[10px] uppercase tracking-widest text-white/50 ml-1"
                    >Cidade</label
                  >
                  <input
                    type="text"
                    name="city"
                    required
                    class="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-luxota-accent transition-colors placeholder:text-white/10"
                    placeholder="Sua cidade"
                  />
                </div>
                <div class="space-y-2">
                  <label class="text-[10px] uppercase tracking-widest text-white/50 ml-1"
                    >Já possui site?</label
                  >
                  <div class="flex gap-4 p-1 bg-white/[0.03] border border-white/10 rounded-2xl">
                    <label class="flex-1">
                      <input
                        type="radio"
                        name="has_site"
                        value="Sim"
                        class="hidden peer"
                        required
                      />
                      <div
                        class="text-center py-3 rounded-xl cursor-pointer text-white/40 peer-checked:bg-white/10 peer-checked:text-white transition-all text-sm"
                      >
                        Sim
                      </div>
                    </label>
                    <label class="flex-1">
                      <input type="radio" name="has_site" value="Não" class="hidden peer" />
                      <div
                        class="text-center py-3 rounded-xl cursor-pointer text-white/40 peer-checked:bg-white/10 peer-checked:text-white transition-all text-sm"
                      >
                        Não
                      </div>
                    </label>
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label class="text-[10px] uppercase tracking-widest text-white/50 ml-1"
                    >WhatsApp</label
                  >
                  <input
                    type="tel"
                    name="whatsapp"
                    required
                    id="whatsapp-input"
                    class="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-luxota-accent transition-colors placeholder:text-white/10"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <div class="space-y-2">
                  <label class="text-[10px] uppercase tracking-widest text-white/50 ml-1"
                    >E-mail</label
                  >
                  <input
                    type="email"
                    name="email"
                    required
                    class="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-luxota-accent transition-colors placeholder:text-white/10"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <button
                type="submit"
                class="w-full group relative px-9 py-5 bg-white text-luxota-bg rounded-2xl overflow-hidden transition-all hover:scale-[1.02] active:scale-95 shadow-[0_0_40px_-10px_rgba(255,255,255,0.4)] mt-4"
              >
                <div class="btn-glow"></div>
                <span
                  class="relative z-10 text-sm font-bold flex items-center justify-center gap-3 tracking-widest uppercase"
                >
                  Confirmar Diagnóstico
                  <iconify-icon
                    icon="solar:check-read-linear"
                    class="text-xl group-hover:scale-110 transition-transform"
                  ></iconify-icon>
                </span>
                <div
                  class="absolute inset-0 bg-luxota-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-expo"
                ></div>
              </button>
            </form>
          </div>
        </div>
      </div>

      <!-- 02: BENTO GRID (High-End) - PROBLEM -->
      <section class="py-16 md:py-32 relative z-10 px-4 md:px-6 overflow-hidden" id="problema">
        <!-- Background Decoration from DS -->
        <div
          class="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-luxota-accent/10 rounded-full blur-[120px] pointer-events-none opacity-50"
        ></div>
        <div
          class="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#4FD1C5]/10 rounded-full blur-[100px] pointer-events-none opacity-50"
        ></div>

        <div class="max-w-7xl mx-auto relative z-10">
          <div class="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
            <!-- Title Block -->
            <div
              class="md:col-span-4 flex flex-col justify-center p-6 lg:sticky lg:top-32 self-start animate-on-scroll"
            >
              <div class="inline-flex items-center gap-3 mb-6">
                <span class="relative flex h-2 w-2">
                  <span
                    class="animate-ping absolute inline-flex h-full w-full rounded-full bg-luxota-accent opacity-75"
                  ></span>
                  <span
                    class="relative inline-flex rounded-full h-2 w-2 bg-luxota-accent shadow-[0_0_10px_#4FD1C5]"
                  ></span>
                </span>
                <span class="text-xs text-luxota-accent font-mono tracking-[0.2em] uppercase"
                  >O Desafio Digital</span
                >
              </div>
              <h2
                class="text-4xl md:text-5xl font-medium tracking-tight text-white mb-8 leading-[1.1] font-display"
              >
                O melhor serviço do mundo,<br />
                <span
                  class="text-transparent bg-clip-text bg-gradient-to-r from-[#4FD1C5] via-white to-white/40"
                  >mas se ninguém encontra, ninguém compra.</span
                >
              </h2>
              <div class="h-px w-12 bg-luxota-accent mb-8 shadow-[0_0_10px_#4FD1C5]"></div>
              <p class="text-luxota-dim text-base leading-relaxed font-light">
                Você investe em redes sociais, gasta com anúncios, faz o melhor trabalho da região.
                Mas quando o cliente busca no Google, quem aparece é o concorrente. Não porque ele é
                melhor. Mas porque ele tem presença digital.
              </p>
            </div>

            <!-- Bento Grid Content -->
            <div class="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Card 1: Invisível (Tall) -->
              <div
                class="spotlight-card rounded-[2rem] p-10 flex flex-col justify-between group md:cursor-none h-full min-h-[350px] md:min-h-[400px] animate-on-scroll border border-white/10 bg-gradient-to-br from-white/[0.05] via-white/[0.02] to-transparent shadow-[0_0_40px_-20px_rgba(79,209,197,0.1)] hover:border-[#4FD1C5]/30 transition-all duration-500 overflow-hidden relative"
              >
                <div
                  class="absolute right-0 top-0 p-8 opacity-10 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-12 pointer-events-none"
                >
                  <iconify-icon
                    icon="solar:ghost-linear"
                    class="text-[10rem] md:text-[12rem] text-[#4FD1C5]"
                  ></iconify-icon>
                </div>
                <div
                  class="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(79,209,197,0.1),transparent_50%)] pointer-events-none"
                ></div>
                <div class="relative z-10">
                  <div class="text-xl text-white font-medium mt-2 mb-1 font-display">
                    Invisível no Google
                  </div>
                  <p class="text-sm text-luxota-dim mt-4 leading-relaxed max-w-[80%]">
                    97% das pessoas pesquisam online antes de comprar um serviço local. Se você não
                    aparece, para esses clientes você simplesmente não existe.
                  </p>
                </div>

                <div class="relative w-full h-1 bg-white/5 rounded-full mt-10 overflow-hidden">
                  <div class="absolute inset-0 bg-[#4FD1C5]/20"></div>
                  <div
                    class="h-full bg-[#4FD1C5] w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[1.5s] ease-expo shadow-[0_0_15px_#4FD1C5]"
                  ></div>
                </div>
              </div>

              <!-- Right Column for Grid -->
              <div class="flex flex-col gap-6">
                <!-- Card 2: Dinheiro  -->
                <div
                  class="spotlight-card rounded-[2rem] p-8 flex flex-col justify-center group md:cursor-none min-h-[180px] md:min-h-[200px] animate-on-scroll delay-100 border border-white/5 bg-[#08080A]"
                >
                  <div
                    class="absolute inset-0 opacity-[0.02]"
                    style="
                      background-image: radial-gradient(#4fd1c5 1px, transparent 1px);
                      background-size: 20px 20px;
                    "
                  ></div>

                  <div class="relative z-10">
                    <div class="flex items-center gap-3 mb-4">
                      <div class="p-2 rounded-full bg-[#4FD1C5]/5 border border-[#4FD1C5]/10">
                        <iconify-icon
                          icon="solar:wallet-money-linear"
                          class="text-[#4FD1C5] text-lg"
                        ></iconify-icon>
                      </div>
                      <div class="text-lg text-white font-medium font-display">
                        Dinheiro Jogado no Lixo
                      </div>
                    </div>
                    <p class="text-sm text-luxota-dim leading-relaxed">
                      Anúncios que levam para o Instagram convertem pouco. Sem um site premium, cada
                      clique é desperdiçado.
                    </p>
                  </div>
                </div>

                <!-- Card 3: Zero Credibilidade -->
                <div
                  class="spotlight-card rounded-[2rem] p-8 flex flex-col justify-center group md:cursor-none min-h-[180px] md:min-h-[200px] animate-on-scroll delay-200 border border-white/5 bg-[#08080A]"
                >
                  <div class="relative z-10">
                    <div class="flex items-center gap-3 mb-4">
                      <div class="p-2 rounded-full bg-red-500/5 border border-red-500/10">
                        <iconify-icon
                          icon="solar:shield-warning-linear"
                          class="text-red-400 text-lg"
                        ></iconify-icon>
                      </div>
                      <div class="text-lg text-white font-medium font-display">
                        Zero credibilidade
                      </div>
                    </div>
                    <p class="text-sm text-luxota-dim leading-relaxed">
                      A primeira impressão é digital. Sem um site profissional, seu negócio parece
                      amador, por mais excepcional que seja.
                    </p>
                  </div>
                </div>
              </div>

              <!-- Card 4: Refém do Algoritmo (Wide) -->
              <div
                class="md:col-span-2 spotlight-card rounded-[2rem] p-10 flex flex-col md:flex-row items-center gap-10 group md:cursor-none min-h-[220px] md:min-h-[250px] animate-on-scroll delay-300 border border-white/5 bg-gradient-to-r from-white/[0.02] to-transparent"
              >
                <div class="w-full md:w-2/3 relative z-10">
                  <div class="text-xl text-white font-medium mb-4 font-display">
                    Refém do algoritmo
                  </div>
                  <p class="text-sm text-luxota-dim leading-relaxed">
                    Redes sociais mudam as regras quando querem. Seu alcance pode cair 80% do dia
                    pra noite. Seu site é seu terreno próprio: ninguém tira de você.
                  </p>
                </div>
                <div class="w-full md:w-1/3 flex justify-center">
                  <div class="relative">
                    <div
                      class="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-white/5 flex items-center justify-center relative overflow-hidden group-hover:border-[#4FD1C5]/20 transition-colors duration-500"
                    >
                      <iconify-icon
                        icon="solar:lock-password-bold"
                        class="text-4xl md:text-5xl text-[#4FD1C5] opacity-20 group-hover:opacity-100 transition-opacity duration-500"
                      ></iconify-icon>
                      <div
                        class="absolute inset-0 bg-gradient-to-t from-[#4FD1C5]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        class="min-h-screen md:h-screen flex items-center justify-center bg-[#0b0e14] relative overflow-hidden z-20 py-20 md:py-24"
        id="amplify"
      >
        <div
          class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,209,197,0.08),transparent_60%)] pointer-events-none"
        ></div>

        <div class="max-w-6xl mx-auto px-6 text-center relative z-10" id="narrative-content">
          <p
            class="text-3xl md:text-6xl lg:text-7xl font-normal leading-[1.2] md:leading-[1.1] tracking-tight text-white flex flex-wrap justify-center gap-x-3 md:gap-x-4 gap-y-2 md:gap-y-4 font-display"
          >
            <span class="highlight-word opacity-40 md:opacity-20 blur-[2px] md:blur-sm">Cada</span>
            <span class="highlight-word opacity-40 md:opacity-20 blur-[2px] md:blur-sm">dia</span>
            <span class="highlight-word opacity-40 md:opacity-20 blur-[2px] md:blur-sm">sem</span>
            <span class="highlight-word opacity-40 md:opacity-20 blur-[2px] md:blur-sm"
              >presença</span
            >
            <span class="highlight-word opacity-40 md:opacity-20 blur-[2px] md:blur-sm"
              >digital</span
            >
            <span class="highlight-word opacity-40 md:opacity-20 blur-[2px] md:blur-sm">não é</span>
            <span class="highlight-word opacity-40 md:opacity-20 blur-[2px] md:blur-sm">um</span>
            <span class="highlight-word opacity-40 md:opacity-20 blur-[2px] md:blur-sm">dia</span>
            <span class="highlight-word opacity-100 md:opacity-20 md:blur-sm text-white font-medium"
              >neutro.</span
            >
            <span class="highlight-word opacity-40 md:opacity-20 blur-[2px] md:blur-sm"
              >É um dia em que</span
            >
            <span
              class="highlight-word opacity-40 md:opacity-20 blur-[2px] md:blur-sm text-[#4FD1C5]"
              >clientes</span
            >
            <span class="highlight-word opacity-40 md:opacity-20 blur-[2px] md:blur-sm"
              >que poderiam ser</span
            >
            <span class="highlight-word opacity-40 md:opacity-20 blur-[2px] md:blur-sm">seus</span>
            <span class="highlight-word opacity-40 md:opacity-20 blur-[2px] md:blur-sm">estão</span>
            <span class="highlight-word opacity-40 md:opacity-20 blur-[2px] md:blur-sm"
              >pagando o</span
            >
            <span
              class="highlight-word opacity-40 md:opacity-20 blur-[2px] md:blur-sm text-[#4FD1C5] italic font-serif"
              >concorrente.</span
            >
          </p>
          <div class="mt-20 opacity-0 translate-y-4 transition-all duration-1000" id="amplify-stat">
            <div
              class="inline-block p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_0_50px_#4FD1C515]"
            >
              <div class="text-5xl font-bold text-luxota-accent mb-3 font-mono">63%</div>
              <div class="text-[10px] text-white/50 uppercase tracking-[0.2em] font-mono">
                dos consumidores descartam empresas sem site
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 04: HORIZONTAL SYSTEM - SERVICES -->
      <div id="architecture-wrapper" class="relative z-30 bg-[#0b0e14]">
        <section class="hidden lg:block h-screen relative" id="architecture-pin">
          <div
            class="h-full w-full overflow-hidden bg-[#0b0e14] flex flex-col justify-center border-t border-white/5"
          >
            <div class="absolute top-12 left-0 w-full px-12 flex justify-between items-end z-20">
              <div>
                <span class="text-xs text-luxota-accent font-mono mb-3 block tracking-widest"
                  >[ A SOLUÇÃO DEFINITIVA ]</span
                >
                <h2 class="text-4xl font-medium text-white tracking-tight font-display">
                  Seu Site Especial: Seu Principal
                  <span class="text-luxota-accent italic font-serif">Funcionário 24h</span> por dia.
                </h2>
              </div>
              <div class="flex items-center gap-3 text-white/30">
                <div
                  class="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center"
                >
                  <iconify-icon
                    icon="solar:mouse-circle-linear"
                    class="animate-bounce text-lg"
                  ></iconify-icon>
                </div>
                <span class="text-xs font-mono tracking-widest">SCROLL PARA EXPLORAR</span>
              </div>
            </div>

            <div class="flex gap-16 px-24 pl-[20vw] items-center h-full w-max" id="cards-track">
              <!-- Service Card 1: Design -->
              <div
                class="w-[70vw] max-w-[900px] h-[65vh] spotlight-card rounded-[2.5rem] p-12 shrink-0 relative flex overflow-hidden border border-white/10 bg-[#08080A]"
              >
                <div class="w-5/12 flex flex-col justify-between relative z-10 h-full">
                  <div>
                    <div
                      class="inline-flex p-4 rounded-2xl bg-white/5 border border-white/10 mb-8 shadow-xl backdrop-blur-md"
                    >
                      <iconify-icon
                        icon="solar:pen-bold"
                        class="text-4xl text-luxota-accent"
                      ></iconify-icon>
                    </div>
                    <h3 class="text-4xl text-white font-medium mb-4 tracking-tight font-display">
                      Design Exclusivo<br />e Premium
                    </h3>
                    <p class="text-base text-luxota-dim leading-relaxed font-light">
                      Feito sob medida para transparecer todo o valor e profissionalismo da sua
                      marca. Seu site não vai parecer com nenhum outro. Sem templates genéricos.
                    </p>
                  </div>
                  <ul class="space-y-4 mt-6">
                    <li class="flex items-center gap-4 text-sm text-luxota-dim/80">
                      <div class="w-6 h-6 rounded-full bg-luxota-accent/10 flex items-center justify-center">
                        <iconify-icon icon="solar:check-circle-linear" class="text-luxota-accent"></iconify-icon>
                      </div>
                      Layout 100% personalizado
                    </li>
                    <li class="flex items-center gap-4 text-sm text-luxota-dim/80">
                      <div class="w-6 h-6 rounded-full bg-luxota-accent/10 flex items-center justify-center">
                        <iconify-icon icon="solar:check-circle-linear" class="text-luxota-accent"></iconify-icon>
                      </div>
                      Estética Luxota UI
                    </li>
                  </ul>
                </div>
                <div class="w-7/12 absolute right-0 top-0 bottom-0 flex items-center justify-center overflow-hidden">
                   <img src="/images/card-design.png" alt="Design Premium" class="w-full h-full object-contain scale-110 translate-x-12 rotate-3 hover:rotate-0 transition-transform duration-700" />
                </div>
              </div>

              <!-- Service Card 2: Copywriting -->
              <div
                class="w-[70vw] max-w-[900px] h-[65vh] spotlight-card rounded-[2.5rem] p-12 shrink-0 relative flex overflow-hidden border border-white/10 bg-[#08080A]"
              >
                <div class="w-5/12 flex flex-col justify-between relative z-10 h-full">
                  <div>
                    <div
                      class="inline-flex p-4 rounded-2xl bg-white/5 border border-white/10 mb-8 shadow-xl backdrop-blur-md"
                    >
                      <iconify-icon
                        icon="solar:document-text-bold"
                        class="text-4xl text-luxota-accent"
                      ></iconify-icon>
                    </div>
                    <h3 class="text-4xl text-white font-medium mb-4 tracking-tight font-display">
                      Copywriting<br />Persuasivo
                    </h3>
                    <p class="text-base text-luxota-dim leading-relaxed font-light">
                      Textos que não apenas enfeitam, mas conduzem o visitante direto para a decisão
                      de compra com gatilhos de autoridade.
                    </p>
                  </div>
                  <ul class="space-y-4 mt-6">
                    <li class="flex items-center gap-4 text-sm text-luxota-dim/80">
                      <div class="w-6 h-6 rounded-full bg-luxota-accent/10 flex items-center justify-center">
                        <iconify-icon icon="solar:check-circle-linear" class="text-luxota-accent"></iconify-icon>
                      </div>
                      Foco no seu cliente ideal
                    </li>
                    <li class="flex items-center gap-4 text-sm text-luxota-dim/80">
                      <div class="w-6 h-6 rounded-full bg-luxota-accent/10 flex items-center justify-center">
                        <iconify-icon icon="solar:check-circle-linear" class="text-luxota-accent"></iconify-icon>
                      </div>
                      Alta Conversão
                    </li>
                  </ul>
                </div>
                <div class="w-7/12 absolute right-0 top-0 bottom-0 flex items-center justify-center overflow-hidden">
                   <img src="/images/card-copy.png" alt="Copywriting" class="w-full h-full object-contain scale-110 translate-x-12 -rotate-3 hover:rotate-0 transition-transform duration-700" />
                </div>
              </div>

              <!-- Service Card 3: SEO -->
              <div
                class="w-[70vw] max-w-[900px] h-[65vh] spotlight-card rounded-[2.5rem] p-12 shrink-0 relative flex overflow-hidden border border-white/10 bg-[#08080A]"
              >
                <div class="w-5/12 flex flex-col justify-between relative z-10 h-full">
                  <div>
                    <div
                      class="inline-flex p-4 rounded-2xl bg-white/5 border border-white/10 mb-8 shadow-xl backdrop-blur-md"
                    >
                      <iconify-icon
                        icon="solar:magnifer-bold"
                        class="text-4xl text-luxota-accent"
                      ></iconify-icon>
                    </div>
                    <h3 class="text-4xl text-white font-medium mb-4 tracking-tight font-display">
                      SEO & Visibilidade<br />Orgânica
                    </h3>
                    <p class="text-base text-luxota-dim leading-relaxed font-light">
                      Apareça para quem já está procurando pelo seu serviço. Estratégia de SEO local
                      para dominar a sua região.
                    </p>
                  </div>
                  <ul class="space-y-4 mt-6">
                    <li class="flex items-center gap-4 text-sm text-luxota-dim/80">
                      <div class="w-6 h-6 rounded-full bg-luxota-accent/10 flex items-center justify-center">
                        <iconify-icon icon="solar:check-circle-linear" class="text-luxota-accent"></iconify-icon>
                      </div>
                      Topo das buscas do Google
                    </li>
                    <li class="flex items-center gap-4 text-sm text-luxota-dim/80">
                      <div class="w-6 h-6 rounded-full bg-luxota-accent/10 flex items-center justify-center">
                        <iconify-icon icon="solar:check-circle-linear" class="text-luxota-accent"></iconify-icon>
                      </div>
                      Mais cliques qualificados
                    </li>
                  </ul>
                </div>
                <div class="w-7/12 absolute right-0 top-0 bottom-0 flex items-center justify-center overflow-hidden">
                   <img src="/images/card-seo.png" alt="SEO" class="w-full h-full object-contain scale-125 translate-x-8 rotate-6 hover:rotate-0 transition-transform duration-700" />
                </div>
              </div>

              <!-- Service Card 4: Velocidade -->
              <div
                class="w-[70vw] max-w-[900px] h-[65vh] spotlight-card rounded-[2.5rem] p-12 shrink-0 relative flex overflow-hidden border border-white/10 bg-[#08080A]"
              >
                <div class="w-5/12 flex flex-col justify-between relative z-10 h-full">
                  <div>
                    <div
                      class="inline-flex p-4 rounded-2xl bg-white/5 border border-white/10 mb-8 shadow-xl backdrop-blur-md"
                    >
                      <iconify-icon
                        icon="solar:rocket-bold"
                        class="text-4xl text-luxota-accent"
                      ></iconify-icon>
                    </div>
                    <h3 class="text-4xl text-white font-medium mb-4 tracking-tight font-display">
                      Velocidade e<br />Performance
                    </h3>
                    <p class="text-base text-luxota-dim leading-relaxed font-light">
                      Site que carrega em menos de 1 segundo. Porque no mundo digital, cada milissegundo 
                      de espera é um cliente perdido para a concorrência.
                    </p>
                  </div>
                  <ul class="space-y-4 mt-6">
                    <li class="flex items-center gap-4 text-sm text-luxota-dim/80">
                      <div class="w-6 h-6 rounded-full bg-luxota-accent/10 flex items-center justify-center">
                        <iconify-icon icon="solar:check-circle-linear" class="text-luxota-accent"></iconify-icon>
                      </div>
                      Otimização técnica extrema
                    </li>
                    <li class="flex items-center gap-4 text-sm text-luxota-dim/80">
                      <div class="w-6 h-6 rounded-full bg-luxota-accent/10 flex items-center justify-center">
                        <iconify-icon icon="solar:check-circle-linear" class="text-luxota-accent"></iconify-icon>
                      </div>
                      Nota máxima no PageSpeed
                    </li>
                  </ul>
                </div>
                <div class="w-7/12 absolute right-0 top-0 bottom-0 flex items-center justify-center overflow-hidden">
                   <img src="/images/card-speed.png" alt="Velocidade" class="w-full h-full object-contain scale-110 translate-x-12 -rotate-3 hover:rotate-0 transition-transform duration-700" />
                </div>
              </div>

              <!-- Service Card 5: Responsividade -->
              <div
                class="w-[70vw] max-w-[900px] h-[65vh] spotlight-card rounded-[2.5rem] p-12 shrink-0 relative flex overflow-hidden border border-white/10 bg-[#08080A]"
              >
                <div class="w-5/12 flex flex-col justify-between relative z-10 h-full">
                  <div>
                    <div
                      class="inline-flex p-4 rounded-2xl bg-white/5 border border-white/10 mb-8 shadow-xl backdrop-blur-md"
                    >
                      <iconify-icon
                        icon="solar:smartphone-bold"
                        class="text-4xl text-luxota-accent"
                      ></iconify-icon>
                    </div>
                    <h3 class="text-4xl text-white font-medium mb-4 tracking-tight font-display">
                      Responsividade<br />Total
                    </h3>
                    <p class="text-base text-luxota-dim leading-relaxed font-light">
                      Experiência impecável em qualquer dispositivo. Do smartphone mais simples ao 
                      maior monitor 4K do mercado.
                    </p>
                  </div>
                  <ul class="space-y-4 mt-6">
                    <li class="flex items-center gap-4 text-sm text-luxota-dim/80">
                      <div class="w-6 h-6 rounded-full bg-luxota-accent/10 flex items-center justify-center">
                        <iconify-icon icon="solar:check-circle-linear" class="text-luxota-accent"></iconify-icon>
                      </div>
                      Mobile First real
                    </li>
                    <li class="flex items-center gap-4 text-sm text-luxota-dim/80">
                      <div class="w-6 h-6 rounded-full bg-luxota-accent/10 flex items-center justify-center">
                        <iconify-icon icon="solar:check-circle-linear" class="text-luxota-accent"></iconify-icon>
                      </div>
                      Interface Fluida
                    </li>
                  </ul>
                </div>
                <div class="w-7/12 absolute right-0 top-0 bottom-0 flex items-center justify-center overflow-hidden">
                   <img src="/images/card-responsive.png" alt="Responsividade" class="w-full h-full object-contain scale-110 translate-x-12 rotate-3 hover:rotate-0 transition-transform duration-700" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Mobile Vertical Fallback -->
        <section class="block lg:hidden px-6 pt-20 pb-10 space-y-8 bg-[#0b0e14]">
          <span class="text-xs text-luxota-accent font-mono mb-2 block tracking-widest"
            >[ A SOLUÇÃO DEFINITIVA ]</span
          >
          <h2 class="text-3xl font-medium text-white tracking-tight font-display mb-8">
            Seu Site Especial: Seu Principal
            <span class="text-luxota-accent italic font-serif">Funcionário 24h</span> por dia.
          </h2>

          <div class="spotlight-card rounded-3xl p-8 border border-white/10 bg-[#08080A] flex flex-col gap-6">
            <div class="flex items-center justify-between">
              <div class="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-luxota-accent text-xl">
                <iconify-icon icon="solar:pen-bold"></iconify-icon>
              </div>
              <img src="/images/card-design.png" alt="Design" class="w-20 h-20 object-contain" />
            </div>
            <div>
              <h3 class="text-2xl text-white font-medium mb-2 font-display">Design Exclusivo e Premium</h3>
              <p class="text-sm text-luxota-dim font-light">Feito sob medida para transparecer todo o valor e profissionalismo da sua marca.</p>
            </div>
          </div>

          <div class="spotlight-card rounded-3xl p-8 border border-white/10 bg-[#08080A] flex flex-col gap-6">
            <div class="flex items-center justify-between">
              <div class="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-luxota-accent text-xl">
                <iconify-icon icon="solar:document-text-bold"></iconify-icon>
              </div>
              <img src="/images/card-copy.png" alt="Copy" class="w-20 h-20 object-contain" />
            </div>
            <div>
              <h3 class="text-2xl text-white font-medium mb-2 font-display">Copywriting Persuasivo</h3>
              <p class="text-sm text-luxota-dim font-light">Textos que conduzem o visitante direto para a decisão de compra.</p>
            </div>
          </div>

          <div class="spotlight-card rounded-3xl p-8 border border-white/10 bg-[#08080A] flex flex-col gap-6">
            <div class="flex items-center justify-between">
              <div class="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-luxota-accent text-xl">
                <iconify-icon icon="solar:magnifer-bold"></iconify-icon>
              </div>
              <img src="/images/card-seo.png" alt="SEO" class="w-20 h-20 object-contain" />
            </div>
            <div>
              <h3 class="text-2xl text-white font-medium mb-2 font-display">SEO & Visibilidade</h3>
              <p class="text-sm text-luxota-dim font-light">Estratégia para dominar o Google e ser encontrado organicamente.</p>
            </div>
          </div>

          <div class="spotlight-card rounded-3xl p-8 border border-white/10 bg-[#08080A] flex flex-col gap-6">
            <div class="flex items-center justify-between">
              <div class="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-luxota-accent text-xl">
                <iconify-icon icon="solar:rocket-bold"></iconify-icon>
              </div>
              <img src="/images/card-speed.png" alt="Speed" class="w-20 h-20 object-contain" />
            </div>
            <div>
              <h3 class="text-2xl text-white font-medium mb-2 font-display">Velocidade Extrema</h3>
              <p class="text-sm text-luxota-dim font-light">Otimização técnica para carregamento instantâneo.</p>
            </div>
          </div>

          <div class="spotlight-card rounded-3xl p-8 border border-white/10 bg-[#08080A] flex flex-col gap-6">
            <div class="flex items-center justify-between">
              <div class="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-luxota-accent text-xl">
                <iconify-icon icon="solar:smartphone-bold"></iconify-icon>
              </div>
              <img src="/images/card-responsive.png" alt="Responsive" class="w-20 h-20 object-contain" />
            </div>
            <div>
              <h3 class="text-2xl text-white font-medium mb-2 font-display">Responsividade Total</h3>
              <p class="text-sm text-luxota-dim font-light">Experiência impecável em celulares, tablets e desktops.</p>
            </div>
          </div>
        </section>
      </div>

      <!-- TRANSFORMATION -->
      <section class="pt-16 pb-32 relative z-10 px-4 md:px-6 bg-[#0b0e14]" id="transformacao">
        <div class="max-w-7xl mx-auto relative z-10">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
            <!-- Left Content -->
            <div class="lg:col-span-5 space-y-10 animate-on-scroll">
              <div>
                <span
                  class="text-xs text-luxota-accent font-mono mb-4 block tracking-widest uppercase"
                  >[ A transformação ]</span
                >
                <h2
                  class="text-4xl md:text-6xl font-medium tracking-tight text-white leading-[1.1] font-display"
                >
                  De <em class="text-white/50 italic font-serif">desconhecido</em> à autoridade
                  digital em semanas — não em meses.
                </h2>
              </div>

              <div class="space-y-8">
                <p class="text-lg md:text-xl text-luxota-dim leading-relaxed font-light">
                  Nossos clientes saíram exatamente de onde você está agora. Sem site, sem presença,
                  dependendo de indicação e rede social. Hoje, eles são encontrados, respeitados e
                  escolhidos — todos os dias, no automático.
                </p>

                <!-- Small Before Box with Hover Effect -->
                <div
                  class="relative pl-8 border-l border-white/10 transition-all duration-500 hover:border-red-500/50 group"
                >
                  <h3
                    class="text-xl text-white/50 font-medium mb-2 group-hover:text-red-400 transition-colors"
                  >
                    Antes
                  </h3>
                  <p class="text-luxota-dim font-light leading-relaxed">
                    Depende 100% de indicação boca a boca. Perde clientes que pesquisam no Google.
                    Imagem amadora transmitida ao mercado.
                  </p>
                </div>

                <!-- Small After Box with Hover Effect -->
                <div
                  class="relative pl-8 border-l border-luxota-accent/50 transition-all duration-500 hover:border-luxota-accent group"
                >
                  <h3
                    class="text-xl text-luxota-accent font-medium mb-2 font-display flex items-center gap-3"
                  >
                    <iconify-icon icon="solar:check-circle-bold"></iconify-icon>
                    Depois
                  </h3>
                  <p class="text-white font-light leading-relaxed">
                    Clientes chegam pelo Google todos os dias. Autoridade e credibilidade
                    instantâneas. Imagem premium que reflete a qualidade real.
                  </p>
                </div>
              </div>
            </div>

            <!-- Right Visual (Orbit Animation) -->
            <div class="lg:col-span-7 relative animate-on-scroll">
              <div
                class="relative w-full aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/10 bg-[#161B27] backdrop-blur-sm group"
              >
                <!-- Abstract Background -->
                <div
                  class="absolute inset-0 opacity-10"
                  style="
                    background-image: radial-gradient(
                      circle at 2px 2px,
                      rgba(255, 255, 255, 0.2) 1px,
                      transparent 0
                    );
                    background-size: 24px 24px;
                  "
                ></div>
                <div
                  class="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(79,209,197,0.1),transparent_60%)] transition-opacity duration-700 group-hover:opacity-100 opacity-60"
                ></div>

                <!-- Center Visual -->
                <div class="absolute inset-0 flex items-center justify-center">
                  <!-- Inner Circle (Core) -->
                  <div
                    class="relative z-20 w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#161B27] border border-white/10 flex items-center justify-center shadow-2xl transition-all duration-700 group-hover:scale-110 group-hover:border-luxota-accent/30 group-hover:shadow-[0_0_40px_rgba(79,209,197,0.2)]"
                  >
                    <iconify-icon
                      icon="solar:crown-star-outline"
                      class="text-4xl md:text-5xl text-white group-hover:text-luxota-accent transition-colors duration-500"
                    ></iconify-icon>
                  </div>

                  <!-- Orbiting Ring 1 -->
                  <div
                    class="absolute z-10 w-[240px] h-[240px] md:w-[320px] md:h-[320px] rounded-full border border-dashed border-white/10 animate-[spin_20s_linear_infinite]"
                  ></div>

                  <!-- Orbiting Ring 2 -->
                  <div
                    class="absolute z-10 w-[300px] h-[300px] md:w-[480px] md:h-[480px] rounded-full border border-white/5 animate-[spin_30s_linear_infinite_reverse]"
                  >
                    <div
                      class="absolute top-1/2 -right-3 w-6 h-6 bg-[#161B27] border border-luxota-accent rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(79,209,197,0.5)] transition-all duration-700 group-hover:scale-125"
                    >
                      <div class="w-2 h-2 bg-luxota-accent rounded-full"></div>
                    </div>
                  </div>

                  <!-- Floating Cards -->
                  <div
                    class="absolute top-[15%] md:top-[20%] right-[5%] md:right-[15%] p-3 md:p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md animate-float transition-all duration-500 group-hover:bg-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                  >
                    <div class="flex items-center gap-2 md:gap-3">
                      <div
                        class="w-6 h-6 md:w-8 md:h-8 rounded-full bg-luxota-accent/20 text-luxota-accent flex items-center justify-center"
                      >
                        <iconify-icon
                          icon="solar:graph-up-bold"
                          class="text-sm md:text-base"
                        ></iconify-icon>
                      </div>
                      <div class="text-left">
                        <div
                          class="text-[8px] md:text-[10px] text-luxota-dim uppercase tracking-wider mb-0.5"
                        >
                          Autoridade
                        </div>
                        <div class="text-xs md:text-sm font-bold text-white tracking-tight">
                          +350%
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    class="absolute bottom-[15%] md:bottom-[20%] left-[5%] md:left-[15%] p-3 md:p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md animate-float transition-all duration-500 group-hover:bg-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                    style="animation-delay: -2s"
                  >
                    <div class="flex items-center gap-2 md:gap-3">
                      <div
                        class="w-6 h-6 md:w-8 md:h-8 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center"
                      >
                        <iconify-icon
                          icon="solar:shield-check-bold"
                          class="text-sm md:text-base"
                        ></iconify-icon>
                      </div>
                      <div class="text-left">
                        <div
                          class="text-[8px] md:text-[10px] text-luxota-dim uppercase tracking-wider mb-0.5"
                        >
                          Clientes
                        </div>
                        <div class="text-xs md:text-sm font-bold text-white tracking-tight">
                          Diários
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- PORTFOLIO -->
      <section class="py-20 md:py-32 bg-[#0b0e14]" id="portfolio">
        <div class="max-w-7xl mx-auto px-6">
          <div
            class="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 animate-on-scroll"
          >
            <div class="max-w-2xl">
              <span class="text-xs text-[#4FD1C5] font-mono tracking-widest uppercase mb-4 block"
                >[ Case Studies ]</span
              >
              <h2
                class="text-4xl md:text-6xl font-medium tracking-tight text-white font-display leading-tight"
              >
                Nossos últimos projetos
              </h2>
              <p class="text-lg text-luxota-dim mt-4 font-light">
                O nível de qualidade que você pode esperar para o seu negócio.
              </p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- Project 1: Fiel Alimentos -->
            <div
              class="group relative overflow-hidden rounded-[2.5rem] bg-[#08080A] border border-white/5 animate-on-scroll"
            >
              <div class="aspect-[4/3] relative overflow-hidden">
                <img
                  src="/images/portfolio_fiel_mockup_1772762815226.png"
                  alt="Fiel Alimentos Mockup"
                  class="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <!-- Hover Overlay -->
                <div
                  class="absolute inset-0 bg-[#4FD1C5]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm flex items-center justify-center"
                >
                  <a
                    href="https://www.fielalimentos.com.br"
                    target="_blank"
                    class="px-8 py-4 bg-white text-[#0b0e14] rounded-full text-xs font-bold tracking-[0.2em] uppercase transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-xl"
                    >Ver projeto</a
                  >
                </div>
              </div>
              <div class="p-10 relative z-10">
                <div class="text-[10px] text-[#4FD1C5] font-mono uppercase tracking-[0.2em] mb-3">
                  Indústria & Alimentos
                </div>
                <h3 class="text-2xl text-white font-medium mb-3 font-display">Fiel Alimentos</h3>
                <p class="text-sm text-luxota-dim leading-relaxed font-light">
                  Design autoral e presença digital premium para uma das maiores marcas de temperos
                  do Nordeste.
                </p>
              </div>
            </div>

            <!-- Project 2: EmCorr -->
            <div
              class="group relative overflow-hidden rounded-[2.5rem] bg-[#08080A] border border-white/5 animate-on-scroll delay-100"
            >
              <div class="aspect-[4/3] relative overflow-hidden">
                <img
                  src="/images/portfolio_emcorr_mockup_1772762854554.png"
                  alt="EmCorr Mockup"
                  class="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  class="absolute inset-0 bg-[#4FD1C5]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm flex items-center justify-center"
                >
                  <a
                    href="https://emcorr.com.br/"
                    target="_blank"
                    class="px-8 py-4 bg-white text-[#0b0e14] rounded-full text-xs font-bold tracking-[0.2em] uppercase transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-xl"
                    >Ver projeto</a
                  >
                </div>
              </div>
              <div class="p-10 relative z-10">
                <div class="text-[10px] text-[#4FD1C5] font-mono uppercase tracking-[0.2em] mb-3">
                  Saúde & Tecnologia
                </div>
                <h3 class="text-2xl text-white font-medium mb-3 font-display">EmCorr</h3>
                <p class="text-sm text-luxota-dim leading-relaxed font-light">
                  Interface moderna focada em experiência do paciente e agendamento de exames de
                  alta complexidade.
                </p>
              </div>
            </div>

            <!-- Project 3: Clínica Pinheiro -->
            <div
              class="group relative overflow-hidden rounded-[2.5rem] bg-[#08080A] border border-white/5 animate-on-scroll delay-200"
            >
              <div class="aspect-[4/3] relative overflow-hidden">
                <img
                  src="/images/portfolio_pinheiro_mockup_1772762886028.png"
                  alt="Clínica Pinheiro Mockup"
                  class="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  class="absolute inset-0 bg-[#4FD1C5]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm flex items-center justify-center"
                >
                  <a
                    href="https://clinicapinheiro.com/"
                    target="_blank"
                    class="px-8 py-4 bg-white text-[#0b0e14] rounded-full text-xs font-bold tracking-[0.2em] uppercase transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-xl"
                    >Ver projeto</a
                  >
                </div>
              </div>
              <div class="p-10 relative z-10">
                <div class="text-[10px] text-[#4FD1C5] font-mono uppercase tracking-[0.2em] mb-3">
                  Saúde & Laboratório
                </div>
                <h3 class="text-2xl text-white font-medium mb-3 font-display">Clínica Pinheiro</h3>
                <p class="text-sm text-luxota-dim leading-relaxed font-light">
                  Posicionamento digital de autoridade para centro médico multidisciplinar e
                  referência em análises clínicas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- PROCESS / COMO FUNCIONA -->
      <section
        class="py-20 md:py-32 bg-[#0b0e14] border-t border-white/5 relative z-20"
        id="como-funciona"
      >
        <div class="max-w-6xl mx-auto px-6">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div class="lg:sticky lg:top-32 self-start animate-on-scroll">
              <span
                class="text-xs text-luxota-accent font-mono mb-6 block tracking-widest uppercase"
                >[ PASSO A PASSO ]</span
              >
              <h2
                class="text-4xl md:text-6xl font-medium text-white tracking-tight font-display mb-8 leading-[1.1]"
              >
                Do diagnóstico ao<br />
                site no ar em 4 passos.
              </h2>
              <p class="text-luxota-dim text-lg leading-relaxed mb-12 font-light">
                Você foca no que faz de melhor — cuidar do seu negócio. Nós cuidamos de tudo:
                estratégia, design, textos, tecnologia e publicação.<br /><br />
                <span class="text-white/80 border-l-2 border-luxota-accent pl-4 block font-medium"
                  >Processo transparente sem enrolação.</span
                >
              </p>

              <a
                href="#agendar"
                class="group inline-flex items-center gap-3 text-white text-sm font-medium hover:text-luxota-accent transition-colors"
              >
                <div
                  class="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-luxota-accent group-hover:bg-luxota-accent/10 transition-all bg-white/5"
                >
                  <iconify-icon
                    icon="solar:arrow-right-linear"
                    class="group-hover:translate-x-0.5 transition-transform"
                  ></iconify-icon>
                </div>
                <span
                  class="border-b border-transparent group-hover:border-luxota-accent/50 transition-all"
                  >Iniciar projeto</span
                >
              </a>
            </div>

            <div
              class="relative pl-12 border-l border-white/10 space-y-16 animate-on-scroll delay-100"
            >
              <div class="absolute left-[-1.5px] top-0 bottom-0 w-[3px] bg-white/5">
                <div
                  class="w-full h-0 bg-luxota-accent shadow-[0_0_15px_#4FD1C5]"
                  id="maturity-bar"
                ></div>
              </div>

              <div class="group cursor-pointer transition-all hover:translate-x-2">
                <div
                  class="text-xs font-mono text-luxota-dim mb-2 group-hover:text-luxota-accent transition-colors tracking-widest"
                >
                  ETAPA 01
                </div>
                <h3 class="text-2xl text-white mb-2 font-medium font-display">
                  Conversa de Diagnóstico
                </h3>
                <p class="text-base text-luxota-dim/80 font-light max-w-sm">
                  Uma call gratuita de 30 minutos para entender seu negócio, objetivos e o que o
                  diferencia.
                </p>
              </div>

              <div class="group cursor-pointer transition-all hover:translate-x-2">
                <div
                  class="text-xs font-mono text-luxota-dim mb-2 group-hover:text-luxota-accent transition-colors tracking-widest"
                >
                  ETAPA 02
                </div>
                <h3 class="text-2xl text-white mb-2 font-medium font-display">
                  Estratégia + Proposta
                </h3>
                <p class="text-base text-luxota-dim/80 font-light max-w-sm">
                  Montamos um plano personalizado com escopo e investimento claro.
                </p>
              </div>

              <div class="group cursor-pointer transition-all hover:translate-x-2">
                <div
                  class="text-xs font-mono text-luxota-dim mb-2 group-hover:text-luxota-accent transition-colors tracking-widest"
                >
                  ETAPA 03
                </div>
                <h3 class="text-2xl text-white mb-2 font-medium font-display">
                  Design, Copy e Dev
                </h3>
                <p class="text-base text-luxota-dim/80 font-light max-w-sm">
                  Criamos o design, escrevemos textos persuasivos e codificamos o site. Você valida
                  tudo.
                </p>
              </div>

              <div class="group cursor-pointer transition-all hover:translate-x-2">
                <div class="text-xs font-mono text-luxota-accent mb-2 tracking-widest">
                  ETAPA 04
                </div>
                <h3
                  class="text-2xl text-white mb-2 font-medium flex items-center gap-3 font-display"
                >
                  Publicação + Suporte
                  <span
                    class="text-[10px] px-2.5 py-1 rounded-full bg-luxota-accent/10 text-luxota-accent border border-luxota-accent/20 font-sans tracking-wide uppercase font-bold"
                    >Completo</span
                  >
                </h3>
                <p class="text-base text-luxota-dim/80 font-light max-w-sm">
                  O site vai ao ar e ficamos ao seu lado por 90 dias de garantia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- GUARANTEE -->
      <section class="py-24 relative overflow-hidden" id="garantia">
        <div class="max-w-4xl mx-auto px-6">
          <div
            class="glass-panel p-10 md:p-16 rounded-[3rem] border border-luxota-accent/20 bg-luxota-accent/[0.02] text-center relative overflow-hidden animate-on-scroll shadow-[0_0_50px_rgba(79,209,197,0.05)]"
          >
            <!-- Decorative blur -->
            <div
              class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-luxota-accent/20 blur-[100px] rounded-full pointer-events-none"
            ></div>

            <div class="relative z-10 flex flex-col items-center">
              <div
                class="w-20 h-20 rounded-full border border-luxota-accent/30 bg-luxota-accent/10 flex items-center justify-center text-4xl text-luxota-accent mb-8 shadow-[0_0_30px_rgba(79,209,197,0.2)]"
              >
                <iconify-icon icon="solar:shield-check-bold"></iconify-icon>
              </div>

              <h2
                class="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6 font-display"
              >
                Risco Zero
              </h2>

              <p
                class="text-lg md:text-xl text-luxota-dim leading-relaxed font-light max-w-2xl mx-auto"
              >
                Temos tanta confiança no que entregamos que oferecemos uma
                <strong class="text-white font-medium grid-glow"
                  >Garantia Incondicional de 7 dias</strong
                >. Se você não ficar apaixonado(a) pelo design do seu novo site, nós refazemos do
                zero ou devolvemos 100% do seu dinheiro. Sem burocracia.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- OBJECTIONS (FAQ) -->
      <section class="pt-32 pb-16 bg-[#0b0e14]" id="duvidas">
        <div class="max-w-3xl mx-auto px-6">
          <div class="text-center mb-16 animate-on-scroll">
            <span class="ds-title justify-center">[ FAQ ]</span>
            <h2
              class="text-4xl md:text-5xl font-medium tracking-tight text-white font-display mt-4"
            >
              Talvez você esteja pensando...
            </h2>
          </div>

          <div class="space-y-4 animate-on-scroll delay-100">
            <!-- FAQ Item 1 -->
            <div
              class="faq-item group border border-white/5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-all overflow-hidden"
            >
              <button
                class="faq-question w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <span
                  class="text-lg text-white/90 group-hover:text-white transition-colors font-medium pr-8 font-display"
                  >"Agora não é o momento certo. Vou fazer isso mais pra frente."</span
                >
                <div
                  class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-colors duration-300 group-hover:bg-luxota-accent/20"
                >
                  <iconify-icon
                    icon="solar:alt-arrow-down-linear"
                    class="text-white text-xl faq-icon transition-transform duration-300"
                  ></iconify-icon>
                </div>
              </button>
              <div class="faq-content h-0 opacity-0 overflow-hidden">
                <div class="px-6 pb-8 text-luxota-dim leading-relaxed max-w-3xl">
                  Cada semana sem presença digital é uma semana em que clientes prontos para comprar
                  encontram seu concorrente em vez de você. O "momento certo" era ontem. O segundo
                  melhor momento é agora. A conversa de diagnóstico é gratuita — você não perde nada
                  descobrindo o que está deixando na mesa.
                </div>
              </div>
            </div>

            <!-- FAQ Item 2 -->
            <div
              class="faq-item group border border-white/5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-all overflow-hidden"
            >
              <button
                class="faq-question w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <span
                  class="text-lg text-white/90 group-hover:text-white transition-colors font-medium pr-8 font-display"
                  >"Já tenho redes sociais. Preciso mesmo de um site?"</span
                >
                <div
                  class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-colors duration-300 group-hover:bg-luxota-accent/20"
                >
                  <iconify-icon
                    icon="solar:alt-arrow-down-linear"
                    class="text-white text-xl faq-icon transition-transform duration-300"
                  ></iconify-icon>
                </div>
              </button>
              <div class="faq-content h-0 opacity-0 overflow-hidden">
                <div class="px-6 pb-8 text-luxota-dim leading-relaxed max-w-3xl">
                  Redes sociais são terreno alugado — o algoritmo muda e seu alcance despenca do dia
                  pra noite. Um site é seu endereço fixo na internet: aparece no Google, funciona
                  24h, transmite credibilidade e é a base para qualquer estratégia de marketing
                  funcionar de verdade.
                </div>
              </div>
            </div>

            <!-- FAQ Item 3 -->
            <div
              class="faq-item group border border-white/5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-all overflow-hidden"
            >
              <button
                class="faq-question w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <span
                  class="text-lg text-white/90 group-hover:text-white transition-colors font-medium pr-8 font-display"
                  >"É muito caro. Não sei se vale o investimento."</span
                >
                <div
                  class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-colors duration-300 group-hover:bg-luxota-accent/20"
                >
                  <iconify-icon
                    icon="solar:alt-arrow-down-linear"
                    class="text-white text-xl faq-icon transition-transform duration-300"
                  ></iconify-icon>
                </div>
              </button>
              <div class="faq-content h-0 opacity-0 overflow-hidden">
                <div class="px-6 pb-8 text-luxota-dim leading-relaxed max-w-3xl">
                  Quanto custa um cliente que você perde por semana por não ter presença digital? Se
                  apenas 2 clientes novos por mês chegarem pelo Google, o site se paga em poucas
                  semanas. Isso não é gasto — é o investimento com o maior retorno que uma empresa
                  local pode fazer hoje.
                </div>
              </div>
            </div>

            <!-- FAQ Item 4 -->
            <div
              class="faq-item group border border-white/5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-all overflow-hidden"
            >
              <button
                class="faq-question w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <span
                  class="text-lg text-white/90 group-hover:text-white transition-colors font-medium pr-8 font-display"
                  >"Já fiz um site antes e não trouxe resultado."</span
                >
                <div
                  class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-colors duration-300 group-hover:bg-luxota-accent/20"
                >
                  <iconify-icon
                    icon="solar:alt-arrow-down-linear"
                    class="text-white text-xl faq-icon transition-transform duration-300"
                  ></iconify-icon>
                </div>
              </button>
              <div class="faq-content h-0 opacity-0 overflow-hidden">
                <div class="px-6 pb-8 text-luxota-dim leading-relaxed max-w-3xl">
                  Um site de template sem estratégia, sem SEO e sem copy profissional é como abrir
                  uma loja no deserto. Não é o site que falhou — foi a falta de estratégia por trás
                  dele. Nossos projetos são construídos para aparecer no Google, converter
                  visitantes e gerar resultado real.
                </div>
              </div>
            </div>

            <!-- FAQ Item 5 -->
            <div
              class="faq-item group border border-white/5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-all overflow-hidden"
            >
              <button
                class="faq-question w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <span
                  class="text-lg text-white/90 group-hover:text-white transition-colors font-medium pr-8 font-display"
                  >"Eu não entendo nada de tecnologia."</span
                >
                <div
                  class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-colors duration-300 group-hover:bg-luxota-accent/20"
                >
                  <iconify-icon
                    icon="solar:alt-arrow-down-linear"
                    class="text-white text-xl faq-icon transition-transform duration-300"
                  ></iconify-icon>
                </div>
              </button>
              <div class="faq-content h-0 opacity-0 overflow-hidden">
                <div class="px-6 pb-8 text-luxota-dim leading-relaxed max-w-3xl">
                  Perfeito. Você não precisa entender. Nós cuidamos de absolutamente tudo: domínio,
                  hospedagem, e-mail, design, textos, publicação. Você só precisa responder algumas
                  perguntas sobre o seu negócio e validar o resultado. O resto é com a gente.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- FINAL CTA -->
      <section class="pt-16 pb-24 relative overflow-hidden" id="agendar">
        <div class="absolute inset-0 bg-[#0B0E14] -z-20"></div>
        <!-- Grid background -->
        <div class="perspective-grid opacity-30 -z-10"></div>
        <!-- Glow -->
        <div
          class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-luxota-accent/15 blur-[120px] rounded-full pointer-events-none -z-10"
        ></div>

        <div class="max-w-4xl mx-auto px-6 text-center relative z-10 animate-on-scroll">
          <h2
            class="text-5xl md:text-7xl font-medium tracking-tightest text-white leading-[1.1] mb-8 font-display"
          >
            Pronto para assumir a
            <span class="text-luxota-accent italic font-serif">liderança</span> na sua Região?
          </h2>

          <p class="text-xl text-luxota-dim leading-relaxed max-w-2xl mx-auto mb-12 font-light">
            Pare de perder clientes para empresas menores que a sua apenas porque elas têm um site
            melhor.
          </p>

          <div class="flex flex-col items-center gap-6">
            <a
              href="javascript:void(0)"
              onclick="if (window.togglePopup) window.togglePopup(true)"
              class="group relative px-10 py-5 bg-white text-luxota-bg rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_50px_-10px_rgba(255,255,255,0.5)] inline-flex open-popup-trigger"
            >
              <div class="btn-glow"></div>
              <span
                class="relative z-10 text-base font-bold flex items-center gap-3 tracking-widest uppercase"
              >
                Falar com Consultor Agora
                <iconify-icon
                  icon="solar:arrow-right-linear"
                  class="text-xl group-hover:translate-x-1 transition-transform"
                ></iconify-icon>
              </span>
              <div
                class="absolute inset-0 bg-luxota-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-expo"
              ></div>
            </a>

            <div
              class="px-6 py-2 rounded-full border border-luxota-accent/20 bg-luxota-accent/5 backdrop-blur-sm mt-4"
            >
              <small class="text-xs text-luxota-accent/80 tracking-widest uppercase"
                >Vagas limitadas neste mês. Agende hoje para garantir sua vaga na agenda de
                produção.</small
              >
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- FOOTER -->
    <footer class="relative py-24 px-6 border-t border-white/5 bg-[#0B0E14] overflow-hidden">
      <!-- Ambient Glow for Footer -->
      <div
        class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-luxota-accent/5 rounded-full blur-[120px] pointer-events-none"
      ></div>

      <!-- Big Typographic Decor -->
      <div
        class="absolute bottom-[-10%] left-0 right-0 select-none pointer-events-none flex justify-center opacity-[0.02]"
      >
        <h1
          class="text-[12vw] font-bold text-white tracking-tighter leading-none whitespace-nowrap"
        >
          ESPECIAIS
        </h1>
      </div>

      <div class="max-w-7xl mx-auto relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-y-12 mb-16">
          <!-- Company -->
          <div class="mb-8 md:mb-0">
            <h4 class="text-white font-medium mb-6 text-sm uppercase tracking-[0.2em] opacity-80">
              Sites Especiais
            </h4>
            <p class="text-sm text-luxota-dim max-w-sm leading-relaxed font-light">
              Agência de sites premium personalizados focada em gerar autoridade e vendas reais para
              o seu negócio.
            </p>
          </div>

          <div class="flex md:justify-end gap-16 md:gap-24">
            <!-- Links -->
            <div>
              <h4 class="text-white font-medium mb-8 text-xs uppercase tracking-[0.2em] opacity-80">
                Menu
              </h4>
              <ul class="space-y-5 text-sm text-luxota-dim font-light">
                <li>
                  <a
                    href="#problema"
                    class="hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                    ><span
                      class="w-0 h-[1px] bg-luxota-accent transition-all duration-300 group-hover:w-3"
                    ></span
                    >Solução</a
                  >
                </li>
                <li>
                  <a
                    href="#processo"
                    class="hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                    ><span
                      class="w-0 h-[1px] bg-luxota-accent transition-all duration-300 group-hover:w-3"
                    ></span
                    >Como Funciona</a
                  >
                </li>
                <li>
                  <a
                    href="#duvidas"
                    class="hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                    ><span
                      class="w-0 h-[1px] bg-luxota-accent transition-all duration-300 group-hover:w-3"
                    ></span
                    >Dúvidas</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div
          class="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-luxota-dim/60 font-mono tracking-wider gap-4"
        >
          <div class="flex items-center gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-luxota-accent animate-pulse"></span>
            <span class="uppercase">Feito para Gerar Autoridade</span>
          </div>
          <div>© 2026 Sites Especiais. Todos os direitos reservados.</div>
        </div>
      </div>
    </footer>`,
        }}
      />
      <Script
        id="gsap"
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"
        strategy="afterInteractive"
      />
      <Script
        id="gsap-st"
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"
        strategy="afterInteractive"
      />
      <Script
        id="lenis"
        src="https://cdn.jsdelivr.net/gh/studio-freight/lenis@1.0.29/bundled/lenis.min.js"
        strategy="afterInteractive"
      />
      <Script
        id="particles"
        src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"
        strategy="afterInteractive"
      />
      <Script
        id="iconify"
        src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"
        strategy="afterInteractive"
      />
      <Script id="home-logic" src="/home-script.js" strategy="afterInteractive" />
    </>
  )
}

export const metadata: Metadata = {
  title: 'Sites Especiais — Sites Premium que Transformam Negócios',
  description:
    'Sites premium personalizados para empresas que querem ser encontradas, respeitadas e escolhidas. Agência especializada em presença digital de alto impacto.',
}
