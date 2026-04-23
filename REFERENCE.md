# 🎯 Quick Reference Card

## Getting Started in 30 Seconds

```bash
# 1. Install
npm install

# 2. Setup email (optional)
cp .env.example .env.local
# Edit .env.local with your Gmail app password

# 3. Run
npm run dev

# 4. Visit
# http://localhost:3000
```

---

## Email Setup Quick Reference

### Get Gmail App Password
1. Go: myaccount.google.com/security
2. Enable 2-Step Verification
3. Go: myaccount.google.com/apppasswords
4. Select: Mail + Windows Computer
5. Copy: 16-character password

### Add to .env.local
```
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=xxxx-xxxx-xxxx-xxxx
```

---

## Key Files to Customize

| File | What to Change | Lines |
|------|---|---|
| `components/Contact.js` | Email, phone, location | 88-107 |
| `components/Skills.js` | Skills list | 12-46 |
| `components/Experience.js` | Work history | 12-69 |
| `components/Projects.js` | Portfolio items | 12-57 |
| `components/About.js` | About section text | Various |
| `app/globals.css` | Colors/theme | 7-25 |
| `public/profile.jpg` | Your photo | Replace |

---

## Deployment Checklist

- [ ] Customize all text content
- [ ] Update your profile image
- [ ] Test contact form locally
- [ ] Push to GitHub
- [ ] Create Vercel project
- [ ] Add EMAIL_USER and EMAIL_PASSWORD
- [ ] Deploy & test live
- [ ] Add custom domain (optional)

---

## Color Values (CSS)

```css
--primary: oklch(0.35 0.15 250);      /* Blue */
--accent: oklch(0.65 0.2 30);         /* Orange */
--background: oklch(0.98 0.001 0);    /* Off-white */
--foreground: oklch(0.15 0.005 0);    /* Dark */
```

To customize, edit `app/globals.css` lines 7-25

---

## Component Sections

```
Home Page (app/page.js)
├── Navbar
├── Hero (image + intro)
├── About (CV showcase)
├── Skills (categorized)
├── Experience (timeline)
├── Projects (portfolio)
├── Contact (form + links)
└── Footer
```

---

## NPM Scripts

```bash
npm run dev       # Development server
npm run build     # Production build
npm start         # Start production server
npm run lint      # Lint code
```

---

## Dependencies

- **next**: ^16.0.0 - Framework
- **react**: ^19.0 - UI library
- **framer-motion**: ^11.0.0 - Animations
- **react-intersection-observer**: ^9.8.1 - Scroll detection
- **nodemailer**: ^6.9.8 - Email sending
- **tailwindcss**: ^4.0 - Styling

---

## File Structure Quick Map

```
portfolio/
├── 📁 app/           React app
│   ├── page.js       Main page
│   ├── layout.js     Root layout
│   ├── globals.css   Styles
│   └── api/
│       └── contact/  Email endpoint
├── 📁 components/    8 components
├── 📁 lib/           Utilities
├── 📁 public/        Images
└── 📄 Docs/          4 guides
```

---

## Useful Links

| Resource | URL |
|----------|-----|
| Next.js Docs | https://nextjs.org/docs |
| Framer Motion | https://www.framer.com/motion |
| Tailwind CSS | https://tailwindcss.com |
| Vercel Deploy | https://vercel.com |
| Gmail Settings | https://myaccount.google.com |

---

## Animation Reference

| Section | Animation |
|---------|-----------|
| Hero | Image float + glow |
| About | Rotating circles |
| Skills | Pulsing dots |
| Experience | Timeline line fill |
| Projects | Hover lift + border |
| Contact | Form stagger |

---

## Testing Checklist

- [ ] All links work and scroll smoothly
- [ ] Contact form sends emails
- [ ] Images load properly
- [ ] Mobile looks good (test in DevTools)
- [ ] Animations are smooth
- [ ] No console errors
- [ ] Form validation works
- [ ] Email confirmation arrives

---

## Deployment Platforms

```
Vercel (Recommended)    | Netlify | AWS Amplify
github.com ↓            | github.com ↓ | github.com ↓
Connect repo            | Connect repo  | Connect repo
Add env vars            | Add env vars  | Add env vars
Deploy!                 | Deploy!       | Deploy!
```

---

## Common Questions

**Q: How do I change colors?**  
A: Edit `--primary` and `--accent` in `app/globals.css`

**Q: Where do I update my projects?**  
A: Edit the `projects` array in `components/Projects.js`

**Q: Email not working?**  
A: Verify Gmail app password has dashes, check env vars are set

**Q: How do I add a custom domain?**  
A: In Vercel project settings → Domains → Add your domain

**Q: Can I add more sections?**  
A: Create a new component and add it to `app/page.js`

---

## Performance Tips

- Images: Compress before uploading
- Code: Remove unused CSS with PurgeCSS (built into Tailwind)
- Build: Run `npm run build` locally to test
- Analytics: Enable Vercel Analytics to track usage
- Cache: Let Vercel handle caching automatically

---

## Keyboard Shortcuts (Local Dev)

```
Ctrl/Cmd + K     Open command palette (Vercel)
F12               Developer tools
Ctrl/Cmd + J      Console
Ctrl/Cmd + Shift + C  Inspect element
Ctrl/Cmd + /      Toggle DevTools
```

---

## Environment Variables

```bash
# Required for email
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASSWORD=your-app-password

# Optional (auto-set by Vercel)
NEXT_PUBLIC_SITE_URL=https://yoursite.com
```

---

## Git Commands Reference

```bash
git add .           Add all changes
git commit -m "msg" Commit changes
git push origin main Push to GitHub
git pull            Get latest changes
git status          See what changed
```

---

## Troubleshooting Quick Links

| Problem | Solution |
|---------|----------|
| Email not sending | Check `.env.local`, verify Gmail settings |
| Build fails | Clear `.next` folder, reinstall deps |
| Animations stutter | Check system performance, clear cache |
| Images not loading | Check `public/` folder path |
| Mobile looks broken | Test in DevTools, check responsive classes |

---

## Before You Deploy

✅ Test locally with `npm run dev`  
✅ Check all text is updated  
✅ Verify profile image is there  
✅ Test contact form sends email  
✅ Push code to GitHub  
✅ Check Lighthouse score (95+)  
✅ Test on mobile device  
✅ Add environment variables to Vercel  

---

## After Deployment

✅ Test all links on live site  
✅ Check form sends emails  
✅ Verify images load  
✅ Test on mobile  
✅ Share with friends/colleagues  
✅ Monitor Vercel Analytics  
✅ Enjoy your new portfolio! 🎉  

---

**Everything you need on one page. Happy coding! 🚀**
