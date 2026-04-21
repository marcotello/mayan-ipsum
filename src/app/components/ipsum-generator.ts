import { Component, ChangeDetectionStrategy, signal, computed, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { IpsumStateService } from '../services/ipsum-state.service';

const KICHE_PARAGRAPHS_SHORT = [
  `Ma k' u xutzinik xech' awik k'eje ta ri winaq. Xa kewachelajik, xa kek' aralajik, xa kewojonik; rnawi xwachinik uwach kich' ab' al.`,
  `Jalajoj xkoq' ib' ej chi kij uj unal. Ta xkita ri Tz' aqol, B' itol, rnawi mixutzinik, mixech' awik.`,
  `Xecha' chik chi kib'il kib'. Mawi mixutzin ub'ixik qab'i'; rurnal oj kaj tz'aq, oj pu kajb'it: mawi utz!`,
  `Xecha' chik chi kib' il kib' ri Al om, K' ajolom. Xe'uchax k'ut. Xa kixjalatajik rumal mawi mixutzinik, mawi mixixch'awik.`,
  `Mi k' u xqajal qatzij; iwecha',  ik' uxun iwarab'al, iyaka lib' al. Ri wech 15 wi mixe' uxik siwan k'echelaj.`,
];

const KICHE_PARAGRAPHS_MEDIUM = [
  `Xa k'u tija chik mixyopij rawexik usaqirik. Qab'ana' tzuqul qe, k'ool qe. Ju pa cha ta kojsik'ixoq, ta kojnab'ax puch chuwach ulew? Mixqatijo chi rech ri nab'e qatz'aq, qab'it.`,
  `Mawi mixutzinik qaq'ijiloxik, qaq' alajixik puch kumal. K'eje k'ut qatija wi ub'anik ajnim, ajxob'. Tzuqul, k'ool! Xecha'. Ta utz'aqik k'ut, ub' anik puch ulew, xoq' o'l utyo'jil xkib' ano.`,
  `Ma ku utz xkilo: xa chi yojomanik, xa tzub' ulik, xa neb' elik, xa lub' anik, xa wulanik, xa pu chi'umarik. Mawi chi k' olol ujolom, xa j un b'enaq wi uwach, xa ku' l uwach.`,
  `Tajin kasik'ij uwach wa' rumal Popol Mayab ri' K'ajolom. Mawi chi mukun chi rij. Chi ch'aw nab'e maja b'i una'oj . xa jusuk' chi'umar pa ja'. Mawi k'o-; xecha' chi k'u ri Ajtz'aq, Ajb'it.`,
  `AchJab'eq! Ta chuxoq! Xa lab'e mawi chib'inik, ma pu chipoq'otajik. Ta chuxoq! Xa una'oj chiri'! Xecha'. Ta xkiyoj k'ut, xkiyoq' chik ri kitz' aq, kib'it. Xecha' chi k'ut. Chutzin ta wi, chinawachir ta wi q'ijiloy qech, siq'iy qech? Xecha' ta xkina'ojij.`,
];

const KICHE_PARAGRAPHS_LONG = [
  `Ta xkib'ij chi rech ajq' ij, ajb'it, e nik'wachinel. Xa k'ulu xa pu churiqo che ta chik chiqawinaq-b'itoj, chiqawinaq-tz' aqoj ta chik tzuqul, k'ool, kojsik'ix taj, kojnab' ax taj puch. Katok ta k'ut pa tzij Iyom, Mamom; qati' t qamam; Xpiyakok, Xmukane. Cha taj ta chawaxoq, ta saqiroq.`,
  `Qasik' ixik, qatoq' exik, qanab' axik rumal winaq tz'aq, winaq b' it, wmaq poy, winaq anom; cha ta chuxoq! Chik' utun ib'i' Junajpu Wuch', Junajpu Utiw; Kamu l Alam, Kamul K' ajolom; Nim Aq, Nima Sis, Ajk' uwal, Ajyamanik, Ajch' ut, Ajtz' alam, Ajraxa laq, Ajraxa tzel.`,
  `Ajq' ol, Aj tol tekat 23, Rati't Q'ij, Rati't Saq; kixucha'xik rumal qatz'aq, qab'it! Tajin kasik'ij uwach wa' rumal Popol Mayab ri'. Chimala chi ixim, ·chi tz' ite' xa chib' ana tajik, xa pu chel apanoq, chiq'ajaj, chik' ak' otaj puch uchi', uwach che'-.`,
  `Xe'ucha'xik e ajq'ij. K'ate puch uqajik, uq'ijiloxik ri xmalik chi ixim, chi tz' ite'. Q'ij, b'it! Xecha' k'u ri jun ati't, jun mama' chi kech. Ri mama' ajtz'ite', Xpiyakok ub'i'; are k'u ri ati't ajq'ij, ajb'it chi raqan, Xrnukane ub'i'. Xecha' k' ut ta xkitikib'a' q'ij.`,
  `Xa chuk'ulu, xa pu churiqo chab'ij, kuta qaxikin, kach'awik, katzijon taj. Xa chuk' ulu ri che' chajawaxik, chik'otox puch kurnal Ajtz'aq, Ajb'it. We are tzuqul, k'ool; ta chawaxoq, ta saqiroq! at ixirn, at tz'ite'; at q' ij, at b'it katchokonik, kattaqen taj-. Xcha' chi re ixim, tz'ite'. Katk'ix la uloq at Uk'ux Kaj, ma qajisaj uchi', uwach Tepew, Q' ukurnatz-. Xecha' ta xkib'ij k'ut usuk'ulikil. Tajin kasik'ij uwach wa' rumal Popol Mayab ri' Wene de suk'ulik Ajam che'. Utz are chuxik ri ipoy, ajam che' chich'awik, chitzijon b'a la chuwach ulew.`,
];

type TextLength = 'S' | 'M' | 'L';

@Component({
  selector: 'app-ipsum-generator',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage],
  host: {
    'class': 'block',
  },
  template: `
    <!-- Parchment Container -->
    <div class="w-full max-w-[960px] relative group mx-auto">
      <div class="absolute -top-3 -left-3 w-12 h-12 border-t-4 border-l-4 border-mayan-gold rounded-tl-xl z-20"></div>
      <div class="absolute -top-3 -right-3 w-12 h-12 border-t-4 border-r-4 border-mayan-gold rounded-tr-xl z-20"></div>
      <div class="absolute -bottom-3 -left-3 w-12 h-12 border-b-4 border-l-4 border-mayan-gold rounded-bl-xl z-20"></div>
      <div class="absolute -bottom-3 -right-3 w-12 h-12 border-b-4 border-r-4 border-mayan-gold rounded-br-xl z-20"></div>

      <div class="parchment-texture rounded-xl shadow-2xl overflow-hidden border-4 border-mayan-stone relative">
        <div class="p-6 md:p-10 text-slate-900">
          <div class="flex flex-col md:flex-row gap-8 items-start">

            <!-- Left: Visual/Controls -->
            <div class="w-full md:w-1/3 flex flex-col gap-6">
              <div class="relative aspect-4/3 rounded-lg overflow-hidden border-2 border-mayan-stone/20 shadow-inner bg-white p-10">
                <img
                  [ngSrc]="randomSymbolImage()"
                  alt="Ancient Mayan symbol from the Popol Vuh"
                  fill
                  priority
                  class="object-contain group-hover:scale-85 transition-transform duration-300 scale-80"
                  (click)="regenerate()"
                />
              </div>

              <div class="bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-stone-300">
                <h3 class="text-mayan-stone font-bold text-sm mb-3 uppercase tracking-wide">Settings</h3>
                <div class="flex flex-col gap-3">
                  <label class="flex items-center justify-between text-sm font-medium text-stone-700 cursor-pointer">
                    <span>Paragraphs</span>
                    <select
                      class="bg-white border border-stone-300 rounded-md text-sm py-1 pl-2 pr-8 focus:border-mayan-teal focus:ring-mayan-teal"
                      [value]="paragraphCount()"
                      (change)="onParagraphChange($event)"
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="5">5</option>
                    </select>
                  </label>
                  <label class="flex items-center justify-between text-sm font-medium text-stone-700">
                    <span>Length</span>
                    <div class="flex gap-1 bg-stone-200 rounded-lg p-1">
                      @for (size of sizes; track size) {
                        <button
                          [class]="textLength() === size
                            ? 'px-2 py-0.5 rounded bg-white shadow-sm text-xs font-bold text-stone-800 cursor-pointer'
                            : 'px-2 py-0.5 rounded hover:bg-white/50 text-xs font-bold text-stone-600 cursor-pointer'"
                          (click)="textLength.set(size)"
                        >{{ size }}</button>
                      }
                    </div>
                  </label>
                </div>
              </div>

              <button
                (click)="copyToClipboard()"
                class="w-full flex items-center justify-center gap-2 bg-mayan-stone hover:bg-mayan-stone/90 text-white py-3 rounded-xl font-bold transition-all shadow-lg active:scale-95 cursor-pointer"
              >
                <span class="material-symbols-outlined">{{ copied() ? 'check' : 'content_copy' }}</span>
                {{ copied() ? 'Copied!' : 'Copy to Clipboard' }}
              </button>
            </div>

            <!-- Right: Text Output -->
            <div class="w-full md:w-2/3">
              <div class="flex items-center justify-between mb-4 border-b-2 border-stone-300 pb-2">
                <h2 class="text-2xl font-bold text-mayan-stone font-display">Generated Extract</h2>
                <div class="flex gap-2">
                  <button
                    class="text-stone-500 hover:text-mayan-red transition-colors cursor-pointer"
                    title="Regenerate"
                    (click)="regenerate()"
                  >
                    <span class="material-symbols-outlined">refresh</span>
                  </button>
                  <button
                    class="text-stone-500 hover:text-mayan-teal transition-colors cursor-pointer"
                    title="Copy to Clipboard"
                    (click)="copyToClipboard()"
                  >
                    <span class="material-symbols-outlined">{{ copied() ? 'check' : 'content_copy' }}</span>
                  </button>
                  <button
                    class="text-stone-500 hover:text-mayan-teal transition-colors cursor-pointer"
                    title="Download TXT"
                    (click)="downloadText()"
                  >
                    <span class="material-symbols-outlined">download</span>
                  </button>
                </div>
              </div>

              <div class="max-w-none">
                @for (paragraph of displayedParagraphs(); track $index; let first = $first) {
                  <p class="text-lg leading-relaxed text-stone-800 mb-4 font-serif">
                    @if (first) {
                      <span class="text-4xl float-left mr-2 mt-[-6px] text-mayan-red font-display font-black">{{ paragraph.charAt(0) }}</span>{{ paragraph.slice(1) }}
                    } @else {
                      {{ paragraph }}
                    }
                  </p>
                }
              </div>

              <div class="mt-8 pt-6 border-t border-stone-300/50 flex items-center justify-between text-stone-500 text-sm">
                <span>Words: {{ wordCount() }}</span>
                <span>Characters: {{ charCount() }}</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      <!-- Generate Another Button -->
      <div class="flex justify-center mt-8">
        <button
          (click)="regenerate()"
          class="group flex items-center justify-center gap-3 bg-mayan-gold text-mayan-stone hover:bg-[#ffca28] active:bg-[#ffb300] px-8 py-3 rounded-full font-bold text-lg shadow-[0_0_20px_rgba(255,193,7,0.3)] hover:shadow-[0_0_30px_rgba(255,193,7,0.5)] transition-all transform hover:-translate-y-1 cursor-pointer"
        >
          <span class="material-symbols-outlined text-2xl group-hover:rotate-180 transition-transform duration-500">autorenew</span>
          Generate Another
        </button>
      </div>
    </div>
  `,
})
export class IpsumGenerator {
  private readonly ipsumState = inject(IpsumStateService);

