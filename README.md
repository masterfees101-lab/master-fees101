# Master-Fees

A modern school fee management system built with React, Vite, and Supabase. Master-Fees helps educational institutions automate fee collection, track transactions, and manage customer relationships efficiently.

## Features

- 🔐 Secure authentication with Supabase
- 📊 Real-time revenue tracking and analytics
- 💰 Comprehensive fee management system
- 👥 Customer (student) management interface
- 📈 Revenue breakdown and recovery insights
- 🎯 Task scheduling and management
- 🔔 Automated payment reminders
- 📱 Responsive design with Tailwind CSS

## Tech Stack

- **Frontend**: React 19, Vite 7
- **Styling**: Tailwind CSS v4
- **Authentication**: Supabase
- **Charts**: Recharts
- **Icons**: Lucide React
- **Routing**: React Router v7
- **Notifications**: React Hot Toast

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Supabase account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/masterfees101-lab/master-fees101.git
cd master-fees101
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```bash
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
master-fees101/
├── src/
│   ├── assets/          # Images, icons, backgrounds
│   ├── components/      # Reusable components
│   │   ├── ui/         # UI components (buttons, cards, etc.)
│   │   ├── ErrorBoundary.jsx
│   │   └── ProtectedRoute.jsx
│   ├── context/        # React context providers
│   ├── pages/          # Page components
│   ├── routes/         # Routing configuration
│   ├── services/       # External service integrations
│   ├── styles/         # Additional CSS
│   └── utils/          # Utility functions and constants
├── public/             # Static assets
└── index.html         # Entry HTML file
```

## Environment Variables

Create a `.env` file with the following variables:

| Variable | Description |
|----------|-------------|
| `VITE_SUPABASE_URL` | Your Supabase project URL |
| `VITE_SUPABASE_ANON_KEY` | Your Supabase anonymous key |

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

© All Rights Reserved 2025 Master-Fees Ltd.

## Support

For support, contact Master-Fees support team or visit our documentation.
