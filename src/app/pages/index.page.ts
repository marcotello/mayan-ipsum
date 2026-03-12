import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IpsumGenerator } from '../components/ipsum-generator';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IpsumGenerator],
  host: {
    'class': 'block',
  },
  template: `
    <main class="grow mayan-pattern relative">
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 right-10 w-96 h-96 bg-mayan-teal/10 rounded-full blur-3xl"></div>
      </div>

      <div class="relative z-10 flex flex-col items-center justify-start pt-10 pb-20 px-4 sm:px-8">
        <!-- Hero Section -->
        <div class="max-w-[800px] w-full text-center mb-8">
          <h1 class="text-white text-3xl md:text-5xl font-black leading-tight tracking-tight mb-2">
            <span class="text-transparent bg-clip-text bg-linear-to-r from-primary to-mayan-teal">Generate Traditional Mayan</span> Text
          </h1>
          <p class="text-slate-300 text-sm md:text-base font-normal max-w-lg mx-auto">
            From the sacred Popol Vuh. Use this generated text for your designs to evoke the spirit of the Maya.
          </p>
        </div>

        <app-ipsum-generator />
      </div>
    </main>
  `,
})
export default class Home {
}