  readonly sizes: TextLength[] = ['S', 'M', 'L'];

  paragraphCount = signal(3);
  textLength = signal<TextLength>('M');
  copied = signal(false);

  randomSymbolImage = computed(() => {
    const trigger = this.ipsumState.generateTrigger();
    const index = (Math.abs(trigger * 2654435761) % 8) + 1;
    return `/images/mayan-symbol-${index}.jpeg`;
  });

  displayedParagraphs = computed(() => {
    this.ipsumState.generateTrigger();
    const pool = this.getPool();
    const count = this.paragraphCount();
    const shuffled = this.shuffle([...pool]);
    return shuffled.slice(0, count);
  });

  wordCount = computed(() => {
    return this.displayedParagraphs()
      .join(' ')
      .split(/\s+/)
      .filter(Boolean).length;
  });

  charCount = computed(() => {
    return this.displayedParagraphs().join(' ').length;
  });

  onParagraphChange(event: Event) {
    const value = +(event.target as HTMLSelectElement).value;
    this.paragraphCount.set(value);
  }

  regenerate() {
    this.ipsumState.triggerGeneration();
  }

  async copyToClipboard() {
    const text = this.displayedParagraphs().join('\n\n');
    await navigator.clipboard.writeText(text);
    this.copied.set(true);
    setTimeout(() => this.copied.set(false), 2000);
  }

  downloadText() {
    const text = this.displayedParagraphs().join('\n\n');
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'mayan-ipsum.txt';
    a.click();
    URL.revokeObjectURL(url);
  }

  private getPool(): string[] {
    switch (this.textLength()) {
      case 'M':
        return KICHE_PARAGRAPHS_MEDIUM;
      case 'L':
        return KICHE_PARAGRAPHS_LONG;
      default:
        return KICHE_PARAGRAPHS_SHORT;
    }
  }

  private shuffle<T>(arr: T[]): T[] {
    let seed = this.ipsumState.generateTrigger() + 1;
    for (let i = arr.length - 1; i > 0; i--) {
      seed = (seed * 16807 + 0) % 2147483647;
      const j = seed % (i + 1);
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
}
