# SkillHero 🚀

> **AI-Powered Career Roadmap Generator**

SkillHero is a modern web application that helps users create personalized career roadmaps. Users input their current skillset and desired career goals, and the platform generates AI-powered learning paths with timelines, modules, and curated resources.

## ✨ Features

- **🔐 Secure Authentication** - Built with Clerk for seamless user management
- **🎨 Modern UI/UX** - Beautiful, responsive design with dark/light theme support
- **🤖 AI-Powered Roadmaps** - Intelligent career path generation
- **📊 Progress Tracking** - Monitor your learning journey
- **📱 Responsive Design** - Works perfectly on all devices
- **🌙 Theme Support** - Dark and light mode with system preference detection

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Authentication**: [Clerk](https://clerk.com/)
- **Database**: [Neon](https://neon.tech/) (PostgreSQL)
- **Language**: TypeScript
- **Deployment**: Vercel-ready

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm
- Clerk account (for authentication)
- Neon database account (for data storage)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/skillhero.git
   cd skillhero
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:

   ```bash
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key

   # Database (Neon PostgreSQL)
   DATABASE_URL=your_neon_database_url
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
skillhero/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   └── Theme-Provider.tsx
├── lib/                  # Utility functions
├── middleware.ts         # Clerk middleware
└── public/              # Static assets
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Environment Variables

| Variable                                          | Description                       | Required |
| ------------------------------------------------- | --------------------------------- | -------- |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`               | Clerk publishable key             | ✅       |
| `CLERK_SECRET_KEY`                                | Clerk secret key                  | ✅       |
| `NEXT_PUBLIC_CLERK_SIGN_IN_URL`                   | Clerk Sign in URL                 | ✅       |
| `NEXT_PUBLIC_CLERK_SIGN_UP_URL`                   | Clerk Sign up URL                 | ✅       |
| `NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL` | Clerk Sign in fallback redirect   | ✅       |
| `NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL` | Clerk Sign up redirect            | ✅       |
| `DATABASE_URL`                                    | Neon PostgreSQL connection string | ✅       |

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The app is compatible with any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Clerk](https://clerk.com/) for authentication
- [shadcn/ui](https://ui.shadcn.com/) for beautiful components
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Neon](https://neon.tech/) for database hosting

---

**Made with ❤️ by Mofijur Rahman**
