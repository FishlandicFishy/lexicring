<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Index | lexicring</title>
    <meta charset="UTF-8" />
    <link
      rel="stylesheet"
      as="style"
      crossorigin
      href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Inter"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Gentium+Book+Plus"
    />
  </head>
  <style>
    :root {
      --dbg:#1b1b1b;
      --dfg:#2b2b2b;
      --dhd:#444444;
      --dtx:white;
      --dli:thistle;
      
      --lbg:#f5f5f5;
      --lfg:#d4d4d4;
      --ltx:#333;
      --lhd:#ddd;
      --lli:darkviolet;
    }
    body {
      background-color: var(--dbg);
      color: var(--dtx);
      font-family: Pretendard, Inter, sans-serif;
      margin: 0;
      display: grid;
      grid-template-columns: 200px 1fr 200px;
    }
    .logo, .link {
      color: var(--dtx);
      text-decoration: none;
    }
    h1, h2, h3 {
      font-family: "Gentium Book Plus";
    }
    header {
      background-color: var(--dhd);
      grid-column: 1 / 4;
    }
    .logo {
      font-family: "Gentium Book Plus";
      font-size: 2.5rem;
      margin-left: 12px;
    }
    .logo, .link {
      display: inline;
      margin-right: 12px;
    }
    .content {
      padding: 20px;
      grid-column: 2;
      min-height: 80vh;
    }
    .left-sidebar, .right-sidebar {
      background-color: var(--dfg);
      padding: 20px;
    }
    .footer {
      grid-column: 1 / 4;
    }
    .settings-option {
      margin-bottom: 15px;
    }
    .settings-title {
      font-weight: bold;
      margin-bottom: 5px;
    }
    .settings-item {
      cursor: pointer;
      margin-left: 10px;
    }
    a, .settings-item:hover, .selected {
      color: var(--dli);
    }
    .selected {
      font-weight: bold;
    }
    .lexicring-box {
      text-align: center;
      display: inline;
      padding: 5px;
    }

    /* Light mode styles */
    body.light-mode {
      background-color: var(--lbg);
      color: var(--ltx);
    }
    body.light-mode header {
      background-color: var(--lhd);
    }
    body.light-mode .left-sidebar,
    body.light-mode .right-sidebar {
      background-color: var(--lfg);
    }
    body.light-mode a,
    body.light-mode .settings-item:hover,
    body.light-mode .selected {
      color: var(--lli);
    }
    body.light-mode .logo,
    body.light-mode .link {
      color: var(--ltx);
    }
  </style>
  <body>
    <header>
      <div class="header">
        <a href="https://fishlandicfishy.github.io/lexicring/" class="logo"><b>lexicring</b></a>
        <a href="wiki" class="link">Encyclopedia</a>
        <a href="dict" class="link">Dictionary</a>
      </div>
    </header>
    <div class="left-sidebar">
      <!-- Placeholder left sidebar content -->
    </div>
    <div class="content">
      <h2>the low-effort 'pedia no one asked for</h2>
      <div class="lexicring-box"><a href="wiki">Encyclopedia</a></div>
      <div class="lexicring-box"><a href="dict">Dictionary</a></div>
      <p>henlo</p>
      <h2>Reposting</h2>
      <p>
        Reposting of lexicring is allowed, whether the repost is modified or
        not, but some reposts can be malicious.
      </p>
      <p>
        To avoid interacting with malicious reposts of lexicring, please make
        sure you are on GitHub or fishlandicfishy.github.io.
      </p>
    </div>
    <div class="right-sidebar">
      <div class="settings-option">
        <div class="settings-title">Text</div>
        <div class="settings-item" onclick="setTextSize('small')">Small</div>
        <div class="settings-item selected" onclick="setTextSize('standard')">Standard</div>
        <div class="settings-item" onclick="setTextSize('large')">Large</div>
      </div>
      <div class="settings-option">
        <div class="settings-title">Color</div>
        <div class="settings-item" onclick="setColorMode('light')">Light</div>
        <div class="settings-item selected" onclick="setColorMode('dark')">Dark</div>
      </div>
    </div>
    <div class="footer">
      <hr>
      <p>
        <i>
          Content and website are in the public domain. Please refer to the
          <a href="https://github.com/FishlandicFishy/lexicring">GitHub repository</a>.
        </i>
      </p>
    </div>

    <script>
      function setTextSize(size) {
        // Remove selected class from all text size options
        document.querySelectorAll('.settings-option:first-child .settings-item').forEach(item => {
          item.classList.remove('selected');
        });
        
        // Add selected class to clicked option
        event.target.classList.add('selected');
        
        // Apply text size
        const content = document.querySelector('.content');
        if (size === 'small') {
          content.style.fontSize = '0.8rem';
        } else if (size === 'standard') {
          content.style.fontSize = '1rem';
        } else if (size === 'large') {
          content.style.fontSize = '1.2rem';
        }
      }
      
      function setColorMode(mode) {
        // Remove selected class from all color options
        document.querySelectorAll('.settings-option:last-child .settings-item').forEach(item => {
          item.classList.remove('selected');
        });
        
        // Add selected class to clicked option
        event.target.classList.add('selected');
        
        // Apply color mode by toggling class on body
        if (mode === 'light') {
          document.body.classList.add('light-mode');
        } else if (mode === 'dark') {
          document.body.classList.remove('light-mode');
        }
      }
    </script>
  </body>
</html>
