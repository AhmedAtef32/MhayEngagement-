import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wedding-letter',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section
      class="relative w-full py-20 md:py-32 px-6 sm:px-12 bg-gradient-to-br from-[#faf8f5] via-white to-[#f5f1eb] overflow-hidden"
    >
      <div class="absolute inset-0 opacity-5 z-0">
        <div
          class="absolute top-40 right-40 w-96 h-96 bg-gold-300 rounded-full blur-3xl"
        ></div>
        <div
          class="absolute bottom-40 left-40 w-96 h-96 bg-gold-300 rounded-full blur-3xl"
        ></div>
      </div>
      <div class="relative z-10 max-w-4xl mx-auto">
        <div class="text-center mb-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-12 w-12 text-gold-500 mx-auto mb-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />
          </svg>
          <h2
            class="text-3xl md:text-5xl font-arabic font-bold text-gold-700 mb-2"
          >
            Our Engagement
          </h2>
          <p class="text-gray-600 text-lg font-serif">
            A Message From Our Hearts
          </p>
        </div>
        <div
          class="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-gold-200 space-y-6"
        >
          <div class="font-serif text-gray-700 leading-relaxed space-y-6">
            <p class="text-lg md:text-xl text-gold-700 font-bold italic">
              Dear Loved Ones,
            </p>
            <p class="text-base md:text-lg">
              With hearts full of joy and gratitude, we are excited to share one
              of the most beautiful moments of our lives with you. Our
              engagement marks the beginning of a new chapter in our love story,
              filled with hope, happiness, and dreams of a wonderful future
              together.
            </p>
            <p class="text-base md:text-lg">
              We feel truly blessed to have family and friends who have filled
              our lives with love, kindness, and support. Having you as part of
              our journey makes this special occasion even more meaningful, and
              we would be delighted to share our happiness with you.
            </p>
            <p class="text-base md:text-lg">
              As we take this beautiful step together, we pray that God blesses
              our relationship, brings our hearts closer, and fills the days
              ahead with love, understanding, and countless reasons to smile. We
              look forward to celebrating this precious beginning surrounded by
              the people who mean the most to us.
            </p>
            <p class="text-base md:text-lg">
              Thank you for being part of our story and for making our lives
              brighter with your love and blessings. We hope this day becomes a
              beautiful memory that we will all cherish for years to come.
            </p>
            <div class="pt-6 border-t border-gold-200">
              <p class="text-lg md:text-xl text-gold-700 font-italic">
                With Love &amp; Gratitude,
              </p>
              <p
                class="text-xl md:text-2xl font-arabic font-bold text-gold-700 mt-3"
              >
                Omar &amp; Mahynour
              </p>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-center gap-4 mt-12">
          <div class="flex-1 max-w-xs h-px bg-gold-300 opacity-50"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-gold-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />
          </svg>
          <div class="flex-1 max-w-xs h-px bg-gold-300 opacity-50"></div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './wedding-letter.component.css',
})
export class WeddingLetterComponent {}
