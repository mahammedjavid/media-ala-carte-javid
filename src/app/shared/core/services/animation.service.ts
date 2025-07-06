import { Injectable } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Injectable({ providedIn: 'root' })
export class AnimationService {
  constructor() {
    gsap.registerPlugin(ScrollTrigger);
  }

  fadeIn(element: HTMLElement, delay = 0) {
    gsap.fromTo(element, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, delay });
  }
  staggerFadeIn(elements: HTMLElement[], delay = 0, stagger = 0.15) {
    gsap.fromTo(elements, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, delay, stagger });
  }

  animateHeroSection(
    textEls: HTMLElement[],
    imageEl: HTMLElement,
    btnEls: HTMLElement[],
    bannersEls?: HTMLElement[]
  ) {
    gsap.set(btnEls, {
      opacity: 0,
      y: 20
    });
    const tl = gsap.timeline();
    tl.from(textEls, {
      opacity: 0,
      y: 30,
      stagger: 0.12,
      duration: 0.7,
      ease: 'power3.out',
    })
      .from(imageEl, {
        opacity: 0,
        scale: 0.98,
        duration: 0.7,
        ease: 'power3.out',
      }, '-=0.3')
      .to(btnEls, {
        opacity: 1,
        y: 0,
        stagger: 0.08,
        duration: 0.5,
        ease: 'power3.out',
      }, '-=0.4');
    if (bannersEls && bannersEls.length) {
      tl.from(bannersEls, {
        opacity: 0,
        y: 20,
        stagger: 0.08,
        duration: 0.5,
        ease: 'power3.out',
      }, '-=0.2');
    }
    return tl;
  }

  animateBannerOnScroll(bannerEl: HTMLElement) {
    gsap.set(bannerEl, {
      opacity: 0,
      rotation: bannerEl.classList.contains('hero__banner--top') ? 1 : -1,
      x: bannerEl.classList.contains('hero__banner--top') ? 20 : -20
    });
    gsap.to(bannerEl, {
      opacity: 1,
      rotation: 0,
      x: 0,
      duration: 0.6,
      ease: 'power2.out',
      delay: bannerEl.classList.contains('hero__banner--top') ? 0.2 : 0.4,
      scrollTrigger: {
        trigger: bannerEl,
        start: 'top 85%',
        end: 'bottom 15%',
        toggleActions: 'play none none reverse',
      },
    });
  }

  animateSuperchargeSection(
    cardEl: HTMLElement,
    titleEl: HTMLElement,
    listItemEls: HTMLElement[],
    ctaEl: HTMLElement
  ) {
    gsap.set(cardEl, { 
      opacity: 0, 
      y: 60,
      scale: 0.95
    });
    gsap.set(titleEl, { 
      opacity: 0, 
      y: 30 
    });
    gsap.set(listItemEls, { 
      opacity: 0, 
      x: -20 
    });
    gsap.set(ctaEl, { 
      opacity: 0, 
      y: 20,
      scale: 0.9
    });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardEl,
        start: 'top 85%',
        end: 'bottom 15%',
        toggleActions: 'play none none reverse'
      }
    });
    tl.to(cardEl, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: 'power3.out'
    })
    .to(titleEl, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power2.out'
    }, '-=0.4')
    .to(listItemEls, {
      opacity: 1,
      x: 0,
      duration: 0.5,
      stagger: 0.15,
      ease: 'back.out(1.7)'
    }, '-=0.3')
    .to(ctaEl, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.5,
      ease: 'back.out(1.4)'
    }, '-=0.2');
    listItemEls.forEach((item, index) => {
      const checkIcon = item.querySelector('.supercharge__check');
      if (checkIcon) {
        gsap.to(checkIcon, {
          scale: 1.1,
          duration: 0.3,
          ease: 'power2.out',
          delay: 0.8 + (index * 0.15),
          yoyo: true,
          repeat: 1
        });
      }
    });
    return tl;
  }

  animateCollaborationSection(
    headerEl: HTMLElement,
    statsBarEl: HTMLElement,
    statEls: HTMLElement[],
    avatarEls: HTMLElement[]
  ) {
    gsap.set(headerEl, { 
      opacity: 0, 
      y: 40 
    });
    gsap.set(statsBarEl, { 
      opacity: 0, 
      y: 60,
      scale: 0.9
    });
    gsap.set(statEls, { 
      opacity: 0, 
      scale: 0.8 
    });
    gsap.set(avatarEls, { 
      opacity: 0, 
      scale: 0,
      rotation: 180
    });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: headerEl,
        start: 'top 85%',
        end: 'bottom 15%',
        toggleActions: 'play none none reverse'
      }
    });
    tl.to(headerEl, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: 'power2.out'
    })
    .to(statsBarEl, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: 'back.out(1.7)'
    }, '-=0.3')
    .to(statEls, {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      stagger: 0.1,
      ease: 'back.out(1.4)'
    }, '-=0.4')
    .to(avatarEls, {
      opacity: 1,
      scale: 1,
      rotation: 0,
      duration: 0.6,
      stagger: 0.08,
      ease: 'back.out(1.2)'
    }, '-=0.2');
    return tl;
  }

  animateSolutionSection(
    headerEl: HTMLElement,
    cardEls: HTMLElement[]
  ) {
    gsap.set(headerEl, { 
      opacity: 0, 
      y: 40 
    });
    gsap.set(cardEls, { 
      opacity: 0, 
      y: 60,
      scale: 0.9
    });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: headerEl,
        start: 'top 85%',
        end: 'bottom 15%',
        toggleActions: 'play none none reverse'
      }
    });
    tl.to(headerEl, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: 'power2.out'
    })
    .to(cardEls, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.6,
      stagger: 0.12,
      ease: 'back.out(1.4)'
    }, '-=0.3');
    return tl;
  }
}