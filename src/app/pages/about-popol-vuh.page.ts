import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-popol-vuh',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage, RouterLink],
  host: {
    'class': 'block',
  },
  template: `
    <main class="grow mayan-pattern relative">
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-130 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 right-10 w-96 h-96 bg-mayan-teal/10 rounded-full blur-3xl"></div>
      </div>
      <!-- Hero Section -->
      <section class="relative h-[400px] flex items-end overflow-hidden">
        <div class="absolute inset-0">
          <img
            ngSrc="/images/mayan-wall.webp"
            alt="Mayan wall texture"
            fill
            priority
            class="object-cover object-center"
          />
        </div>
        <div class="absolute inset-0 bg-linear-to-t from-bg-dark via-bg-dark/40 to-transparent z-10"></div>
        <div class="absolute inset-0 bg-linear-to-b from-transparent to-[#172e23]">
          <img
            ngSrc="/images/popol.png"
            alt="Mayan talking to a god"
            fill
            priority
            class="object-contain object-top scale-64 origin-top"
          />
        </div>
        <div class="relative z-20 max-w-4xl mx-auto px-6 pb-12 text-center">
          <h1 class="text-white text-3xl md:text-5xl font-black leading-tight tracking-tight mb-2">
            <span class="text-transparent bg-clip-text bg-linear-to-r from-primary to-mayan-teal">About the Sacred</span> Popol Vuh
          </h1>
          <div class="inline-block px-4 py-1 bg-mayan-gold text-bg-dark font-bold rounded-full text-sm uppercase tracking-widest">The Council Book</div>
        </div>
      </section>

      <!-- Content Sections -->
      <section class="max-w-5xl mx-auto px-6 py-16 space-y-12">
        <!-- What is the Popol Vuh? -->
        <div class="relative group mb-35">
          <div class="absolute -top-3 -left-3 w-12 h-12 border-t-4 border-l-4 border-mayan-gold rounded-tl-xl z-20"></div>
          <div class="absolute -top-3 -right-3 w-12 h-12 border-t-4 border-r-4 border-mayan-gold rounded-tr-xl z-20"></div>
          <div class="absolute -bottom-3 -left-3 w-12 h-12 border-b-4 border-l-4 border-mayan-gold rounded-bl-xl z-20"></div>
          <div class="absolute -bottom-3 -right-3 w-12 h-12 border-b-4 border-r-4 border-mayan-gold rounded-br-xl z-20"></div>

          <div class="parchment-texture rounded-xl shadow-2xl overflow-hidden border-4 border-mayan-stone relative">
            <div class="p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
              <div class="flex-1 space-y-4">
                <h2 class="text-3xl font-bold text-mayan-stone font-display flex items-center gap-2">
                  What is the Popol Vuh?
                </h2>
                <p class="text-stone-700 leading-relaxed">
                  The Popol Vuh, or "Book of the People," is a foundational sacred text of the Mayan
                  people. It is a masterpiece of world literature that preserves the profound mythology,
                  spiritual wisdom, and history of the ancestors who lived in the highlands of the Mayan world.
                </p>
              </div>
              <div class="w-full md:w-1/3 aspect-video md:aspect-square rounded-xl shadow-xl overflow-hidden relative border-2 border-mayan-stone/20">
                <img
                  ngSrc="/images/mayan-glyph.jpg"
                  alt="Mayan stone glyph representing wisdom"
                  fill
                  class="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Feature Cards -->
        <div class="flex flex-col gap-10 py-5 @container mb-35">
          <div class="flex flex-col gap-4 text-center md:text-left">
            <h2 class="text-white tracking-tight text-3xl font-bold leading-tight max-w-[720px]">
              How is the Book Organized?
            </h2>
            <p class="text-text-muted text-base font-normal leading-normal max-w-[720px]">
              The text is typically organized into a preamble and four main sections based on the 1861 arrangement by Charles-Étienne Brasseur de Bourbourg
            </p>
          </div> 
          <div class="grid md:grid-cols-3 gap-4">
            @for (card of featureCards; track card.title) {
              <div class="group flex flex-col gap-4 rounded-xl border border-border-dark bg-surface-dark p-6 transition-all hover:border-primary/50 hover:bg-surface-dark/80">
                <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-mayan-gold/10 text-mayan-gold group-hover:bg-mayan-gold group-hover:text-background-dark transition-colors">
                  <span class="material-symbols-outlined text-2xl">{{ card.icon }}</span>
                </div>
                <div class="flex flex-col gap-2">
                  <h3 class="text-white text-lg font-bold leading-tight">{{ card.title }}</h3>
                  <p class="text-text-muted text-sm font-normal leading-relaxed">{{ card.description }}</p>
                </div>
              </div>
            }
          </div>
        </div>

        <!-- Quote -->
        <div class="mb-35">  
          <blockquote class="border-l-4 border-mayan-gold pl-6 py-4 my-4">
            <p class="text-xl md:text-2xl italic font-serif text-slate-300 leading-relaxed">
              "The gods said <span class="text-mayan-gold font-bold">'Earth'</span>, and the earth was formed like a cloud or a mist."
            </p>
            <cite class="block mt-3 text-sm text-mayan-gold/70 not-italic uppercase tracking-widest">— Popol Vuh</cite>
          </blockquote>
        </div>

        <!-- The Jungle's Memory -->
        <div class="relative group mb-20">
          <div class="absolute -top-3 -left-3 w-12 h-12 border-t-4 border-l-4 border-mayan-gold rounded-tl-xl z-20"></div>
          <div class="absolute -top-3 -right-3 w-12 h-12 border-t-4 border-r-4 border-mayan-gold rounded-tr-xl z-20"></div>
          <div class="absolute -bottom-3 -left-3 w-12 h-12 border-b-4 border-l-4 border-mayan-gold rounded-bl-xl z-20"></div>
          <div class="absolute -bottom-3 -right-3 w-12 h-12 border-b-4 border-r-4 border-mayan-gold rounded-br-xl z-20"></div>

          <div class="parchment-texture rounded-xl shadow-2xl overflow-hidden border-4 border-mayan-stone relative">
            <div class="p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
              <div class="flex-1 space-y-4">
                <h2 class="text-3xl font-bold text-mayan-stone font-display">The Jungle's Memory</h2>
                <p class="text-stone-700 leading-relaxed">
                  Just as the jungle thrives with interconnected life, the Popol Vuh connects the Maya
                  people to their celestial and terrestrial origins. Every glyph tells a story of survival,
                  magic, and the eternal cycle of time.
                </p>
                <img
                  ngSrc="/images/popol-vuh.png"
                  alt="Popol Vuh Illustration"
                  width="800"
                  height="400"
                  class="w-full object-cover rounded-xl shadow-md border-2 border-mayan-stone/20 my-4"
                />
                <a
                  routerLink="/"
                  class="bg-mayan-stone hover:bg-mayan-stone/90 text-white px-6 py-2 rounded-lg font-bold transition-all inline-flex items-center gap-2"
                >
                  Discover More Stories
                  <span class="material-symbols-outlined">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  `,
  styles: ``,
})
export default class AboutPopolVuh {
  readonly featureCards = [
    {
      icon: 'public',
      title: 'Creation Myth',
      description:
        'Narrates how the world was formed from the primordial sea and the failed attempts to create humans from mud and wood before corn.',
    },
    {
      icon: 'swords',
      title: 'The Hero Twins',
      description:
        'The epic adventures of Hunahpú and Xbalanqué as they outsmart the Lords of Xibalba (the underworld) in a ballgame.',
    },
    {
      icon: 'history_edu',
      title: 'Mayan Lineage',
      description:
        'A detailed account of the genealogy and migrations of the Kʼicheʼ Maya tribes up until the Spanish conquest.',
    },
  ];
}
