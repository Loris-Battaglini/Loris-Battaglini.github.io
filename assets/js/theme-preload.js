(function () {
      try {
        const storedTheme = window.localStorage.getItem('lb-theme');
        if (storedTheme === 'dark') {
          document.documentElement.classList.add('theme-dark');
        }
      } catch (error) {
        // Storage unavailable: keep light mode as safe default.
      }
    })();
