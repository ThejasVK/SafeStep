# SafeStep 🚶‍♂️🌙

**Walk Confidently at Night** - Data-driven navigation that prioritizes your safety over speed.

![SafeStep](https://img.shields.io/badge/SafeStep-v1.0-6C63FF)
![Mobile First](https://img.shields.io/badge/Mobile-First-FF6B9D)
![PWA Ready](https://img.shields.io/badge/PWA-Ready-00D9FF)

## 🌟 Overview

SafeStep empowers pedestrians to walk confidently at night by delivering preventative, data-driven navigation that prioritizes safety over speed. Our platform combines multiple data sources to create the safest walking experience possible.

## 🔗 Tech Integration

```
SafeStep = Google Maps API + City IoT Data + Crowdsourced Database + AI Engine + Campus Schedules + Emergency Services + Smartwatch APIs
```

## ✨ Features

### 🗺️ Smart Navigation
- **AI-Powered Routes**: Our AI analyzes real-time data to find the safest path
- **Safety Scoring**: Each route is scored based on lighting, foot traffic, and CCTV coverage
- **Real-time Updates**: Dynamic route adjustments based on live conditions

### 👥 Community & Crowdsourcing
- **Live Feed**: Community updates about safety conditions
- **Report Incidents**: Report poor lighting, unsafe areas, or obstructions
- **Verify Reports**: Community verification system for accuracy
- **Leaderboard**: Recognition for top community contributors

### 💬 Real-time Chat
- **Direct Messaging**: Chat with SafeWalk volunteers
- **Group Chats**: Community safety groups
- **Location Sharing**: Share your live location with trusted contacts

### 🤝 SafeWalk Volunteers
- **Request a Walker**: Get a verified volunteer to walk you home
- **Become a Volunteer**: Join our team of community helpers
- **Rating System**: Verified and rated volunteers
- **Scheduling**: Request immediate or scheduled walks

### 🆘 Emergency Features
- **SOS Button**: One-tap emergency alert system
- **Emergency Contacts**: Quick access to personal contacts
- **Direct Call**: Instant connection to 911 or campus security
- **Live Location Sharing**: Automatic location sharing during emergencies

### 👤 User Profile
- **Safety Score**: Your personal safety score
- **Activity History**: Track your walks and contributions
- **Badges & Achievements**: Earn recognition for community involvement
- **Connected Devices**: Smartwatch integration

## 🎨 Design Philosophy

SafeStep features a **funky yet classic** design:
- **Dark Theme**: Easy on the eyes for nighttime use
- **Gradient Accents**: Vibrant purple-to-pink gradients
- **Smooth Animations**: Fluid transitions and micro-interactions
- **Mobile-First**: Optimized for one-handed mobile use

## 📱 Mobile Features

- **Progressive Web App (PWA)**: Install on your home screen
- **Offline Support**: Basic functionality without internet
- **Touch Optimized**: Large touch targets and swipe gestures
- **Responsive Design**: Works on all screen sizes

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Safari, Firefox, Edge)
- Optional: A local web server for full PWA functionality

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/safestep.git
cd safestep
```

2. Serve the files using any web server:
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (with http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

3. Open your browser and navigate to:
```
http://localhost:8000
```

4. For PWA installation:
   - On mobile: Tap "Add to Home Screen"
   - On desktop: Click the install icon in the address bar

## 📁 Project Structure

```
SafeStep/
├── index.html          # Main HTML file
├── manifest.json       # PWA manifest
├── sw.js              # Service Worker
├── README.md          # Documentation
├── css/
│   ├── styles.css     # Main styles & variables
│   ├── components.css # Reusable component styles
│   └── pages.css      # Page-specific styles
├── js/
│   └── app.js         # Main JavaScript file
└── icons/             # PWA icons (to be added)
```

## 🔧 Customization

### Colors
Edit the CSS variables in `css/styles.css`:
```css
:root {
    --primary: #6C63FF;
    --accent-1: #FF6B9D;
    --accent-2: #00D9FF;
    /* ... more colors */
}
```

### Features
Toggle features by modifying the JavaScript in `js/app.js`.

## 🤝 Contributing

We welcome contributions! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- DiceBear for avatar generation
- The open-source community

## 📞 Support

For support, email support@safestep.app or join our community chat.

---

**SafeStep** - Because everyone deserves to feel safe walking home. 🌙✨
