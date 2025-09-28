export const services = [
  {
    img: "/images/services/hair.png",
    icon: "flaticon-cut",
    title: "Hair Cutting",
    slug: "hair-cutting",
    summary:
      "Get a precision haircut designed to perfectly match your style, face shape, and personality. Our expert stylists ensure a polished look with attention to detail and comfort from start to finish.",
    duration: "45–60 min",
    fromPrice: 45,
    features: [
      "Personalized style consultation",
      "Shampoo & scalp prep",
      "Blow dry & finish",
    ],
    benefits: [
      "Enhances your natural features",
      "Low-maintenance daily styling",
      "Promotes healthier hair growth",
    ],
    preparation: [
      "Bring photos of your desired style if possible",
      "Avoid heavy products before your visit",
    ],
    aftercare: [
      "Use heat protectant before styling",
      "Book trims every 6–8 weeks",
    ],
    tiers: [
      { name: "Classic", price: 45, duration: "45 min" },
      { name: "Restyle", price: 55, duration: "60 min" },
      { name: "Signature", price: 70, duration: "60 min" },
    ],
    rating: 4.9,
    gallery: ["/images/services/hair.png", "/images/services/haircl.png"],
    faqs: [
      {
        q: "Do you offer kids’ cuts?",
        a: "Yes, ages 5+ with guardian supervision.",
      },
      {
        q: "Should I wash my hair before?",
        a: "Not necessary—we’ll wash and prep for you.",
      },
    ],
    category: "Hair",
    seo: {
      description:
        "Premium haircut services with expert consultation and finishing at Glamora.",
      keywords: ["haircut", "salon", "hairstyle"],
    },
  },
  {
    img: "/images/services/nail.png",
    icon: "flaticon-nail",
    title: "Nail Polish",
    slug: "nail-polish",
    summary:
      "Enjoy a relaxing nail polish session with a wide range of shades and finishes. From classic to gel polish, our hygienic process ensures a long-lasting, flawless look.",
    duration: "30–45 min",
    fromPrice: 25,
    features: ["Cuticle care", "Shaping & buffing", "Choice of polish or gel"],
    benefits: [
      "Boosts overall appearance",
      "Protects nails from chipping",
      "Adds confidence and elegance",
    ],
    preparation: [
      "Remove old polish if possible",
      "Hydrate cuticles before appointment",
    ],
    aftercare: ["Avoid water for 2 hours", "Moisturize cuticles daily"],
    tiers: [
      { name: "Classic Polish", price: 25, duration: "30 min" },
      { name: "Gel Polish", price: 35, duration: "40 min" },
      { name: "Luxury Finish", price: 45, duration: "45 min" },
    ],
    rating: 4.7,
    gallery: ["/images/services/nail.png"],
    faqs: [
      {
        q: "Do you remove gel polish?",
        a: "Yes, we safely soak and remove gel.",
      },
    ],
    category: "Nail",
    seo: {
      description:
        "Professional nail polish services with classic and gel options.",
      keywords: ["nails", "manicure", "gel polish"],
    },
  },
  {
    img: "/images/services/body.png",
    icon: "flaticon-massage-1",
    title: "Body Massage",
    slug: "body-massage",
    summary:
      "Relax and rejuvenate with our full-body massage treatments. Designed to relieve muscle tension and reduce stress, our massages provide a calming escape from daily life.",
    duration: "60–90 min",
    fromPrice: 65,
    features: [
      "Aromatherapy oils",
      "Custom pressure points",
      "Soothing ambience",
    ],
    benefits: [
      "Reduces stress & anxiety",
      "Relieves chronic muscle tension",
      "Improves blood circulation",
    ],
    preparation: ["Stay hydrated before session", "Wear comfortable clothing"],
    aftercare: [
      "Drink plenty of water",
      "Avoid strenuous activity after massage",
    ],
    tiers: [
      { name: "Swedish Massage", price: 65, duration: "60 min" },
      { name: "Deep Tissue", price: 85, duration: "75 min" },
      { name: "Aromatherapy", price: 95, duration: "90 min" },
    ],
    rating: 4.8,
    gallery: ["/images/services/body.png"],
    faqs: [
      {
        q: "Is this safe during pregnancy?",
        a: "Yes, with adaptations. Please inform us.",
      },
    ],
    category: "Spa",
    seo: {
      description: "Professional massage services to relax body and mind.",
      keywords: ["massage", "spa", "relax"],
    },
  },
  {
    img: "/images/services/spa.png",
    icon: "flaticon-relax",
    title: "Spa & Foot",
    slug: "spa-foot",
    summary:
      "Pamper yourself with our spa and foot treatments. A luxurious soak, scrub, and massage leave your feet refreshed, while stress melts away during the spa ritual.",
    duration: "40–60 min",
    fromPrice: 30,
    features: [
      "Warm foot soak",
      "Exfoliation & scrub",
      "Moisturizing foot mask",
    ],
    benefits: [
      "Relieves tension in feet",
      "Softens and nourishes skin",
      "Improves circulation",
    ],
    preparation: ["Avoid applying lotion before visit"],
    aftercare: ["Keep feet moisturized", "Wear open shoes to prolong results"],
    tiers: [
      { name: "Basic Foot Spa", price: 30, duration: "40 min" },
      { name: "Deluxe Spa", price: 45, duration: "50 min" },
      { name: "Luxury Ritual", price: 60, duration: "60 min" },
    ],
    rating: 4.6,
    gallery: ["/images/services/spa.png"],
    faqs: [],
    category: "Spa",
    seo: {
      description: "Foot spa and luxury treatments for soft, healthy feet.",
      keywords: ["foot spa", "pedicure", "relaxation"],
    },
  },
  {
    img: "/images/services/haircl.png",
    icon: "flaticon-beauty-treatment-1",
    title: "Hair Colors",
    slug: "hair-colors",
    summary:
      "Transform your look with our professional hair coloring services. Whether you prefer natural tones, balayage, or bold colors, we ensure a healthy, vibrant finish.",
    duration: "90–150 min",
    fromPrice: 85,
    features: ["Color consultation", "Bond-protecting formula", "Gloss finish"],
    benefits: [
      "Adds shine and vibrancy",
      "Custom shades to suit your style",
      "Protects hair during coloring",
    ],
    preparation: ["Do a patch test 48 hours before appointment"],
    aftercare: [
      "Use color-safe shampoo",
      "Avoid heat styling immediately after",
    ],
    tiers: [
      { name: "Root Touch-Up", price: 85, duration: "90 min" },
      { name: "Full Color", price: 120, duration: "120 min" },
      { name: "Balayage/Highlights", price: 160, duration: "150 min" },
    ],
    rating: 4.9,
    gallery: ["/images/services/haircl.png"],
    faqs: [
      {
        q: "Do you offer patch tests?",
        a: "Yes, required for first-time clients.",
      },
    ],
    category: "Hair",
    seo: {
      description: "Professional hair coloring services with healthy results.",
      keywords: ["hair color", "balayage", "highlights"],
    },
  },
  {
    img: "/images/services/brow.png",
    icon: "flaticon-liner",
    title: "Brow Polish",
    slug: "brow-polish",
    summary:
      "Achieve perfect brows with our shaping, polishing, and tinting services. We enhance your natural brow line for a clean and defined look.",
    duration: "15–30 min",
    fromPrice: 20,
    features: ["Mapping & shaping", "Precision trimming", "Optional tint"],
    benefits: [
      "Frames your face naturally",
      "Creates symmetry and balance",
      "Boosts overall appearance",
    ],
    preparation: ["Avoid makeup on brows before appointment"],
    aftercare: [
      "Avoid water on brows for 24 hours",
      "Apply nourishing oil daily",
    ],
    tiers: [
      { name: "Basic Polish", price: 20, duration: "15 min" },
      { name: "Tint & Polish", price: 30, duration: "20 min" },
      { name: "Luxury Brow", price: 40, duration: "30 min" },
    ],
    rating: 4.5,
    gallery: ["/images/services/brow.png"],
    faqs: [],
    category: "Face",
    seo: {
      description: "Professional brow shaping and tinting services.",
      keywords: ["brows", "eyebrow", "tint"],
    },
  },
  //   {
  //     img: "/images/services/facial.png",
  //     icon: "flaticon-facial-treatment",
  //     title: "Facial Treatment",
  //     slug: "facial-treatment",
  //     summary:
  //       "Rejuvenate your skin with our luxury facial treatments. Designed to cleanse, hydrate, and brighten your skin, leaving it smooth and refreshed.",
  //     duration: "50–70 min",
  //     fromPrice: 60,
  //     features: ["Deep cleanse", "Exfoliation & mask", "Hydration therapy"],
  //     benefits: [
  //       "Improves skin tone & texture",
  //       "Unclogs pores",
  //       "Boosts hydration",
  //     ],
  //     preparation: ["Avoid makeup on the day", "Inform us of any skin allergies"],
  //     aftercare: ["Use sunscreen", "Avoid harsh products for 48 hours"],
  //     tiers: [
  //       { name: "Classic Facial", price: 60, duration: "50 min" },
  //       { name: "Hydrating Facial", price: 75, duration: "60 min" },
  //       { name: "Anti-Aging Facial", price: 90, duration: "70 min" },
  //     ],
  //     rating: 4.8,
  //     gallery: ["/images/services/facial.png"],
  //     faqs: [
  //       { q: "Can I wear makeup afterward?", a: "It’s best to wait 24 hours." },
  //     ],
  //     category: "Skin",
  //     seo: {
  //       description:
  //         "Luxury facials for deep cleansing, hydration, and skin glow.",
  //       keywords: ["facial", "skin treatment", "hydration"],
  //     },
  //   },
  //   {
  //     img: "/images/services/makeup.png",
  //     icon: "flaticon-makeup",
  //     title: "Makeup & Styling",
  //     slug: "makeup-styling",
  //     summary:
  //       "From natural to glamorous looks, our professional makeup and styling services prepare you for any occasion. Perfect for weddings, parties, and photoshoots.",
  //     duration: "60–120 min",
  //     fromPrice: 100,
  //     features: ["Skin prep", "Customized makeup", "Hair styling option"],
  //     benefits: [
  //       "Boosts confidence",
  //       "Enhances natural beauty",
  //       "Perfect for special events",
  //     ],
  //     preparation: ["Arrive with clean face", "Share your preferred style"],
  //     aftercare: [
  //       "Carry blotting papers for touch-ups",
  //       "Avoid touching face too much",
  //     ],
  //     tiers: [
  //       { name: "Day Look", price: 100, duration: "60 min" },
  //       { name: "Evening Glam", price: 150, duration: "90 min" },
  //       { name: "Bridal Package", price: 250, duration: "120 min" },
  //     ],
  //     rating: 5.0,
  //     gallery: ["/images/services/makeup.png"],
  //     faqs: [
  //       {
  //         q: "Do you use professional brands?",
  //         a: "Yes, only high-quality makeup products.",
  //       },
  //     ],
  //     category: "Makeup",
  //     seo: {
  //       description:
  //         "Professional makeup and styling for weddings, parties, and special occasions.",
  //       keywords: ["makeup", "bridal", "styling"],
  //     },
  //   },
];
