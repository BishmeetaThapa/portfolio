# ✨ Personal Portfolio

**Personal Portfolio** is a modern, responsive, and interactive personal portfolio website built with Next.js, React, and Tailwind CSS. This project showcases skills, experience, and complete project history with an engaging and user-friendly design.

## 🚀 Features

### 🔹 Level 1: Core Sections (Fundamentals)
- [x] **🏠 Hero Section**: Engaging introduction with dynamic elements and elegant typography
- [x] **👤 About Me**: Personal background and professional journey using clean information cards
- [x] **🛠️ Skills Showcase**: Visual representation of technical proficiencies and tools
- [x] **🎓 Qualifications**: Timeline of education and relevant work experience

### 🔹 Level 2: Interactive Elements (Engagement)
- [x] **📂 Projects Gallery**: Highlighted case studies of past work including E-commerce, Weather-dashboard, Tic Tac Toe, and more
- [x] **✉️ Contact Form**: Functional direct messaging integration using Next.js API Routes and Nodemailer
- [x] **✨ Smooth Animations**: Powered by Framer Motion for engaging entry animations, hover effects, and transitions
- [x] **📱 Fully Responsive**: Optimized layouts for mobile, tablet, and desktop viewing

## 📂 Project Structure

```bash
my-portfolio/
├── app/                        # Next.js App Router
│   ├── api/                    # API endpoints
│   │   └── send-email/         # Email sending API route
│   ├── components/             # Reusable UI sections
│   │   ├── About/              # About section with info cards
│   │   ├── Contact/            # Contact form with validation
│   │   ├── Footer/             # Footer with social links
│   │   ├── Hero/               # Hero section with animations
│   │   ├── Navbar/             # Responsive navbar with glassmorphism
│   │   ├── Projects/           # Project gallery with details
│   │   ├── Skills/             # Skills showcase section
│   │   └── qualification/      # Education & experience timeline
│   ├── portfolio/              # Portfolio sub-route
│   ├── globals.css             # Global styles & Tailwind directives
│   ├── layout.tsx              # Root layout & SEO metadata
│   └── page.tsx                # Main entry point
├── public/                     # Static assets and images
│   ├── skills/                 # Skill icons
│   └── *.png                   # Section screenshots
├── .env.example               # Environment variables template
├── next.config.ts             # Next.js configuration
├── package.json               # Dependencies & scripts
└── README.md                  # You are here!
```

## 🛠️ Tech Stack

- **Frontend**: Next.js 16 (App Router), React 19, Tailwind CSS v4, Framer Motion, Lucide React
- **Backend**: Next.js API Routes
- **Email Integration**: Nodemailer
- **Language**: TypeScript

## ⚙️ Installation

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/BishmeetaThapa/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Environment Setup**:
   Create a `.env.local` file in the root directory (for email functionality):
   ```env
   EMAIL_USER=your_email@example.com
   EMAIL_PASS=your_email_password
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser**:
   Navigate to http://localhost:3000 to view your portfolio.

## 📖 Usage

- **Explore Sections**: Navigate through the About, Skills, and Qualifications areas to learn about my background
- **View Projects**: Check out real-world projects with links to GitHub and live demos
- **Contact**: Use the functional contact form to send a direct message, which processes securely via the Next.js API backend

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Please feel free to check the issues page or submit a Pull Request.

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📸 Screenshots

<p align="center">
  <img src="my-portfolio/public/hero.png" alt="Hero Section" width="800"/>
  <br><br>
  <img src="my-portfolio/public/about.png" alt="About Me Section" width="800"/>
  <br><br>
  <img src="my-portfolio/public/skills.png" alt="Skills Section" width="800"/>
  <br><br>
  <img src="my-portfolio/public/projects.png" alt="Projects Section" width="800"/>
  <br><br>
  <img src="my-portfolio/public/contact.png" alt="Contact Section" width="800"/>
</p>

**🌐 Live Demo:** [View Live Site](https://my-portfolio-zeta-one-b8oxqn8uuu.vercel.app/)

---
*Created by [Bishmeeta Thapa](https://github.com/BishmeetaThapa)*
