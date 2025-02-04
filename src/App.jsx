import React, { useState, useEffect } from 'react';
import {
  Facebook, Phone, Crown, Sparkles, Gem, Star,
  ChevronDown, Scissors, MapPin, Clock, Sparkle,
  CheckCircle2, X, ChevronLeft, ExternalLink,
  MessageCircle
} from 'lucide-react';


// Components
// Components
const TopHeader = () => {
  return (
    <div className="relative w-full p-1 m-[-0px] pb-8 pt-4 overflow-hidden">


      <img
        src='https://raw.githubusercontent.com/kariemSeiam/adham-mansour-menu/refs/heads/main/logo.png'
        alt="Adham Mansour Logo"
        className="w-full h-full object-contain"
        onError={(e) => {
          e.target.style.display = 'none';
        }}
      />
    </div>
  );
};

const FloatingActions = ({ onLocationClick }) => {
  const items = [
    {
      icon: <Phone className="w-6 h-6" />,
      href: "tel:+201234567890",
      gradient: "from-amber-400 via-amber-500 to-amber-400",
      glow: "amber-400",
      type: "link"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      href: "https://wa.me/201234567890",
      gradient: "from-green-400 via-green-500 to-green-400",
      glow: "green-400",
      type: "link"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      action: onLocationClick,
      gradient: "from-blue-400 via-blue-500 to-blue-400",
      glow: "blue-400",
      type: "button"
    },
    {
      icon: <Facebook className="w-6 h-6" />,
      href: "https://facebook.com/yourpage",
      gradient: "from-indigo-400 via-indigo-500 to-indigo-400",
      glow: "indigo-400",
      type: "link"
    }
  ];

  const ActionButton = ({ item }) => {
    const buttonClasses = `
        relative group flex items-center justify-center
        w-14 h-14 rounded-2xl
        transform hover:scale-110 active:scale-95
        transition-all duration-300 ease-out
        hover:rotate-[360deg]
      `;

    const innerContent = (
      <>
        {/* Animated gradient background */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.gradient}
            animate-gradient-xy opacity-80 group-hover:opacity-100
            transition-opacity duration-300`}
        />

        {/* Glow effect */}
        <div className={`absolute inset-0 rounded-2xl bg-${item.glow}
            opacity-0 group-hover:opacity-20 blur-xl
            transition-opacity duration-300`}
        />

        {/* Icon */}
        <div className="relative text-white transform group-hover:-rotate-[360deg] transition-transform duration-300">
          {item.icon}
        </div>
      </>
    );

    if (item.type === "button") {
      return (
        <button onClick={item.action} className={buttonClasses}>
          {innerContent}
        </button>
      );
    }

    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClasses}
      >
        {innerContent}
      </a>
    );
  };

  return (
    <div className="fixed bottom-6 flex justify-center items-center gap-4 w-full px-4 z-50">
      <div className="flex gap-3">
        {items.map((item, index) => (
          <ActionButton key={index} item={item} />
        ))}
      </div>

      <style jsx global>{`
          @keyframes gradient-xy {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
          
          .animate-gradient-xy {
            background-size: 200% 200%;
            animation: gradient-xy 3s ease infinite;
          }
        `}</style>
    </div>
  );
};

const NavigationBar = ({ onLocationClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Contact information
  const contactInfo = {
    phone: "+201234567890",
    whatsapp: "201234567890",
    facebook: "https://facebook.com/yourpage"
  };

  // Navigation items configuration
  const navItems = [
    {
      icon: <Phone className="w-6 h-6" />,
      activeIcon: <Phone className="w-6 h-6" />,
      label: "اتصل بنا",
      action: `tel:${contactInfo.phone}`,
      gradient: "from-amber-400 to-amber-600",
      shadowColor: "amber",
      type: "link"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      activeIcon: <MessageCircle className="w-6 h-6" />,
      label: "واتساب",
      action: `https://wa.me/${contactInfo.whatsapp}`,
      gradient: "from-green-400 to-green-600",
      shadowColor: "green",
      type: "link"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      activeIcon: <MapPin className="w-6 h-6" />,
      label: "الفروع",
      action: onLocationClick,
      gradient: "from-blue-400 to-blue-600",
      shadowColor: "blue",
      type: "button"
    },
    {
      icon: <Facebook className="w-6 h-6" />,
      activeIcon: <Facebook className="w-6 h-6" />,
      label: "فيسبوك",
      action: contactInfo.facebook,
      gradient: "from-indigo-400 to-indigo-600",
      shadowColor: "indigo",
      type: "link"
    }
  ];

  const NavigationItem = ({ item }) => {
    const baseClasses = `
        relative flex flex-col items-center justify-center gap-1
        w-16 h-16 rounded-2xl transition-all duration-500
        hover:scale-105 active:scale-95
      `;

    const buttonContent = (
      <>
        <div className="relative z-10">
          {item.icon}
        </div>
        <span className="text-xs font-medium mt-1 opacity-0 group-hover:opacity-100
            transition-opacity duration-300">
          {item.label}
        </span>
      </>
    );

    if (item.type === "button") {
      return (
        <button
          onClick={item.action}
          className={`group ${baseClasses}
              bg-gradient-to-br ${item.gradient}
              shadow-lg hover:shadow-xl shadow-${item.shadowColor}-500/20`}
        >
          {buttonContent}
        </button>
      );
    }

    return (
      <a
        href={item.action}
        target={item.type === "link" ? "_blank" : undefined}
        rel={item.type === "link" ? "noopener noreferrer" : undefined}
        className={`group ${baseClasses}
            bg-gradient-to-br ${item.gradient}
            shadow-lg hover:shadow-xl shadow-${item.shadowColor}-500/20`}
      >
        {buttonContent}
      </a>
    );
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="relative max-w-lg mx-auto">
        {/* Main Navigation Bar */}
        <div className="relative">
          {/* Backdrop Blur */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-xl rounded-3xl" />

          {/* Navigation Items */}
          <div className="relative flex items-center justify-around p-4">
            {navItems.map((item, index) => (
              <NavigationItem key={index} item={item} />
            ))}
          </div>

          {/* Bottom Decorative Gradient */}
          <div className="absolute -bottom-px left-0 right-0 h-px bg-gradient-to-r 
              from-transparent via-white/20 to-transparent" />
        </div>

        {/* Safe Area Spacing for iOS */}
        <div className="h-6" />
      </div>

      {/* Global Styles */}
      <style jsx global>{`
          @supports (backdrop-filter: blur(20px)) {
            .backdrop-blur-xl {
              backdrop-filter: blur(20px);
            }
          }
  
          @keyframes slideUp {
            from {
              transform: translateY(100%);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
        `}</style>
    </div>
  );
};

const LocationsModal = ({ isOpen, onClose, locations }) => {
  const [activeLocation, setActiveLocation] = useState(true);
  

  if (!isOpen) return null;

  const LocationCard = ({ location, index }) => {
    const isActive = activeLocation === index;
   
    return (
      <div
        onClick={() => setActiveLocation(isActive ? null : index)}
        className={`group relative overflow-hidden transition-all duration-500 cursor-pointer
            ${isActive ? 'p-8' : 'p-6'} rounded-3xl
            backdrop-blur-xl transition-opacity
            border border-white/10 hover:border-amber-500/30
            ${isActive ? 'scale-102 shadow-2xl shadow-amber-500/10' : 'scale-100 hover:shadow-lg'}
          `}
      >
        {/* Animated Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-400/5 via-transparent to-transparent 
            opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Glowing Orb Effect */}
        <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full
            bg-gradient-to-r from-amber-400/20 to-amber-600/20 blur-3xl
            transition-all duration-500
            ${isActive ? 'opacity-100 scale-150' : 'opacity-0 scale-100'}
          `} />

        {/* Content Container */}
        <div className="relative">
          {/* Header Section */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h4 className="text-xl font-bold text-amber-400 mb-2 flex items-center gap-3">
                <div className={`p-2 rounded-xl bg-amber-400/10 backdrop-blur-sm
                    transition-transform duration-300 
                    ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}>
                  <MapPin className="w-5 h-5 text-amber-400" />
                </div>
                {location.name}
              </h4>
              <p className="text-gray-300/90 text-base leading-relaxed">{location.address}</p>
            </div>
          </div>

          {/* Expandable Content */}
          <div className={`grid transition-all duration-500
              ${isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
            <div className="overflow-hidden">
              {/* Working Hours */}
              <div className="flex items-center gap-3 py-4 px-4 rounded-xl bg-white/5 backdrop-blur-sm
                  border border-white/10 mb-4">
                <Clock className="w-5 h-5 text-amber-400" />
                <span className="text-gray-300">{location.hours}</span>
              </div>

              {/* Additional Information */}
              <div className="space-y-3 text-gray-400 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>خدمة عملاء متميزة</span>
                </div>
                
              </div>
            </div>
          </div>

          {/* Actions Row */}
          <div className={`flex items-center justify-between mt-4 
              'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
            <span className="text-sm text-gray-400">
              {!isActive ? 'انقر لأظهار التفاصيل' : ''}
            </span>
            <a
              href={location.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl
                  bg-gradient-to-r from-amber-400 to-amber-500
                  hover:from-amber-500 hover:to-amber-600
                  text-gray-900 font-medium text-sm
                  transform hover:scale-105 transition-all duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-4 h-4" />
              فتح في الخريطة
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/95 to-black/90 
          backdrop-blur-xl transition-opacity duration-300" />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl mx-auto p-6" dir="rtl">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 
              text-transparent bg-clip-text">
            فروعنا
          </h3>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 
                transition-all duration-300 hover:rotate-90"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Locations List */}
        <div className="space-y-4 overflow-y-auto max-h-[60vh] hide-scrollbar">
          {locations.map((location, index) => (
            <LocationCard key={index} location={location} index={index} />
          ))}
        </div>

        
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx global>{`
          .custom-scrollbar {
            scrollbar-width: thin;
            scrollbar-color: rgba(251, 191, 36, 0.3) transparent;
          }
          
          .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
          }
          
          .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
          }
          
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: rgba(251, 191, 36, 0.3);
            border-radius: 20px;
          }
  
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}</style>
    </div>
  );
};


// Main Component
const AdhamMansourMenu = () => {
  // Your existing state and data...
  const [showLocations, setShowLocations] = useState(false);
  const [activeTab, setActiveTab] = useState('packages');
  const [expandedCard, setExpandedCard] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Locations Data
  const locations = [
    {
      name: "الفرع الرئيسي",
      address: "123 شارع التحرير، وسط البلد، القاهرة",
      hours: "10:00 ص - 10:00 م",
      mapUrl: "https://goo.gl/maps/location1"
    },
    {
      name: "الفرع الثاني",
      address: "456 شارع الهرم، الجيزة",
      hours: "10:00 ص - 11:00 م",
      mapUrl: "https://goo.gl/maps/location2"
    }
  ];

  // Business Info
  const businessInfo = {
    name: "ADHAM MANSOUR",
    slogan: "صالون العرسان الأول",
    phone: "+201234567890",
    facebook: "https://facebook.com/yourpage",
    location: {
      address: "123 شارع التحرير، القاهرة",
      area: "وسط البلد",
      mapUrl: "https://goo.gl/maps/your-location",
      workingHours: "يومياً من 10 صباحاً حتى 10 مساءً"
    }
  };

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dynamic theme colors for packages
  const packageThemes = {
    1: {
      color: "from-amber-400 to-amber-600",
      shadowColor: "amber",
      accent: "amber"
    },
    2: {
      color: "from-rose-400 to-amber-400",
      shadowColor: "rose",
      accent: "rose"
    },
    3: {
      color: "from-purple-400 to-pink-400",
      shadowColor: "purple",
      accent: "purple"
    },
    4: {
      color: "from-blue-400 to-emerald-400",
      shadowColor: "emerald",
      accent: "emerald"
    }
  };

  const packages = [
    {
      id: 1,
      name: "باقة العريس ١",
      price: "600.LE",
      highlight: "الباقة الأساسية",
      icon: <Star className="w-5 h-5" />,
      tag: "BASIC",
      services: ["مكواه", "صبغة", "حلاقة ذقن", "حلاقة شعر", "إستشوار", "تلبيس البدلة", "شمع وجه", "شمع أنف", "شمع أذن", "تنظيف بشرة مرحلة 1", "حلاقة على اليومين"]
    },
    {
      id: 2,
      name: "باقة العريس ٢",
      price: "800.LE",
      highlight: "الأكثر طلباً",
      icon: <Sparkles className="w-5 h-5" />,
      tag: "POPULAR",
      services: ["مكواه", "صبغة", "حلاقة ذقن", "حلاقة شعر", "إستشوار", "تلبيس البدلة", "شمع وجه", "شمع أنف", "شمع أذن", "توبيك للشعر", "حمام زيت", "تنظيف بشرة مرحلة 2", "حلاقة على اليومين"]
    },
    {
      id: 3,
      name: "باقة العريس ٣",
      price: "1100.LE",
      highlight: "الباقة المميزة",
      icon: <Gem className="w-5 h-5" />,
      tag: "PREMIUM",
      services: ["مكواه", "صبغة", "حلاقة ذقن", "حلاقة شعر", "إستشوار", "تلبيس البدلة", "شمع وجه", "شمع أنف", "شمع أذن", "تفتيح بشرة", "حمام زيت", "توبيك للشعر", "حمام مغربي", "حلاقة على 3 أيام", "تنظيف بشرة مرحلة 3"]
    },
    {
      id: 4,
      name: "باقة العريس ٤",
      price: "1400.LE",
      highlight: "الباقة الملكية",
      icon: <Crown className="w-5 h-5" />,
      tag: "ROYAL",
      services: ["مكواه", "صبغة", "حلاقة ذقن", "حلاقة شعر", "إستشوار", "تلبيس البدلة", "شمع وجه", "شمع أنف", "شمع أذن", "تقتيح بشرة", "حمام زيت", "توبيك للشعر", "حمام مغربي", "حمام عطري", "باديكير إيد ورجل", "حلاقة على 3 أيام", "تنظيف بشرة مرحلة 4"]
    }
  ];

  const services = [
    { name: "حلاقة شعر", price: "80", category: "basic" },
    { name: "حلاقة ذقن", price: "40", category: "basic" },
    { name: "حلاقة شعر وذقن", price: "100", category: "basic" },
    { name: "شعر وإستشوار", price: "110", category: "styling" },
    { name: "كيرلي", price: "40", category: "styling" },
    { name: "صبغة", price: "50", category: "styling" },
    { name: "توبيك شعر", price: "80", category: "treatment" },
    { name: "فوطة ساخنة", price: "30", category: "treatment" },
    { name: "فوطة سافعة", price: "20", category: "treatment" },
    { name: "ماسك", price: "10", category: "treatment" },
    { name: "فرد شعر", price: "30", category: "styling" },
    { name: "شمع وجه", price: "30", category: "grooming" },
    { name: "شمع أنف وأذن", price: "20", category: "grooming" }
  ];

  const skinCare = [
    { name: "تنظيف وتفتيح بشرة", price: "150", duration: "60 min" },
    { name: "تنظيف بشرة 3 مراحل", price: "200", duration: "90 min" },
    { name: "تنظيف بشرة 5 مراحل", price: "300", duration: "120 min" },
    { name: "تنظيف بشرة 7 مراحل وسيرم وكولاجين", price: "400", duration: "150 min" },
    { name: "حمام مغربي", price: "300", duration: "60 min" },
    { name: "حمام مغربي وعطري", price: "400", duration: "90 min" },
    { name: "باديكير إيد", price: "150", duration: "45 min" },
    { name: "باديكير قدم", price: "250", duration: "60 min" }
  ];



  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <Scissors className="w-12 h-12 text-amber-400 animate-spin" />
          </div>
          <div className="text-2xl font-bold bg-gradient-to-r from-amber-200 to-amber-400 text-transparent bg-clip-text">
            {businessInfo.name}
          </div>
        </div>
      </div>
    );
  }

  /* Add this CSS for the fade-in animation */
  const styles = `
      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `;

  // Add the styles to the document
  const styleSheet = document.createElement("style");
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);

  const RTLPackageCard = (pkg) => {
    const theme = packageThemes[pkg.id];
    const isExpanded = expandedCard === pkg.id;

    return (
      <div
        key={pkg.id}
        className="group relative w-full max-w-md mx-auto px-3 md:px-4"
        dir="rtl"
      >
        {/* Card Container */}
        <div
          onClick={() => setExpandedCard(isExpanded ? null : pkg.id)}
          className={`relative overflow-hidden transition-all duration-500 cursor-pointer
              ${isExpanded ? 'bg-black/90' : 'bg-black/80 hover:bg-black/85'} 
              rounded-2xl backdrop-blur-lg border border-white/5
              shadow-lg hover:shadow-xl
              ${isExpanded ? 'scale-102' : 'scale-100'}
            `}
        >
          {/* Animated Background */}
          <div className={`absolute inset-0 bg-gradient-to-bl ${theme.color} opacity-10
              group-hover:opacity-15 transition-opacity duration-500`}
          />

          {/* Icon Container - Left Side */}
          <div className="absolute top-4 left-4">
            <div className={`p-2 rounded-xl bg-gradient-to-bl ${theme.color}
                text-white/90 shadow-md transform group-hover:scale-110
                transition-transform duration-500`}>
              {pkg.icon}
            </div>
          </div>

          {/* Badge Container - Right Side */}
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            {/* Premium Badge */}
            {pkg.isPremium && (
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full 
                  bg-gradient-to-l from-amber-500 to-amber-600
                  transform transition-transform duration-300 group-hover:scale-105">
                <Sparkle className="w-3.5 h-3.5 text-white" />
                <span className="text-xs font-medium text-white">مميز</span>
              </div>
            )}

            {/* Popular Badge */}
            {pkg.isPopular && (
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full 
                  bg-gradient-to-l from-rose-500 to-rose-600
                  transform transition-transform duration-300 group-hover:scale-105">
                <Flame className="w-3.5 h-3.5 text-white" />
                <span className="text-xs font-medium text-white">الأكثر طلباً</span>
              </div>
            )}

            {/* New Badge */}
            {pkg.isNew && (
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full 
                  bg-gradient-to-l from-emerald-500 to-emerald-600
                  transform transition-transform duration-300 group-hover:scale-105">
                <Star className="w-3.5 h-3.5 text-white" />
                <span className="text-xs font-medium text-white">جديد</span>
              </div>
            )}
          </div>

          {/* Content Container */}
          <div className="relative p-4">
            {/* Package Name & Type */}
            <div className="flex flex-col mt-0 mb-3">
              <h3 className="text-xl font-bold text-white/90 
                  group-hover:text-white transition-colors duration-300">
                {pkg.name}
              </h3>
              <span className={`text-sm mt-1 text-white/70`}>
                {pkg.highlight}
              </span>
            </div>

            {/* Price Section - Positioned at bottom */}
            <div className="flex items-center justify-between mt-4">
              <div className="text-2xl font-bold text-amber-400
                  group-hover:text-amber-300 transition-colors duration-300">
                {pkg.price}
              </div>

              {/* Expand Button */}
              <button
                className="flex items-center gap-2 text-amber-400/80
                  hover:text-amber-400 transition-colors duration-300"
              >
                <span className="text-sm">
                  {isExpanded ? 'عرض أقل' : 'عرض المزيد'}
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-500 
                    ${isExpanded ? 'rotate-180' : ''}`}
                />
              </button>
            </div>

            {/* Services List */}
            <div className={`grid transition-all duration-700 ease-in-out
                ${isExpanded ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}
              `}>
              <div className="overflow-hidden">
                <div className="grid grid-cols-1 gap-3 py-2">
                  {pkg.services.map((service, idx) => (
                    <div key={idx}
                      className="flex items-center gap-3 text-white/70
                        hover:text-white/90 transition-colors duration-300"
                      style={{
                        animation: isExpanded ? `fadeIn 0.5s ease-out ${idx * 0.1}s forwards` : 'none',
                        opacity: 0
                      }}
                    >
                      <CheckCircle2 className={`w-4 h-4 flex-shrink-0
                          text-amber-400`} />
                      <span className="text-sm">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="relative">
            <Scissors className="w-12 h-12 text-amber-400 animate-spin" />
            <div className="absolute inset-0 bg-amber-400/20 blur-xl -z-10" />
          </div>
          <div className="text-2xl font-bold bg-gradient-to-r from-amber-200 to-amber-400 
              text-transparent bg-clip-text">
            ADHAM MANSOUR
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] 
        from-gray-900 via-black to-gray-900">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-black/40 backdrop-blur z-50">
        <div
          className="h-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 
              shadow-lg shadow-amber-500/20"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Main Content */}
      <TopHeader />

      {/* Navigation */}
      <nav className="sticky top-4 z-40 mx-6 mb-8">
        <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-1.5 
            flex justify-between shadow-lg shadow-black/20">
          {['packages', 'services', 'skincare'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 text-sm rounded-xl transition-all duration-500 ${activeTab === tab
                  ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-gray-900 shadow-lg'
                  : 'text-amber-300/80 hover:text-amber-300'
                }`}
            >
              {tab === 'packages' && 'باقات العريس'}
              {tab === 'services' && 'الخدمات'}
              {tab === 'skincare' && 'العناية بالبشرة'}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="px-4 pb-24 md:pb-28">
        {activeTab === 'packages' && (
          <div className="space-y-6">
            {packages.map((pkg) => RTLPackageCard(pkg))}
          </div>
        )}

        {(activeTab === 'services' || activeTab === 'skincare') && (
          <div className="grid grid-cols-1 gap-3">
            {(activeTab === 'services' ? services : skinCare).map((service, idx) => (
              <div
                key={idx}
                className="group bg-gradient-to-l from-black/40 to-black/50 backdrop-blur-xl 
                    rounded-2xl p-5 border border-white/5 shadow-lg 
                    hover:from-black/50 hover:to-black/60 
                    transition-all duration-300 overflow-hidden"
              >
                <div className="flex justify-between items-start gap-4">
                  {/* Price Column - Right Side in RTL */}
                  <div className="flex-shrink-0 space-y-2 text-left">
                    <div className="text-xl font-bold bg-gradient-to-r from-amber-300 to-amber-500 
                        text-transparent bg-clip-text group-hover:from-amber-400 
                        group-hover:to-amber-600 transition-all duration-300 whitespace-nowrap">
                      {service.price} LE
                    </div>
                    {service.duration && (
                      <div className="text-sm text-amber-400/70 whitespace-nowrap">
                        {service.duration}
                      </div>
                    )}
                  </div>

                  {/* Service Name - Left Side in RTL */}
                  <span className="text-lg text-right text-gray-200 group-hover:text-white 
                      transition-colors duration-300 leading-tight">
                    {service.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Floating Action Buttons */}
      <FloatingActions onLocationClick={() => setShowLocations(true)} />

      {/* Locations Modal */}
      <LocationsModal
        isOpen={showLocations}
        onClose={() => setShowLocations(false)}
        locations={locations}
      />


      {/* Global Styles */}
      <style jsx global>{`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 8s ease infinite;
          }
        `}</style>
    </div>
  );
};

export default AdhamMansourMenu;