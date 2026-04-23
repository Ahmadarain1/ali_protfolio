# Quick Start Guide

Get your portfolio up and running in minutes!

## 1️⃣ Install Dependencies

```bash
npm install
# or
pnpm install
# or
yarn install
```

## 2️⃣ Configure Email (Optional but Recommended)

### Quick Setup in 3 Steps:

1. **Get Gmail App Password**
   - Enable 2FA on your Google account
   - Go to myaccount.google.com/apppasswords
   - Generate a password for "Mail" on "Windows Computer"
   - Copy the 16-character password

2. **Create `.env.local` file**
   ```bash
   cp .env.example .env.local
   ```

3. **Add Your Credentials**
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=xxxx-xxxx-xxxx-xxxx
   ```

## 3️⃣ Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

The site will auto-refresh as you make changes!

## 4️⃣ Customize Your Portfolio

### Update Your Information:
1. **Contact Details** → `components/Contact.js` (lines 89-107)
2. **Skills** → `components/Skills.js` (lines 12-46)
3. **Experience** → `components/Experience.js` (lines 12-69)
4. **Projects** → `components/Projects.js` (lines 12-57)
5. **About** → `components/About.js` (update text)

### Change Colors:
Edit `app/globals.css` (lines 7-25):
```css
--primary: oklch(0.35 0.15 250);    /* Blue */
--accent: oklch(0.65 0.2 30);       /* Orange */
```

### Update Profile Image:
Replace `/public/profile.jpg` with your headshot

## 5️⃣ Test Email Functionality

1. Fill out the contact form
2. Check your email inbox for the submission
3. Check the sender's email for confirmation

## 6️⃣ Deploy to Vercel

### Option A: GitHub (Recommended)
```bash
git push origin main
```
Then connect your repo to Vercel at [vercel.com](https://vercel.com)

### Option B: Vercel CLI
```bash
npm i -g vercel
vercel
```

### Add Environment Variables to Vercel
1. Go to your project settings
2. Add `EMAIL_USER` and `EMAIL_PASSWORD`
3. Redeploy

## 📋 Checklist

- [ ] Updated contact email and phone
- [ ] Customized skills and experience
- [ ] Added your projects
- [ ] Uploaded your profile photo
- [ ] Tested contact form
- [ ] Deployed to Vercel/hosting

## 🎨 Next Steps (Optional)

- **Add More Projects**: Edit `components/Projects.js`
- **Change Theme Colors**: Edit CSS variables
- **Add Dark Mode**: Extend `globals.css`
- **Add Blog Section**: Create new component
- **Integrate Analytics**: Add Vercel Analytics
- **Custom Domain**: Update domain in Vercel settings

## 📚 Learn More

- [Next.js Docs](https://nextjs.org)
- [Framer Motion Docs](https://www.framer.com/motion)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Vercel Docs](https://vercel.com/docs)

## 🆘 Need Help?

Check these files for detailed information:
- **Setup Issues**: See `SETUP.md`
- **Features & Animations**: See `FEATURES.md`
- **Email Troubleshooting**: See `SETUP.md` → Troubleshooting

---

**Your professional portfolio is ready to impress!** 🚀
