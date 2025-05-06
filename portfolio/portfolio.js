

function showPage(pageId) {
    const pages = ['home', 'about', 'projects', 'experience', 'signup'];
    pages.forEach(id => {
      const page = document.getElementById(id);
      if (page) {
        page.classList.add('hidden');
      }
    });
  
    const activePage = document.getElementById(pageId);
    if (activePage) {
      activePage.classList.remove('hidden');
    }
  }
  