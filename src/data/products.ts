// @/app/data/products.ts

import { Product } from "@/types/schema";

export const products: Product[] = [
  // Interior Signage Products
  {
    id: "window-graphics",
    name: "Window Graphics",
    categoryId: "interior-signage",
    shortDescription: "Professional window displays and graphics",
    longDescription:
      "Eye-catching window graphics including perforated vinyl, static clings, and promotional displays that transform your storefront into powerful marketing tools while maintaining functionality.",
    highlightImage: {
      src: "/products/window-graphics.webp",
      alt: "Professional window graphics installation",
    },
    gallery: [
      {
        src: "/products/window-graphics-retail.jpg",
        title: "Retail Window Display",
        alt: "Storefront window graphics with branding",
      },
      {
        src: "/products/window-graphics-office.jpg",
        title: "Office Privacy Film",
        alt: "Frosted privacy film on office windows",
      },
    ],
    specifications: [
      "Material: Premium 3M vinyl",
      "Durability: 5-7 years outdoor",
      "Installation: Professional application",
      "Sizes: Custom to fit any window",
    ],
    benefits: [
      "UV resistant coating",
      "Easy removal without residue",
      "Custom design capabilities",
      "One-way vision options available",
    ],
  },
  {
    id: "wall-decals-graphics",
    name: "Wall Decals & Graphics",
    categoryId: "interior-signage",
    shortDescription: "Custom wall graphics and decals",
    longDescription:
      "Transform walls with custom graphics, murals, and branded environmental displays that create immersive brand experiences and enhance interior aesthetics.",
    highlightImage: {
      src: "/products/wall-decals.webp",
      alt: "Custom wall graphics installation",
    },
    specifications: [
      "Material: Removable wall vinyl",
      "Surface compatibility: Most painted walls",
      "Durability: 3-5 years indoor",
      "Finish options: Matte or gloss",
    ],
    benefits: [
      "Removable without wall damage",
      "Custom shapes and sizes",
      "Full-color printing capability",
      "Quick installation process",
    ],
  },
  {
    id: "lobby-signs",
    name: "Lobby Signs",
    categoryId: "interior-signage",
    shortDescription:
      "Create a lasting first impression with custom lobby signs that reflect your brand's professionalism and identity.",
    longDescription:
      "Elevate your business's reception area with expertly crafted lobby signs. Our custom-designed signs are the perfect way to welcome visitors, reinforce your brand, and convey a sense of prestige and stability. We offer a wide range of materials, finishes, and styles, from elegant brushed metal and acrylic to dimensional lettering and illuminated options, ensuring your lobby sign perfectly matches your company's aesthetic and vision.",
    specifications: [
      "Materials: Brushed aluminum, stainless steel, brass, acrylic, PVC, wood",
      "Finishes: Polished, brushed, anodized, painted, faux finishes",
      "Mounting options: Wall-mounted, standoff mounts, adhesive, suspended",
      "Lettering styles: Cut vinyl, routed letters, dimensional letters, engraved plaques",
      "Customizability: Full color printing, custom shapes, backlighting, illuminated options",
    ],
    benefits: [
      "Enhances brand recognition and professionalism",
      "Creates a welcoming and impressive first impression",
      "Durable and high-quality construction",
      "Customizable to match any brand identity",
      "Increases perceived value and credibility of your business",
    ],
    highlightImage: {
      src: "https://firewave-console.s3.us-west-2.amazonaws.com/signco/1758480799731-lobby-signs-highlight.jpg",
      alt: "Create a lasting first impression with custom lobby signs that reflect your brand's professionalism and identity.",
    },
    gallery: [
      {
        src: "https://firewave-console.s3.us-west-2.amazonaws.com/signco/1758480807579-lobby-signs-gallery-0.jpg",
        title: "Acrylic Dimensional Letters",
        alt: "Lobby Signs - Acrylic Dimensional Letters",
      },
      {
        src: "https://firewave-console.s3.us-west-2.amazonaws.com/signco/1758480816875-lobby-signs-gallery-1.jpg",
        title: "Brushed Metal Plaque",
        alt: "Lobby Signs - Brushed Metal Plaque",
      },
      {
        src: "https://firewave-console.s3.us-west-2.amazonaws.com/signco/1758480824754-lobby-signs-gallery-2.jpg",
        title: "Backlit Signage",
        alt: "Lobby Signs - Backlit Signage",
      },
    ],
  },
  {
    id: "directory-signs",
    name: "Directory Signs",
    categoryId: "interior-signage",
    shortDescription: "Building and floor directories",
    longDescription:
      "Professional directory systems for navigation and building information that help visitors find their destination quickly while maintaining a professional appearance.",
    highlightImage: {
      src: "/products/directory-signs.webp",
      alt: "Professional building directory system",
    },
    specifications: [
      "Frame: Aluminum or steel construction",
      "Insert system: Changeable tenant strips",
      "Mounting: Wall or post mounted",
      "Size: Standard and custom dimensions",
    ],
    benefits: [
      "Easy tenant updates",
      "ADA compliant options",
      "Weather resistant for outdoor use",
      "Professional appearance",
    ],
  },
  {
    id: "room-office-identification",
    name: "Room & Office Identification",
    categoryId: "interior-signage",
    shortDescription: "Door signs and office nameplates",
    longDescription:
      "Professional office identification including door signs, nameplates, and departmental signage that provides clear wayfinding and professional presentation.",
    highlightImage: {
      src: "https://i0.wp.com/signcousa.com/wp-content/uploads/2019/06/epla2.jpg?ssl=1&w=1080",
      alt: "Professional door signs and nameplates",
    },
    specifications: [
      "Materials: Engraved plastic, metal, acrylic",
      "Mounting: Adhesive or mechanical",
      "Text: Laser engraved or printed",
      "Compliance: ADA options available",
    ],
    benefits: [
      "Consistent professional appearance",
      "Durable engraved text",
      "Easy installation",
      "Customizable designs",
    ],
  },
  {
    id: "safety-compliance-signs",
    name: "Safety & Compliance Signs",
    categoryId: "interior-signage",
    shortDescription: "OSHA and safety signage",
    longDescription:
      "OSHA compliant safety signs, emergency exits, and workplace safety signage that ensure regulatory compliance while maintaining clear communication.",
    highlightImage: {
      src: "/products/safety-signs.webp",
      alt: "OSHA compliant safety signage",
    },
    specifications: [
      "Compliance: OSHA and local regulations",
      "Materials: Durable plastics and metals",
      "Visibility: High-contrast colors",
      "Mounting: Various installation options",
    ],
    benefits: [
      "Full regulatory compliance",
      "High visibility design",
      "Durable materials",
      "Standard and custom messages",
    ],
  },
  {
    id: "floor-graphics",
    name: "Floor Graphics",
    categoryId: "interior-signage",
    shortDescription: "Floor decals and wayfinding",
    longDescription:
      "Durable floor graphics for wayfinding, branding, and promotional messaging that withstand heavy foot traffic while providing clear directional information.",
    highlightImage: {
      src: "/products/floor-graphics.webp",
      alt: "Durable floor graphics and wayfinding",
    },
    specifications: [
      "Material: Non-slip vinyl laminate",
      "Durability: Heavy traffic rated",
      "Application: Most floor surfaces",
      "Removal: Clean removal capability",
    ],
    benefits: [
      "Slip-resistant surface",
      "High durability coating",
      "Vivid color printing",
      "Easy maintenance",
    ],
  },
  {
    id: "trade-show-displays",
    name: "Trade Show Displays",
    categoryId: "interior-signage",
    shortDescription: "Portable exhibition displays",
    longDescription:
      "Professional trade show displays including pop-ups, banner stands, and modular systems that create impactful presentations for events and exhibitions.",
    highlightImage: {
      src: "https://i0.wp.com/signcousa.com/wp-content/uploads/2019/06/banner2.jpg?ssl=1&w=1080",
      alt: "Professional trade show display system",
    },
    specifications: [
      "Setup: Tool-free assembly",
      "Transport: Portable carrying cases",
      "Graphics: High-resolution fabric printing",
      "Lighting: Optional LED spotlights",
    ],
    benefits: [
      "Quick setup and breakdown",
      "Lightweight portability",
      "Professional appearance",
      "Reusable for multiple events",
    ],
  },
  {
    id: "point-purchase-displays",
    name: "Point of Purchase Displays",
    categoryId: "interior-signage",
    shortDescription: "Retail and POP displays",
    longDescription:
      "Eye-catching point-of-purchase displays for retail environments and product promotion that drive sales and enhance customer engagement.",
    highlightImage: {
      src: "https://i0.wp.com/signcousa.com/wp-content/uploads/2019/06/dps3.jpg?ssl=1&w=1080",
      alt: "Retail point of purchase display",
    },
    specifications: [
      "Materials: Corrugated, acrylic, metal options",
      "Assembly: Easy setup designs",
      "Printing: Full-color graphics",
      "Placement: Counter or floor standing",
    ],
    benefits: [
      "Impulse purchase encouragement",
      "Brand visibility enhancement",
      "Cost-effective marketing",
      "Easy product updates",
    ],
  },
  {
    id: "menu-boards",
    name: "Menu Boards",
    categoryId: "interior-signage",
    shortDescription: "Restaurant and retail menus",
    longDescription:
      "Professional menu boards including digital displays and traditional printed menus that showcase your offerings with style and clarity.",
    highlightImage: {
      src: "/products/menu-boards.webp",
      alt: "Professional restaurant menu board",
    },
    specifications: [
      "Types: Digital LCD or traditional print",
      "Mounting: Wall or ceiling mounted",
      "Updates: Easy content changes",
      "Lighting: Backlit options available",
    ],
    benefits: [
      "Easy menu updates",
      "Professional presentation",
      "Weather resistant options",
      "Digital animation capability",
    ],
  },
  {
    id: "dimensional-letters-interior",
    name: "Dimensional Letters",
    categoryId: "interior-signage",
    shortDescription: "3D letters and logos for interiors",
    longDescription:
      "Professional dimensional lettering in various materials for interior applications that create impressive brand statements and architectural integration.",
    highlightImage: {
      src: "https://i0.wp.com/signcousa.com/wp-content/uploads/2019/06/dl1.jpg?ssl=1&w=1080",
      alt: "Dimensional letters in lobby setting",
    },
    specifications: [
      "Materials: Acrylic, metal, foam, wood",
      'Thickness: 1/4" to 2" options',
      "Mounting: Stud or adhesive mount",
      "Finish: Painted, brushed, or natural",
    ],
    benefits: [
      "Three-dimensional impact",
      "Premium material options",
      "Custom color matching",
      "Professional installation",
    ],
  },

  // Exterior Signage Products
  {
    id: "building-mounted-signs",
    name: "Building-Mounted Signs",
    categoryId: "exterior-signage",
    shortDescription: "Facade and building identification signs",
    longDescription:
      "Professional building-mounted signage including facade signs, channel letters, and illuminated displays that provide maximum visibility and architectural integration.",
    highlightImage: {
      src: "https://i0.wp.com/signcousa.com/wp-content/uploads/2019/06/dps2.jpg?ssl=1&w=1080",
      alt: "Professional building-mounted signage",
    },
    specifications: [
      "Materials: Aluminum, steel, acrylic",
      "Weather rating: All-weather construction",
      "Lighting: LED illumination options",
      "Mounting: Engineered attachment systems",
    ],
    benefits: [
      "Maximum visibility impact",
      "Weather-resistant construction",
      "Energy-efficient LED lighting",
      "Professional engineering",
    ],
  },
  {
    id: "dimensional-letters-exterior",
    name: "Dimensional Letters",
    categoryId: "exterior-signage",
    shortDescription: "3D letters for building exteriors",
    longDescription:
      "Weather-resistant dimensional lettering in metal, acrylic, and illuminated options for maximum outdoor impact and long-lasting brand presence.",
    highlightImage: {
      src: "https://i0.wp.com/signcousa.com/wp-content/uploads/2019/06/dl2.jpg?ssl=1&w=1080",
      alt: "Exterior dimensional letters with lighting",
    },
    specifications: [
      "Materials: Marine-grade aluminum, stainless steel",
      "Illumination: LED front or back-lit",
      "Weather rating: All-climate durability",
      "Mounting: Engineered structural mounting",
    ],
    benefits: [
      "All-weather durability",
      "24/7 visibility with lighting",
      "Premium material construction",
      "Architectural integration",
    ],
  },
  {
    id: "blade-signs",
    name: "Blade Signs",
    categoryId: "exterior-signage",
    shortDescription: "Projecting storefront signs",
    longDescription:
      "Double-sided blade signs perfect for storefronts and business identification with maximum street visibility and pedestrian appeal.",
    highlightImage: {
      src: "https://i0.wp.com/signcousa.com/wp-content/uploads/2019/06/dl3.jpg?ssl=1&w=1080",
      alt: "Professional blade sign installation",
    },
    specifications: [
      "Construction: Steel or aluminum frame",
      "Graphics: Digital print or vinyl",
      "Lighting: Optional LED illumination",
      "Mounting: Building-specific brackets",
    ],
    benefits: [
      "Double-sided visibility",
      "Pedestrian eye-level placement",
      "Custom shape capabilities",
      "Lighting options for night visibility",
    ],
  },
  {
    id: "a-frame-sidewalk-signs",
    name: "A-Frame Sidewalk Signs",
    categoryId: "exterior-signage",
    shortDescription:
      "Attract foot traffic with durable and eye-catching A-frame sidewalk signs. Perfect for directing customers and showcasing promotions.",
    longDescription:
      "Boost your business visibility with our premium A-frame sidewalk signs. Engineered for durability and weather resistance, these signs are ideal for retail stores, restaurants, cafes, and any business looking to capture attention from passersby. Available in various materials and customizable with vibrant, fade-resistant graphics, our A-frames provide an effective and economical way to communicate your message, highlight daily specials, or guide customers to your entrance.",
    specifications: [
      "Heavy-duty frame construction (metal or durable plastic)",
      "Weather-resistant and UV-protected graphics",
      'Available in multiple sizes (e.g., 24"x36", 36"x48")',
      "Quick-change graphic system for easy updates",
      "Collapsible design for convenient storage and transport",
    ],
    benefits: [
      "Increase walk-in traffic and sales",
      "Enhance brand visibility and curb appeal",
      "Flexible messaging for daily specials or events",
      "Cost-effective advertising solution",
      "Easy to deploy and relocate",
    ],
    highlightImage: {
      src: "https://firewave-console.s3.us-west-2.amazonaws.com/signco/1758479272064-signco-1758479272050.jpg",
      alt: "Attract foot traffic with durable and eye-catching A-frame sidewalk signs. Perfect for directing customers and showcasing promotions.",
    },
    gallery: [
      {
        src: "https://firewave-console.s3.us-west-2.amazonaws.com/signco/1758479272064-signco-1758479272050.jpg",
        title: "A-Frame Sign Placement",
        alt: "A-Frame Sidewalk Signs - A-Frame Sign Placement",
      },
      {
        src: "https://firewave-console.s3.us-west-2.amazonaws.com/signco/1758479272064-signco-1758479272050.jpg",
        title: "Customizable A-Frame Designs",
        alt: "A-Frame Sidewalk Signs - Customizable A-Frame Designs",
      },
      {
        src: "https://firewave-console.s3.us-west-2.amazonaws.com/signco/1758479272064-signco-1758479272050.jpg",
        title: "Durable A-Frame Materials",
        alt: "A-Frame Sidewalk Signs - Durable A-Frame Materials",
      },
    ],
  },
  {
    id: "banners-flags",
    name: "Banners & Flags",
    categoryId: "exterior-signage",
    shortDescription: "Promotional banners and flag displays",
    longDescription:
      "Durable vinyl banners, feather flags, and promotional displays for outdoor advertising and events that maximize visibility and impact.",
    highlightImage: {
      src: "https://i0.wp.com/signcousa.com/wp-content/uploads/2019/06/banner1.jpg?ssl=1&w=1080",
      alt: "Professional vinyl banners and flags",
    },
    specifications: [
      "Material: 13oz vinyl banner material",
      "Hardware: Grommets and reinforced edges",
      "Printing: Full-color digital printing",
      "Sizes: Standard and custom dimensions",
    ],
    benefits: [
      "Weather-resistant materials",
      "Vibrant color printing",
      "Cost-effective advertising",
      "Quick installation",
    ],
  },
  {
    id: "parking-lot-signs",
    name: "Parking Lot Signs",
    categoryId: "exterior-signage",
    shortDescription: "Parking and traffic control signage",
    longDescription:
      "Clear parking lot signs, directional arrows, and traffic control signage for property management and visitor guidance.",
    highlightImage: {
      src: "/products/parking-signs.webp",
      alt: "Professional parking lot signage",
    },
    specifications: [
      "Materials: Aluminum with reflective sheeting",
      "Posts: Galvanized steel or aluminum",
      "Reflectivity: 3M engineer grade sheeting",
      "Installation: Concrete or bolt-down mounting",
    ],
    benefits: [
      "High visibility reflective materials",
      "Durable all-weather construction",
      "Standard and custom messages",
      "Professional installation",
    ],
  },
  {
    id: "monument-signs",
    name: "Monument Signs",
    categoryId: "exterior-signage",
    shortDescription:
      "Create a lasting first impression with durable and attractive monument signs, perfect for establishing your business presence.",
    longDescription:
      "Monument signs are ground-mounted structures that provide a prominent and permanent branding opportunity for businesses and communities. Constructed from durable materials like stone, brick, metal, or high-density urethane (HDU), these signs are built to withstand the elements and convey a sense of stability and professionalism. Ideal for office parks, retail centers, residential communities, and corporate campuses, monument signs clearly identify your location and enhance curb appeal. We offer custom design services to create a monument sign that perfectly complements your architecture and brand identity.",
    specifications: [
      "Materials: Stone, brick, stucco, metal, aluminum, high-density urethane (HDU)",
      "Customizable dimensions to fit site requirements",
      "Weather-resistant finishes and construction",
      "Integrated lighting options (LED, internal illumination)",
      "Professional installation services",
      "Variety of architectural styles and finishes",
    ],
    benefits: [
      "Enhances brand visibility and recognition",
      "Provides clear directional information",
      "Increases property value and curb appeal",
      "Durable construction for long-term use",
      "Customizable to match any architectural style",
      "Conveys professionalism and stability",
    ],
    highlightImage: {
      src: "https://firewave-console.s3.us-west-2.amazonaws.com/signco/1758481328091-monument-signs-highlight.jpg",
      alt: "Create a lasting first impression with durable and attractive monument signs, perfect for establishing your business presence.",
    },
    gallery: [
      {
        src: "https://firewave-console.s3.us-west-2.amazonaws.com/signco/1758481337593-monument-signs-gallery-0.jpg",
        title: "Office Park Entrance",
        alt: "Monument Signs - Office Park Entrance",
      },
      {
        src: "https://firewave-console.s3.us-west-2.amazonaws.com/signco/1758481347393-monument-signs-gallery-1.jpg",
        title: "Retail Center Identification",
        alt: "Monument Signs - Retail Center Identification",
      },
      {
        src: "https://firewave-console.s3.us-west-2.amazonaws.com/signco/1758481355809-monument-signs-gallery-2.jpg",
        title: "Community Entrance Signage",
        alt: "Monument Signs - Community Entrance Signage",
      },
    ],
  },
  {
    id: "real-estate-signs",
    name: "Real Estate Signs",
    categoryId: "exterior-signage",
    shortDescription: "Property and listing signs",
    longDescription:
      "Professional real estate signage including yard signs, open house displays, and property marketing that attracts buyers and builds agent brand recognition.",
    highlightImage: {
      src: "/products/real-estate-signs.webp",
      alt: "Professional real estate yard signs",
    },
    specifications: [
      "Material: Corrugated plastic or aluminum",
      "Hardware: Steel wire stakes or posts",
      "Printing: Full-color digital printing",
      "Add-ons: Rider signs and frames",
    ],
    benefits: [
      "Professional agent branding",
      "Weather-resistant construction",
      "Quick installation",
      "Cost-effective marketing",
    ],
  },

  // ADA & Wayfinding Products
  {
    id: "ada-room-signage",
    name: "ADA Compliant Room Signage",
    categoryId: "ada-wayfinding",
    shortDescription:
      "Ensure accessibility and compliance with our high-quality ADA compliant room signage. Available in a variety of finishes and customizable to meet your specific needs.",
    longDescription:
      "Our ADA compliant room signage is meticulously designed to meet the stringent requirements of the Americans with Disabilities Act, ensuring that your facilities are accessible to everyone. Each sign features raised tactile lettering and Grade II Braille, precisely positioned to provide clear and intuitive navigation. Crafted from durable, high-quality materials such as acrylic, metal, or brushed aluminum, these signs offer longevity and a professional aesthetic. Whether for restrooms, offices, conference rooms, or other designated areas, our ADA signage provides a seamless blend of functionality, compliance, and sophisticated design, enhancing the user experience in any commercial or public space.",
    specifications: [
      "Materials: Acrylic, Brushed Aluminum, Engraved Plastic, Metal",
      "Tactile Characters: Raised, sans-serif font (e.g., Helvetica, Arial)",
      "Braille: Grade II compliant, domed",
      "Mounting: Double-sided tape, screws (hardware included)",
      'Standard Sizes: 2"x8", 4"x6", 6"x8", custom sizes available',
      "Color Options: Wide range of standard colors, custom color matching available",
    ],
    benefits: [
      "Ensures compliance with ADA accessibility standards",
      "Improves navigation for visually impaired individuals",
      "Durable construction for long-lasting use",
      "Professional and aesthetically pleasing design",
      "Customizable options to match brand and building decor",
      "Clear, legible text and tactile elements",
    ],
    highlightImage: {
      src: "https://firewave-console.s3.us-west-2.amazonaws.com/signco/1758480477581-ada-room-signage-highlight.jpg",
      alt: "Ensure accessibility and compliance with our high-quality ADA compliant room signage. Available in a variety of finishes and customizable to meet your specific needs.",
    },
    gallery: [
      {
        src: "https://firewave-console.s3.us-west-2.amazonaws.com/signco/1758480485772-ada-room-signage-gallery-0.jpg",
        title: "Close-up Detail Shot",
        alt: "ADA Compliant Room Signage - Close-up Detail Shot",
      },
      {
        src: "https://firewave-console.s3.us-west-2.amazonaws.com/signco/1758480494784-ada-room-signage-gallery-1.jpg",
        title: "Installation Context: Office Door",
        alt: "ADA Compliant Room Signage - Installation Context: Office Door",
      },
      {
        src: "https://firewave-console.s3.us-west-2.amazonaws.com/signco/1758480632594-ada-room-signage-gallery-2.jpg",
        title: "Design Variation: Restroom Sign",
        alt: "ADA Compliant Room Signage - Design Variation: Restroom Sign",
      },
    ],
  },
  {
    id: "braille-tactile-signage",
    name: "Braille and Tactile Signage",
    categoryId: "ada-wayfinding",
    shortDescription: "Grade 2 Braille and tactile signage",
    longDescription:
      "Professional Braille and tactile signage with certified Grade 2 Braille translation and proper tactile specifications for accessibility compliance.",
    highlightImage: {
      src: "https://i0.wp.com/signcousa.com/wp-content/uploads/2019/06/ada3.jpg?ssl=1&w=1080",
      alt: "Braille and tactile signage systems",
    },
    specifications: [
      "Braille: Certified Grade 2 translation",
      'Characters: Raised 1/32" tactile text',
      "Materials: Durable engraved plastics",
      "Installation: ADA-compliant mounting",
    ],
    benefits: [
      "Certified Braille accuracy",
      "Proper tactile specifications",
      "Durable construction",
      "Professional installation",
    ],
  },
  {
    id: "directional-wayfinding",
    name: "Directional Wayfinding",
    categoryId: "ada-wayfinding",
    shortDescription: "Comprehensive navigation systems",
    longDescription:
      "Complete wayfinding systems including directories, directional signs, and you-are-here maps for intuitive navigation throughout your facility.",
    highlightImage: {
      src: "/products/wayfinding-system.webp",
      alt: "Comprehensive wayfinding system",
    },
    specifications: [
      "System: Coordinated design elements",
      "Materials: Durable aluminum and acrylic",
      "Graphics: Clear iconography and text",
      "Installation: Professional mounting systems",
    ],
    benefits: [
      "Intuitive navigation design",
      "Consistent visual identity",
      "Reduces staff inquiries",
      "Professional appearance",
    ],
  },
  {
    id: "parking-signs-ada-compliant",
    name: "Parking Signs (ADA Compliant)",
    categoryId: "ada-wayfinding",
    shortDescription: "Accessible parking identification",
    longDescription:
      "ADA-compliant parking signs including accessible space identification, van-accessible designations, and proper specifications for legal compliance.",
    highlightImage: {
      src: "/products/ada-parking-signs.webp",
      alt: "ADA compliant parking signage",
    },
    specifications: [
      "Compliance: Federal ADA requirements",
      "Reflectivity: Engineer grade sheeting",
      "Posts: Galvanized steel construction",
      "Installation: Proper height specifications",
    ],
    benefits: [
      "Legal compliance assurance",
      "High-visibility reflective materials",
      "Weatherproof construction",
      "Professional installation",
    ],
  },
  {
    id: "restroom-identification",
    name: "Restroom Identification",
    categoryId: "ada-wayfinding",
    shortDescription: "Compliant restroom signage",
    longDescription:
      "ADA-compliant restroom signs with proper symbols, Braille, and tactile elements meeting all accessibility requirements for public facilities.",
    highlightImage: {
      src: "https://i0.wp.com/signcousa.com/wp-content/uploads/2019/06/ada4.jpg?ssl=1&w=1080",
      alt: "ADA compliant restroom signage",
    },
    specifications: [
      "Symbols: International accessibility symbols",
      "Braille: Grade 2 Braille translation",
      "Mounting: Latch side wall placement",
      "Materials: Durable engraved construction",
    ],
    benefits: [
      "Universal symbol recognition",
      "Full accessibility compliance",
      "Tactile and Braille elements",
      "Professional appearance",
    ],
  },
  {
    id: "evacuation-maps",
    name: "Evacuation Maps",
    categoryId: "ada-wayfinding",
    shortDescription: "Emergency evacuation wayfinding",
    longDescription:
      "Clear evacuation maps and emergency egress signage with tactile elements and high-contrast design for safety compliance and emergency preparedness.",
    highlightImage: {
      src: "/products/evacuation-maps.webp",
      alt: "Emergency evacuation maps and signage",
    },
    specifications: [
      "Maps: Accurate floor plan layouts",
      "Contrast: High-contrast color schemes",
      "Materials: Fire-resistant substrates",
      "Installation: Strategic placement points",
    ],
    benefits: [
      "Clear emergency information",
      "High-contrast visibility",
      "Fire-resistant materials",
      "Strategic positioning",
    ],
  },
  {
    id: "campus-hospital-wayfinding",
    name: "Campus & Hospital Wayfinding",
    categoryId: "ada-wayfinding",
    shortDescription: "Large facility navigation systems",
    longDescription:
      "Comprehensive wayfinding solutions for complex facilities including campuses, hospitals, and multi-building complexes with integrated accessibility features.",
    highlightImage: {
      src: "/products/campus-wayfinding.webp",
      alt: "Campus wayfinding system",
    },
    specifications: [
      "Scale: Multi-building coordination",
      "Materials: Weather-resistant construction",
      "Technology: Optional digital integration",
      "Accessibility: Full ADA compliance",
    ],
    benefits: [
      "Campus-wide coordination",
      "Scalable system design",
      "Digital integration options",
      "Comprehensive accessibility",
    ],
  },

  // Services Products
  {
    id: "design-brand-consultation",
    name: "Design & Brand Consultation",
    categoryId: "services",
    shortDescription: "Complete design and branding services",
    longDescription:
      "Comprehensive design services including logo development, brand guidelines, and visual identity creation that establish strong brand foundations for all your signage needs.",
    highlightImage: {
      src: "/products/design-consultation.webp",
      alt: "Professional design consultation services",
    },
    specifications: [
      "Services: Logo design and brand development",
      "Deliverables: Style guides and asset libraries",
      "Process: Collaborative design development",
      "Timeline: 2-4 weeks typical completion",
    ],
    benefits: [
      "Professional brand development",
      "Consistent visual identity",
      "Comprehensive style guidelines",
      "Expert design consultation",
    ],
  },
  {
    id: "site-surveys-planning",
    name: "Site Surveys & Planning",
    categoryId: "services",
    shortDescription: "Professional site assessment and planning",
    longDescription:
      "Comprehensive site surveys, permit research, and design consultation for optimal signage placement and compliance with local regulations.",
    highlightImage: {
      src: "/products/site-survey.webp",
      alt: "Professional site survey and planning",
    },
    specifications: [
      "Survey: Detailed site measurements",
      "Permits: Local code research",
      "Planning: Optimal placement design",
      "Documentation: Complete project specs",
    ],
    benefits: [
      "Accurate site assessment",
      "Permit compliance assurance",
      "Optimal placement planning",
      "Professional documentation",
    ],
  },
  {
    id: "professional-installation",
    name: "Professional Installation",
    categoryId: "services",
    shortDescription: "Expert signage installation services",
    longDescription:
      "Expert installation services with proper mounting, electrical connections, and structural considerations for all sign types by certified technicians.",
    highlightImage: {
      src: "/products/installation-service.webp",
      alt: "Professional signage installation",
    },
    specifications: [
      "Technicians: Certified installers",
      "Equipment: Professional tools and lifts",
      "Electrical: Licensed electrical work",
      "Warranty: Installation workmanship guarantee",
    ],
    benefits: [
      "Certified installation technicians",
      "Professional equipment and tools",
      "Electrical and structural expertise",
      "Installation warranty coverage",
    ],
  },
  {
    id: "maintenance-repair",
    name: "Maintenance & Repair",
    categoryId: "services",
    shortDescription: "Ongoing maintenance and repair services",
    longDescription:
      "Comprehensive maintenance programs and repair services to keep your signage looking professional and functioning properly throughout its lifecycle.",
    highlightImage: {
      src: "/products/maintenance-service.webp",
      alt: "Professional signage maintenance",
    },
    specifications: [
      "Programs: Scheduled maintenance plans",
      "Response: Emergency repair services",
      "Parts: OEM replacement components",
      "Documentation: Maintenance records",
    ],
    benefits: [
      "Proactive maintenance programs",
      "Emergency repair response",
      "Quality replacement parts",
      "Extended signage lifespan",
    ],
  },
  {
    id: "vehicle-graphics-installation",
    name: "Vehicle Graphics Installation",
    categoryId: "services",
    shortDescription: "Professional vehicle wrap installation",
    longDescription:
      "Expert application of vehicle wraps, window graphics, and specialty installations by certified technicians using premium materials and techniques.",
    highlightImage: {
      src: "/products/vehicle-installation.webp",
      alt: "Professional vehicle graphics installation",
    },
    specifications: [
      "Certification: 3M certified installers",
      "Materials: Premium automotive vinyl",
      "Facility: Climate-controlled bays",
      "Warranty: Installation and material warranty",
    ],
    benefits: [
      "Certified installation expertise",
      "Premium material usage",
      "Controlled environment application",
      "Comprehensive warranty coverage",
    ],
  },
  {
    id: "emergency-services",
    name: "Emergency Services",
    categoryId: "services",
    shortDescription: "24/7 emergency signage support",
    longDescription:
      "Rapid response emergency services for urgent signage repairs, replacements, and installations when your business can't wait for regular service schedules.",
    highlightImage: {
      src: "/products/emergency-service.webp",
      alt: "24/7 emergency signage services",
    },
    specifications: [
      "Response: 24/7 emergency availability",
      "Service: Rapid repair and replacement",
      "Coverage: Local and regional service",
      "Priority: Fast-track processing",
    ],
    benefits: [
      "24/7 emergency response",
      "Rapid service delivery",
      "Business continuity support",
      "Priority processing",
    ],
  },

  // More Category Products
  {
    id: "corporate-signage",
    name: "Corporate Signage",
    categoryId: "more",
    shortDescription: "Enterprise-level corporate identity programs",
    longDescription:
      "Comprehensive corporate signage programs including identity packages, multi-location branding, and enterprise-level solutions for large organizations and franchise systems.",
    highlightImage: {
      src: "/products/corporate-signage.webp",
      alt: "Corporate signage program",
    },
    specifications: [
      "Scale: Multi-location coordination",
      "Standards: Brand consistency guidelines",
      "Management: Dedicated project management",
      "Quality: Enterprise-level quality control",
    ],
    benefits: [
      "Consistent brand representation",
      "Scalable deployment solutions",
      "Dedicated project management",
      "Quality control standards",
    ],
  },
  {
    id: "vehicle-graphics",
    name: "Vehicle Graphics",
    categoryId: "more",
    shortDescription: "Complete vehicle advertising solutions",
    longDescription:
      "Professional vehicle graphics including partial wraps, full wraps, decals, and fleet branding solutions that transform vehicles into mobile advertising platforms.",
    highlightImage: {
      src: "/products/vehicle-graphics.webp",
      alt: "Professional vehicle graphics and wraps",
    },
    gallery: [
      {
        src: "https://i0.wp.com/signcousa.com/wp-content/uploads/2019/06/vgra1.jpg?ssl=1&w=1080",
        title: "Full Vehicle Wraps",
        alt: "Complete vehicle wrap installation",
      },
      {
        src: "https://i0.wp.com/signcousa.com/wp-content/uploads/2019/06/vgra2.jpg?ssl=1&w=1080",
        title: "Partial Wraps",
        alt: "Partial vehicle wrap graphics",
      },
      {
        src: "https://i0.wp.com/signcousa.com/wp-content/uploads/2019/06/vgra3.jpg?ssl=1&w=1080",
        title: "Vehicle Decals",
        alt: "Professional vehicle decals and lettering",
      },
    ],
    specifications: [
      "Materials: Premium 3M and Avery vinyl",
      "Installation: Certified technicians",
      "Durability: 5-7 year lifespan",
      "Warranty: Material and installation coverage",
    ],
    benefits: [
      "Mobile advertising platform",
      "Paint protection benefits",
      "Professional installation",
      "High-impact visual presence",
    ],
  },
  {
    id: "digital-led-signage",
    name: "Digital & LED Signage",
    categoryId: "more",
    shortDescription: "Electronic displays and programmable signage",
    longDescription:
      "Cutting-edge digital signage solutions including LED message centers, digital menu boards, and interactive displays for dynamic messaging and advertising.",
    highlightImage: {
      src: "/products/illuminated-signs.webp",
      alt: "Digital LED signage display",
    },
    specifications: [
      "Technology: LED and LCD displays",
      "Control: Remote content management",
      "Brightness: High-visibility LED output",
      "Software: User-friendly content systems",
    ],
    benefits: [
      "Real-time content updates",
      "Energy-efficient LED technology",
      "Remote management capability",
      "Dynamic content possibilities",
    ],
  },
  {
    id: "trade-show-systems",
    name: "Trade Show Systems",
    categoryId: "more",
    shortDescription: "Professional exhibition and event displays",
    longDescription:
      "Complete trade show display systems including portable exhibits, banner stands, modular displays, and event graphics for professional presentations and marketing events.",
    highlightImage: {
      src: "/products/trade-show-systems.webp",
      alt: "Professional trade show display systems",
    },
    specifications: [
      "Portability: Lightweight travel cases",
      "Setup: Tool-free assembly systems",
      "Graphics: High-resolution fabric printing",
      "Modularity: Expandable display options",
    ],
    benefits: [
      "Professional presentation impact",
      "Easy setup and breakdown",
      "Portable and reusable",
      "Modular expansion capability",
    ],
  },
];
