<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Login to DeSigma</title>
  <link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Syne:wght@400;700;800&display=swap" rel="stylesheet"/>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --bg: #0d0d0d;
      --panel: #141414;
      --border: #2a2a2a;
      --accent: #c8f04a;
      --text: #e8e8e8;
      --muted: #555;
      --error: #ff5f5f;
    }

    body {
      min-height: 100vh;
      background: var(--bg);
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'DM Mono', monospace;
      color: var(--text);
      overflow: hidden;
    }

    body::before {
      content: '';
      position: fixed;
      inset: 0;
      background-image:
        linear-gradient(var(--border) 1px, transparent 1px),
        linear-gradient(90deg, var(--border) 1px, transparent 1px);
      background-size: 48px 48px;
      opacity: 0.3;
      pointer-events: none;
    }

    .card {
      position: relative;
      background: var(--panel);
      border: 1px solid var(--border);
      padding: 48px 44px;
      width: 100%;
      max-width: 420px;
      animation: slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;
    }

    .card::before {
      content: '';
      position: absolute;
      top: -1px; left: -1px;
      width: 40px; height: 40px;
      border-top: 2px solid var(--accent);
      border-left: 2px solid var(--accent);
    }
    .card::after {
      content: '';
      position: absolute;
      bottom: -1px; right: -1px;
      width: 40px; height: 40px;
      border-bottom: 2px solid var(--accent);
      border-right: 2px solid var(--accent);
    }

    @keyframes slideUp {
      from { opacity: 0; transform: translateY(24px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    .label-tag {
      font-size: 11px;
      letter-spacing: 0.15em;
      color: var(--accent);
      text-transform: uppercase;
      margin-bottom: 10px;
    }

    h1 {
      font-family: 'Syne', sans-serif;
      font-size: 32px;
      font-weight: 800;
      line-height: 1;
      margin-bottom: 36px;
      color: #fff;
    }

    .field {
      margin-bottom: 20px;
    }

    .field label {
      display: block;
      font-size: 11px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--muted);
      margin-bottom: 8px;
    }

    .field input {
      width: 100%;
      background: var(--bg);
      border: 1px solid var(--border);
      color: var(--text);
      font-family: 'DM Mono', monospace;
      font-size: 14px;
      padding: 12px 14px;
      outline: none;
      transition: border-color 0.2s;
    }

    .field input:focus {
      border-color: var(--accent);
    }

    .field input::placeholder {
      color: var(--muted);
    }

    .error-msg {
      font-size: 12px;
      color: var(--error);
      margin-bottom: 20px;
      min-height: 16px;
      display: none;
    }
    .error-msg.visible { display: block; }

    button {
      width: 100%;
      background: var(--accent);
      color: #0d0d0d;
      border: none;
      font-family: 'Syne', sans-serif;
      font-weight: 700;
      font-size: 14px;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      padding: 14px;
      cursor: pointer;
      transition: opacity 0.15s, transform 0.1s;
      margin-top: 4px;
    }

    button:hover { opacity: 0.88; }
    button:active { transform: scale(0.98); }

    .footer-link {
      margin-top: 24px;
      font-size: 12px;
      color: var(--muted);
      text-align: center;
    }

    .footer-link a {
      color: var(--accent);
      text-decoration: none;
    }

    .footer-link a:hover { text-decoration: underline; }

    .success-screen {
      display: none;
      text-align: center;
    }
    .success-screen.visible { display: block; }
    .login-form.hidden { display: none; }

    .checkmark {
      font-size: 48px;
      margin-bottom: 16px;
    }
    .success-screen h2 {
      font-family: 'Syne', sans-serif;
      font-size: 24px;
      font-weight: 800;
      color: var(--accent);
      margin-bottom: 8px;
    }
    .success-screen p {
      font-size: 13px;
      color: var(--muted);
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="login-form" id="loginForm">
      <p class="label-tag">// welcome back</p>
      <h1>Sign In</h1>

      <div class="field">
        <label for="username">Username</label>
        <input type="text" id="username" placeholder="your_username" autocomplete="username"/>
      </div>

      <div class="field">
        <label for="password">Password</label>
        <input type="password" id="password" placeholder="••••••••" autocomplete="current-password"/>
      </div>

      <p class="error-msg" id="errorMsg">Invalid username or password.</p>

      <button onclick="handleLogin()">Enter →</button>

      <p class="footer-link">
        No account? <a href="register.html">Register here</a>
      </p>
    </div>

    <div class="success-screen" id="successScreen">
      <div class="checkmark">✦</div>
      <h2>You're in.</h2>
      <p>Redirecting you now...</p>
    </div>
  </div>

  <script>
    const VALID_USERNAME = "meow";
    const VALID_PASSWORD = "meowza";
    const REDIRECT_URL   = "index.html"
    
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

        setTimeout(() => {
          window.location.href = REDIRECT_URL;
        }, 1500);
      } else {
        errorMsg.classList.add('visible');
        document.getElementById('password').value = '';
        document.getElementById('password').focus();
      }
    }

    if (localStorage.getItem('loggedIn') === 'true') {
      window.location.href = REDIRECT_URL;
    }
  </script>
</body>
</html>            <i class="fab fa-instagram"><span>Instagram</span></i>
          </div>
        </div>
        <div class="signup">Don't have account?
          <a href="#">Signup Now</a>
        </div>
      </div>
    </div>

    <script>
      const pass_field = document.querySelector('.pass-key');
      const showBtn = document.querySelector('.show');
      showBtn.addEventListener('click', function(){
       if(pass_field.type === "password"){
         pass_field.type = "text";
         showBtn.textContent = "HIDE";
         showBtn.style.color = "#3498db";
       }else{
         pass_field.type = "password";
         showBtn.textContent = "SHOW";
         showBtn.style.color = "#222";
       }
      });
    </script>

    <script src="../js/login.js"></script>
  </body>
</html>
