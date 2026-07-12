// ============================================
// HASHIM ANDROID - MAIN APPLICATION LOGIC
// ============================================

(function() {
    'use strict';

    // ===== DATA =====
    const APPS = [
        {
            id: 1,
            name: 'Hashim Launcher Pro',
            icon: '🚀',
            version: '3.2.0',
            size: '18.4 MB',
            updated: '2026-07-10',
            downloads: '12.4k',
            rating: 4.8,
            developer: 'Hashim Dev',
            description: 'أسرع وأجمل مشغل لتجربة Android فائقة. مصمم بعناية ليكون مختلفاً مع حركات سلسة وتخصيص لا نهائي.',
            longDescription: 'Hashim Launcher Pro هو مشغل Android المصمم من الصفر لتجربة سلسة وسريعة. يتميز بواجهة نظيفة، حركات احترافية، واستهلاك منخفض للبطارية. مثالي للمستخدمين الذين يبحثون عن الجمال والأداء.',
            features: [
                'حزم أيقونات مخصصة',
                'التحكم بالإيماءات',
                'الوضع الداكن الكامل',
                'بحث ذكي',
                'تحسين البطارية',
                'شاشة رئيسية قابلة للتخصيص'
            ],
            changelog: [
                'إضافة محرك أنيميشن جديد',
                'إصلاح تسرب الذاكرة',
                'تحسين الأداء بنسبة 40%',
                'إضافة دعم Android 14'
            ],
            requirements: 'Android 8.0 أو أحدث',
            mediafireUrl: 'https://www.mediafire.com/file/your-app-link',
            gallery: ['📱', '🎨', '⚡', '✨', '🚀']
        },
        {
            id: 2,
            name: 'Nova Widgets',
            icon: '📱',
            version: '1.7.4',
            size: '9.2 MB',
            updated: '2026-07-08',
            downloads: '8.1k',
            rating: 4.6,
            developer: 'Hashim Dev',
            description: 'مجموعة من الويدجت الجميلة لشاشة الرئيسية. طقس، ساعة، موسيقى والمزيد.',
            longDescription: 'Nova Widgets تقدم لك مجموعة متكاملة من الويدجت المصممة باحترافية. استمتع بويجت الطقس المتطور، مشغل الموسيقى، الساعة الرقمية، وأدوات تخصيص الشاشة.',
            features: [
                'ويجت الطقس مع أنيميشن',
                'مشغل موسيقى',
                'ساعة رقمية',
                'قابلية التخصيص الكاملة',
                'أحجام متعددة'
            ],
            changelog: [
                'أنيميشن طقس جديد',
                'إصلاح أخطاء',
                'تحسين الأداء'
            ],
            requirements: 'Android 7.0 أو أحدث',
            mediafireUrl: 'https://www.mediafire.com/file/your-widget-link',
            gallery: ['🌤️', '🎵', '🕐', '🎨']
        },
        {
            id: 3,
            name: 'Glass Icons Pack',
            icon: '✨',
            version: '2.1.1',
            size: '6.8 MB',
            updated: '2026-07-05',
            downloads: '5.2k',
            rating: 4.9,
            developer: 'Hashim Dev',
            description: 'حزمة أيقونات زجاجية فاخرة مع تأثيرات شفافة مذهلة.',
            longDescription: 'حزمة أيقونات Glass تقدم أكثر من 5000 أيقونة بتصميم زجاجي عصري. مثالية للمستخدمين الذين يبحثون عن مظهر أنيق ومختلف.',
            features: [
                'أكثر من 5000 أيقونة',
                'تأثيرات زجاجية',
                'تحديثات شهرية',
                'دعم كل المشغلات'
            ],
            changelog: [
                'إضافة 500 أيقونة جديدة',
                'تحسين الجودة',
                'إصلاح أخطاء'
            ],
            requirements: 'Android 5.0+',
            mediafireUrl: 'https://www.mediafire.com/file/your-icons-link',
            gallery: ['🎨', '✨', '💎', '🌟']
        },
        {
            id: 4,
            name: 'Motion Clock',
            icon: '⏳',
            version: '4.0.2',
            size: '12.1 MB',
            updated: '2026-07-12',
            downloads: '3.8k',
            rating: 4.7,
            developer: 'Hashim Dev',
            description: 'ساعة رقمية مع حركات أنيميشن احترافية ودعم للمنبهات.',
            longDescription: 'Motion Clock هي ساعة رقمية متطورة مع أنيميشن احترافي. تدعم المنبهات المتعددة، التوقيت، والمؤقتات مع واجهة جميلة.',
            features: [
                'أنيميشن احترافي',
                'منبهات متعددة',
                'مؤقت',
                'واجهة قابلة للتخصيص',
                'وضع الشاشة الكاملة'
            ],
            changelog: [
                'إضافة 3 أنيميشن جديدة',
                'تحسين دقة التوقيت',
                'إصلاح مشكلة المنبهات'
            ],
            requirements: 'Android 6.0+',
            mediafireUrl: 'https://www.mediafire.com/file/your-clock-link',
            gallery: ['⏳', '🕐', '⏰', '🎨']
        },
        {
            id: 5,
            name: 'Hashim Weather',
            icon: '🌤️',
            version: '1.2.8',
            size: '14.5 MB',
            updated: '2026-07-09',
            downloads: '6.7k',
            rating: 4.5,
            developer: 'Hashim Dev',
            description: 'تطبيق طقس ذكي مع توقعات دقيقة وواجهة جذابة.',
            longDescription: 'تطبيق الطقس الذكي من Hashim يقدم توقعات دقيقة مع واجهة جميلة وتأثيرات بصرية مذهلة. يدعم مدن متعددة وتحديثات لحظية.',
            features: [
                'توقعات دقيقة',
                'دعم مدن متعددة',
                'تأثيرات بصرية',
                'تحديثات لحظية',
                'واجهة قابلة للتخصيص'
            ],
            changelog: [
                'تحسين دقة التوقعات',
                'إضافة تأثيرات جديدة',
                'إصلاح أخطاء'
            ],
            requirements: 'Android 7.0+',
            mediafireUrl: 'https://www.mediafire.com/file/your-weather-link',
            gallery: ['🌤️', '🌧️', '❄️', '🌪️']
        }
    ];

    // ===== HELPERS =====
    function getAppById(id) {
        return APPS.find(app => app.id === parseInt(id));
    }

    function formatDate(dateStr) {
        const d = new Date(dateStr);
        return d.toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' });
    }

    // ===== RENDER APP GRID =====
    function renderAppGrid(apps) {
        const grid = document.getElementById('appGrid');
        if (!grid) return;

        grid.innerHTML = apps.map(app => `
            <div class="app-card" onclick="window.location.href='app-detail.html?id=${app.id}'">
                <span class="icon">${app.icon}</span>
                <div class="name">${app.name}</div>
                <div class="meta">
                    <span>v${app.version}</span>
                    <span>${app.size}</span>
                    <span>${formatDate(app.updated)}</span>
                </div>
                <button class="btn-card" onclick="event.stopPropagation(); window.location.href='app-detail.html?id=${app.id}'">
                    <i class="fas fa-eye"></i> عرض
                </button>
            </div>
        `).join('');
    }

    // ===== RENDER APP DETAIL =====
    function renderAppDetail() {
        const container = document.getElementById('appDetail');
        if (!container) return;

        const params = new URLSearchParams(window.location.search);
        const id = params.get('id');
        const app = getAppById(id);

        if (!app) {
            container.innerHTML = `
                <div class="page-404" style="padding: 60px 0;">
                    <div class="code">404</div>
                    <div class="message">عذراً، التطبيق غير موجود</div>
                    <a href="index.html" class="btn btn-primary">العودة للرئيسية</a>
                </div>
            `;
            return;
        }

        // Update page title
        document.title = `${app.name} · Hashim Android`;

        container.innerHTML = `
            <!-- App Detail Hero -->
            <div class="app-detail-hero glass">
                <div class="app-detail-icon">${app.icon}</div>
                <div class="app-detail-info">
                    <h1>${app.name}</h1>
                    <div class="developer">بواسطة ${app.developer}</div>
                    <div class="app-detail-stats">
                        <div class="stat"><strong>الإصدار</strong> ${app.version}</div>
                        <div class="stat"><strong>الحجم</strong> ${app.size}</div>
                        <div class="stat"><strong>التحديث</strong> ${formatDate(app.updated)}</div>
                        <div class="stat"><strong>التحميلات</strong> ${app.downloads}</div>
                        <div class="stat"><strong>التقييم</strong> ⭐ ${app.rating}/5</div>
                        <div class="stat"><strong>المتطلبات</strong> ${app.requirements}</div>
                    </div>
                    <div style="display:flex; gap:12px; flex-wrap:wrap; margin-top:8px;">
                        <button class="btn btn-primary" id="downloadBtn">
                            <i class="fas fa-download"></i> تحميل APK
                        </button>
                        <button class="btn btn-outline" onclick="window.location.href='versions.html?id=${app.id}'">
                            <i class="fas fa-history"></i> سجل الإصدارات
                        </button>
                    </div>
                </div>
            </div>

            <!-- Gallery -->
            <h3 style="margin: 24px 0 12px;">📸 معرض الصور</h3>
            <div class="app-detail-gallery">
                ${app.gallery.map(img => `
                    <div class="gallery-item">${img}</div>
                `).join('')}
            </div>

            <!-- Description -->
            <h3 style="margin: 32px 0 12px;">📖 الوصف</h3>
            <div class="app-detail-description">
                <p>${app.longDescription || app.description}</p>
            </div>

            <!-- Features -->
            <h3 style="margin: 32px 0 12px;">✨ المميزات</h3>
            <div class="app-detail-features">
                ${app.features.map(f => `
                    <div class="feature"><i class="fas fa-check-circle"></i> ${f}</div>
                `).join('')}
            </div>

            <!-- Changelog -->
            <h3 style="margin: 32px 0 12px;">📝 التغييرات الجديدة</h3>
            <div style="background: var(--bg-glass); padding: 20px 24px; border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
                <ul style="list-style: none; color: var(--text-secondary);">
                    ${app.changelog.map(c => `
                        <li style="padding: 6px 0; border-bottom: 1px solid var(--border-color);">
                            <i class="fas fa-circle" style="color: var(--accent); font-size: 6px; vertical-align: middle; margin-right: 8px;"></i>
                            ${c}
                        </li>
                    `).join('')}
                </ul>
            </div>

            <!-- FAQ -->
            <h3 style="margin: 32px 0 12px;">❓ الأسئلة الشائعة</h3>
            <div style="display:grid; gap:12px;">
                <div class="glass-sm" style="padding:16px 20px;">
                    <strong>هل التطبيق مجاني؟</strong>
                    <p style="color: var(--text-secondary); margin-top:4px;">نعم، جميع تطبيقات Hashim Android مجانية تماماً.</p>
                </div>
                <div class="glass-sm" style="padding:16px 20px;">
                    <strong>ما هي متطلبات التشغيل؟</strong>
                    <p style="color: var(--text-secondary); margin-top:4px;">${app.requirements}</p>
                </div>
                <div class="glass-sm" style="padding:16px 20px;">
                    <strong>كيف أقوم بتحديث التطبيق؟</strong>
                    <p style="color: var(--text-secondary); margin-top:4px;">يمكنك تحميل أحدث إصدار من نفس الصفحة أو استخدام خاصية التحديث التلقائي.</p>
                </div>
            </div>
        `;

        // ===== DOWNLOAD BUTTON WITH COUNTDOWN =====
        const downloadBtn = document.getElementById('downloadBtn');
        const modal = document.getElementById('downloadModal');
        const countdownEl = document.getElementById('countdown');
        const progressFill = document.getElementById('progressFill');
        const cancelBtn = document.getElementById('cancelDownload');

        if (downloadBtn) {
            let countdownInterval = null;
            let progressInterval = null;
            let count = 5;

            function startDownload() {
                // Show modal
                modal.classList.add('active');
                count = 5;
                countdownEl.textContent = count;
                progressFill.style.width = '0%';

                // Countdown
                countdownInterval = setInterval(() => {
                    count--;
                    countdownEl.textContent = count;
                    progressFill.style.width = `${((5 - count) / 5) * 100}%`;

                    if (count <= 0) {
                        clearInterval(countdownInterval);
                        clearInterval(progressInterval);
                        // Redirect to MediaFire
                        window.open(app.mediafireUrl, '_blank');
                        // Close modal after redirect
                        setTimeout(() => {
                            modal.classList.remove('active');
                        }, 500);
                    }
                }, 1000);

                // Progress bar animation
                let progress = 0;
                progressInterval = setInterval(() => {
                    progress += 2;
                    if (progress >= 100) {
                        clearInterval(progressInterval);
                    }
                }, 100);
            }

            downloadBtn.addEventListener('click', startDownload);

            // Cancel download
            if (cancelBtn) {
                cancelBtn.addEventListener('click', () => {
                    clearInterval(countdownInterval);
                    clearInterval(progressInterval);
                    modal.classList.remove('active');
                });
            }

            // Close modal on overlay click
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    clearInterval(countdownInterval);
                    clearInterval(progressInterval);
                    modal.classList.remove('active');
                }
            });
        }
    }

    // ===== SEARCH =====
    function initSearch() {
        const searchInput = document.getElementById('searchInput');
        if (!searchInput) return;

        searchInput.addEventListener('input', function() {
            const q = this.value.toLowerCase().trim();
            const filtered = APPS.filter(app => 
                app.name.toLowerCase().includes(q) ||
                app.developer.toLowerCase().includes(q) ||
                app.description.toLowerCase().includes(q)
            );
            renderAppGrid(filtered);
        });
    }

    // ===== THEME TOGGLE =====
    function initTheme() {
        const toggle = document.getElementById('themeToggle');
        if (!toggle) return;

        // Check saved theme
        const savedTheme = localStorage.getItem('hashim-theme');
        if (savedTheme === 'light') {
            document.body.classList.add('light');
            toggle.querySelector('i').className = 'fas fa-sun';
        }

        toggle.addEventListener('click', function() {
            document.body.classList.toggle('light');
            const icon = this.querySelector('i');
            if (document.body.classList.contains('light')) {
                icon.className = 'fas fa-sun';
                localStorage.setItem('hashim-theme', 'light');
            } else {
                icon.className = 'fas fa-moon';
                localStorage.setItem('hashim-theme', 'dark');
            }
        });
    }

    // ===== INIT =====
    function init() {
        // Check if we're on app detail page
        if (window.location.pathname.includes('app-detail.html')) {
            renderAppDetail();
        } else {
            // Home page
            renderAppGrid(APPS);
            initSearch();
        }

        initTheme();

        // Show app after splash
        setTimeout(() => {
            document.getElementById('app').style.display = 'block';
        }, 3200);
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // ===== EXPOSE FOR GLOBAL USE =====
    window.APPS = APPS;
    window.getAppById = getAppById;

})();