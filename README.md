# Nexx SaaS Product

Nexx is a SaaS platform that allows users to easily collect and analyze feedback through reusable web components that can be embedded into their projects. The platform offers features such as analytics, secure data storage, and seamless integration with existing tools.

## Features

- **Seamless Integration**: Embed feedback components directly into any project.
- **Customizable**: Tailor the feedback widget and dashboard to your needs.
- **Analytics**: Monitor and analyze feedback data in real-time.
- **Secure**: Built-in user authentication and secure data storage.
- **Scalable**: Designed to handle businesses of all sizes, from startups to enterprises.

## Tech Stack

- **Frontend**: React, TailwindCSS, Radix UI
- **Backend**: Next.js, PostgreSQL, Supabase
- **Authentication**: Clerk.js
- **ORM**: Drizzle ORM
- **Payment Integration**
  
## Linking to Nexx Reusable Web Component

This SaaS platform is designed to integrate seamlessly with the [**Nexx Reusable Web Component**](https://github.com/pranav-js670/Nexx-Web-Component.git). You can use this component to collect feedback directly on your website, which is managed and analyzed via the SaaS dashboard.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/nexx-saas-product.git
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables: Create a .env file in the root of the project and configure the following variables

```bash
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
CLERK_API_KEY=your-clerk-api-key
DATABASE_URL=your-postgres-database-url
```

4. Run the development server:

```bash
npm run dev
```

5. Open http://localhost:3000 to view the application.

## Usage

1. After setting up the platform, log in to manage feedback, view analytics, and customize the feedback widget.

2. Embed the web component from the Nexx Web Component repository into your website to start collecting feedback.

### License

MIT License.
