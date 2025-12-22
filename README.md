# MediCare Hospital Kenya - Advanced Healthcare Solutions

A modern, cinematic Next.js hospital website featuring advanced animations, responsive design, and comprehensive healthcare services.

## Features

- **Cinematic Design**: Modern UI with smooth animations and transitions
- **Responsive Layout**: Fully responsive design for all device sizes
- **Interactive Elements**: Hover effects, scroll animations, and dynamic components
- **Healthcare Services**: Comprehensive pages for appointments, departments, doctors, and more
- **Authentication System**: Role-based access for patients, doctors, and administrators
- **Medical Records**: Patient portal for accessing medical records and appointments
- **Lab & Diagnostics**: Information about diagnostic services
- **Billing & Insurance**: Clear information about costs and accepted insurance plans
- **Contact & Emergency**: Easy access to contact information and emergency services

## Technologies Used

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion (for animations)
- Lucide React (for icons)
- Next Font (Geist)

## Setup Instructions

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Environment Variables

If needed, create a `.env.local` file in the root directory with:

```env
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

## Key Pages

- Home (`/`): Main landing page with cinematic hero section
- About (`/about`): Information about the hospital
- Doctors (`/doctors`): List of medical professionals
- Departments (`/departments`): Medical services by department
- Appointments (`/appointments`): Booking system
- Lab & Diagnostics (`/lab`): Information about diagnostic services
- Billing (`/billing`): Cost and insurance information
- Contact (`/contact`): Contact information and location
- Authentication (`/auth`): Login and registration system
- Patient Dashboard (`/auth/dashboard/patient`): Patient-specific features
- Doctor Dashboard (`/auth/dashboard/doctor`): Doctor-specific features
- Admin Dashboard (`/auth/dashboard/admin`): Administrative features

## Design Highlights

- **Cinematic Animations**: Smooth entrance animations using Framer Motion
- **Parallax Effects**: Depth-enhancing background effects
- **Hover Interactions**: Engaging hover states for buttons and cards
- **Number Counters**: Animated statistics counters
- **Gradient Backgrounds**: Modern color gradients throughout
- **Responsive Navigation**: Collapsible mobile menu with smooth transitions
- **Accessibility**: Proper semantic HTML and ARIA attributes

## Project Structure

```
src/
├── app/                 # Next.js app router pages
│   ├── (auth)/          # Authentication pages
│   ├── about/           # About page
│   ├── appointments/    # Appointment booking
│   ├── contact/         # Contact page
│   ├── departments/     # Department pages
│   ├── doctors/         # Doctors listing
│   ├── lab/             # Lab services
│   ├── billing/         # Billing information
│   └── layout.tsx       # Root layout
├── components/          # Reusable UI components
├── context/             # React context providers
└── lib/                 # Utility functions
```

## Contributing

Feel free to contribute to this project by submitting issues or pull requests.

## License

This project is licensed under the MIT License.