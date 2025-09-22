# AI Engineer Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS to showcase AI engineering expertise, projects, and technical skills.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Mobile-first design that works on all devices
- **Performance Optimized**: Fast loading with optimized images and code splitting
- **SEO Friendly**: Built with Next.js for optimal search engine optimization
- **Accessible**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Interactive**: Engaging animations and micro-interactions using Framer Motion

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Homepage
├── components/
│   ├── Hero.tsx             # Hero section with introduction
│   ├── About.tsx            # About section with bio and experience
│   ├── Projects.tsx         # Project showcase with case studies
│   ├── Skills.tsx           # Technical skills and expertise
│   ├── Contact.tsx          # Contact form and information
│   ├── Navigation.tsx       # Navigation header
│   └── Footer.tsx           # Footer with links and info
├── lib/
│   └── utils.ts             # Utility functions
└── public/                  # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd ai-engineer-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customization

### Personal Information

Update the following files with your information:

1. **Contact Information** (`components/Contact.tsx`):
   - Email, phone, location
   - Social media links
   - Resume download link

2. **About Section** (`components/About.tsx`):
   - Personal bio
   - Experience details
   - Education background

3. **Projects** (`components/Projects.tsx`):
   - Project details and case studies
   - GitHub and demo links
   - Technologies used

4. **Skills** (`components/Skills.tsx`):
   - Technical skills and proficiency levels
   - Certifications and achievements

### Styling

- **Colors**: Modify the color scheme in `tailwind.config.js`
- **Fonts**: Update font imports in `app/globals.css`
- **Animations**: Customize animations in individual components

### SEO & Metadata

Update metadata in `app/layout.tsx`:
- Title and description
- Open Graph tags
- Twitter Card tags
- Favicon and app icons

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically on every push

### Other Platforms

The portfolio can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Bundle Size**: Optimized with code splitting
- **Images**: Optimized with Next.js Image component

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: 320px+
- Tablet: 768px+
- Desktop: 1024px+
- Large Desktop: 1280px+

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation support
- Screen reader friendly
- High contrast mode support
- Focus indicators

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to reach out:

- Email: clarence.jay@example.com
- LinkedIn: [Your LinkedIn Profile]
- GitHub: [Your GitHub Profile]

---

Built with ❤️ by Clarence Jay Fetalino
