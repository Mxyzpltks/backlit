import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin.js';
import { Flip } from 'gsap/dist/Flip.js';


if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin,Flip);
}

export * from "gsap";
export { ScrollToPlugin, ScrollTrigger,Flip };