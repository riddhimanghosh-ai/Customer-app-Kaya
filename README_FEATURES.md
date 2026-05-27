# Kaya Patient Portal - Feature Complete Demo

A comprehensive patient portal web & mobile responsive app for Kaya Skin Clinic, built with Next.js, TypeScript, Tailwind CSS, and SQLite.

## ✨ Implemented Features

### 1. **Authentication System**
- ID & Password registration and login
- Secure password hashing with bcryptjs
- User profiles with personal information
- Session management with cookies

### 2. **Loyalty Program** (4 Tiers)
- **Silver**: 0-999 points (5% discount)
- **Gold**: 1000-4999 points (10% discount + free consultation)
- **Elite**: 5000-9999 points (15% discount + priority booking + quarterly free products)
- **Platinum**: 10000+ points (20% discount + VIP support + monthly free products)
- Points tracking and tier progression visualization

### 3. **Referral Discounts**
- Unique referral codes for each user
- Share-friendly referral links
- Referral benefits: 10% discount for both parties
- 100 bonus points per successful referral
- Unlimited referral capability

### 4. **Before & After Images**
- Gallery view of treatment progress
- Before/after image storage per treatment type
- Session-linked image tracking
- Treatment type categorization
- Upload functionality (UI ready for integration)

### 5. **Session History & Upcoming**
- Upcoming sessions with doctor details
- Doctor profile information and images
- Treatment type tracking
- Session notes and reminders
- Completed session history
- Reschedule and reminder options

### 6. **AI Chatbot for FAQs**
- Placeholder integration for Claude API
- Common FAQ responses about:
  - Acne treatment
  - Medications
  - Skincare routines
  - Treatment results
  - Side effects
  - Appointments
- Ready to integrate with Claude API key (user provides later)

### 7. **Blogs & Relevant Videos**
- **Blogs**: 
  - Category filtering
  - Healthcare tips and skincare articles
  - Author and publish date info
  - Newsletter subscription
  
- **Videos**:
  - Interactive video library
  - Multiple categories (Tutorial, Education, Procedure, etc.)
  - Video duration and view count
  - Search functionality
  - Hover play preview

### 8. **Complete Medical History**
- **Prescriptions**: Active and past medications with dosage, frequency, duration
- **Consultations**: Doctor notes, diagnosis, treatment plans
- **Products & Services**: Purchase history with categories
- **Sessions**: Complete treatment history
- All accessible from dashboard

### 9. **Reminders & Follow-Ups**
- Medicine intake reminders
- Session follow-up reminders
- Custom reminder creation
- Reminder date/time scheduling
- "Did you take your medicine?" nudges
- Treatment/dosage status-based reminders
- Unread reminder tracking

### 10. **Booking Management**
- Upcoming booking display
- Doctor name and profile
- Booking date and time confirmation
- Reminder notifications
- Reschedule capabilities

## 🏗️ Technical Architecture

### Frontend Stack
- **Next.js 16** (App Router)
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Client-side rendering** for interactive features
- **Responsive design** (mobile-friendly)

### Backend Stack
- **Next.js API Routes** (serverless)
- **SQLite** with better-sqlite3
- **bcryptjs** for password hashing
- **RESTful API endpoints**

### Database Schema
- **users**: Profile, loyalty tier, referral code
- **sessions**: Doctor appointments with status
- **prescriptions**: Medications and dosage info
- **reminders**: Smart notifications
- **before_after_images**: Treatment progress tracking
- **consultations**: Doctor notes and treatment plans
- **products_services**: Purchase history
- **medicine_logs**: Daily dose tracking
- **loyalty_transactions**: Points history
- **referral_discounts**: Referral tracking
- **blogs & videos**: Content management

## 📱 Pages & Routes

### Public Pages
- `/` - Homepage with features overview
- `/login` - Sign in page
- `/register` - Account creation page

### Protected Pages (Requires Auth)
- `/dashboard` - Main dashboard with overview
- `/sessions` - Upcoming & past sessions
- `/prescriptions` - Medication management
- `/before-after` - Progress gallery
- `/chatbot` - AI FAQ assistant
- `/loyalty` - Rewards program & tier benefits
- `/referral` - Referral program
- `/blogs` - Healthcare articles
- `/videos` - Video library

### API Routes
- `POST /api/auth/register` - Create new user
- `POST /api/auth/login` - User login
- `GET /api/user/profile` - Get user profile
- `GET /api/sessions` - List user sessions
- `POST /api/sessions` - Create new session
- `GET /api/prescriptions` - List prescriptions
- `POST /api/prescriptions` - Add prescription
- `GET /api/reminders` - List reminders
- `POST /api/reminders` - Create reminder
- `POST /api/chatbot` - Chat with AI

## 🚀 Getting Started

### Installation
```bash
cd patient-portal-app
npm install
```

### Development
```bash
npm run dev
```
Access at `http://localhost:3000`

### Production Build
```bash
npm run build
npm start
```

## 🔐 Authentication Flow

1. User registers with email, password, name, phone, DOB
2. Password is hashed with bcryptjs
3. User login returns user data and sets cookie
4. Protected routes check for `user_id` cookie
5. Logout clears local storage and cookie

## 💾 Database Setup

Database is automatically initialized on first API call:
- Creates all tables with proper relationships
- SQLite file stored at `/data/portal.db`
- WAL mode enabled for better concurrency

## 🔗 Integration Points

### Claude API Integration (Ready)
Replace the placeholder chatbot implementation with actual Claude API:
1. Add `CLAUDE_API_KEY` to `.env.local`
2. Update `/app/api/chatbot/route.ts` to call Claude API
3. User will provide the API key

## 📋 Demo Data

The app works with a blank database. To test:
1. Register a new account
2. Add sessions, prescriptions, reminders via API or UI extensions
3. Watch loyalty points accumulate
4. Test referral code sharing

## 🎨 UI/UX Features

- Gradient backgrounds (blue to indigo theme)
- Responsive grid layouts
- Hover effects and transitions
- Status badges (Silver/Gold/Elite/Platinum)
- Quick action buttons on dashboard
- Mobile-optimized card layouts
- Color-coded reminder types
- Progress bars for loyalty tier progression

## ⚙️ Environment Variables

```
NEXT_PUBLIC_API_URL=http://localhost:3000
# Add Claude API key when ready:
# CLAUDE_API_KEY=your_key_here
```

## 📦 Dependencies

- next: 16.2.6
- react: Latest
- typescript: Latest
- tailwindcss: Latest
- better-sqlite3: SQLite database
- bcryptjs: Password hashing

## 🎯 Next Steps for Deployment

1. **Add Claude API Key** when ready for chatbot
2. **Deploy to Vercel**: `vercel deploy`
3. **Set environment variables** in Vercel dashboard
4. **Configure database** (SQLite works on Vercel with limitations, consider Postgres for production)
5. **Set up backup strategy** for SQLite database

## 📝 Notes

- All patient data is locally stored
- No external API calls yet (ready for Claude API)
- Mobile responsive but optimized for web
- Can extend with more features as needed
- Database scales for demo purposes

## 🎉 Status

✅ All core features implemented
✅ Database schema complete
✅ API routes functional
✅ UI pages built and styled
✅ Ready for testing and Claude API integration
⏳ Claude API chatbot pending API key from user

---

**Built with ❤️ for Kaya Skin Clinic**
