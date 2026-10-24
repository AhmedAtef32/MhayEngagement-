import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section
      class="relative min-h-[100svh] w-full overflow-hidden flex items-center justify-center font-serif text-white"
    >
      <!-- الفيديو الخلفية والطبقة الداكنة -->
      <div class="absolute inset-0 z-0">
        <video
          autoplay
          loop
          muted
          playsinline
          preload="none"
          class="w-full h-full object-cover"
        >
          <source
            src="videos/wedding-background.mp4"
            type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
          />
          <source
            src="videos/wedding-background.webm"
            type='video/webm; codecs="vp8, vorbis"'
          />
        </video>
        <div class="absolute inset-0 bg-black/35"></div>
      </div>

      <!-- محتوى كارت الدعوة -->
      <div
        class="relative z-10 text-center px-6 py-8 max-w-xl mx-auto flex flex-col items-center justify-center min-h-[85vh] animate-fade-in"
      >
        <!-- النص العلوي -->
        <div
          class="text-xs sm:text-sm uppercase tracking-[0.4em] text-gold-300 font-light mb-2"
        >
          The Engagement Of
        </div>

        <!-- خط فاصل مع معين في المنتصف -->
        <div class="w-full flex items-center justify-center my-4 opacity-75">
          <div class="h-[1px] bg-gold-300 flex-1"></div>
          <div class="w-1.5 h-1.5 bg-gold-300 rotate-45 mx-3"></div>
          <div class="h-[1px] bg-gold-300 flex-1"></div>
        </div>

        <!-- أسماء العروسين -->
        <div
          class="flex flex-col items-center justify-center my-6 gap-2 font-arabic text-4xl sm:text-6xl font-bold text-white animate-float"
        >
          <span class="tracking-wide">Omar Askar</span>
          <span class="text-2xl sm:text-3xl text-white italic font-serif my-1"
            >&amp;</span
          >
          <span class="tracking-wide">Mahynour Atef</span>
        </div>

        <!-- العبارة الوسطى -->
        <p
          class="text-xl sm:text-2xl italic font-serif tracking-widest text-gold-200 drop-shadow-md my-2"
        >
          Together Forever
        </p>

        <!-- خط فاصل مع معين في المنتصف -->
        <div class="w-full flex items-center justify-center my-4 opacity-75">
          <div class="h-[1px] bg-gold-300 flex-1"></div>
          <div class="w-1.5 h-1.5 bg-gold-300 rotate-45 mx-3"></div>
          <div class="h-[1px] bg-gold-300 flex-1"></div>
        </div>

        <!-- زر عرض الدعوة -->
        <div class="mt-8 mb-4">
          <button
            (click)="scrollToSection('invitation')"
            class="px-8 py-3 bg-gold-500 cursor-pointer hover:bg-gold-600 text-white font-serif tracking-widest uppercase text-xs sm:text-sm rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-gold-300/30"
          >
            View Invitation
          </button>
        </div>

        <!-- سهم التمرير -->
        <div class="mt-6 animate-bounce">
          <svg
            (click)="scrollToSection('invitation')"
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-7 text-gold-300 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  `,
  styleUrl: './hero.component.css',
})
export class HeroComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.fragment.subscribe((fragment: string | null) => {
      if (fragment) this.jumpToSection(fragment);
    });
  }

  scrollToSection(section: string) {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }

  jumpToSection(section: string | null) {
    if (section)
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }
}
