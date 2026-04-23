# Ali Arshad - Professional Portfolio Website

A modern, fully animated portfolio website built with Next.js, Tailwind CSS, and Framer Motion. Showcasing professional experience as a Spine 2D Animator and Creative Director.

## Features

- **Fully Responsive Design**: Mobile-first approach optimized for all screen sizes
- **Smooth Animations**: Framer Motion animations throughout with scroll triggers
- **Modern Aesthetics**: Clean, professional design with gradient accents
- **SEO Optimized**: Proper metadata and semantic HTML structure
- **Email Integration**: Contact form with email notifications using Nodemailer
- **Dark Mode Ready**: Design system supports theme switching
- **Performance Optimized**: Code splitting, lazy loading, and optimized assets

## Tech Stack

- **Framework**: Next.js 16 (JavaScript only)
- **Styling**: Tailwind CSS 4.2
- **Animations**: Framer Motion 11
- **Email**: Nodemailer 6.9
- **Intersection Observer**: React Intersection Observer 9.8
- **Deployment**: Vercel-ready

## Project Structure

```
├── app/
│   ├── layout.js              # Root layout with metadata
│   ├── page.js                # Home page (main entry)
│   ├── globals.css            # Global styles and animations
│   └── api/
│       └── contact/
│           └── route.js       # Email API endpoint
├── components/
│   ├── Navbar.js              # Navigation bar with mobile menu
│   ├── Hero.js                # Hero section with animations
│   ├── About.js               # About section with CV image
│   ├── Skills.js              # Skills & expertise showcase
│   ├── Experience.js          # Timeline of work experience
│   ├── Projects.js            # Projects gallery
│   ├── Contact.js             # Contact form with validation
│   └── Footer.js              # Footer with links
├── lib/
│   └── animations.js          # Shared animation configs
└── public/
    └── [images and assets]
```

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
# or
pnpm install
```

### 2. Configure Email (Optional)

For the contact form to work, you need to set up email credentials:

1. Create a `.env.local` file in the root directory:
```env
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASSWORD=your-app-specific-password
```

2. Generate Gmail App Password:
   - Go to https://myaccount.google.com/security
   - Enable "2-Step Verification"
   - Generate an "App password" for Mail
   - Use this password in EMAIL_PASSWORD

3. If you don't want email functionality, the form will still validate but won't send emails

### 3. Run Development Server

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 4. Build for Production

```bash
npm run build
npm run start
# or
pnpm build
pnpm start
```

## Key Sections

### Hero
- Animated headline with gradient text
- Role subtitle and professional description
- Call-to-action buttons with smooth interactions
- Animated background elements

### About
- Professional summary from CV
- Key statistics and achievements
- Hover-interactive content cards
- CV image showcase

### Skills
- Categorized skill cards (Tools, Technical, Creative)
- Language proficiency display
- Certification information
- Scroll-triggered animations

### Experience
- Timeline layout with alternating cards
- Detailed job descriptions and highlights
- Location and period information
- Education section

### Projects
- Gallery of featured work
- Project descriptions and skill tags
- Category badges and period information
- Interactive hover effects

### Contact
- Contact information cards (Email, Phone, Location)
- Full contact form with validation
- Email notifications to admin and user
- Social media links

### Footer
- Quick navigation links
- Social media connections
- Copyright and credits

## Animations & Interactions

- **Page Load**: Staggered fade-in animations
- **Scroll**: Intersection observer triggers for section animations
- **Hover Effects**: Scale, color, and shadow transitions
- **Button Interactions**: Click feedback with Framer Motion
- **Floating Elements**: Continuous animation in Hero section
- **Timeline**: Alternate left-right animation pattern

## Customization

### Update Contact Information
Edit `components/Contact.js` and `components/Footer.js` to update:
- Email address
- Phone number
- Location
- Social media links

### Modify Skills
Update the `skillCategories` array in `components/Skills.js` to add/remove skills

### Update Experience
Edit the `experiences` array in `components/Experience.js` to modify work history

### Change Projects
Update the `projects` array in `components/Projects.js` to showcase your work

### Adjust Colors
Modify the CSS variables in `app/globals.css` `:root` section to change the color scheme

## Color System

The portfolio uses a sophisticated color scheme:
- **Primary**: Deep blue (#0066cc) - Main brand color
- **Accent**: Warm orange (#ff8c00) - Call-to-action elements
- **Background**: Light gray (#fafafa) - Main background
- **Foreground**: Dark gray/black (#1a1a1a) - Text color

## Performance Optimization

- Image optimization with Next.js Image component
- Code splitting for faster page loads
- Minimal CSS with Tailwind utility classes
- Optimized animations with GPU acceleration
- Intersection observer for lazy scroll animations

## Deployment

### Deploy to Vercel

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git remote add origin [your-repo-url]
git push -u origin main
```

2. Connect to Vercel:
   - Go to https://vercel.com
   - Click "New Project"
   - Import your GitHub repository
   - Configure environment variables (EMAIL_USER, EMAIL_PASSWORD)
   - Click "Deploy"

### Deploy to Other Platforms

The portfolio can be deployed to any platform supporting Next.js:
- Netlify
- AWS Amplify
- DigitalOcean
- Heroku
- Self-hosted server

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

- Add blog section
- Implement dark mode toggle
- Add video portfolio showcase
- Integrate CMS for dynamic content
- Add analytics
- Implement search functionality

## License

This portfolio is personal and custom-built. Feel free to use as inspiration for your own portfolio.

## Support

For issues or questions, feel free to reach out:
- Email: aliarshad.0032@gmail.com
- LinkedIn: https://www.linkedin.com/in/kdtqoog/
- Portfolio: https://bit.ly/kdtQoog

---

Built with passion using Next.js, Tailwind CSS, and Framer Motion.
