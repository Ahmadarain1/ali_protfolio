# Portfolio Setup Guide

Welcome to your professional portfolio! This guide will help you set up the email functionality and deploy your site.

## Email Configuration (Contact Form)

To enable the contact form to send emails, follow these steps:

### Step 1: Enable 2-Factor Authentication (2FA)
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Click on "Security" in the left sidebar
3. Under "How you sign in to Google", enable 2-Step Verification if not already enabled
4. Follow the on-screen prompts to complete 2FA setup

### Step 2: Generate App Password
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Click on "App passwords" (only appears if 2FA is enabled)
3. Select "Mail" and "Windows Computer" (or your device type)
4. Google will generate a 16-character password
5. Copy this password - you'll use it in the next step

### Step 3: Configure Environment Variables

#### Option A: Local Development
1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Open `.env.local` and fill in your credentials:
   ```
   EMAIL_USER=your-gmail@gmail.com
   EMAIL_PASSWORD=xxxx-xxxx-xxxx-xxxx
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

#### Option B: Vercel Deployment
1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add the following variables:
   - **KEY**: `EMAIL_USER`
   - **VALUE**: your-gmail@gmail.com
   - **KEY**: `EMAIL_PASSWORD`
   - **VALUE**: your-16-char-app-password

4. Redeploy your site for changes to take effect

## Project Structure

```
app/
├── page.js                 # Main page component
├── layout.js              # Root layout
├── globals.css            # Global styles with animations
└── api/
    └── contact/
        └── route.js       # Email API endpoint

components/
├── Navbar.js              # Navigation bar with smooth scroll
├── Hero.js                # Hero section with image animation
├── About.js               # About section with CV showcase
├── Skills.js              # Skills categories and certifications
├── Experience.js          # Career timeline
├── Projects.js            # Portfolio projects gallery
├── Contact.js             # Contact form with email integration
└── Footer.js              # Footer with links

lib/
├── animations.js          # Framer Motion variants and utilities
└── utils.js              # Helper functions

public/
└── profile.jpg           # Your professional headshot
```

## Customization

### Update Personal Information
Edit the contact info in `components/Contact.js`:
- Email: `aliarshad.0032@gmail.com`
- Phone: `+92 3034591041`
- Location: `Hafizabad, Punjab`
- Social links

### Modify Colors and Theme
Edit `app/globals.css` to change the color scheme:
- Primary color: oklch(0.35 0.15 250) - Blue
- Accent color: oklch(0.65 0.2 30) - Orange
- Background: oklch(0.98 0.001 0) - Off-white

### Update Project Data
Edit the `projects` array in `components/Projects.js` to add/modify your portfolio items.

### Change Skills
Edit the `skillCategories` array in `components/Skills.js` to update your technical skills.

## Animations & Performance

The site uses Framer Motion for smooth animations:
- Scroll-triggered animations with intersection observer
- Staggered animations for lists and grids
- Hover effects on interactive elements
- Parallax effects on images

All animations are optimized for performance and accessibility.

## Deployment

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your GitHub repository
4. Add environment variables (see Email Configuration)
5. Click Deploy

### Other Hosting Options
- Netlify: Similar process, add environment variables in Netlify settings
- AWS Amplify: Follow AWS deployment guide
- Traditional hosting: Build with `npm run build` and serve the `.next` folder

## Browser Support

This portfolio is optimized for modern browsers:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Troubleshooting

### Email Not Sending
1. Verify app password is correct (16 characters with dashes)
2. Check environment variables are set in deployment platform
3. Ensure 2FA is enabled on your Google account
4. Check spam/promotions folder for test emails
5. Review console for error messages

### Animations Not Working
1. Clear browser cache
2. Ensure Framer Motion is installed: `npm list framer-motion`
3. Check that JavaScript is enabled in browser

### Images Not Loading
1. Verify `/public/profile.jpg` exists
2. Check file path is correct
3. Ensure image format is supported (JPG, PNG, WebP)

## Performance Tips

1. Optimize images before uploading to `/public`
2. Use Next.js Image component for better performance
3. Enable caching in Vercel settings
4. Monitor Core Web Vitals in Vercel Analytics

## Support & Updates

- Check for Next.js updates: `npm update`
- Update Framer Motion: `npm update framer-motion`
- Review Vercel documentation: https://vercel.com/docs

## License

This portfolio template is free to use and modify for your own purposes.

---

**Created with Next.js, Framer Motion, and Tailwind CSS**
