// ============================================
// HASHIM ANDROID - ADMIN DASHBOARD
// ============================================

(function() {
    'use strict';

    // ===== DATA =====
    const ADMIN_APPS = [
        { id: 1, name: 'Hashim Launcher Pro', icon: '🚀', version: '3.2.0', downloads: '12.4k', status: 'نشط', featured: true },
        { id: 2, name: 'Nova Widgets', icon: '📱', version: '1.7.4', downloads: '8.1k', status: 'نشط', featured: true },
        { id: 3, name: 'Glass Icons Pack', icon: '✨', version: '2.1.1', downloads: '5.2k', status: 'نشط', featured: false },
        { id: 4, name: 'Motion Clock', icon: '⏳', version: '4.0.2', downloads: '3.8k', status: 'نشط', featured: false },
        { id: 5, name: 'Hashim Weather', icon: '🌤️', version: '1.2.8', downloads: '6.7k', status: 'نشط', featured: false },
    ];

    // ===== RENDER STATS =====
    function renderStats() {
        const statsContainer = document.querySelector('.admin-stats');
        if (!statsContainer) return;

        const totalApps = ADMIN_APPS.length;
        const totalDownloads = ADMIN_APPS.reduce((sum, app) => sum + parseInt(app.downloads), 0);
        const featuredApps = ADMIN_APPS.filter(app => app.featured).length;

        statsContainer.innerHTML = `
            <div class="admin-stat-card glass-sm">
                <div class="number">${totalApps}</div>
                <div class="label">إجمالي التطبيقات</div>
            </div>
            <div class="admin-stat-card glass-sm">
                <div class="number">${totalDownloads}k</div>
                <div class="label">إجمالي التحميلات</div>
            </div>
            <div class="admin-stat-card glass-sm">
                <div class="number">${featuredApps}</div>
                <div class="label">تطبيقات مميزة</div>
            </div>
            <div class="admin-stat-card glass-sm">
                <div class="number">${ADMIN_APPS.filter(a => a.status === 'نشط').length}</div>
                <div class="label">تطبيقات نشطة</div>
            </div>
        `;
    }

    // ===== RENDER TABLE =====
    function renderTable() {
        const tableBody = document.querySelector('.admin-table tbody');
        if (!tableBody) return;

        tableBody.innerHTML = ADMIN_APPS.map(app => `
            <tr>
                <td>${app.icon} ${app.name}</td>
                <td>${app.version}</td>
                <td>${app.downloads}</td>
                <td>${app.featured ? '⭐ مميز' : '—'}</td>
                <td><span style="color: #2ed573;">${app.status}</span></td>
                <td>
                    <div class="admin-actions">
                        <button class="edit-btn" onclick="alert('تعديل: ${app.name}')">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="delete-btn" onclick="if(confirm('هل أنت متأكد؟')) alert('تم حذف ${app.name}')">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `).join('');
    }

    // ===== INIT =====
    function init() {
        renderStats();
        renderTable();

        // Theme toggle for admin
        const toggle = document.getElementById('themeToggle');
        if (toggle) {
            toggle.addEventListener('click', function() {
                document.body.classList.toggle('light');
                const icon = this.querySelector('i');
                if (document.body.classList.contains('light')) {
                    icon.className = 'fas fa-sun';
                } else {
                    icon.className = 'fas fa-moon';
                }
            });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();