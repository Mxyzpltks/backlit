

<script>
    import img1 from "$lib/assets/1.jpg";
    import { gsap } from "gsap";
    import {onMount} from "svelte";

//     onMount(()=> { 

//   document.addEventListener('DOMContentLoaded', () => {
//     let target = 0;
//     let current = 0;
//     let ease = 0.075;

//     const slider = document.querySelector(".slider");
//     const sliderWrapper = document.querySelector(".slider-wrapper");
//     const slides = document.querySelectorAll(".slide");
//     let maxScroll = sliderWrapper.scrollWidth - sliderWrapper.clientWidth;

//     function lerp(start, end, factor) {
//         return start + (end - start) * factor;
//     }

//     function updateScaleAndPosition() {
//         slides.forEach((slide) => {
//             const rect = slide.getBoundingClientRect();
//             const distanceFromCenter = (rect.left + rect.right) / 2 - window.innerWidth / 2;
//             let scale, offsetX;
//             console.log(distanceFromCenter)
//             if (distanceFromCenter > 0) {
//                 scale = Math.min(1.75, 1 + distanceFromCenter / window.innerWidth);
//                 offsetX = (scale - 1) * 300;
//             } else {
//                 scale = Math.max(0.5, 1 - Math.abs(distanceFromCenter) / window.innerWidth);
//                 offsetX = 0;
//             }

//             gsap.set(slide, { scale: scale, x: offsetX });
//         });
//     }

//     function update() {
//         current = lerp(current, target, ease);

//         gsap.set(sliderWrapper, {
//             x: -current,
//         });

//         updateScaleAndPosition();
//         requestAnimationFrame(update);
//     }

//     window.addEventListener("resize", () => {
//         maxScroll = sliderWrapper.scrollWidth - sliderWrapper.clientWidth;
//     });

//     window.addEventListener("wheel", (e) => {
//         target += e.deltaY;
//         target = Math.max(0, Math.min(maxScroll, target));
//     });

//     update();
//   });
// });

const tl = gsap.timeline();

	const start = () => {
		ScrollTrigger.create({
			animation: tl,
			trigger: '.slider-wrapper',
			scrub: true,
			ease:'ease'
		});
	};

    onMount(() => {
		tl.from('.slider-wrapper', {
			x: '-20%',
			duration: 1
		})
		start();   
        eventCards = document.querySelectorAll('.slide img');

        eventCards.forEach(image => {
            ScrollTrigger.create({
                trigger: image,
                onEnter: () => {
                  gsap.from(image, {
                        duration: 1, 
                        scale: 1.25, 
                        opacity: 0, 
                        ease: 'ease',
                        stagger: 1,
                    });
                    image.src = image.dataset.src;
                },
        });
    });
	});


</script>




<body>
    <section>
        <title>Backlit Photography</title>

        <div class="logo">
            <a href="#">Josin Po</a>

        </div>
        <div class="sidebar">
            <div class="sidebar-item">
                <p id ="header">Backlit <br>Photography
                </p>
            </div>
        <div class="slider">
            <div class="slider-wrapper">
                <div class="slide">
                    <img src={img1} alt="image not working">
                </div>
                <div class="slide">
                    <img src={img1} alt="image not working">
                </div>
                <div class="slide">
                    <img src={img1} alt="image not working">
                </div>
                <div class="slide">
                    <img src={img1} alt="image not working">
                </div>
                <div class="slide">
                    <img src={img1} alt="image not working">
                </div>
                <div class="slide">
                    <img src={img1} alt="image not working">
                </div>
                <div class="slide">
                    <img src={img1} alt="image not working">
                </div>
                <div class="slide">
                    <img src={img1} alt="image not working">
                </div>
                <div class="slide">
                    <img src={img1} alt="image not working">
                </div>
                <div class="slide">
                    <img src={img1} alt="image not working">
                </div>
            </div>
        </div>
        </div>
        
    </section>


</body>


<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html,
body
{
    width: 100vw;
    height: 100vh;
    /* overflow: hidden; */
}

.logo
{
    position: fixed;
    padding: 1.5em;
}

.logo a{
    text-decoration: none;
    color:#000;
    font-family:"Poppins";
    font-weight: 500;

}

.sidebar-item{
    width: 100vh;
    height: max-content;
    display: flex;
    align-items: flex-start ;
    transform: rotate(-90deg) translate(-100%,0);
    transform-origin: left top;
    padding:1.5em 3em ;
    font-family: "Poppins";
    
}

.sidebar > div:nth-child(1){
    flex:2;
}
.sidebar > div:nth-child(2){
    flex:2;
    display:flex;
    gap:6em;
}

p#header{
    font-family: "Poppins";
    text-transform: uppercase;
    font-size: 5rem;
    line-height: 85%;
    margin-bottom: 4rem;
}

.slider{
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.slider-wrapper{
    position: absolute;
    top: 0;
    width: 8000px;
    padding: 0 600px;
    height: 100%;
    display: flex;
    align-items: center;
    gap:100px;
}
.slide{
    width: 400px;
    height: 500px;
    background: #e3e3e3;
}

img{
    width: 100%;
    height: 100%;
    object-fit: cover;

}
</style>