let intro = document.querySelector('.intro');
let greet = document.querySelector('.greet-header');
let greetSpan = document.querySelectorAll('.greet')

window.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(()=>{
        greetSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            },(idx + 1) * 400)
        });
        setTimeout(()=>{
            greetSpan.forEach((span,idx)=>{
                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                },(idx + 1)*50)
            })
        },2200)
        setTimeout(()=>{
            intro.style.top = '-100vh';
        },2300)
    })
})