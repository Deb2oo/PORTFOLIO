function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
    document.querySelector(".hamburger").classList.toggle("active");
  }
  

document.addEventListener("DOMContentLoaded", function () {
    let nameElement = document.getElementById("animated-name");
    let nameText = nameElement.innerText;
    nameElement.innerHTML = "";
  
    // Split text into spans
    nameText.split("").forEach((letter, index) => {
      let span = document.createElement("span");
      span.innerText = letter;
      span.style.animationDelay = `${index * 0.07}s`;
      nameElement.appendChild(span);
    });
  });
  



var crsr = document.querySelector(".cursor");

document.addEventListener("mousemove", function (dets) {
    crsr.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
});





document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".cv-button a");

    if (button) {
        button.addEventListener("mouseover", (event) => {
            createStars(event, button);
        });
    }
});

function createStars(event, button) {
    for (let i = 0; i < 3; i++) {
        let star = document.createElement("div");
        star.classList.add("stars");

        // Randomize star position around button
        let xOffset = (Math.random() - 0.5) * 100; // Range: -50 to +50
        let yOffset = (Math.random() - 0.5) * 40;  // Range: -20 to +20

        // Position stars based on viewport
        star.style.position = "absolute";
        star.style.left = `${event.pageX + xOffset}px`;
        star.style.top = `${event.pageY + yOffset}px`;

        document.body.appendChild(star);

        // Animate and remove stars after effect
        setTimeout(() => {
            let angle = Math.random() * 2 * Math.PI;
            let distance = Math.random() * 10 + 5; // Move outward
            let moveX = Math.cos(angle) * distance;
            let moveY = Math.sin(angle) * distance;
            
            star.style.transform = `rotate(45deg) translate(${moveX}px, ${moveY}px)`;
            star.style.opacity = "0";
            
            setTimeout(() => star.remove(), 500);
        }, 50);
        
    }
}



// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: "smooth"
            });
        }
    });
});


document.getElementById("scroll-btn").addEventListener("click", function () {
    // Find the next section
    let nextSection = document.querySelector(".hero");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  });

  
  
console.log("JavaScript is working! yea ");


