// @/app/data/products.ts

import { Product } from '@/types/schema';

export const products: Product[] = [
	// Interior Signage Products
	{
		id: 'window-graphics',
		name: 'Window Graphics',
		categoryId: 'interior-signage',
		shortDescription:
			'Enhance your business visibility and aesthetics with custom-designed window graphics. Perfect for branding, promotions, and privacy.',
		longDescription:
			'Transform your storefront or interior windows into dynamic advertising spaces with our high-quality custom window graphics. Whether you need to display your logo, promote a seasonal sale, provide essential information, or add a decorative touch for privacy, our vinyl window graphics are a versatile and impactful solution. We offer a wide range of materials and printing options to ensure your graphics perfectly match your brand and design needs, creating an engaging visual experience for your customers.',
		highlightImage: {
			src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/window-graphics/highlight.jpg',
			alt: 'Window Graphics - Highlight Image',
		},
		gallery: [
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/window-graphics/gallery-0.jpg',
				title: 'Restaurant Window Menu',
				alt: 'Window Graphics - Restaurant Window Menu',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/window-graphics/gallery-1.jpg',
				title: 'Office Privacy Film',
				alt: 'Window Graphics - Office Privacy Film',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/window-graphics/gallery-2.jpg',
				title: 'Retail Store Hours',
				alt: 'Window Graphics - Retail Store Hours',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/window-graphics/gallery-3.jpg',
				title: 'Branded Entrance',
				alt: 'Window Graphics - Branded Entrance',
			},
		],
		specifications: [
			'Durable vinyl material with adhesive backing',
			'Available in opaque, translucent, and perforated options',
			'Full-color, high-resolution printing',
			'UV-resistant inks for longevity',
			'Customizable sizes and shapes',
			'Easy to apply and remove',
		],
		benefits: [
			'Increase brand awareness and visibility',
			'Attract new customers to your business',
			'Communicate promotions and special offers effectively',
			'Enhance privacy and decor',
			'Cost-effective advertising solution',
			'Professional and eye-catching appearance',
		],
	},
	{
		id: 'wall-decals-graphics',
		name: 'Custom Wall Decals & Graphics',
		categoryId: 'interior-signage',
		shortDescription:
			'Transform your interior spaces with high-quality, custom-designed wall decals and graphics. Perfect for branding, decoration, and wayfinding.',
		longDescription:
			'Elevate your office, retail store, or any interior environment with our premium custom wall decals and graphics. We offer a versatile solution to bring your brand to life, create inspiring environments, or provide clear directional information. Our decals are printed on durable, high-performance vinyl that adheres smoothly to most painted surfaces, glass, and other non-porous materials. Available in a wide range of finishes and customizable to any size or design, our wall graphics are an impactful and cost-effective way to enhance your space.',
		highlightImage: {
			src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/wall-decals-graphics/highlight.jpg',
			alt: 'Custom Wall Decals & Graphics - Highlight Image',
		},
		gallery: [
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/wall-decals-graphics/gallery-0.jpg',
				title: 'Office Motivational Quote Decal',
				alt: 'Custom Wall Decals & Graphics - Office Motivational Quote Decal',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/wall-decals-graphics/gallery-1.jpg',
				title: 'Retail Store Product Showcase Graphic',
				alt: 'Custom Wall Decals & Graphics - Retail Store Product Showcase Graphic',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/wall-decals-graphics/gallery-2.jpg',
				title: 'Wayfinding Decal on a Hallway Wall',
				alt: 'Custom Wall Decals & Graphics - Wayfinding Decal on a Hallway Wall',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/wall-decals-graphics/gallery-3.jpg',
				title: 'Window Graphic for Storefront',
				alt: 'Custom Wall Decals & Graphics - Window Graphic for Storefront',
			},
		],
		specifications: [
			'High-resolution digital printing',
			'Durable, long-lasting vinyl material',
			'Removable adhesive options available',
			'Suitable for smooth, clean, non-porous surfaces',
			'Available in custom sizes and shapes',
			'Matte and gloss finish options',
		],
		benefits: [
			'Enhances brand visibility and recognition',
			'Creates a unique and engaging atmosphere',
			'Cost-effective interior branding solution',
			'Easy to apply and remove (with removable options)',
			'Highly customizable to fit any design need',
			'Durable and resistant to fading',
		],
	},
	{
		id: 'lobby-signs',
		name: 'Lobby Signs',
		categoryId: 'interior-signage',
		shortDescription:
			"Create a lasting first impression with custom lobby signs that reflect your brand's professionalism and identity.",
		longDescription:
			"Elevate your business's reception area with expertly crafted lobby signs. Our custom-designed signs are the perfect way to welcome visitors, reinforce your brand, and convey a sense of prestige and stability. We offer a wide range of materials, finishes, and styles, from elegant brushed metal and acrylic to dimensional lettering and illuminated options, ensuring your lobby sign perfectly matches your company's aesthetic and vision.",
		specifications: [
			'Materials: Brushed aluminum, stainless steel, brass, acrylic, PVC, wood',
			'Finishes: Polished, brushed, anodized, painted, faux finishes',
			'Mounting options: Wall-mounted, standoff mounts, adhesive, suspended',
			'Lettering styles: Cut vinyl, routed letters, dimensional letters, engraved plaques',
			'Customizability: Full color printing, custom shapes, backlighting, illuminated options',
		],
		benefits: [
			'Enhances brand recognition and professionalism',
			'Creates a welcoming and impressive first impression',
			'Durable and high-quality construction',
			'Customizable to match any brand identity',
			'Increases perceived value and credibility of your business',
		],
		highlightImage: {
			src: 'https://firewave-console.s3.us-west-2.amazonaws.com/signco/1758480799731-lobby-signs-highlight.jpg',
			alt: "Create a lasting first impression with custom lobby signs that reflect your brand's professionalism and identity.",
		},
		gallery: [
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/signco/1758480807579-lobby-signs-gallery-0.jpg',
				title: 'Acrylic Dimensional Letters',
				alt: 'Lobby Signs - Acrylic Dimensional Letters',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/signco/1758480816875-lobby-signs-gallery-1.jpg',
				title: 'Brushed Metal Plaque',
				alt: 'Lobby Signs - Brushed Metal Plaque',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/signco/1758480824754-lobby-signs-gallery-2.jpg',
				title: 'Backlit Signage',
				alt: 'Lobby Signs - Backlit Signage',
			},
		],
	},
	{
		id: 'directory-signs',
		name: 'Interior Directory Signs',
		categoryId: 'interior-signage',
		shortDescription:
			'Clearly guide visitors and employees with professional interior directory signs. Enhance navigation and branding within your facility.',
		longDescription:
			'Effective wayfinding is crucial for any business, institution, or public space. Our Interior Directory Signs are designed to provide clear, concise, and aesthetically pleasing directions to help people navigate your building with ease. From multi-tenant office buildings and hospitals to schools and retail centers, these signs are essential for a smooth visitor experience. We offer a wide range of materials, finishes, and customization options to perfectly match your interior design and branding, ensuring your directional signage is both functional and visually appealing.',
		highlightImage: {
			src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/directory-signs/highlight.jpg',
			alt: 'Interior Directory Signs - Highlight Image',
		},
		gallery: [
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/directory-signs/gallery-0.jpg',
				title: 'Office Directory Example',
				alt: 'Interior Directory Signs - Office Directory Example',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/directory-signs/gallery-1.jpg',
				title: 'Hospital Wayfinding Sign',
				alt: 'Interior Directory Signs - Hospital Wayfinding Sign',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/directory-signs/gallery-2.jpg',
				title: 'Retail Directory Sign',
				alt: 'Interior Directory Signs - Retail Directory Sign',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/directory-signs/gallery-3.jpg',
				title: 'Close-up View',
				alt: 'Interior Directory Signs - Close-up View',
			},
		],
		specifications: [
			'Available in various materials including acrylic, brushed aluminum, wood, and PVC.',
			'Customizable sizes to fit any wall space or corridor.',
			'High-resolution graphics and text for maximum readability.',
			'Durable construction for long-lasting use in high-traffic areas.',
			'Options for single-sided or double-sided display.',
			'Mounting hardware included for easy installation (standoffs, double-sided tape, VHB).',
		],
		benefits: [
			'Improves visitor experience and reduces confusion.',
			'Enhances building accessibility and usability.',
			'Reinforces brand identity with custom designs.',
			'Organizes complex spaces effectively.',
			'Durable and easy to maintain.',
			'Cost-effective wayfinding solution.',
		],
	},
	{
		id: 'room-office-identification',
		name: 'Room & Office Identification',
		categoryId: 'interior-signage',
		shortDescription: 'Door signs and office nameplates',
		longDescription:
			'Professional office identification including door signs, nameplates, and departmental signage that provides clear wayfinding and professional presentation.',
		highlightImage: {
			src: 'https://i0.wp.com/signcousa.com/wp-content/uploads/2019/06/epla2.jpg?ssl=1&w=1080',
			alt: 'Professional door signs and nameplates',
		},
		specifications: [
			'Materials: Engraved plastic, metal, acrylic',
			'Mounting: Adhesive or mechanical',
			'Text: Laser engraved or printed',
			'Compliance: ADA options available',
		],
		benefits: [
			'Consistent professional appearance',
			'Durable engraved text',
			'Easy installation',
			'Customizable designs',
		],
	},
	{
		id: 'safety-compliance-signs',
		name: 'Safety & Compliance Signs',
		categoryId: 'interior-signage',
		shortDescription:
			'Ensure a safe and compliant environment with our high-quality safety and compliance signs. Clearly communicate important information and regulations.',
		longDescription:
			'Our Safety & Compliance Signs are designed to meet regulatory requirements and promote a secure environment in workplaces, public spaces, and facilities. Manufactured with durable materials and clear, legible text, these signs effectively convey essential safety instructions, warnings, emergency exits, and regulatory information. We offer a wide range of standard and customizable options to suit your specific needs, ensuring compliance and peace of mind.',
		highlightImage: {
			src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/safety-compliance-signs/highlight.jpg',
			alt: 'Safety & Compliance Signs - Highlight Image',
		},
		gallery: [
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/safety-compliance-signs/gallery-0.jpg',
				title: 'Restroom Signage',
				alt: 'Safety & Compliance Signs - Restroom Signage',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/safety-compliance-signs/gallery-1.jpg',
				title: 'Warning Sign',
				alt: 'Safety & Compliance Signs - Warning Sign',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/safety-compliance-signs/gallery-2.jpg',
				title: 'Fire Safety Sign',
				alt: 'Safety & Compliance Signs - Fire Safety Sign',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/safety-compliance-signs/gallery-3.jpg',
				title: 'Information Sign',
				alt: 'Safety & Compliance Signs - Information Sign',
			},
		],
		specifications: [
			'Durable materials: Aluminum, PVC, and adhesive vinyl options',
			'Standard and custom sizes available',
			'High-contrast, easy-to-read text and graphics',
			'Resistant to fading and harsh conditions',
			'Adheres to industry safety standards (e.g., OSHA, ANSI)',
			'Available with tamper-resistant features',
		],
		benefits: [
			'Enhance workplace safety and reduce risks',
			'Ensure compliance with legal and regulatory requirements',
			'Clearly communicate emergency procedures and exits',
			'Improve overall facility management and organization',
			'Durable and long-lasting performance',
			'Customizable to specific safety needs',
		],
	},
	{
		id: 'floor-graphics',
		name: 'Custom Floor Graphics',
		categoryId: 'interior-signage',
		shortDescription:
			'Enhance wayfinding, branding, and safety with durable, eye-catching custom floor graphics. Perfect for any indoor environment.',
		longDescription:
			'Our custom floor graphics offer a versatile and impactful way to communicate with your audience directly on the ground. Made from durable, slip-resistant vinyl, these graphics are designed to withstand high foot traffic in retail stores, offices, schools, hospitals, and event venues. They are ideal for directional signage, brand reinforcement, promotional messages, safety warnings, or even decorative elements. Easy to apply and remove, our floor graphics provide a cost-effective solution for temporary or long-term indoor signage needs without damaging your existing flooring.',
		highlightImage: {
			src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/floor-graphics/highlight.jpg',
			alt: 'Custom Floor Graphics - Highlight Image',
		},
		gallery: [
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/floor-graphics/gallery-0.jpg',
				title: 'Wayfinding in an Office',
				alt: 'Custom Floor Graphics - Wayfinding in an Office',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/floor-graphics/gallery-1.jpg',
				title: 'Branding in a Showroom',
				alt: 'Custom Floor Graphics - Branding in a Showroom',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/floor-graphics/gallery-2.jpg',
				title: 'Safety Information',
				alt: 'Custom Floor Graphics - Safety Information',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/floor-graphics/gallery-3.jpg',
				title: 'Event Promotion',
				alt: 'Custom Floor Graphics - Event Promotion',
			},
		],
		specifications: [
			'Material: High-tack, slip-resistant vinyl with textured laminate',
			'Durability: Suitable for medium to heavy foot traffic',
			'Application: Applies to smooth, clean, dry indoor floors (tile, sealed concrete, linoleum, carpet)',
			'Printing: Full-color, high-resolution digital printing',
			'Customization: Available in various shapes, sizes, and finishes',
			'Removability: Designed for clean removal without residue',
		],
		benefits: [
			'Improves customer flow and wayfinding',
			'Reinforces brand identity and messaging',
			'Enhances safety and compliance',
			'Creates engaging and interactive experiences',
			'Cost-effective and easy to implement',
			'Durable and long-lasting for indoor use',
		],
	},
	{
		id: 'trade-show-displays',
		name: 'Trade Show Displays',
		categoryId: 'interior-signage',
		shortDescription:
			'Create a memorable presence at your next event with our custom-designed trade show displays. Professionally crafted to capture attention and communicate your brand effectively.',
		longDescription:
			"Elevate your brand's visibility at any exhibition or trade show with our premium selection of custom trade show displays. Designed for maximum impact and portability, our displays are built to impress your audience and deliver your message with clarity. From eye-catching banner stands and pop-up displays to sophisticated booth structures, we offer solutions tailored to your specific needs and budget. Each display is crafted with high-quality materials for durability and a polished, professional finish, ensuring you make a lasting impression.",
		highlightImage: {
			src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/trade-show-systems/highlight.jpg',
			alt: 'Trade Show Displays - Highlight Image',
		},
		gallery: [
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/trade-show-systems/gallery-0.jpg',
				title: 'Pop-Up Display Example',
				alt: 'Trade Show Displays - Pop-Up Display Example',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/trade-show-systems/gallery-1.jpg',
				title: 'Banner Stand Variation',
				alt: 'Trade Show Displays - Banner Stand Variation',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/trade-show-systems/gallery-2.jpg',
				title: 'Booth Structure Detail',
				alt: 'Trade Show Displays - Booth Structure Detail',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/trade-show-systems/gallery-3.jpg',
				title: 'Gallery 4',
				alt: 'Trade Show Displays - Gallery 4',
			},
		],
		specifications: [
			'Durable, lightweight aluminum or fiberglass frames',
			'High-resolution, vibrant fabric or vinyl graphics',
			'Variety of sizes and configurations available',
			'Easy setup and breakdown for convenient transport',
			'Includes carrying cases or bags for protection',
			'Optional integrated lighting and shelving solutions',
		],
		benefits: [
			'Enhances brand visibility and recognition',
			'Attracts attendees and generates leads',
			'Provides a professional and cohesive brand image',
			'Portable and reusable for multiple events',
			'Customizable to fit any booth space and design',
			'Cost-effective marketing investment for trade shows',
		],
	},
	{
		id: 'point-purchase-displays',
		name: 'Point of Purchase Displays',
		categoryId: 'interior-signage',
		shortDescription: 'Retail and POP displays',
		longDescription:
			'Eye-catching point-of-purchase displays for retail environments and product promotion that drive sales and enhance customer engagement.',
		highlightImage: {
			src: 'https://i0.wp.com/signcousa.com/wp-content/uploads/2019/06/dps3.jpg?ssl=1&w=1080',
			alt: 'Retail point of purchase display',
		},
		specifications: [
			'Materials: Corrugated, acrylic, metal options',
			'Assembly: Easy setup designs',
			'Printing: Full-color graphics',
			'Placement: Counter or floor standing',
		],
		benefits: [
			'Impulse purchase encouragement',
			'Brand visibility enhancement',
			'Cost-effective marketing',
			'Easy product updates',
		],
	},
	{
		id: 'menu-boards',
		name: 'Custom Menu Boards',
		categoryId: 'interior-signage',
		shortDescription:
			'Clearly display your offerings with durable and attractive custom menu boards, perfect for restaurants, cafes, and retail environments.',
		longDescription:
			'Elevate your customer experience with our high-quality custom menu boards. Designed for clarity and impact, these boards are essential for any establishment looking to showcase their products effectively. Whether you need a simple chalk-style board for a cozy cafe, a sleek digital display for a modern restaurant, or a durable, easy-to-clean option for a busy food truck, we offer solutions tailored to your brand and needs. Our menu boards are built to last, ensuring your specials and pricing are always presented professionally and legibly.',
		highlightImage: {
			src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/menu-boards/highlight.jpg',
			alt: 'Custom Menu Boards - Highlight Image',
		},
		gallery: [
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/menu-boards/gallery-0.jpg',
				title: 'Restaurant Wall Menu',
				alt: 'Custom Menu Boards - Restaurant Wall Menu',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/menu-boards/gallery-1.jpg',
				title: 'Cafe Counter Display',
				alt: 'Custom Menu Boards - Cafe Counter Display',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/menu-boards/gallery-2.jpg',
				title: 'Drive-Thru Menu',
				alt: 'Custom Menu Boards - Drive-Thru Menu',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/menu-boards/gallery-3.jpg',
				title: 'Digital Menu Board',
				alt: 'Custom Menu Boards - Digital Menu Board',
			},
		],
		specifications: [
			'Available in various materials including acrylic, wood, metal, and durable PVC.',
			'Customizable sizes to fit any space, from small counter displays to large wall-mounted boards.',
			'High-resolution printing for crisp text and vibrant graphics.',
			'Options for chalk-art, printed vinyl graphics, or integrated digital screens.',
			'Easy to clean and maintain for long-lasting use.',
			'Includes mounting hardware and installation guides.',
		],
		benefits: [
			'Enhances customer ordering experience with clear, organized information.',
			'Reinforces brand identity through custom designs and finishes.',
			'Durable construction ensures longevity and reduces replacement costs.',
			'Versatile options to suit any business type and aesthetic.',
			'Professional presentation of your menu items and pricing.',
			'Available with quick turnaround times for urgent needs.',
		],
	},
	{
		id: 'dimensional-letters-interior',
		name: 'Dimensional Letters',
		categoryId: 'interior-signage',
		shortDescription: '3D letters and logos for interiors',
		longDescription:
			'Professional dimensional lettering in various materials for interior applications that create impressive brand statements and architectural integration.',
		highlightImage: {
			src: 'https://i0.wp.com/signcousa.com/wp-content/uploads/2019/06/dl1.jpg?ssl=1&w=1080',
			alt: 'Dimensional letters in lobby setting',
		},
		specifications: [
			'Materials: Acrylic, metal, foam, wood',
			'Thickness: 1/4" to 2" options',
			'Mounting: Stud or adhesive mount',
			'Finish: Painted, brushed, or natural',
		],
		benefits: [
			'Three-dimensional impact',
			'Premium material options',
			'Custom color matching',
			'Professional installation',
		],
	},

	// Exterior Signage Products
	{
		id: 'building-mounted-signs',
		name: 'Building-Mounted Signs',
		categoryId: 'exterior-signage',
		shortDescription: 'Facade and building identification signs',
		longDescription:
			'Professional building-mounted signage including facade signs, channel letters, and illuminated displays that provide maximum visibility and architectural integration.',
		highlightImage: {
			src: 'https://i0.wp.com/signcousa.com/wp-content/uploads/2019/06/dps2.jpg?ssl=1&w=1080',
			alt: 'Professional building-mounted signage',
		},
		specifications: [
			'Materials: Aluminum, steel, acrylic',
			'Weather rating: All-weather construction',
			'Lighting: LED illumination options',
			'Mounting: Engineered attachment systems',
		],
		benefits: [
			'Maximum visibility impact',
			'Weather-resistant construction',
			'Energy-efficient LED lighting',
			'Professional engineering',
		],
	},
	{
		id: 'dimensional-letters-exterior',
		name: 'Dimensional Letters',
		categoryId: 'exterior-signage',
		shortDescription: '3D letters for building exteriors',
		longDescription:
			'Weather-resistant dimensional lettering in metal, acrylic, and illuminated options for maximum outdoor impact and long-lasting brand presence.',
		highlightImage: {
			src: 'https://i0.wp.com/signcousa.com/wp-content/uploads/2019/06/dl2.jpg?ssl=1&w=1080',
			alt: 'Exterior dimensional letters with lighting',
		},
		specifications: [
			'Materials: Marine-grade aluminum, stainless steel',
			'Illumination: LED front or back-lit',
			'Weather rating: All-climate durability',
			'Mounting: Engineered structural mounting',
		],
		benefits: [
			'All-weather durability',
			'24/7 visibility with lighting',
			'Premium material construction',
			'Architectural integration',
		],
	},
	{
		id: 'blade-signs',
		name: 'Blade Signs',
		categoryId: 'exterior-signage',
		shortDescription: 'Projecting storefront signs',
		longDescription:
			'Double-sided blade signs perfect for storefronts and business identification with maximum street visibility and pedestrian appeal.',
		highlightImage: {
			src: 'https://i0.wp.com/signcousa.com/wp-content/uploads/2019/06/dl3.jpg?ssl=1&w=1080',
			alt: 'Professional blade sign installation',
		},
		specifications: [
			'Construction: Steel or aluminum frame',
			'Graphics: Digital print or vinyl',
			'Lighting: Optional LED illumination',
			'Mounting: Building-specific brackets',
		],
		benefits: [
			'Double-sided visibility',
			'Pedestrian eye-level placement',
			'Custom shape capabilities',
			'Lighting options for night visibility',
		],
	},
	{
		id: 'a-frame-sidewalk-signs',
		name: 'A-Frame Sidewalk Signs',
		categoryId: 'exterior-signage',
		shortDescription:
			'Attract foot traffic with durable and eye-catching A-frame sidewalk signs. Perfect for directing customers and showcasing promotions.',
		longDescription:
			'Boost your business visibility with our premium A-frame sidewalk signs. Engineered for durability and weather resistance, these signs are ideal for retail stores, restaurants, cafes, and any business looking to capture attention from passersby. Available in various materials and customizable with vibrant, fade-resistant graphics, our A-frames provide an effective and economical way to communicate your message, highlight daily specials, or guide customers to your entrance.',
		specifications: [
			'Heavy-duty frame construction (metal or durable plastic)',
			'Weather-resistant and UV-protected graphics',
			'Available in multiple sizes (e.g., 24"x36", 36"x48")',
			'Quick-change graphic system for easy updates',
			'Collapsible design for convenient storage and transport',
		],
		benefits: [
			'Increase walk-in traffic and sales',
			'Enhance brand visibility and curb appeal',
			'Flexible messaging for daily specials or events',
			'Cost-effective advertising solution',
			'Easy to deploy and relocate',
		],
		highlightImage: {
			src: 'https://firewave-console.s3.us-west-2.amazonaws.com/signco/1758479272064-signco-1758479272050.jpg',
			alt: 'Attract foot traffic with durable and eye-catching A-frame sidewalk signs. Perfect for directing customers and showcasing promotions.',
		},
		gallery: [
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/signco/1758479272064-signco-1758479272050.jpg',
				title: 'A-Frame Sign Placement',
				alt: 'A-Frame Sidewalk Signs - A-Frame Sign Placement',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/signco/1758479272064-signco-1758479272050.jpg',
				title: 'Customizable A-Frame Designs',
				alt: 'A-Frame Sidewalk Signs - Customizable A-Frame Designs',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/signco/1758479272064-signco-1758479272050.jpg',
				title: 'Durable A-Frame Materials',
				alt: 'A-Frame Sidewalk Signs - Durable A-Frame Materials',
			},
		],
	},
	{
		id: 'banners-flags',
		name: 'Banners & Flags',
		categoryId: 'exterior-signage',
		shortDescription: 'Promotional banners and flag displays',
		longDescription:
			'Durable vinyl banners, feather flags, and promotional displays for outdoor advertising and events that maximize visibility and impact.',
		highlightImage: {
			src: 'https://i0.wp.com/signcousa.com/wp-content/uploads/2019/06/banner1.jpg?ssl=1&w=1080',
			alt: 'Professional vinyl banners and flags',
		},
		specifications: [
			'Material: 13oz vinyl banner material',
			'Hardware: Grommets and reinforced edges',
			'Printing: Full-color digital printing',
			'Sizes: Standard and custom dimensions',
		],
		benefits: [
			'Weather-resistant materials',
			'Vibrant color printing',
			'Cost-effective advertising',
			'Quick installation',
		],
	},
	{
		id: 'parking-lot-signs',
		name: 'Parking Lot Signs',
		categoryId: 'exterior-signage',
		shortDescription:
			'Clearly guide traffic and inform visitors with durable and highly visible parking lot signs. Essential for organization and safety in any facility.',
		longDescription:
			"Our parking lot signs are engineered for maximum visibility and longevity, ensuring your facility's traffic flow is managed efficiently and safely. Constructed from weather-resistant materials, these signs withstand the elements while maintaining their clear messaging. Whether you need directional signs, reserved parking indicators, speed limit postings, or informational notices, we provide a comprehensive range of solutions to meet your specific needs. Enhance user experience and prevent confusion with professional, compliant parking signage.",
		highlightImage: {
			src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/parking-lot-signs/highlight.jpg',
			alt: 'Parking Lot Signs - Highlight Image',
		},
		gallery: [
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/parking-lot-signs/gallery-0.jpg',
				title: 'Directional Parking Signage',
				alt: 'Parking Lot Signs - Directional Parking Signage',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/parking-lot-signs/gallery-1.jpg',
				title: 'Speed Limit Sign',
				alt: 'Parking Lot Signs - Speed Limit Sign',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/parking-lot-signs/gallery-2.jpg',
				title: 'Reserved Parking Sign',
				alt: 'Parking Lot Signs - Reserved Parking Sign',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/parking-lot-signs/gallery-3.jpg',
				title: 'Parking Lot Numbering',
				alt: 'Parking Lot Signs - Parking Lot Numbering',
			},
		],
		specifications: [
			'Durable aluminum or high-density polyethylene (HDPE) construction',
			'UV-resistant inks and protective coatings for fade prevention',
			'Variety of standard sizes (e.g., 12"x18", 18"x24", 24"x36")',
			'Standard mounting holes for easy installation on posts or walls',
			'Designed to meet MUTCD (Manual on Uniform Traffic Control Devices) guidelines where applicable',
			'Available in reflective and non-reflective finishes',
		],
		benefits: [
			'Improves traffic flow and organization',
			'Enhances safety for drivers and pedestrians',
			'Clearly communicates parking regulations and information',
			'Withstands harsh weather conditions for long-term use',
			'Customizable options to match branding and specific needs',
			'Increases facility accessibility and user satisfaction',
		],
	},
	{
		id: 'monument-signs',
		name: 'Monument Signs',
		categoryId: 'exterior-signage',
		shortDescription:
			'Create a lasting first impression with durable and attractive monument signs, perfect for establishing your business presence.',
		longDescription:
			'Monument signs are ground-mounted structures that provide a prominent and permanent branding opportunity for businesses and communities. Constructed from durable materials like stone, brick, metal, or high-density urethane (HDU), these signs are built to withstand the elements and convey a sense of stability and professionalism. Ideal for office parks, retail centers, residential communities, and corporate campuses, monument signs clearly identify your location and enhance curb appeal. We offer custom design services to create a monument sign that perfectly complements your architecture and brand identity.',
		specifications: [
			'Materials: Stone, brick, stucco, metal, aluminum, high-density urethane (HDU)',
			'Customizable dimensions to fit site requirements',
			'Weather-resistant finishes and construction',
			'Integrated lighting options (LED, internal illumination)',
			'Professional installation services',
			'Variety of architectural styles and finishes',
		],
		benefits: [
			'Enhances brand visibility and recognition',
			'Provides clear directional information',
			'Increases property value and curb appeal',
			'Durable construction for long-term use',
			'Customizable to match any architectural style',
			'Conveys professionalism and stability',
		],
		highlightImage: {
			src: 'https://firewave-console.s3.us-west-2.amazonaws.com/signco/1758481328091-monument-signs-highlight.jpg',
			alt: 'Create a lasting first impression with durable and attractive monument signs, perfect for establishing your business presence.',
		},
		gallery: [
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/signco/1758481337593-monument-signs-gallery-0.jpg',
				title: 'Office Park Entrance',
				alt: 'Monument Signs - Office Park Entrance',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/signco/1758481347393-monument-signs-gallery-1.jpg',
				title: 'Retail Center Identification',
				alt: 'Monument Signs - Retail Center Identification',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/signco/1758481355809-monument-signs-gallery-2.jpg',
				title: 'Community Entrance Signage',
				alt: 'Monument Signs - Community Entrance Signage',
			},
		],
	},
	{
		id: 'real-estate-signs',
		name: 'Real Estate Signs',
		categoryId: 'exterior-signage',
		shortDescription:
			'Professional and durable real estate signs designed to attract buyers and sellers. Available in various styles including yard signs, rider signs, and large format banners.',
		longDescription:
			"Our real estate signs are crafted to make a lasting impression and effectively market properties. We offer a comprehensive range of solutions, from sturdy yard signs that clearly display 'For Sale' or 'For Lease' information, to customizable rider signs that add essential details like agent contact information or open house hours. Built with weather-resistant materials, our signs are designed to withstand the elements and maintain visibility in any condition. Enhance your property listings with professional signage that stands out and attracts attention.",
		highlightImage: {
			src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/real-estate-signs/highlight.jpg',
			alt: 'Real Estate Signs - Highlight Image',
		},
		gallery: [
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/real-estate-signs/gallery-0.jpg',
				title: 'Rider Sign Detail',
				alt: 'Real Estate Signs - Rider Sign Detail',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/real-estate-signs/gallery-1.jpg',
				title: 'Open House Signage',
				alt: 'Real Estate Signs - Open House Signage',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/real-estate-signs/gallery-2.jpg',
				title: "'For Lease' Signage",
				alt: "Real Estate Signs - 'For Lease' Signage",
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/real-estate-signs/gallery-3.jpg',
				title: 'Gallery 4',
				alt: 'Real Estate Signs - Gallery 4',
			},
		],
		specifications: [
			'Durable corrugated plastic or aluminum construction',
			'UV-resistant inks for vibrant, long-lasting colors',
			'Standard sizes: 18"x24", 24"x36"',
			'Custom sizes and shapes available',
			'Optional H-stakes or ground posts for installation',
			'Double-sided printing for maximum visibility',
		],
		benefits: [
			'Increase property visibility and attract potential buyers',
			'Professional appearance that builds trust',
			'Durable and weather-resistant for long-term use',
			'Customizable to include all necessary information',
			'Cost-effective marketing solution',
			'Quick turnaround times',
		],
	},

	// ADA & Wayfinding Products
	{
		id: 'ada-room-signage',
		name: 'ADA Compliant Room Signage',
		categoryId: 'ada-wayfinding',
		shortDescription:
			'Ensure accessibility and compliance with our high-quality ADA compliant room signage. Available in a variety of finishes and customizable to meet your specific needs.',
		longDescription:
			'Our ADA compliant room signage is meticulously designed to meet the stringent requirements of the Americans with Disabilities Act, ensuring that your facilities are accessible to everyone. Each sign features raised tactile lettering and Grade II Braille, precisely positioned to provide clear and intuitive navigation. Crafted from durable, high-quality materials such as acrylic, metal, or brushed aluminum, these signs offer longevity and a professional aesthetic. Whether for restrooms, offices, conference rooms, or other designated areas, our ADA signage provides a seamless blend of functionality, compliance, and sophisticated design, enhancing the user experience in any commercial or public space.',
		specifications: [
			'Materials: Acrylic, Brushed Aluminum, Engraved Plastic, Metal',
			'Tactile Characters: Raised, sans-serif font (e.g., Helvetica, Arial)',
			'Braille: Grade II compliant, domed',
			'Mounting: Double-sided tape, screws (hardware included)',
			'Standard Sizes: 2"x8", 4"x6", 6"x8", custom sizes available',
			'Color Options: Wide range of standard colors, custom color matching available',
		],
		benefits: [
			'Ensures compliance with ADA accessibility standards',
			'Improves navigation for visually impaired individuals',
			'Durable construction for long-lasting use',
			'Professional and aesthetically pleasing design',
			'Customizable options to match brand and building decor',
			'Clear, legible text and tactile elements',
		],
		highlightImage: {
			src: 'https://firewave-console.s3.us-west-2.amazonaws.com/signco/1758480477581-ada-room-signage-highlight.jpg',
			alt: 'Ensure accessibility and compliance with our high-quality ADA compliant room signage. Available in a variety of finishes and customizable to meet your specific needs.',
		},
		gallery: [
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/signco/1758480485772-ada-room-signage-gallery-0.jpg',
				title: 'Close-up Detail Shot',
				alt: 'ADA Compliant Room Signage - Close-up Detail Shot',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/signco/1758480494784-ada-room-signage-gallery-1.jpg',
				title: 'Installation Context: Office Door',
				alt: 'ADA Compliant Room Signage - Installation Context: Office Door',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/signco/1758480632594-ada-room-signage-gallery-2.jpg',
				title: 'Design Variation: Restroom Sign',
				alt: 'ADA Compliant Room Signage - Design Variation: Restroom Sign',
			},
		],
	},
	{
		id: 'braille-tactile-signage',
		name: 'Braille and Tactile Signage',
		categoryId: 'ada-wayfinding',
		shortDescription: 'Grade 2 Braille and tactile signage',
		longDescription:
			'Professional Braille and tactile signage with certified Grade 2 Braille translation and proper tactile specifications for accessibility compliance.',
		highlightImage: {
			src: 'https://i0.wp.com/signcousa.com/wp-content/uploads/2019/06/ada3.jpg?ssl=1&w=1080',
			alt: 'Braille and tactile signage systems',
		},
		specifications: [
			'Braille: Certified Grade 2 translation',
			'Characters: Raised 1/32" tactile text',
			'Materials: Durable engraved plastics',
			'Installation: ADA-compliant mounting',
		],
		benefits: [
			'Certified Braille accuracy',
			'Proper tactile specifications',
			'Durable construction',
			'Professional installation',
		],
	},
	{
		id: 'directional-wayfinding',
		name: 'Directional Wayfinding Signs',
		categoryId: 'ada-wayfinding',
		shortDescription:
			'Clearly guide visitors and employees with professional directional wayfinding signs. Enhance navigation and accessibility in any facility.',
		longDescription:
			'Effective wayfinding is crucial for any building or campus. Our directional wayfinding signs are expertly designed to provide clear, concise, and intuitive navigation for all users, including those with disabilities. We offer a variety of materials, finishes, and customization options to seamlessly integrate with your existing architecture and branding. From simple directional arrows to complex multi-sign systems, we ensure your visitors can easily find their way, reducing confusion and improving their overall experience. Our signs meet ADA compliance standards, ensuring accessibility for everyone.',
		highlightImage: {
			src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/directional-wayfinding/highlight.jpg',
			alt: 'Directional Wayfinding Signs - Highlight Image',
		},
		gallery: [
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/directional-wayfinding/gallery-0.jpg',
				title: 'Wayfinding at Building Entrance',
				alt: 'Directional Wayfinding Signs - Wayfinding at Building Entrance',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/directional-wayfinding/gallery-1.jpg',
				title: 'ADA Compliant Restroom Sign',
				alt: 'Directional Wayfinding Signs - ADA Compliant Restroom Sign',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/directional-wayfinding/gallery-2.jpg',
				title: 'Campus Wayfinding System',
				alt: 'Directional Wayfinding Signs - Campus Wayfinding System',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/directional-wayfinding/gallery-3.jpg',
				title: 'Multi-Lingual Wayfinding',
				alt: 'Directional Wayfinding Signs - Multi-Lingual Wayfinding',
			},
		],
		specifications: [
			'Available in brushed aluminum, polished brass, acrylic, and durable PVC.',
			'Standard sizes range from 4"x6" to 12"x18", custom sizes available.',
			'High-contrast lettering and pictograms for maximum readability.',
			'ADA compliant tactile characters and Grade 2 Braille.',
			'Mounting options include adhesive backing, screws, or standoffs.',
			'UV-resistant inks and durable materials for indoor and outdoor use.',
		],
		benefits: [
			'Improves visitor and employee experience.',
			'Enhances accessibility for individuals with disabilities.',
			'Reduces confusion and streamlines navigation.',
			'Reinforces brand identity through consistent design.',
			'Durable construction for long-lasting use.',
			'Customizable to fit any space and aesthetic.',
		],
	},
	{
		id: 'parking-signs-ada-compliant',
		name: 'Parking Signs (ADA Compliant)',
		categoryId: 'ada-wayfinding',
		shortDescription:
			'Ensure clear and accessible parking guidance with our ADA-compliant parking signs. Designed for readability and universal access.',
		longDescription:
			'Our ADA-compliant parking signs are essential for directing visitors and employees efficiently while adhering to accessibility standards. These signs are meticulously designed with raised characters, Braille, and appropriate contrast to meet or exceed ADA requirements. Ideal for parking garages, lots, and private roadways, they provide clear directional information for accessible parking spaces, general parking areas, and traffic flow. Constructed from durable materials, these signs are built to withstand various weather conditions, ensuring long-lasting visibility and compliance.',
		highlightImage: {
			src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/parking-signs-ada-compliant/highlight.jpg',
			alt: 'Parking Signs (ADA Compliant) - Highlight Image',
		},
		gallery: [
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/parking-signs-ada-compliant/gallery-0.jpg',
				title: 'Accessible Parking Space Identification',
				alt: 'Parking Signs (ADA Compliant) - Accessible Parking Space Identification',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/parking-signs-ada-compliant/gallery-1.jpg',
				title: 'Parking Directional Sign',
				alt: 'Parking Signs (ADA Compliant) - Parking Directional Sign',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/parking-signs-ada-compliant/gallery-2.jpg',
				title: 'Close-up of ADA Features',
				alt: 'Parking Signs (ADA Compliant) - Close-up of ADA Features',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/parking-signs-ada-compliant/gallery-3.jpg',
				title: 'Parking Lot Compliance',
				alt: 'Parking Signs (ADA Compliant) - Parking Lot Compliance',
			},
		],
		specifications: [
			'Material: Aluminum or durable acrylic',
			'Dimensions: Available in standard sizes (e.g., 12"x18", 18"x24")',
			'Mounting: Pre-drilled holes for post or wall mounting',
			'Text: Raised tactile characters and Grade 2 Braille',
			'Color Contrast: High contrast between text/symbols and background',
			'Compliance: Meets Federal ADA guidelines',
		],
		benefits: [
			'Ensures universal accessibility for all users',
			'Meets legal ADA compliance requirements',
			'Improves navigation and reduces confusion in parking areas',
			'Durable construction for long-term outdoor use',
			'Clear and highly visible messaging',
			'Professional appearance enhances facility image',
		],
	},
	{
		id: 'restroom-identification',
		name: 'Restroom Identification',
		categoryId: 'ada-wayfinding',
		shortDescription: 'Compliant restroom signage',
		longDescription:
			'ADA-compliant restroom signs with proper symbols, Braille, and tactile elements meeting all accessibility requirements for public facilities.',
		highlightImage: {
			src: 'https://i0.wp.com/signcousa.com/wp-content/uploads/2019/06/ada4.jpg?ssl=1&w=1080',
			alt: 'ADA compliant restroom signage',
		},
		specifications: [
			'Symbols: International accessibility symbols',
			'Braille: Grade 2 Braille translation',
			'Mounting: Latch side wall placement',
			'Materials: Durable engraved construction',
		],
		benefits: [
			'Universal symbol recognition',
			'Full accessibility compliance',
			'Tactile and Braille elements',
			'Professional appearance',
		],
	},
	{
		id: 'evacuation-maps',
		name: 'Evacuation Maps',
		categoryId: 'ada-wayfinding',
		shortDescription:
			'Clear and compliant evacuation maps essential for building safety and emergency preparedness.',
		longDescription:
			'Ensure the safety of occupants with our custom-designed evacuation maps. Professionally designed and strategically placed, these maps provide critical information during emergencies, guiding individuals to safety efficiently. We adhere to all ADA and local building code requirements, ensuring your maps are not only informative but also fully compliant. Our maps feature clear directional arrows, exit routes, assembly points, and the location of safety equipment, all presented in an easy-to-understand format.',
		highlightImage: {
			src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/evacuation-maps/highlight.jpg',
			alt: 'Evacuation Maps - Highlight Image',
		},
		gallery: [
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/evacuation-maps/gallery-0.jpg',
				title: 'Hallway Installation',
				alt: 'Evacuation Maps - Hallway Installation',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/evacuation-maps/gallery-1.jpg',
				title: 'Close-up View',
				alt: 'Evacuation Maps - Close-up View',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/evacuation-maps/gallery-2.jpg',
				title: 'Hotel Corridor',
				alt: 'Evacuation Maps - Hotel Corridor',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/evacuation-maps/gallery-3.jpg',
				title: 'Assembly Point Indicator',
				alt: 'Evacuation Maps - Assembly Point Indicator',
			},
		],
		specifications: [
			'Durable, non-glare materials (e.g., brushed aluminum, acrylic)',
			'High-contrast, legible text and graphics',
			'ADA-compliant tactile characters and Braille (where applicable)',
			'Glow-in-the-dark options available for extended visibility',
			'Standard sizes (e.g., 18"x24", 24"x36") or custom sizing',
			'Moisture and UV resistant for longevity',
		],
		benefits: [
			'Enhances building safety and emergency preparedness',
			'Meets and exceeds ADA and building code compliance',
			'Provides clear, concise directions during critical situations',
			'Customizable to specific building layouts and emergency plans',
			'Durable construction for long-term use',
			'Improves occupant confidence and peace of mind',
		],
	},
	{
		id: 'campus-hospital-wayfinding',
		name: 'Campus & Hospital Wayfinding Signage',
		categoryId: 'ada-wayfinding',
		shortDescription:
			'Navigate complex environments with clear, accessible, and durable wayfinding signage solutions designed for campuses and hospitals.',
		longDescription:
			'Effective wayfinding is crucial in large institutions like universities and hospitals, where clear directions can reduce stress and improve the user experience. Our comprehensive wayfinding signage systems are designed to meet the unique challenges of these environments. We offer a range of durable, compliant, and visually intuitive signs, including directional signs, room identification, emergency exit markers, and building directories, all crafted to meet ADA standards for accessibility. Enhance navigation, ensure safety, and project a professional image with our custom wayfinding solutions.',
		highlightImage: {
			src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/campus-hospital-wayfinding/highlight.jpg',
			alt: 'Campus & Hospital Wayfinding Signage - Highlight Image',
		},
		gallery: [
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/campus-hospital-wayfinding/gallery-0.jpg',
				title: 'ADA Room Identification',
				alt: 'Campus & Hospital Wayfinding Signage - ADA Room Identification',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/campus-hospital-wayfinding/gallery-1.jpg',
				title: 'Building Directory',
				alt: 'Campus & Hospital Wayfinding Signage - Building Directory',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/campus-hospital-wayfinding/gallery-2.jpg',
				title: 'Outdoor Wayfinding Post',
				alt: 'Campus & Hospital Wayfinding Signage - Outdoor Wayfinding Post',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/campus-hospital-wayfinding/gallery-3.jpg',
				title: 'Interior Directional Sign',
				alt: 'Campus & Hospital Wayfinding Signage - Interior Directional Sign',
			},
		],
		specifications: [
			'Materials: High-impact acrylic, brushed aluminum, durable PVC, and weather-resistant vinyl.',
			'ADA Compliance: Meets all federal ADA guidelines for tactile characters, Braille, and mounting height.',
			'Durability: UV-resistant inks and coatings for longevity in high-traffic indoor and outdoor areas.',
			'Customization: Available in various sizes, shapes, and finishes to match architectural aesthetics.',
			'Mounting Options: Wall-mounted, suspended, free-standing stanchions, and integrated into existing structures.',
		],
		benefits: [
			'Improves navigation for visitors, patients, and students.',
			'Ensures accessibility for individuals with disabilities.',
			'Enhances safety with clear emergency exit and information signage.',
			'Customizable to fit any campus or hospital branding.',
			'Durable construction for long-term use in demanding environments.',
			'Reduces inquiries and improves operational efficiency.',
		],
	},

	// Services Products
	{
		id: 'design-brand-consultation',
		name: 'Design & Brand Consultation',
		categoryId: 'services',
		shortDescription:
			'Expert design and branding services to create impactful signage that elevates your business presence.',
		longDescription:
			"Our comprehensive Design & Brand Consultation service goes beyond simple sign creation. We collaborate with you to understand your brand's identity, target audience, and business goals. Our team of experienced designers will translate this understanding into compelling visual concepts, ensuring your signage is not only aesthetically pleasing but also strategically effective in communicating your message and attracting customers. From initial concept development to final design approval, we provide a seamless and professional process to bring your vision to life.",
		highlightImage: {
			src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/design-brand-consultation/highlight.jpg',
			alt: 'Design & Brand Consultation - Highlight Image',
		},
		gallery: [
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/design-brand-consultation/gallery-0.jpg',
				title: 'Concept Presentation',
				alt: 'Design & Brand Consultation - Concept Presentation',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/design-brand-consultation/gallery-1.jpg',
				title: 'Brand Style Guide',
				alt: 'Design & Brand Consultation - Brand Style Guide',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/design-brand-consultation/gallery-2.jpg',
				title: 'Signage Mockup',
				alt: 'Design & Brand Consultation - Signage Mockup',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/design-brand-consultation/gallery-3.jpg',
				title: 'Gallery 4',
				alt: 'Design & Brand Consultation - Gallery 4',
			},
		],
		specifications: [
			'Brand identity analysis',
			'Target audience research',
			'Custom signage design concepts',
			'Font and color palette selection',
			'Content strategy and messaging',
			'Final artwork for production',
		],
		benefits: [
			'Enhance brand recognition and recall',
			'Create a cohesive and professional brand image',
			'Attract and engage target customers',
			'Improve visibility and memorability of your business',
			'Ensure signage aligns with marketing objectives',
			'Receive expert guidance from experienced designers',
		],
	},
	{
		id: 'site-surveys-planning',
		name: 'Site Surveys & Planning Services',
		categoryId: 'services',
		shortDescription:
			'Ensure your signage project is a success from the start with our professional site surveys and planning services. We assess your location to provide optimal signage solutions.',
		longDescription:
			'Before any sign is designed or manufactured, a thorough site survey and strategic planning are essential. Our expert team visits your location to meticulously assess visibility, potential mounting points, local regulations, and surrounding environmental factors. We analyze traffic patterns, pedestrian flow, and existing structures to determine the most effective placement, size, and type of signage for maximum impact and compliance. This detailed planning phase prevents costly mistakes, ensures regulatory adherence, and guarantees your signage investment delivers the best possible return.',
		highlightImage: {
			src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/site-surveys-planning/highlight.jpg',
			alt: 'Site Surveys & Planning Services - Highlight Image',
		},
		gallery: [
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/site-surveys-planning/gallery-0.jpg',
				title: 'Surveying a Business Facade',
				alt: 'Site Surveys & Planning Services - Surveying a Business Facade',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/site-surveys-planning/gallery-1.jpg',
				title: 'Assessing Interior Signage Location',
				alt: 'Site Surveys & Planning Services - Assessing Interior Signage Location',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/site-surveys-planning/gallery-2.jpg',
				title: 'Reviewing Site Plan Documents',
				alt: 'Site Surveys & Planning Services - Reviewing Site Plan Documents',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/site-surveys-planning/gallery-3.jpg',
				title: 'Gallery 4',
				alt: 'Site Surveys & Planning Services - Gallery 4',
			},
		],
		specifications: [
			'On-site assessment of property and surrounding area',
			'Detailed measurement and photographic documentation',
			'Analysis of local zoning laws and permit requirements',
			'Recommendations for optimal sign type, size, and placement',
			'Review of potential installation challenges and solutions',
			'Deliverable: Comprehensive Site Survey Report',
		],
		benefits: [
			'Maximizes sign visibility and impact',
			'Ensures compliance with local ordinances',
			'Identifies and mitigates potential installation issues',
			'Saves time and money by preventing design errors',
			'Provides a solid foundation for a successful signage project',
			'Tailored recommendations based on your unique location',
		],
	},
	{
		id: 'professional-installation',
		name: 'Professional Signage Installation Services',
		categoryId: 'services',
		shortDescription:
			'Ensure your signage makes a lasting impression with expert, professional installation services tailored to your business needs.',
		longDescription:
			'Maximize the impact and longevity of your investment with our professional signage installation services. Our experienced team handles all types of signage, from intricate channel letters and large monument signs to eye-catching vehicle wraps and subtle ADA-compliant signs. We understand the importance of correct placement, secure mounting, and adherence to local regulations. Trust us to deliver a flawless installation that reflects the quality and professionalism of your brand, ensuring your signage is seen, understood, and remembered.',
		highlightImage: {
			src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/professional-installation/highlight.jpg',
			alt: 'Professional Signage Installation Services - Highlight Image',
		},
		gallery: [
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/professional-installation/gallery-0.jpg',
				title: 'Monument Sign Installation',
				alt: 'Professional Signage Installation Services - Monument Sign Installation',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/professional-installation/gallery-1.jpg',
				title: 'Window Graphics Application',
				alt: 'Professional Signage Installation Services - Window Graphics Application',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/professional-installation/gallery-2.jpg',
				title: 'ADA Signage Placement',
				alt: 'Professional Signage Installation Services - ADA Signage Placement',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/professional-installation/gallery-3.jpg',
				title: 'Vehicle Wrap Application',
				alt: 'Professional Signage Installation Services - Vehicle Wrap Application',
			},
		],
		specifications: [
			'Site assessment and consultation',
			'Expert handling of all sign types (interior, exterior, dimensional, illuminated, etc.)',
			'Secure and compliant mounting techniques',
			'Adherence to local building codes and permit requirements',
			'Project management from start to finish',
			'Post-installation cleanup and final inspection',
		],
		benefits: [
			'Ensures optimal visibility and impact',
			'Extends the lifespan of your signage investment',
			'Guarantees safe and secure installation',
			'Saves you time and hassle',
			'Maintains brand integrity and professionalism',
			'Compliance with all necessary regulations',
		],
	},
	{
		id: 'maintenance-repair',
		name: 'Maintenance & Repair Services',
		categoryId: 'services',
		shortDescription:
			'Ensure your signage remains in excellent condition with our professional maintenance and repair services. Keep your brand visible and impactful.',
		longDescription:
			'Over time, even the most durable signage can face wear and tear from environmental factors or accidental damage. Our expert maintenance and repair services are designed to address these issues promptly and efficiently. We offer scheduled maintenance to prevent problems before they start, as well as emergency repair services to minimize downtime and brand disruption. From cleaning and repainting to structural repairs and component replacements, our skilled technicians have the expertise to restore your signage to its optimal condition, ensuring it continues to attract customers and represent your brand effectively.',
		highlightImage: {
			src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/maintenance-repair/highlight.jpg',
			alt: 'Maintenance & Repair Services - Highlight Image',
		},
		gallery: [
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/maintenance-repair/gallery-0.jpg',
				title: 'Sign Cleaning in Progress',
				alt: 'Maintenance & Repair Services - Sign Cleaning in Progress',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/maintenance-repair/gallery-1.jpg',
				title: 'Repairing a Damaged A-Frame Sign',
				alt: 'Maintenance & Repair Services - Repairing a Damaged A-Frame Sign',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/maintenance-repair/gallery-2.jpg',
				title: 'Updating Illumination on a Monument Sign',
				alt: 'Maintenance & Repair Services - Updating Illumination on a Monument Sign',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/maintenance-repair/gallery-3.jpg',
				title: 'Post-Repair Inspection',
				alt: 'Maintenance & Repair Services - Post-Repair Inspection',
			},
		],
		specifications: [
			'On-site assessment and diagnosis',
			'Preventative maintenance plans',
			'Emergency repair response',
			'Cleaning, repainting, and refurbishment',
			'Structural repair and reinforcement',
			'Component replacement (lighting, hardware, etc.)',
		],
		benefits: [
			'Extended signage lifespan',
			'Maintained brand visibility and professionalism',
			'Minimized downtime and business interruption',
			'Cost-effective solutions compared to full replacement',
			'Ensured compliance with safety and aesthetic standards',
			'Peace of mind with expert service',
		],
	},
	{
		id: 'vehicle-graphics-installation',
		name: 'Vehicle Graphics and Wraps',
		categoryId: 'services',
		shortDescription:
			'Transform your vehicles into mobile billboards with custom-designed vehicle graphics and wraps that make a lasting impression.',
		longDescription:
			"Elevate your brand's visibility with high-quality vehicle graphics and wraps. Our custom solutions are designed to turn your cars, trucks, vans, or trailers into powerful advertising tools. We use durable, weather-resistant vinyl materials that ensure your graphics look vibrant and professional for years to come. Whether you need a full vehicle wrap for maximum impact or simple decals and lettering for essential information, our expert design team will work with you to create eye-catching designs that resonate with your target audience and effectively communicate your brand message. Perfect for businesses of all sizes looking to increase brand awareness and attract new customers.",
		highlightImage: {
			src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/vehicle-graphics-installation/highlight.jpg',
			alt: 'Vehicle Graphics and Wraps - Highlight Image',
		},
		gallery: [
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/vehicle-graphics-installation/gallery-0.jpg',
				title: 'Full Vehicle Wrap - Front View',
				alt: 'Vehicle Graphics and Wraps - Full Vehicle Wrap - Front View',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/vehicle-graphics-installation/gallery-1.jpg',
				title: 'Partial Wrap with Lettering',
				alt: 'Vehicle Graphics and Wraps - Partial Wrap with Lettering',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/vehicle-graphics-installation/gallery-2.jpg',
				title: 'Vehicle Decals - Door Logo',
				alt: 'Vehicle Graphics and Wraps - Vehicle Decals - Door Logo',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/vehicle-graphics-installation/gallery-3.jpg',
				title: 'Trailer Branding',
				alt: 'Vehicle Graphics and Wraps - Trailer Branding',
			},
		],
		specifications: [
			'High-resolution digital printing on premium automotive-grade vinyl.',
			'Durable, UV-resistant, and weather-proof materials for longevity.',
			'Contoured application to fit vehicle curves and body lines seamlessly.',
			'Removable adhesive options available for temporary or seasonal applications.',
			'Wide range of colors, finishes (gloss, matte, metallic), and custom printing capabilities.',
			'Professional installation by certified technicians to ensure a flawless finish.',
		],
		benefits: [
			'Maximize brand exposure with 24/7 mobile advertising.',
			'Enhance brand recognition and recall.',
			'Cost-effective marketing solution compared to traditional advertising.',
			'Protect original vehicle paint from minor scratches and UV damage.',
			'Create a professional and consistent brand image across your fleet.',
			'Target specific geographic areas effectively.',
		],
	},
	{
		id: 'emergency-services',
		name: 'Emergency Services Signage',
		categoryId: 'services',
		shortDescription:
			'Clear and durable signage solutions designed for emergency services, ensuring visibility and compliance.',
		longDescription:
			'Our emergency services signage is specifically designed to meet the critical needs of fire departments, police stations, ambulance services, and other emergency response units. We offer a range of durable, weather-resistant signs that clearly communicate vital information, direct personnel and the public, and comply with all relevant safety regulations. From highly visible directional signs and station identification to critical hazard warnings and operational notices, our signage ensures operational efficiency and public safety in the most demanding situations.',
		highlightImage: {
			src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/emergency-services/highlight.jpg',
			alt: 'Emergency Services Signage - Highlight Image',
		},
		gallery: [
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/emergency-services/gallery-0.jpg',
				title: 'Ambulance Bay Signage',
				alt: 'Emergency Services Signage - Ambulance Bay Signage',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/emergency-services/gallery-1.jpg',
				title: 'Police Station Entrance',
				alt: 'Emergency Services Signage - Police Station Entrance',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/emergency-services/gallery-2.jpg',
				title: 'Hazard Warning Sign',
				alt: 'Emergency Services Signage - Hazard Warning Sign',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/emergency-services/gallery-3.jpg',
				title: 'ADA Accessible Entrance',
				alt: 'Emergency Services Signage - ADA Accessible Entrance',
			},
		],
		specifications: [
			'High-intensity reflective vinyl for maximum visibility',
			'Durable aluminum or polycarbonate substrates resistant to weather and vandalism',
			'UV-resistant inks to prevent fading',
			'Standard and custom sizes available',
			'Meets ADA requirements for accessibility where applicable',
			'Fast production and installation services',
		],
		benefits: [
			'Enhances operational efficiency and response times',
			'Improves public safety and navigation',
			'Ensures compliance with local and federal regulations',
			'Built for extreme weather conditions and long-term durability',
			'Customizable to specific needs and branding',
			'Professional appearance instills confidence',
		],
	},

	// More Category Products
	{
		id: 'corporate-signage',
		name: 'Corporate Signage',
		categoryId: 'more',
		shortDescription:
			'Enhance your brand presence with professional and impactful corporate signage. We offer a wide range of custom solutions designed to elevate your business identity.',
		longDescription:
			'Our corporate signage solutions are meticulously crafted to reflect the professionalism and unique identity of your business. From eye-catching exterior signs that welcome clients to informative interior wayfinding systems, we provide a comprehensive suite of options. We specialize in creating high-quality, durable, and visually appealing signage that not only serves its functional purpose but also acts as a powerful brand ambassador. Let us help you make a lasting impression with signage that truly represents your corporate values and vision.',
		highlightImage: {
			src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/corporate-signage/highlight.jpg',
			alt: 'Corporate Signage Solutions - Highlight Image',
		},
		gallery: [
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/corporate-signage/gallery-0.jpg',
				title: 'Reception Area Signage',
				alt: 'Corporate Signage Solutions - Reception Area Signage',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/corporate-signage/gallery-1.jpg',
				title: 'Interior Wayfinding',
				alt: 'Corporate Signage Solutions - Interior Wayfinding',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/corporate-signage/gallery-2.jpg',
				title: 'Exterior Building Sign',
				alt: 'Corporate Signage Solutions - Exterior Building Sign',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/corporate-signage/gallery-3.jpg',
				title: 'Informational Signage',
				alt: 'Corporate Signage Solutions - Informational Signage',
			},
		],
		specifications: [
			'Durable materials: Aluminum, Dibond, Acrylic, PVC, Wood',
			'High-resolution printing: UV-resistant and weather-proof inks',
			'Customizable sizes: Tailored to fit any space and requirement',
			'Variety of mounting options: Wall, post, freestanding, hanging',
			'Professional installation services available',
			'Built for longevity and impact',
		],
		benefits: [
			'Boosts brand recognition and visibility',
			'Improves customer experience and navigation',
			'Communicates professionalism and credibility',
			'Offers versatile solutions for indoor and outdoor use',
			'Customizable to match your brand aesthetics',
			'Increases perceived value of your business',
		],
	},
	{
		id: 'vehicle-graphics',
		name: 'Vehicle Graphics',
		categoryId: 'more',
		shortDescription:
			'Transform your vehicles into mobile billboards with high-impact vehicle graphics and wraps. Increase brand visibility and attract new customers wherever you go.',
		longDescription:
			'Our custom vehicle graphics and wraps are a powerful and cost-effective way to market your business. Whether you need simple decals, full-body wraps, or window perforations, we design and install graphics that are durable, eye-catching, and perfectly aligned with your brand identity. Turn your company cars, trucks, vans, or trailers into professional advertisements that work for you 24/7, reaching a wider audience and reinforcing your brand message on the road.',
		highlightImage: {
			src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/vehicle-graphics/highlight.jpg',
			alt: 'Vehicle Graphics - Highlight Image',
		},
		gallery: [
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/vehicle-graphics/gallery-0.jpg',
				title: 'Truck Fleet Branding',
				alt: 'Vehicle Graphics - Truck Fleet Branding',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/vehicle-graphics/gallery-1.jpg',
				title: 'Partial Vehicle Wrap Example',
				alt: 'Vehicle Graphics - Partial Vehicle Wrap Example',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/vehicle-graphics/gallery-2.jpg',
				title: 'Perforated Window Graphics',
				alt: 'Vehicle Graphics - Perforated Window Graphics',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/vehicle-graphics/gallery-3.jpg',
				title: 'Simple Logo Decals',
				alt: 'Vehicle Graphics - Simple Logo Decals',
			},
		],
		specifications: [
			'High-performance vinyl material for durability and weather resistance',
			'UV-resistant inks for vibrant, long-lasting colors',
			'Custom-cut to fit any vehicle make and model',
			'Professional installation available',
			'Removable options to avoid permanent vehicle alteration',
			'Suitable for cars, trucks, vans, trailers, and fleet vehicles',
		],
		benefits: [
			'Maximum brand exposure and recognition',
			'Cost-effective mobile advertising solution',
			'Enhances professional appearance of your fleet',
			'Durable and long-lasting under various weather conditions',
			'Versatile design options from simple logos to full wraps',
			'Attracts new customers and generates leads',
		],
	},
		{
	  id: 'digital-led-signage',
	  name: 'Digital & LED Signage',
	  categoryId: 'more',
	  shortDescription: 'Capture attention with dynamic Digital & LED Signage solutions. Perfect for businesses looking to make a bold, modern statement and deliver impactful messages.',
	  longDescription:
	    'Elevate your business\'s visibility and engagement with our state-of-the-art Digital & LED Signage. These signs offer unparalleled flexibility, allowing you to display dynamic content, promotions, and information that can be updated instantly. From vibrant full-color LED displays to energy-efficient digital screens, we provide solutions that are perfect for storefronts, event venues, corporate offices, and more. Enhance your brand\'s modern appeal and ensure your message cuts through the noise with bright, captivating visuals.',
	  highlightImage: {
	    src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/digital-led-signage/highlight.jpg',
	    alt: 'Digital & LED Signage - Highlight Image',
	  },
	  gallery: [
	  {
	    src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/digital-led-signage/gallery-0.jpg',
	    title: 'Outdoor LED Billboard',
	    alt: 'Digital & LED Signage - Outdoor LED Billboard',
	  },
	  {
	    src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/digital-led-signage/gallery-1.jpg',
	    title: 'Indoor Digital Menu Board',
	    alt: 'Digital & LED Signage - Indoor Digital Menu Board',
	  },
	  {
	    src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/digital-led-signage/gallery-2.jpg',
	    title: 'LED Storefront Display',
	    alt: 'Digital & LED Signage - LED Storefront Display',
	  },
	  {
	    src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/digital-led-signage/gallery-3.jpg',
	    title: 'Customizable Digital Signage',
	    alt: 'Digital & LED Signage - Customizable Digital Signage',
	  }
	],
	  specifications: [
	  'High-resolution LED or LCD displays',
	  'Weather-resistant and durable construction for outdoor use',
	  'Energy-efficient operation with long lifespan',
	  'Customizable sizes and aspect ratios',
	  'Content management system for easy updates',
	  'Various brightness levels for optimal visibility in different lighting conditions'
	],
	  benefits: [
	  'Dynamic and eye-catching visuals',
	  'Instant content updates and flexibility',
	  'Increased customer engagement and foot traffic',
	  'Modern and professional brand image',
	  'Cost-effective advertising compared to static signs',
	  'Versatile for indoor and outdoor applications'
	],
	},
	{
		id: 'trade-show-systems',
		name: 'Trade Show Booth',
		categoryId: 'more',
		shortDescription:
			'Enhance your brand presence at any event with custom-designed trade show signage systems. From backdrops to banner stands, we provide eye-catching solutions.',
		longDescription:
			'Make a lasting impression at your next trade show or event with our comprehensive range of signage systems. We offer high-quality, durable, and visually appealing solutions designed to attract attention and communicate your brand message effectively. Our products include custom-printed backdrops, tension fabric displays, banner stands, A-frame signs, and more, all tailored to meet your specific event needs and branding requirements. Easy to set up and transport, our trade show signage ensures your brand stands out in a crowded environment.',
		highlightImage: {
			src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/trade-show-systems/highlight.jpg',
			alt: 'Trade Show Booth Signage Systems - Highlight Image',
		},
		gallery: [
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/trade-show-systems/gallery-0.jpg',
				title: 'Pop-Up Display',
				alt: 'Trade Show Booth Signage Systems - Pop-Up Display',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/trade-show-systems/gallery-1.jpg',
				title: 'Banner Stand Options',
				alt: 'Trade Show Booth Signage Systems - Banner Stand Options',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/trade-show-systems/gallery-2.jpg',
				title: 'A-Frame Signage',
				alt: 'Trade Show Booth Signage Systems - A-Frame Signage',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/trade-show-systems/gallery-3.jpg',
				title: 'Fabric Tension Display',
				alt: 'Trade Show Booth Signage Systems - Fabric Tension Display',
			},
		],
		specifications: [
			'Durable aluminum or fiberglass frames',
			'High-resolution, full-color graphic printing',
			'Various sizes available to fit any booth space',
			'Includes carrying cases for easy transport',
			'Fire-retardant and fade-resistant materials',
			'Quick and easy assembly/disassembly',
		],
		benefits: [
			'Maximize brand visibility at trade shows',
			'Create a professional and cohesive booth appearance',
			'Attract more attendees to your booth',
			'Durable and reusable for multiple events',
			'Customizable to fit any design or message',
			'Portable and easy to set up',
		],
	},
	{
		id: 'trade-show-booth-graphics',
		name: 'Trade Show Booth Graphics',
		categoryId: 'trade-show-systems',
		shortDescription:
			'Make a powerful impression at your next event with custom-designed trade show booth graphics. Enhance your brand visibility and attract more visitors.',
		longDescription:
			'Elevate your presence at any trade show or exhibition with our high-quality, custom trade show booth graphics. We offer a comprehensive range of solutions including fabric backdrops, tension fabric displays, vinyl banners, custom flooring, and dimensional lettering to create a cohesive and impactful brand experience. Our graphics are designed for easy setup and transport, ensuring your booth stands out from the competition and effectively communicates your message to attendees. Maximize engagement and generate leads with a professionally designed and produced trade show booth.',
		highlightImage: {
			src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/trade-show-systems/highlight.jpg',
			alt: 'Trade Show Booth Graphics - Highlight Image',
		},
		gallery: [
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/trade-show-systems/gallery-0.jpg',
				title: 'Tension Fabric Display',
				alt: 'Trade Show Booth Graphics - Tension Fabric Display',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/trade-show-systems/gallery-1.jpg',
				title: 'Custom Booth Flooring',
				alt: 'Trade Show Booth Graphics - Custom Booth Flooring',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/trade-show-systems/gallery-2.jpg',
				title: 'Dimensional Lettering',
				alt: 'Trade Show Booth Graphics - Dimensional Lettering',
			},
			{
				src: 'https://firewave-console.s3.us-west-2.amazonaws.com/products/trade-show-systems/gallery-3.jpg',
				title: 'Banner Stand Variety',
				alt: 'Trade Show Booth Graphics - Banner Stand Variety',
			},
		],
		specifications: [
			'Material options: Fabric, Vinyl, Sintra, Dibond',
			'Printing: High-resolution, full-color, UV-resistant inks',
			'Sizes: Custom sizes available to fit any booth footprint',
			'Finishing: Grommets, pole pockets, Velcro, mounting hardware',
			'Durability: Designed for repeated use and easy storage',
			'Includes: Design consultation and setup recommendations',
		],
		benefits: [
			'Increases brand visibility and recognition',
			'Attracts attention and draws visitors to your booth',
			'Creates a professional and memorable brand experience',
			'Communicates key messages effectively',
			'Durable and reusable for multiple events',
			'Customizable to fit your specific needs and budget',
		],
	},
];
