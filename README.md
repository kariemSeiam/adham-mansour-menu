# Adham Mansour Salon Menu 💈

A modern, responsive web application for a professional barber salon featuring an interactive service menu, package offerings, and business information display system.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18.3.1-61dafb.svg)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8.svg)

## 🌟 Features

- **Interactive Service Packages** 
  - Dynamic pricing cards with expandable details
  - Beautiful gradient animations
  - RTL (Right-to-Left) support for Arabic content

- **Service Categories**
  - Comprehensive barber services listing
  - Skincare treatments section
  - Price transparency

- **Business Information**
  - Location information with modal view
  - Working hours
  - Contact details
  - Social media integration

- **Modern UI Components**
  - Smooth animations and transitions
  - Responsive design for all devices
  - Loading states and progress indicators
  - Beautiful gradients and glass morphism effects

## 🚀 Quick Start

1. **Clone the repository**
```bash
git clone https://github.com/kariemSeiam/adham-mansour-menu.git
cd adham-mansour-menu
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Build for production**
```bash
npm run build
```

5. **Deploy to GitHub Pages**
```bash
npm run deploy
```

## 🛠️ Technology Stack

- **Frontend Framework**: React 18.3.1
- **Styling**: TailwindCSS 3.4.17
- **Icons**: Lucide React
- **Routing**: React Router DOM 7.1.0
- **Charts & Visualizations**: Recharts 2.15.0
- **Build Tool**: Vite 6.0.5
- **Meta Tags**: React Helmet
- **Development**: ESLint, PostCSS, Autoprefixer

## 📁 Project Structure

```
adham-mansour-menu/
├── src/
│   ├── App.jsx           # Main application component
│   ├── main.jsx         # Application entry point
│   ├── components/      # Reusable components
│   └── styles/         # CSS and Tailwind configurations
├── public/             # Static assets
├── index.html          # HTML template
└── package.json       # Project dependencies and scripts
```

## 🎨 Customization

### Styling
The project uses TailwindCSS with a custom configuration. You can modify the theme in `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
      },
      // Add other theme customizations
    }
  }
}
```

### Business Information
Update the business information in `App.jsx`:

```javascript
const businessInfo = {
  name: "YOUR_BUSINESS_NAME",
  slogan: "YOUR_SLOGAN",
  phone: "YOUR_PHONE",
  // ... other business details
};
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [TailwindCSS](https://tailwindcss.com) for the amazing utility-first CSS framework
- [Lucide Icons](https://lucide.dev) for the beautiful icons
- [React](https://reactjs.org) for the awesome frontend library
- All contributors who have helped this project

---

Made with ❤️ by Kariem Seiam
