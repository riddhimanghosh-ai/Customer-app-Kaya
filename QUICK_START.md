# Quick Start Guide

## 🚀 Run the App

```bash
cd patient-portal-app
npm run dev
```

Open http://localhost:3000

## 📝 Test Account

Create a new account with:
- **Email**: test@example.com
- **Password**: password123
- **Name**: Test User
- **Phone**: +91 9876543210 (optional)
- **DOB**: 1990-01-01 (optional)

## 🎯 Key Pages to Explore

1. **Home** → See app overview
2. **Register** → Create new account
3. **Login** → Sign in
4. **Dashboard** → Main hub with:
   - Loyalty tier & points
   - Quick navigation
   - Upcoming sessions
   - Active reminders
5. **Sessions** → View upcoming & past appointments
6. **Prescriptions** → Track medications
7. **Loyalty** → See rewards & tier benefits
8. **Referral** → Share referral code
9. **Chatbot** → Ask FAQs (placeholder ready for Claude API)
10. **Blogs** → Health articles
11. **Videos** → Tutorial library
12. **Before/After** → Progress gallery

## 🔑 Integration with Claude API

When ready to activate chatbot:

1. Get Claude API key from Anthropic
2. Add to `.env.local`:
   ```
   CLAUDE_API_KEY=your_key_here
   ```
3. Update `/app/api/chatbot/route.ts` to call Claude API instead of placeholder responses

## 💾 Database

- SQLite automatically initializes on first use
- Stored at: `/data/portal.db`
- All tables created automatically

## 📱 Features Quick Reference

✅ **Auth**: Register, Login, Logout
✅ **Loyalty**: 4 tiers (Silver → Platinum), points tracking
✅ **Referral**: Share code, earn discounts
✅ **Sessions**: Book, track appointments
✅ **Prescriptions**: Manage medications
✅ **Reminders**: Get nudges (medicine, appointments)
✅ **Before/After**: Track progress
✅ **Chatbot**: FAQ helper (ready for Claude)
✅ **Blogs**: Health content
✅ **Videos**: Tutorials

## 🚢 Deploy to Vercel

```bash
vercel deploy
```

Set environment variables in Vercel dashboard:
```
NEXT_PUBLIC_API_URL=https://your-domain.vercel.app
CLAUDE_API_KEY=your_key
```

## 🔧 Development Commands

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm start        # Run production build
npm run lint     # Check code quality
```

## 📧 Contact

For questions about integration, contact Bhavya Joshi (bhavya.joshi@devxlabs.ai)

---

**Ready to use! Just add Claude API key when needed.** 🎉
