
// navbar 

document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 30) {
            navbar.classList.add("scrolled");
            links.forEach(link => {
                link.classList.add("scrolled-link");
            });
            
            
        } else {
            navbar.classList.remove("scrolled");
            links.forEach(link => {
                link.classList.remove("scrolled-link");
            });
        }
    });
});


// navbar 


// carousel projects


const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next-arrow");
const backBtn = document.querySelector(".back-arrow");

let currentSlide = 0;
const totalSlides = slides.length;

const updateSlides = () => {
    slides.forEach((slide, index) => {
        slide.classList.toggle("showcase", index === currentSlide);
        slide.style.display = index === currentSlide ? "block" : "none";
    });
};

const handleNext = () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlides();
};

const handleBack = () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlides();
};

nextBtn.addEventListener("click", handleNext);
backBtn.addEventListener("click", handleBack);

// Initial display
updateSlides();

// carousel projects








// for form information on email
function sendEmail(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    console.log("Sending email with the following details:");
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Subject: " + subject);
    console.log("Message: " + message);

    Email.send({
        Host : "smtp.gmail.com",
        Username : "paltanidish@gmail.com",
        Password : "gudnight@123",
        To : 'paltanidish@gmail.com',
        From : email,
        Subject : subject,
        Body : "Name: " + name + "<br>Email: " + email + "<br>Subject: " + subject + "<br>Message: " + message
    }).then(
      message => alert("Message sent successfully")
    ).catch(
      error => alert("Failed to send message: " + error)
    );
}

function resetForm() {
    document.getElementById('contact-form').reset();
}


// for navbar resposive ness
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const links = document.querySelector('.links');
    const nav = document.getElementById('navbar');

    hamburger.addEventListener('click', function() {
        links.classList.toggle('show');
    });

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
});

