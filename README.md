# DevVault - Developer Services Platform

## Overview

DevVault is a comprehensive platform for managing developer services, including project management, support tickets, and client communication. Built with React and Supabase, it provides a modern and responsive user interface for both clients and administrators.

## Features

- User authentication with role-based access control
- Project management with bidding system
- Support ticket system with replies and history tracking
- Dashboard with analytics and notifications
- Responsive design for desktop and mobile devices

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Supabase account and project

### Installation

1. Clone the repository
   ```
   git clone https://github.com/yourusername/devvault.git
   cd devvault
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Set up environment variables
   Create a `.env` file in the root directory with your Supabase credentials:
   ```
   VITE_SUPABASE_URL=your-supabase-url
   VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

4. Set up the database
   Follow the instructions in the `DATABASE-SETUP.md` file to set up the necessary tables in Supabase.

5. Add skills column to projects table
   Run the SQL script in the Supabase SQL Editor:
   ```sql
   ALTER TABLE projects ADD COLUMN IF NOT EXISTS skills JSONB DEFAULT '[]'::jsonb;
   ```

6. Set up contacts table for the contact form
   Run the SQL script in the Supabase SQL Editor or use the setup script:
   ```
   node setup-contacts-table.js
   ```
   Alternatively, you can run the provided script:
   ```
   node add-skills-to-projects.sql
   ```

6. Start the development server
   ```
   npm run dev
   ```
   
   Note: The development server uses kill-port to automatically free port 5136 if it's occupied from a previous session.

## Database Setup

Before using the application, you need to set up the database tables in Supabase. Please refer to the `DATABASE-SETUP.md` file for detailed instructions.

## Technologies Used

- React
- Vite
- Supabase (Authentication and Database)
- Styled Components
- Framer Motion
- React Router
- React Icons

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
