// @/lib/categories.ts

import { Category } from "@/types/schema";

export const categories: Category[] = [
  {
    id: "interior-signage",
    name: "Interior Signage",
    shortDescription: "Professional indoor signage solutions for offices, retail, and facilities",
    longDescription: "Complete interior signage solutions including window graphics, wall decals, lobby signs, and dimensional letters for professional indoor environments that enhance navigation and reinforce brand identity.",
    copy: {
      overview: "Transform your interior spaces with expertly crafted signage that seamlessly combines functionality with professional aesthetics. Our interior signage solutions enhance navigation, reinforce brand identity, and create welcoming environments that leave lasting impressions on visitors, customers, and employees.",
      benefits: [
        "Enhanced visitor experience through clear wayfinding and navigation",
        "Professional brand representation that builds trust and credibility",
        "Durable materials designed for high-traffic interior environments",
        "Custom design integration that complements your existing architecture"
      ]
    }
  },
  {
    id: "exterior-signage",
    name: "Exterior Signage",
    shortDescription: "Durable outdoor signage for maximum visibility and impact",
    longDescription: "Weather-resistant exterior signage including building signs, dimensional letters, and promotional displays designed to withstand the elements while delivering maximum visual impact.",
    copy: {
      overview: "Make a powerful first impression with exterior signage engineered to withstand the elements while delivering maximum visual impact. Our outdoor signage solutions combine weather-resistant materials with eye-catching design to ensure your business stands out 24/7.",
      benefits: [
        "Weather-resistant construction for year-round durability",
        "High-visibility design that attracts customers day and night",
        "Compliance with local zoning and permit requirements",
        "Professional installation with comprehensive warranty coverage"
      ]
    }
  },
  {
    id: "ada-wayfinding",
    name: "ADA & Wayfinding",
    shortDescription: "Compliant accessibility and navigation signage solutions",
    longDescription: "ADA-compliant signage and comprehensive wayfinding systems including Braille, tactile signs, and directional navigation for accessible environments that welcome all users.",
    copy: {
      overview: "Ensure universal accessibility while creating intuitive navigation with our comprehensive ADA-compliant and wayfinding signage solutions. We combine full regulatory compliance with sophisticated design to create signage systems that welcome all users.",
      benefits: [
        "Full compliance with ADA Title III requirements and guidelines",
        "Grade 2 Braille translation by certified specialists",
        "Proper contrast ratios and tactile character specifications",
        "Comprehensive wayfinding systems that reduce confusion"
      ]
    }
  },
  {
    id: "services",
    name: "Services",
    shortDescription: "Complete signage services from design to maintenance",
    longDescription: "Comprehensive signage services including custom design consultation, logo development, professional installation, maintenance, and ongoing support for all your signage needs from concept to completion.",
    copy: {
      overview: "Beyond creating exceptional signage, SignCo USA provides comprehensive services that ensure your investment delivers maximum value from concept to completion and beyond. Our full-service approach includes custom design services, logo development, professional installation, and ongoing maintenance.",
      benefits: [
        "Complete design services including logo development and brand consultation",
        "Professional installation by certified technicians with proper permits",
        "Ongoing maintenance programs to protect your signage investment",
        "Emergency repair services for urgent signage needs"
      ]
    }
  },
  {
    id: "more",
    name: "More",
    shortDescription: "Specialized signage solutions for unique needs",
    longDescription: "Specialized signage solutions including corporate identity programs, vehicle graphics, digital displays, and trade show systems for businesses with unique branding and marketing requirements.",
    copy: {
      overview: "Explore our specialized signage solutions designed for unique business needs and marketing challenges. From enterprise-level corporate programs to mobile advertising and digital displays, we provide innovative solutions that set your business apart.",
      benefits: [
        "Specialized solutions for unique business requirements",
        "Enterprise-level programs for large organizations",
        "Mobile advertising and vehicle graphics expertise",
        "Cutting-edge digital and interactive display technologies"
      ]
    }
  }
];