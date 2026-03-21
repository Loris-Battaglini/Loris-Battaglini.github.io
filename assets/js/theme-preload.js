(function () {
      try {
        const storedTheme = window.localStorage.getItem('lb-theme');
        if (storedTheme !== 'light') {
          document.documentElement.classList.add('theme-dark');
        }
      } catch (error) {
        // Storage unavailable: default to dark mode.
        document.documentElement.classList.add('theme-dark');
      }
    })();
