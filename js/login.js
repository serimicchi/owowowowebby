const VALID_USERNAME = "meow";
const VALID_PASSWORD = "meowza";
const REDIRECT_URL   = "../index.html";

document.addEventListener('keydown', e => {
  if (e.key === 'Enter') handleLogin();
});

function handleLogin() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;
  const errorMsg = document.getElementById('errorMsg');

  if (username === VALID_USERNAME && password === VALID_PASSWORD) {
    localStorage.setItem('loggedIn', 'true');
    localStorage.setItem('username', username);
    errorMsg.classList.remove('visible');
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('successScreen').classList.add('visible');
    setTimeout(() => { window.location.href = REDIRECT_URL; }, 1500);
  } else {
    errorMsg.classList.add('visible');
    document.getElementById('password').value = '';
    document.getElementById('password').focus();
  }
}

if (localStorage.getItem('loggedIn') === 'true') {
  window.location.href = REDIRECT_URL;
}
