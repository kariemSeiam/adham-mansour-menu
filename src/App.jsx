import React, { useState, useEffect } from 'react';
import { Facebook, Phone, Crown, Sparkles, Gem, Star, ChevronDown, Scissors, MapPin, Clock,Sparkle ,CheckCircle2  } from 'lucide-react';

const AdhamMansourMenu = () => {
  const [activeTab, setActiveTab] = useState('packages');
  const [expandedCard, setExpandedCard] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [showLocationInfo, setShowLocationInfo] = useState(false);

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

  // Location Info Modal
  const LocationInfo = () => (
    <div className={`fixed inset-0 bg-black/80 backdrop-blur-lg z-50 transition-opacity duration-300 ${
      showLocationInfo ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`}>
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="bg-gray-900/80 rounded-3xl p-8 max-w-md w-full border border-white/10">
          <div className="text-center mb-8">
            <div className="inline-block p-3 rounded-full bg-amber-400/10 mb-4">
              <MapPin className="w-8 h-8 text-amber-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">موقعنا</h3>
            <p className="text-amber-300">{businessInfo.location.area}</p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 rounded-2xl bg-black/40">
              <p className="text-gray-300">{businessInfo.location.address}</p>
              <MapPin className="w-5 h-5 text-amber-400" />
            </div>
            
            <div className="flex items-center justify-between p-4 rounded-2xl bg-black/40">
              <p className="text-gray-300">{businessInfo.location.workingHours}</p>
              <Clock className="w-5 h-5 text-amber-400" />
            </div>
          </div>

          <button 
            onClick={() => setShowLocationInfo(false)}
            className="w-full mt-8 bg-gradient-to-r from-amber-400 to-amber-500 text-gray-900 py-4 rounded-xl font-bold"
          >
            إغلاق
          </button>
        </div>
      </div>
    </div>
  );

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
  
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-black to-gray-900">
      <LocationInfo />
      
      {/* Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-black/40 backdrop-blur z-50">
        <div 
          className="h-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 shadow-lg shadow-amber-500/20"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Hero Section */}
      <header className="relative pt-20 pb-12 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-amber-400/10 via-black/0 to-transparent" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl" />
        <div className="relative text-center space-y-6">
          <div className="inline-block p-3 rounded-full bg-amber-400/10 backdrop-blur-sm">
            <Scissors className="w-8 h-8text-amber-400" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 text-transparent bg-clip-text">
            {businessInfo.name}
          </h1>
          <p className="text-xl text-amber-300/90 flex items-center justify-center gap-2">
            <Crown className="w-5 h-5" />
            {businessInfo.slogan}
            <Crown className="w-5 h-5" />
          </p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="sticky top-4 z-40 mx-6 mb-8">
        <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-1.5 flex justify-between shadow-lg shadow-black/20">
          {['packages', 'services', 'skincare'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 text-sm rounded-xl transition-all duration-500 ${
                activeTab === tab 
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

      {/* Enhanced Contact Actions */}
      <div className="fixed bottom-0 left-0 right-0 
         px-4 py-4 shadow-xl">
        <div className="max-w-lg mx-auto">
          <div className="grid grid-cols-3 gap-3">
            {/* Call Button */}
            <a 
              href={`tel:${businessInfo.phone}`}
              className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-white py-4 rounded-2xl font-bold text-center flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all duration-300"
            >
              <Phone className="w-5 h-5 text-white" />
              <span>اتصل بنا</span>
            </a>

            {/* Location Button */}
            <button 
              onClick={() => setShowLocationInfo(true)}
              className="bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 text-white py-4 rounded-2xl font-bold text-center flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all duration-300" 
            >
              <MapPin className="w-5 h-5 text-white" />
              <span>موقعنا</span>
            </button>

            {/* Facebook Button */}
            <a 
              href={businessInfo.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-4 rounded-2xl font-bold text-center flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 transition-all duration-300"
            >
              <Facebook className="w-5 h-5 text-white" />
              <span>فيسبوك</span>
            </a>
          </div>
        </div>
      </div>

      {/* Add this to your CSS */}
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