import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Helmet } from 'react-helmet'
import './index.css'
import App from './App.jsx'

// SEO Component
const SEOWrapper = () => (
  <>
    <Helmet>
      {/* Primary Meta Tags */}
      <title>أدهم منصور - صالون حلاقة رجالي في بلبيس | أفضل صالون عرايس</title>
      <meta name="title" content="أدهم منصور - صالون حلاقة رجالي في بلبيس | أفضل صالون عرايس" />
      <meta name="description" content="صالون أدهم منصور في بلبيس - صالون العرسان الأول. خدمات حلاقة وتجميل للرجال، باقات عرايس مميزة، عناية بالبشرة. احجز موعدك الآن في أفضل صالون حلاقة ببلبيس." />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://kariemseiam.github.io/adham-mansour-menu/" />
      <meta property="og:title" content="أدهم منصور - صالون حلاقة رجالي في بلبيس | أفضل صالون عرايس" />
      <meta property="og:description" content="صالون أدهم منصور في بلبيس - صالون العرسان الأول. خدمات حلاقة وتجميل للرجال، باقات عرايس مميزة، عناية بالبشرة. احجز موعدك الآن في أفضل صالون حلاقة ببلبيس." />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://kariemseiam.github.io/adham-mansour-menu/" />
      <meta property="twitter:title" content="أدهم منصور - صالون حلاقة رجالي في بلبيس | أفضل صالون عرايس" />
      <meta property="twitter:description" content="صالون أدهم منصور في بلبيس - صالون العرسان الأول. خدمات حلاقة وتجميل للرجال، باقات عرايس مميزة، عناية بالبشرة. احجز موعدك الآن في أفضل صالون حلاقة ببلبيس." />

      {/* Additional SEO Meta Tags */}
      <meta name="keywords" content="صالون حلاقة بلبيس, حلاق رجالي بلبيس, صالون عرايس بلبيس, أدهم منصور بلبيس, حلاقة رجالي, عناية بالبشرة للرجال, أفضل حلاق في بلبيس, صالون تجميل رجالي" />
      <meta name="robots" content="index, follow" />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="Arabic" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="أدهم منصور" />
      
      {/* Locale and Geographic Meta Tags */}
      <meta name="geo.region" content="EG-SHR" />
      <meta name="geo.placename" content="Belbeis" />
      <meta name="geo.position" content="30.423751;31.568356" />
      <meta name="ICBM" content="30.423751, 31.568356" />

      {/* Schema.org markup for Google */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "BeautySalon",
            "name": "صالون أدهم منصور",
            "image": "https://kariemseiam.github.io/adham-mansour-menu/logo.jpg",
            "description": "صالون حلاقة رجالي وتجميل في بلبيس - متخصص في تجهيز العرسان وخدمات العناية بالبشرة للرجال",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "شارع بلبيس الرئيسي",
              "addressLocality": "بلبيس",
              "addressRegion": "الشرقية",
              "addressCountry": "EG"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "30.423751",
              "longitude": "31.568356"
            },
            "url": "https://adhammansour.com",
            "telephone": "+201234567890",
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
              ],
              "opens": "10:00",
              "closes": "22:00"
            },
            "priceRange": "$$",
            "servesCuisine": "Barber Shop"
          }
        `}
      </script>
    </Helmet>
    <App />
  </>
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SEOWrapper />
  </StrictMode>,
)