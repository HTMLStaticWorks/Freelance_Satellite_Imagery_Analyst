/**
 * DASHBOARD JAVASCRIPT - SATELLITE INTELLIGENCE
 */

document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const navLinks = document.querySelectorAll('.dashboard-nav-link');
    const sections = document.querySelectorAll('.dashboard-section');

    // 1. Sidebar Toggle (Mobile)
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });
    }

    const closeSidebar = document.getElementById('closeSidebar');
    if (closeSidebar) {
        closeSidebar.addEventListener('click', () => {
            sidebar.classList.remove('active');
        });
    }

    // 2. Section Switching Logic
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const sectionId = this.getAttribute('data-section');
            if (sectionId) {
                e.preventDefault();
                
                // Remove active class from all links
                navLinks.forEach(l => l.classList.remove('active'));
                // Add active class to clicked link
                this.classList.add('active');
                
                // Hide all sections
                sections.forEach(s => s.classList.remove('active'));
                // Show target section
                const targetSection = document.getElementById(sectionId);
                if (targetSection) {
                    targetSection.classList.add('active');
                }

                // Close sidebar on mobile
                if (window.innerWidth < 992 && sidebar) {
                    sidebar.classList.remove('active');
                }

                // Trigger animations for specific sections
                if (sectionId === 'tracking') {
                    initTrackingAnimation();
                }
            }
        });
    });

    // 3. Tracking Animation Simulation
    function initTrackingAnimation() {
        const trackingBox = document.querySelector('#tracking .geo-card');
        if (trackingBox) {
            trackingBox.style.borderColor = 'var(--aurora-cyan)';
            setTimeout(() => {
                trackingBox.style.borderColor = 'rgba(34, 211, 238, 0.1)';
            }, 2000);
        }
    }

    // 4. Notifications Simulation
    setTimeout(() => {
        showNotification('New satellite pass detected in Amazon Sector B');
    }, 5000);

    function showNotification(message) {
        const toast = document.createElement('div');
        toast.className = 'glass-panel position-fixed bottom-0 end-0 m-4 p-3 animate-pulse-cyan';
        toast.style.zIndex = '9999';
        toast.innerHTML = `
            <div class="d-flex align-items-center gap-3">
                <i class="bi bi-broadcast text-info"></i>
                <div class="small">${message}</div>
            </div>
        `;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 5000);
    }
});
