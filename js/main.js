        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        const menuLine1 = document.getElementById('menuLine1');
        const menuLine2 = document.getElementById('menuLine2');
        const menuLine3 = document.getElementById('menuLine3');
        let isMenuOpen = false;

        mobileMenuBtn.addEventListener('click', function() {
            isMenuOpen = !isMenuOpen;
            
            if (isMenuOpen) {
                mobileMenu.classList.add('active');
                document.body.style.overflow = 'hidden';
                
                menuLine1.style.transform = 'rotate(45deg) translate(5px, 5px)';
                menuLine2.style.opacity = '0';
                menuLine3.style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                mobileMenu.classList.remove('active');
                document.body.style.overflow = 'auto'; 
                
                menuLine1.style.transform = 'rotate(0) translate(0, 0)';
                menuLine2.style.opacity = '1';
                menuLine3.style.transform = 'rotate(0) translate(0, 0)';
            }
        });

        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (isMenuOpen) {
                    mobileMenuBtn.click();
                }
            });
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && isMenuOpen) {
                mobileMenuBtn.click();
            }
        });

        mobileMenu.addEventListener('click', function(e) {
            if (e.target === mobileMenu) {
                mobileMenuBtn.click();
            }
        });

        window.addEventListener('resize', function() {
            if (window.innerWidth >= 1280 && isMenuOpen) {
                mobileMenuBtn.click(); 
            }
        });

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });