/* SafeStep - Main JavaScript */

// ==================== APP INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    // Hide splash screen after loading
    setTimeout(() => {
        const splashScreen = document.getElementById('splash-screen');
        const app = document.getElementById('app');
        
        splashScreen.style.display = 'none';
        app.classList.remove('hidden');
    }, 3000);

    // Initialize all features
    initNavigation();
    initMenu();
    initNotifications();
    initChat();
    initVolunteer();
    initCommunityTabs();
    initEmergency();
    initRouteOptions();
    initScrollAnimations();
}

// ==================== NAVIGATION ====================
function initNavigation() {
    // Bottom nav buttons
    const navItems = document.querySelectorAll('.nav-item:not(.sos-nav)');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const page = item.dataset.page;
            navigateTo(page);
        });
    });

    // Side menu items
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            const page = item.dataset.page;
            navigateTo(page);
            closeSideMenu();
        });
    });

    // Profile trigger
    document.getElementById('profile-trigger').addEventListener('click', () => {
        navigateTo('profile');
    });
}

function navigateTo(pageName) {
    // Update pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    const targetPage = document.getElementById(`page-${pageName}`);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    // Update bottom nav
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.dataset.page === pageName) {
            item.classList.add('active');
        }
    });

    // Update side menu
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.classList.remove('active');
        if (item.dataset.page === pageName) {
            item.classList.add('active');
        }
    });

    // Close notification panel if open
    document.getElementById('notification-panel').classList.remove('active');

    // Close chat window if navigating away
    if (pageName !== 'chat') {
        closeChatWindow();
    }

    // Scroll to top
    window.scrollTo(0, 0);
}

// ==================== SIDE MENU ====================
function initMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const sideMenu = document.getElementById('side-menu');
    const menuOverlay = document.getElementById('menu-overlay');

    menuToggle.addEventListener('click', () => {
        toggleSideMenu();
    });

    menuOverlay.addEventListener('click', () => {
        closeSideMenu();
    });
}

function toggleSideMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const sideMenu = document.getElementById('side-menu');
    const menuOverlay = document.getElementById('menu-overlay');

    menuToggle.classList.toggle('active');
    sideMenu.classList.toggle('active');
    menuOverlay.classList.toggle('active');
}

function closeSideMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const sideMenu = document.getElementById('side-menu');
    const menuOverlay = document.getElementById('menu-overlay');

    menuToggle.classList.remove('active');
    sideMenu.classList.remove('active');
    menuOverlay.classList.remove('active');
}

// ==================== NOTIFICATIONS ====================
function initNotifications() {
    const notificationBtn = document.getElementById('notification-btn');
    const notificationPanel = document.getElementById('notification-panel');

    notificationBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        notificationPanel.classList.toggle('active');
    });

    // Close panel when clicking outside
    document.addEventListener('click', (e) => {
        if (!notificationPanel.contains(e.target) && e.target !== notificationBtn) {
            notificationPanel.classList.remove('active');
        }
    });

    // Mark all as read
    const markReadBtn = document.querySelector('.mark-read-btn');
    markReadBtn.addEventListener('click', () => {
        const unreadItems = document.querySelectorAll('.notification-item.unread');
        unreadItems.forEach(item => item.classList.remove('unread'));
        
        const badge = document.querySelector('.notification-badge');
        badge.style.display = 'none';
    });
}

// ==================== CHAT ====================
function initChat() {
    const chatWindow = document.getElementById('chat-window');
    const sendBtn = document.querySelector('.send-btn');
    const messageInput = document.getElementById('message-input');

    // Send message
    sendBtn.addEventListener('click', () => {
        sendMessage();
    });

    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // Share location button
    const locationShareBtn = document.querySelector('.location-share-btn');
    locationShareBtn.addEventListener('click', () => {
        shareLocation();
    });
}

function openChat(chatId) {
    const chatWindow = document.getElementById('chat-window');
    const chatList = document.getElementById('chat-list');
    
    chatWindow.classList.add('active');
    
    // Update conversation items
    const conversations = document.querySelectorAll('.conversation-item');
    conversations.forEach(conv => conv.classList.remove('active'));
    event.currentTarget.classList.add('active');
}

function closeChat() {
    closeChatWindow();
}

function closeChatWindow() {
    const chatWindow = document.getElementById('chat-window');
    chatWindow.classList.remove('active');
}

function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const messagesContainer = document.getElementById('chat-messages');
    
    const text = messageInput.value.trim();
    if (text) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message sent';
        
        const now = new Date();
        const time = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
        
        messageDiv.innerHTML = `
            <p>${text}</p>
            <span class="time">${time}</span>
        `;
        
        messagesContainer.appendChild(messageDiv);
        messageInput.value = '';
        messagesContainer.scrollTop = messagesContainer.scrollHeight;

        // Simulate reply
        setTimeout(() => {
            simulateReply();
        }, 1500);
    }
}

function simulateReply() {
    const messagesContainer = document.getElementById('chat-messages');
    const replies = [
        "Got it! 👍",
        "I'll be there soon!",
        "Stay safe!",
        "See you in a few minutes!",
        "On my way now 🚶"
    ];
    
    const randomReply = replies[Math.floor(Math.random() * replies.length)];
    
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message received';
    
    const now = new Date();
    const time = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
    
    messageDiv.innerHTML = `
        <p>${randomReply}</p>
        <span class="time">${time}</span>
    `;
    
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function shareLocation() {
    const messagesContainer = document.getElementById('chat-messages');
    
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message sent location';
    
    const now = new Date();
    const time = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
    
    messageDiv.innerHTML = `
        <div class="location-preview">
            <i class="fas fa-map-marker-alt"></i>
            <div>
                <span>My Location</span>
                <small>Shared just now</small>
            </div>
        </div>
        <span class="time">${time}</span>
    `;
    
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// ==================== VOLUNTEER ====================
function initVolunteer() {
    const requestToggle = document.getElementById('request-toggle');
    const volunteerToggle = document.getElementById('volunteer-toggle');
    const requestSection = document.getElementById('request-section');
    const volunteerSection = document.getElementById('volunteer-section');

    requestToggle.addEventListener('click', () => {
        requestToggle.classList.add('active');
        volunteerToggle.classList.remove('active');
        requestSection.classList.add('active');
        volunteerSection.classList.remove('active');
    });

    volunteerToggle.addEventListener('click', () => {
        volunteerToggle.classList.add('active');
        requestToggle.classList.remove('active');
        volunteerSection.classList.add('active');
        requestSection.classList.remove('active');
    });

    // Time buttons
    const timeBtns = document.querySelectorAll('.time-btn');
    timeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            timeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // Select walker buttons
    const selectBtns = document.querySelectorAll('.select-walker-btn');
    selectBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            showToast('Walker selected! They will be notified.');
            btn.textContent = 'Selected';
            btn.style.background = 'var(--success)';
        });
    });
}

// ==================== COMMUNITY TABS ====================
function initCommunityTabs() {
    const tabBtns = document.querySelectorAll('.community-tabs .tab-btn');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabName = btn.dataset.tab;
            
            // Update buttons
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Update content
            const tabContents = document.querySelectorAll('.tab-content');
            tabContents.forEach(content => content.classList.remove('active'));
            
            const targetContent = document.getElementById(`tab-${tabName}`);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });

    // Post actions
    const actionBtns = document.querySelectorAll('.post-actions .action-btn');
    actionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.querySelector('.fa-heart')) {
                btn.classList.toggle('liked');
                if (btn.classList.contains('liked')) {
                    const count = parseInt(btn.textContent) || 0;
                    btn.innerHTML = `<i class="fas fa-heart"></i> ${count + 1}`;
                }
            }
        });
    });

    // Confirm buttons
    const confirmBtns = document.querySelectorAll('.confirm-btn');
    confirmBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.textContent = 'Confirmed';
            btn.style.background = 'var(--success)';
            btn.style.borderColor = 'var(--success)';
            showToast('Report confirmed! Thank you for helping.');
        });
    });
}

// ==================== EMERGENCY ====================
function initEmergency() {
    const sosButton = document.querySelector('.sos-button');
    let pressTimer;

    sosButton.addEventListener('mousedown', startSOSPress);
    sosButton.addEventListener('touchstart', startSOSPress);
    sosButton.addEventListener('mouseup', cancelSOSPress);
    sosButton.addEventListener('touchend', cancelSOSPress);
    sosButton.addEventListener('mouseleave', cancelSOSPress);
}

function startSOSPress() {
    pressTimer = setTimeout(() => {
        triggerEmergency();
    }, 3000);
}

function cancelSOSPress() {
    clearTimeout(pressTimer);
}

function triggerEmergency() {
    const modal = document.getElementById('emergency-modal');
    modal.classList.add('active');

    // Start countdown
    let countdown = 5;
    const countdownNumber = document.querySelector('.countdown-number');
    
    const countdownInterval = setInterval(() => {
        countdown--;
        countdownNumber.textContent = countdown;
        
        if (countdown === 0) {
            clearInterval(countdownInterval);
            // Simulate sending SOS
            showToast('🚨 SOS Alert sent to emergency contacts!');
            modal.classList.remove('active');
            countdownNumber.textContent = '5';
        }
    }, 1000);

    window.currentCountdownInterval = countdownInterval;
}

function cancelEmergency() {
    const modal = document.getElementById('emergency-modal');
    modal.classList.remove('active');
    
    if (window.currentCountdownInterval) {
        clearInterval(window.currentCountdownInterval);
    }
    
    const countdownNumber = document.querySelector('.countdown-number');
    countdownNumber.textContent = '5';
    
    showToast('SOS cancelled');
}

// ==================== ROUTE OPTIONS ====================
function initRouteOptions() {
    const routeOptions = document.querySelectorAll('.route-option');
    
    routeOptions.forEach(option => {
        option.addEventListener('click', () => {
            routeOptions.forEach(o => o.classList.remove('active'));
            option.classList.add('active');
        });
    });

    // Destination input
    const endLocation = document.getElementById('end-location');
    if (endLocation) {
        endLocation.addEventListener('input', () => {
            const routeDetails = document.getElementById('route-details');
            if (endLocation.value.length > 2) {
                routeDetails.classList.remove('hidden');
            }
        });
    }
}

function setDestination(place) {
    const endLocation = document.getElementById('end-location');
    endLocation.value = place;
    
    const routeDetails = document.getElementById('route-details');
    routeDetails.classList.remove('hidden');
}

// ==================== SCROLL ANIMATIONS ====================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements that should animate
    const animateElements = document.querySelectorAll('.feature-card, .feed-item, .post-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
}

// ==================== UTILITY FUNCTIONS ====================
function showToast(message) {
    // Remove existing toast
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }

    // Create toast
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--dark-2);
        color: var(--white);
        padding: 12px 24px;
        border-radius: 30px;
        font-size: 0.9rem;
        z-index: 400;
        animation: slideUp 0.3s ease;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    `;
    
    document.body.appendChild(toast);

    // Remove after 3 seconds
    setTimeout(() => {
        toast.style.animation = 'fadeOut 0.3s ease forwards';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ==================== FORM HANDLERS ====================
// Report form
const reportForm = document.querySelector('.report-form');
if (reportForm) {
    reportForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('Report submitted successfully! Thank you for helping.');
        reportForm.reset();
        navigateTo('community');
    });
}

// Volunteer signup form
const signupForm = document.querySelector('.signup-form');
if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('🎉 Welcome to the SafeWalk team!');
    });
}

// Request walker button
const requestBtn = document.querySelector('.request-btn');
if (requestBtn) {
    requestBtn.addEventListener('click', () => {
        showToast('Finding available walkers nearby...');
        setTimeout(() => {
            showToast('Maria has accepted your request!');
            navigateTo('chat');
        }, 2000);
    });
}

// Start navigation button
const startNavBtn = document.querySelector('.start-nav-btn');
if (startNavBtn) {
    startNavBtn.addEventListener('click', () => {
        showToast('Navigation started! Stay safe. 🚶');
    });
}

// Post input
const postInput = document.querySelector('.post-input');
const postBtn = document.querySelector('.post-btn');
if (postInput && postBtn) {
    postBtn.addEventListener('click', () => {
        if (postInput.value.trim()) {
            showToast('Post shared with the community!');
            postInput.value = '';
        }
    });
}

// Chat category buttons
const categoryBtns = document.querySelectorAll('.category-btn');
categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        categoryBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

// Photo upload preview
const photoInput = document.getElementById('photo-input');
if (photoInput) {
    photoInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const uploadArea = document.querySelector('.upload-area');
            uploadArea.innerHTML = `
                <i class="fas fa-check-circle" style="color: var(--success)"></i>
                <span>${file.name}</span>
            `;
        }
    });
}

// Use current location button
const useLocationBtn = document.querySelector('.use-location-btn');
if (useLocationBtn) {
    useLocationBtn.addEventListener('click', () => {
        const locationInput = useLocationBtn.previousElementSibling;
        locationInput.value = 'Getting location...';
        
        setTimeout(() => {
            locationInput.value = 'University Library, Main Entrance';
            showToast('Location detected!');
        }, 1000);
    });
}

// Settings items
const settingsItems = document.querySelectorAll('.settings-item');
settingsItems.forEach(item => {
    item.addEventListener('click', () => {
        showToast('Settings feature coming soon!');
    });
});

// Add contact button
const addContactBtn = document.querySelector('.add-contact-btn');
if (addContactBtn) {
    addContactBtn.addEventListener('click', () => {
        showToast('Add contact feature coming soon!');
    });
}

// Logout buttons
const logoutBtns = document.querySelectorAll('.logout-btn, .logout-btn-profile');
logoutBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        showToast('Signed out successfully');
    });
});
