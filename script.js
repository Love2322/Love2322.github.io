document.addEventListener('DOMContentLoaded', () => {
  // HTML element တွေကို ရွေးထုတ်ခြင်း
  const passwordSection = document.getElementById('password-section');
  const passwordInput = document.getElementById('password-input');
  const submitBtn = document.getElementById('submit-btn');
  const errorMessage = document.getElementById('error-message');

  const loveSection = document.getElementById('love-section');
  const heartsContainer = document.getElementById('hearts-container');
  const initialView = document.getElementById('initial-view');
  const heartBox = document.getElementById('heart-box');
  const finalView = document.getElementById('final-view');

  // မှန်ကန်တဲ့ စကားဝှက်
  const correctPassword = '2006313';

  // "ဝင်မယ်" ခလုတ်ကို နှိပ်ရင် password စစ်ဆေးမယ်
  submitBtn.addEventListener('click', checkPassword);
  
  // Password အကွက်ထဲမှာ Enter ခေါက်ရင်လည်း password စစ်ဆေးမယ်
  passwordInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      checkPassword();
    }
  });

  // အလယ်က အသဲပုံကြီးကို နှိပ်ရင် စာပေါ်လာမယ်
  heartBox.addEventListener('click', () => {
    initialView.style.display = 'none';
    finalView.style.display = 'block';
  });

  // Password စစ်ဆေးတဲ့ function
  function checkPassword() {
    if (passwordInput.value.trim() === correctPassword) {
      // Password မှန်ရင်
      passwordSection.classList.remove('active');
      loveSection.classList.add('active');
      startFlyingHearts(); // နောက်ခံက အသဲပုံတွေ စပျံမယ်
    } else {
      // Password မှားရင်
      errorMessage.textContent = 'စကားဝှက်မှားနေတယ်နော်...';
      const card = passwordSection.querySelector('.card');
      card.animate([
        { transform: 'translateX(0)' }, { transform: 'translateX(-10px)' },
        { transform: 'translateX(10px)' }, { transform: 'translateX(0)' }
      ], { duration: 400, easing: 'ease-in-out' });
      passwordInput.value = '';
    }
  }

  // နောက်ခံမှာ အသဲတွေ ပျံနေအောင်လုပ်တဲ့ function
  function startFlyingHearts() {
    setInterval(createHeart, 300); // 0.3 စက္ကန့်တိုင်း အသဲပုံအသစ်တစ်ခုဖန်တီးမယ်
  }

  function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    const duration = Math.random() * 3 + 4; // 4 to 7 seconds
    heart.style.animationDuration = duration + 's';
    heart.style.fontSize = (Math.random() * 10 + 15) + 'px';
    
    heartsContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove(); // ပျံပြီးသွားတဲ့ အသဲကို ပြန်ဖျက်မယ်
    }, duration * 1000);
  }
});
