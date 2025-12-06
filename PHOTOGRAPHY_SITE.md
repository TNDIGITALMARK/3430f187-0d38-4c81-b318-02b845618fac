# Kimberly Archambault Photography Website

## Overview
A beautiful, elegant photography portfolio website showcasing wedding, maternity, and family photography services.

## Features Implemented

### 1. Homepage (/)
- **Hero Section**: Full-screen image with elegant typography and call-to-action buttons
- **About Section**: Professional introduction and photographer bio
- **Photography Services Grid**: Three categories (Weddings, Maternity, Family) with hover effects
- **Services Cards**: Detailed service offerings with icons
- **Testimonials**: Client reviews in elegant card format
- **CTA Section**: Prominent booking call-to-action with sage green gradient

### 2. Portfolio Page (/portfolio)
- **Organized Gallery Sections**: Separate sections for Weddings, Maternity, and Family
- **Lightbox Functionality**: Click any image to open in full-screen lightbox
- **Navigation**: Previous/Next buttons and keyboard navigation in lightbox
- **Responsive Grid**: 3-column layout that adapts to mobile
- **Smooth Animations**: Fade-in effects and hover treatments

### 3. Booking Page (/booking)
- **Package Display**: Three photography packages with pricing and features
- **Contact Form**: Comprehensive inquiry form with:
  - Name and email fields
  - Phone number
  - Session type selector
  - Date picker calendar
  - Location preference
  - Budget range selector
  - Message textarea
- **Form Validation**: Required fields and proper input types
- **Responsive Layout**: Mobile-friendly form design

## Design System

### Colors
- **Primary**: Sage Green (hsl(145 25% 45%)) - Main brand color for buttons and accents
- **Background**: Warm White (hsl(30 15% 98%)) - Clean, soft background
- **Text**: Charcoal (hsl(0 0% 20%)) - Professional, readable text
- **Secondary**: Soft Blush (hsl(25 30% 85%)) - Warm accent color
- **Muted**: Light Warm Gray (hsl(30 10% 93%)) - Subtle backgrounds

### Typography
- **Headings**: Playfair Display (serif) - Classic, romantic feel
- **Body**: Inter (sans-serif) - Clean, modern readability
- **Scale**: Responsive hierarchy from 1rem to 3.5rem

### Components
- **Navigation**: Fixed header with mobile hamburger menu
- **Footer**: Three-column layout with contact info and social links
- **Photo Cards**: Hover effects with image zoom and overlay
- **Lightbox**: Full-screen image viewer with navigation
- **Forms**: Consistent styling with shadcn/ui components

## Technical Stack
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom design tokens
- **UI Components**: Radix UI primitives via shadcn/ui
- **Images**: AI-generated photography samples using Banana Nano MCP
- **Icons**: Lucide React
- **Forms**: React Hook Form ready (basic implementation included)

## File Structure
```
src/
├── app/
│   ├── page.tsx              # Homepage
│   ├── portfolio/
│   │   ├── layout.tsx        # Portfolio metadata
│   │   └── page.tsx          # Portfolio gallery
│   ├── booking/
│   │   ├── layout.tsx        # Booking metadata
│   │   └── page.tsx          # Booking form and packages
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Design system & custom styles
├── components/
│   ├── navigation.tsx        # Header navigation
│   ├── footer.tsx            # Footer component
│   └── lightbox-gallery.tsx  # Reusable gallery with lightbox
public/
└── generated/                # AI-generated sample images
    ├── wedding-hero-1.png
    ├── wedding-2.png
    ├── wedding-3.png
    ├── maternity-hero-1.png
    ├── family-hero-1.png
    └── family-2.png
```

## Sample Images
All portfolio images are AI-generated professional-quality samples including:
- Wedding ceremony and reception photos
- Maternity outdoor sessions
- Multi-generational family portraits
- Wedding detail shots

## Responsive Design
- **Mobile**: Single column layouts, hamburger menu, touch-optimized
- **Tablet**: 2-column grids, adapted spacing
- **Desktop**: Full 3-column layouts, hover effects

## Customization Notes

### Adding New Images
1. Place images in `public/generated/` or `public/images/`
2. Update image arrays in respective page components
3. Images automatically work with lightbox functionality

### Updating Packages
Edit the `packages` array in `src/app/booking/page.tsx`

### Modifying Colors
Update CSS variables in `src/app/globals.css` under `:root`

### Form Integration
The booking form is ready for backend integration:
- Form data captured in state
- Submit handler ready for API connection
- Validation structure in place

## Future Enhancements
- Blog functionality with post templates
- Client galleries with password protection
- Payment integration for booking deposits
- Email notification system
- Admin dashboard for managing inquiries
- Google Analytics integration

## Deployment Ready
- All images optimized and in place
- Metadata configured for SEO
- Mobile-responsive across all pages
- Professional design system established
