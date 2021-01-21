const   seasons = () => {
    const   hideTabsNavs = (tabs, navs) => {
        tabs.forEach((item) => {
            item.classList.add('hide');
        });
        navs.forEach((item) => {
            item.classList.remove('seasons__nav-active');
        });
    };
    const   showTabsNavs = (tabs, navs, i) => {
        hideTabsNavs(tabs, navs);
        tabs.forEach((item, j) => {
            if (i == j) {
                item.classList.remove('hide');
            }
        });
        navs.forEach((item, j) => {
            if (i == j) {
                item.classList.add('seasons__nav-active');
            }
        });
    };
    const   tabs = document.querySelectorAll('.seasons__photo'),
            navs = document.querySelectorAll('.seasons__nav');
    
    showTabsNavs(tabs, navs, 0);
    navs.forEach((item, i) => {
        item.addEventListener('click', () => showTabsNavs(tabs, navs, i));
    });
};

export default seasons;