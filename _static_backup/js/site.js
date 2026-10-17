/* ============================================================
   Z COM Networks — Premium Redesign  (site.js)
   ============================================================ */

(function () {
  'use strict';

  /* -------- Constants -------- */
  const WA_NUMBER = window.ZCOM_WA || '923171118042';
  const ASSET_BASE = 'https://zcomnetworks.com.pk/';

  /* ============================================================
     1. Mobile Menu
     ============================================================ */
  window.toggleMenu = function () {
    const menu = document.getElementById('mobileMenu');
    if (!menu) return;
    menu.classList.toggle('open');
  };

  /* ============================================================
     2. Sticky Header shadow on scroll
     ============================================================ */
  function initHeaderScroll() {
    const header = document.querySelector('.site-header');
    if (!header) return;
    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ============================================================
     3. Scroll Reveal (IntersectionObserver)
     ============================================================ */
  function initReveal() {
    const els = document.querySelectorAll('.reveal');
    if (!els.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((el) => observer.observe(el));
  }

  /* ============================================================
     4. Animated Counter
     ============================================================ */
  function animateCounter(el) {
    const target = el.getAttribute('data-count');
    if (!target) return;
    const isPercent = target.includes('%');
    const isSlash = target.includes('/');
    const num = parseFloat(target);
    if (isNaN(num)) { el.textContent = target; return; }

    const duration = 1800;
    const start = performance.now();
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      let val = (num * ease);
      if (isPercent) {
        el.textContent = val.toFixed(1) + '%';
      } else if (isSlash) {
        el.textContent = '24/7';
        return;
      } else {
        el.textContent = target;
        return;
      }
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  function initCounters() {
    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            animateCounter(e.target);
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((el) => observer.observe(el));
  }

  /* ============================================================
     5. 3D Hero Particle Network (Three.js)
     ============================================================ */
  function initHeroParticles() {
    const canvas = document.getElementById('heroCanvas');
    if (!canvas || typeof THREE === 'undefined') return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    camera.position.z = 50;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);

    /* particles */
    const count = 160;
    const positions = new Float32Array(count * 3);
    const velocities = [];

    for (let i = 0; i < count; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 100;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40;
      velocities.push({
        x: (Math.random() - 0.5) * 0.02,
        y: (Math.random() - 0.5) * 0.02,
        z: (Math.random() - 0.5) * 0.01,
      });
    }

    const geom = new THREE.BufferGeometry();
    geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const mat = new THREE.PointsMaterial({
      color: 0xEF5A20,
      size: 0.6,
      transparent: true,
      opacity: 0.7,
      sizeAttenuation: true,
    });

    const points = new THREE.Points(geom, mat);
    scene.add(points);

    /* connection lines */
    const lineGeom = new THREE.BufferGeometry();
    const lineMat = new THREE.LineBasicMaterial({ color: 0xEF5A20, transparent: true, opacity: 0.12 });
    const lineObj = new THREE.LineSegments(lineGeom, lineMat);
    scene.add(lineObj);

    let mouse = { x: 0, y: 0 };
    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouse.y = -((e.clientY - rect.top) / rect.height - 0.5) * 2;
    });

    function animate() {
      requestAnimationFrame(animate);

      const pos = geom.attributes.position.array;
      for (let i = 0; i < count; i++) {
        pos[i * 3]     += velocities[i].x;
        pos[i * 3 + 1] += velocities[i].y;
        pos[i * 3 + 2] += velocities[i].z;
        if (Math.abs(pos[i * 3]) > 55) velocities[i].x *= -1;
        if (Math.abs(pos[i * 3 + 1]) > 35) velocities[i].y *= -1;
        if (Math.abs(pos[i * 3 + 2]) > 25) velocities[i].z *= -1;
      }
      geom.attributes.position.needsUpdate = true;

      /* build connections */
      const linePositions = [];
      const maxDist = 15;
      for (let i = 0; i < count; i++) {
        for (let j = i + 1; j < count; j++) {
          const dx = pos[i * 3] - pos[j * 3];
          const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
          const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
          if (dist < maxDist) {
            linePositions.push(pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2]);
            linePositions.push(pos[j * 3], pos[j * 3 + 1], pos[j * 3 + 2]);
          }
        }
      }
      lineGeom.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));

      /* subtle camera follow */
      camera.position.x += (mouse.x * 5 - camera.position.x) * 0.02;
      camera.position.y += (mouse.y * 3 - camera.position.y) * 0.02;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    }
    animate();

    /* resize */
    window.addEventListener('resize', () => {
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    });
  }

  /* ============================================================
     6. Speed Test (M-Lab NDT7)
     ============================================================ */
  window.startSpeedTest = function () {
    const stBig = document.getElementById('stBig');
    const stDown = document.getElementById('stDown');
    const stUp = document.getElementById('stUp');
    const stPing = document.getElementById('stPing');
    const stBar = document.getElementById('stBar');
    const stDot = document.getElementById('stDot');
    const stStatus = document.getElementById('stStatus');
    const stPhase = document.getElementById('stPhase');
    const stRun = document.getElementById('stRun');

    if (!stBig || typeof ndt7 === 'undefined') {
      alert('Speed test is loading, please wait a moment and try again.');
      return;
    }

    stRun.disabled = true;
    stRun.innerHTML = '<span class="spinner"></span> Testing…';
    stDot.style.background = '#EF5A20';
    stStatus.innerHTML = '<span id="stDot" style="width:7px;height:7px;border-radius:50%;background:#EF5A20;animation:pulse-dot 1.8s infinite;"></span> Running';

    let dlSpeed = 0, ulSpeed = 0, latency = 0;

    ndt7.test(
      {
        userAcceptedDataPolicy: true,
        downloadworkerfile: 'js/ndt7/ndt7-download-worker.js',
        uploadworkerfile: 'js/ndt7/ndt7-upload-worker.js',
      },
      {
        downloadMeasurement: function (data) {
          if (data.Source === 'client') {
            const mbps = data.Data.MeanClientMbps || 0;
            dlSpeed = mbps;
            stBig.textContent = mbps.toFixed(1);
            stDown.textContent = mbps.toFixed(1) + ' Mbps';
            const pct = Math.min((mbps / 500) * 100, 100);
            stBar.style.width = pct + '%';
            stPhase.textContent = '↓ Download';
          }
        },
        uploadMeasurement: function (data) {
          if (data.Source === 'client') {
            const mbps = (data.Data.MeanClientMbps || 0);
            ulSpeed = mbps;
            stUp.textContent = mbps.toFixed(1) + ' Mbps';
            stBig.textContent = mbps.toFixed(1);
            const pct = Math.min((mbps / 500) * 100, 100);
            stBar.style.width = pct + '%';
            stPhase.textContent = '↑ Upload';
          }
        },
        downloadComplete: function (data) {
          if (data && data.LastClientMeasurement) {
            const info = data.LastClientMeasurement;
            if (info.TCPInfo && info.TCPInfo.MinRTT) {
              latency = (info.TCPInfo.MinRTT / 1000).toFixed(0);
              stPing.textContent = latency + ' ms';
            }
          }
        },
        error: function (err) {
          console.error('NDT7 error:', err);
          stStatus.innerHTML = '<span style="width:7px;height:7px;border-radius:50%;background:#EF4444;"></span> Error';
          stRun.disabled = false;
          stRun.innerHTML = '<span style="font-size:13px;">&#9658;</span> Retry';
        },
        complete: function () {
          stBig.textContent = dlSpeed.toFixed(1);
          stBar.style.width = '100%';
          stPhase.textContent = '';
          stStatus.innerHTML = '<span style="width:7px;height:7px;border-radius:50%;background:#39D98A;"></span> Complete';
          stRun.disabled = false;
          stRun.innerHTML = '<span style="font-size:13px;">&#9658;</span> Run again';
        },
      }
    );
  };

  /* ============================================================
     7. WhatsApp FAB
     ============================================================ */
  function initWhatsApp() {
    const fab = document.getElementById('waFab');
    if (!fab) return;
    fab.addEventListener('click', function () {
      const msg = encodeURIComponent('Hi Z COM Networks, I would like to check availability and solutions in my area.');
      window.open('https://wa.me/' + WA_NUMBER + '?text=' + msg, '_blank');
    });

    /* also handle inline wa links */
    document.querySelectorAll('[data-wa]').forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        const msg = encodeURIComponent(el.getAttribute('data-wa'));
        window.open('https://wa.me/' + WA_NUMBER + '?text=' + msg, '_blank');
      });
      const displayVal = el.getAttribute('data-wa-display');
      if (displayVal) el.style.display = displayVal;
    });
  }

  /* ============================================================
     8. Contact Form
     ============================================================ */
  window.submitContact = function (e) {
    if (e) e.preventDefault();
    const name = document.getElementById('cName');
    const phone = document.getElementById('cPhone');
    const email = document.getElementById('cEmail');
    const msg = document.getElementById('cMsg');
    const error = document.getElementById('cError');
    const btn = document.getElementById('cBtn');

    if (!name || !phone) return;

    error.style.display = 'none';
    if (!name.value.trim()) { showError(error, 'Please enter your name.'); return; }
    if (!phone.value.trim()) { showError(error, 'Please enter your phone number.'); return; }

    btn.disabled = true;
    btn.textContent = 'Sending…';

    /* WhatsApp fallback — open WA with the form details */
    const text = `New enquiry from website:\n\nName: ${name.value}\nPhone: ${phone.value}\nEmail: ${email.value}\nMessage: ${msg.value}`;
    window.open('https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(text), '_blank');

    document.getElementById('cForm').style.display = 'none';
    document.getElementById('cSuccess').style.display = 'block';
  };

  /* ============================================================
     9. Coverage Check Form
     ============================================================ */
  window.submitCoverage = function (e) {
    if (e) e.preventDefault();
    const area = document.getElementById('covArea');
    const phone = document.getElementById('covPhone');
    const error = document.getElementById('covError');
    const btn = document.getElementById('covBtn');

    if (!area || !phone) return;

    error.style.display = 'none';
    if (!area.value.trim()) { showError(error, 'Please enter your area.'); return; }
    if (!phone.value.trim()) { showError(error, 'Please enter your phone number.'); return; }

    btn.disabled = true;
    btn.textContent = 'Checking…';

    const text = `Coverage check request:\n\nArea: ${area.value}\nPhone: ${phone.value}`;
    window.open('https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(text), '_blank');

    document.getElementById('covForm').style.display = 'none';
    document.getElementById('covSuccess').style.display = 'block';
  };

  function showError(el, msg) {
    el.textContent = msg;
    el.style.display = 'block';
  }

  /* ============================================================
     10. Logo fallback (if image fails to load)
     ============================================================ */
  function initLogoFallback() {
    document.querySelectorAll('.logo-img').forEach(function (img) {
      img.addEventListener('error', function () {
        img.style.display = 'none';
        const fallback = img.parentElement.querySelector('.logo-fallback');
        if (fallback) fallback.style.display = 'block';
      });
    });
  }

  /* ============================================================
     11. Tilt effect on feature cards
     ============================================================ */
  function initCardTilt() {
    document.querySelectorAll('.feature-card').forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateY = ((x - centerX) / centerX) * 5;
        const rotateX = ((centerY - y) / centerY) * 5;
        card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px) scale(1.02)`;
      });
      card.addEventListener('mouseleave', function () {
        card.style.transform = '';
      });
    });
  }

  /* ============================================================
     12. Scroll Progress Bar
     ============================================================ */
  function initScrollProgress() {
    const bar = document.querySelector('.scroll-progress');
    if (!bar) return;
    window.addEventListener('scroll', function () {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const progress = (window.scrollY / docHeight) * 100;
      bar.style.width = Math.min(100, Math.max(0, progress)) + '%';
    }, { passive: true });
  }

  /* ============================================================
     13. Back to Top Button
     ============================================================ */
  function initBackToTop() {
    const btn = document.querySelector('.back-to-top');
    if (!btn) return;
    window.addEventListener('scroll', function () {
      if (window.scrollY > 400) {
        btn.classList.add('show');
      } else {
        btn.classList.remove('show');
      }
    }, { passive: true });

    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ============================================================
     14. FAQ Accordion
     ============================================================ */
  function initFaq() {
    document.querySelectorAll('.faq-item').forEach(function (item) {
      const q = item.querySelector('.faq-q');
      if (!q) return;
      q.addEventListener('click', function () {
        const isActive = item.classList.contains('active');
        document.querySelectorAll('.faq-item').forEach(function (other) {
          other.classList.remove('active');
        });
        if (!isActive) item.classList.add('active');
      });
    });
  }

  /* ============================================================
     15. Solution Matcher / Package Explorer
     ============================================================ */
  const SOLUTIONS_DATA = {
    residential: {
      badge: 'Residential Ultra-Fiber',
      title: 'Seamless Gigabit Entertainment & Remote Work',
      desc: 'Designed for households requiring buffer-free 4K/8K streaming, competitive low-ping gaming, and simultaneous multi-device remote work.',
      features: [
        'Unlimited Data with Zero Fair Usage Policy (No FUP)',
        '100% Symmetrical Fiber Upload & Download Speeds',
        'Direct low-latency routing to major gaming & streaming CDNs',
        'Dual-band Gigabit Wi-Fi ONT router included',
        'Free standard installation and site survey in Lahore',
        '24/7 localized phone and WhatsApp tech support'
      ],
      highlightTitle: 'Ready for Home Fiber?',
      highlightSub: 'Experience zero lag, zero buffering, and crystal clear video calls.',
      waText: 'Hello Z COM! I am interested in Residential Fiber Internet for my home in Lahore. Please share availability and details.'
    },
    sme: {
      badge: 'SME Business Fiber',
      title: 'Reliable Cloud & Office Productivity',
      desc: 'Tailored for small and medium businesses, startups, and branch offices requiring high uptime, VoIP clarity, and rapid cloud sync.',
      features: [
        'High-priority business routing with dedicated bandwidth',
        'Low jitter and packet priority for Zoom, Teams & VoIP',
        'Fast turnaround on-site technical support',
        'Multiple static IP options available upon request',
        'L2 & local networking configuration support',
        'Proactive link monitoring and 24/7 dedicated support'
      ],
      highlightTitle: 'Power Your Office',
      highlightSub: 'Keep your team operating at peak productivity without downtime.',
      waText: 'Hello Z COM! I am inquiring about SME Business Fiber Internet for my office in Lahore. Please share package details and feasibility.'
    },
    dia: {
      badge: 'Enterprise Dedicated (DIA)',
      title: '1:1 Guaranteed Dedicated Internet Access',
      desc: 'Mission-critical internet for financial institutions, hospitals, enterprise headquarters, and IT exporters with strict SLAs.',
      features: [
        '1:1 Dedicated uncontended bandwidth (zero sharing ratio)',
        'Strict 99.9% Uptime Service Level Agreement (SLA)',
        'Direct peering with Tier-1 global transit providers',
        'IPv6 enabled with dual-stack BGP routing',
        'Dedicated Account Manager and 24/7 NOC monitoring',
        'Point-to-Point fiber redundancy and failover options'
      ],
      highlightTitle: 'Enterprise SLA Guaranteed',
      highlightSub: 'Guaranteed 99.9% uptime backed by dedicated network engineers.',
      waText: 'Hello Z COM! We require an Enterprise Dedicated Internet Access (DIA) proposal for our organization. Please arrange a consultation.'
    },
    cloud: {
      badge: 'Beyond Connectivity & IT',
      title: 'Data Center, Cloud & Managed Infrastructure',
      desc: 'End-to-end IT capabilities including colocation, secure cloud hosting, corporate email servers, and enterprise cybersecurity.',
      features: [
        'Secure Data Center Colocation and rack space',
        'Dedicated personal & corporate email hosting solutions',
        'Enterprise cybersecurity, firewalling & threat mitigation',
        'Managed network services & SD-WAN deployment',
        'IoT & intelligent surveillance network infrastructure',
        'Disaster recovery planning and secondary offsite backup'
      ],
      highlightTitle: 'Complete IT Infrastructure',
      highlightSub: 'Modernize your entire digital stack with our managed IT solutions.',
      waText: 'Hello Z COM! I would like to inquire about your Beyond Connectivity solutions (Cloud, Hosting, Colocation, and IT Services).'
    }
  };

  function initSolutionMatcher() {
    const tabs = document.querySelectorAll('.matcher-tab');
    if (!tabs.length) return;

    const titleEl = document.getElementById('matcherTitle');
    const descEl = document.getElementById('matcherDesc');
    const badgeEl = document.getElementById('matcherBadge');
    const featEl = document.getElementById('matcherFeatures');
    const hlTitleEl = document.getElementById('matcherHlTitle');
    const hlSubEl = document.getElementById('matcherHlSub');
    const ctaBtn = document.getElementById('matcherCta');

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        tabs.forEach(function (t) { t.classList.remove('active'); });
        tab.classList.add('active');

        const key = tab.getAttribute('data-solution');
        const data = SOLUTIONS_DATA[key];
        if (!data) return;

        if (badgeEl) badgeEl.textContent = data.badge;
        if (titleEl) titleEl.textContent = data.title;
        if (descEl) descEl.textContent = data.desc;
        if (hlTitleEl) hlTitleEl.textContent = data.highlightTitle;
        if (hlSubEl) hlSubEl.textContent = data.highlightSub;

        if (featEl) {
          featEl.innerHTML = data.features.map(function (f) {
            return `<div class="matcher-feature"><span style="color:var(--z-orange);font-weight:800">&#10003;</span> <span>${f}</span></div>`;
          }).join('');
        }

        if (ctaBtn) {
          ctaBtn.href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(data.waText)}`;
        }
      });
    });
  }

  /* ============================================================
     16. Service Category Filter (services.html)
     ============================================================ */
  function initServiceFilters() {
    const btns = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.service-card[data-category]');
    if (!btns.length || !cards.length) return;

    btns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        btns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');
        cards.forEach(function (card) {
          if (filter === 'all' || card.getAttribute('data-category') === filter) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  /* ============================================================
     Boot
     ============================================================ */
  document.addEventListener('DOMContentLoaded', function () {
    initHeaderScroll();
    initReveal();
    initCounters();
    initHeroParticles();
    initWhatsApp();
    initLogoFallback();
    initCardTilt();
    initScrollProgress();
    initBackToTop();
    initFaq();
    initSolutionMatcher();
    initServiceFilters();
  });
})();

