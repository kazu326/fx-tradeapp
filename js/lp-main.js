// ========================================
// Fullpage.js Initialization
// ========================================

document.addEventListener('DOMContentLoaded', function() {
  
  // Initialize fullpage.js
  if (typeof fullpage !== 'undefined') {
    new fullpage('#fullpage', {
      // Navigation
      anchors: [
        'hero', 
        'bridge1', 'bridge2', 'bridge3',
        'ch1-flick1', 'ch1-flick2', 'ch1-flick3', 'ch1-flick4', 'ch1-flick5', 'ch1-flick6', 'ch1-flick7',
        'ch2-flick1', 'ch2-flick2', 'ch2-flick3', 'ch2-flick4', 'ch2-flick5', 'ch2-flick6', 'ch2-flick7',
        'ch3-flick1', 'ch3-flick2', 'ch3-flick3', 'ch3-flick4', 'ch3-flick5', 'ch3-flick6', 'ch3-flick7',
        'ch4-flick1', 'ch4-flick2', 'ch4-flick3', 'ch4-flick4', 'ch4-flick5', 'ch4-flick6', 'ch4-flick7',
        'ch5-flick1', 'ch5-flick2', 'ch5-flick3', 'ch5-flick4', 'ch5-flick5', 'ch5-flick6', 'ch5-flick7',
        'ch6-flick1', 'ch6-flick2', 'ch6-flick3', 'ch6-flick4', 'ch6-flick5', 'ch6-flick6', 'ch6-flick7',
        'ch7-flick1', 'ch7-flick2', 'ch7-flick3', 'ch7-flick4', 'ch7-flick5', 'ch7-flick6', 'ch7-flick7',
        'ch8-flick1', 'ch8-flick2', 'ch8-flick3', 'ch8-flick4', 'ch8-flick5', 'ch8-flick6', 'ch8-flick7',
        'profile', 'testimonials', 'final-cta'
      ],
      navigation: false,
      navigationPosition: 'right',
      showActiveTooltip: false,
      
      // Scrolling
      scrollingSpeed: 700,
      autoScrolling: true,
      fitToSection: true,
      fitToSectionDelay: 600,
      scrollBar: false,
      easing: 'easeInOutCubic',
      easingcss3: 'ease',
      loopBottom: false,
      loopTop: false,
      
      // Accessibility
      keyboardScrolling: true,
      animateAnchor: true,
      recordHistory: true,
      
      // Design
      controlArrows: false,
      verticalCentered: true,
      paddingTop: '0',
      paddingBottom: '100px', // Fixed CTA分の余白
      
      // Responsive
      responsiveWidth: 0,
      responsiveHeight: 0,
      
      // Custom Events
      afterLoad: function(origin, destination, direction) {
        // スライド表示後のアニメーション
        addAnimationClass(destination.item);
        
        // Google Analytics tracking (任意)
        if (typeof gtag !== 'undefined') {
          gtag('event', 'page_view', {
            'page_path': '#' + destination.anchor
          });
        }
      },
      
      onLeave: function(origin, destination, direction) {
        // スライド離脱時の処理
        removeAnimationClass(origin.item);
      },
      
      // Touch options for mobile
      touchSensitivity: 5,
      continuousVertical: false
    });
  } else {
    console.error('fullpage.js is not loaded');
  }
  
});

// ========================================
// Animation Helper Functions
// ========================================

function addAnimationClass(section) {
  const elements = section.querySelectorAll('.fade-in-up, .slide-in-left, .slide-in-right');
  elements.forEach(el => {
    el.classList.add('animated');
  });
}

function removeAnimationClass(section) {
  const elements = section.querySelectorAll('.fade-in-up, .slide-in-left, .slide-in-right');
  elements.forEach(el => {
    el.classList.remove('animated');
  });
}

// ========================================
// CTA Button Tracking
// ========================================

document.addEventListener('click', function(e) {
  const button = e.target.closest('.cta-button, .cta-button-secondary, .final-cta-button');
  
  if (button) {
    const href = button.getAttribute('href');
    
    // URLパラメータからソースを取得
    let source = 'unknown';
    try {
      const url = new URL(href, window.location.origin);
      source = url.searchParams.get('src') || 'unknown';
    } catch (e) {
      console.log('Invalid URL:', href);
    }
    
    // Google Analytics tracking (任意)
    if (typeof gtag !== 'undefined') {
      gtag('event', 'click', {
        'event_category': 'CTA',
        'event_label': source,
        'value': 1
      });
    }
    
    console.log('CTA Clicked:', source);
  }
});

// ========================================
// Console Welcome Message
// ========================================

console.log('%cTradeLog Pro Landing Page', 'color: #D4AF37; font-size: 20px; font-weight: bold;');
console.log('%cFX土台構築LP - Fullpage.js実装', 'color: #21808D; font-size: 14px;');
console.log('%c開発者: LAI(來)', 'color: #626C7C; font-size: 12px;');

// ========================================
// Initialize on load
// ========================================

window.addEventListener('load', function() {
  console.log('Page loaded successfully');
});
