# Nodebase

An advanced, AI-powered workflow automation platform built for the modern web. Nodebase combines the power of visual node-based editing with robust backend execution to help users build, manage, and automate complex processes.

![Project Banner](public/og-image.png)

## 🚀 Key Features

- **Visual Workflow Editor**: Intuitive node-based interface powered by [React Flow](https://reactflow.dev/), allowing users to drag-and-drop nodes to create complex logic flows.
- **AI Integration**: Built-in support for AI capabilities using the [Vercel AI SDK](https://sdk.vercel.ai/), supporting OpenAI and Google models.
- **Robust Authentication**: Secure user management and session handling via [Better Auth](https://better-auth.com/).
- **Background Jobs**: Reliable asynchronous task processing powered by [Inngest](https://www.inngest.com/).
- **Type-Safe API**: End-to-end type safety using [tRPC](https://trpc.io/) and [Prisma](https://www.prisma.io/).
- **Modern UI**: Polished, accessible, and responsive interface built with [shadcn/ui](https://ui.shadcn.com/) and Tailwind CSS 4.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router & Server Actions)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Database**: [PostgreSQL](https://www.postgresql.org/) with [Prisma ORM](https://www.prisma.io/)
- **State Management**: [TanStack Query](https://tanstack.com/query/latest) & React Context
- **Validation**: [Zod](https://zod.dev/)
- **Forms**: [React Hook Form](https://react-hook-form.com/)

## 📦 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js (v20 or higher)
- npm or pnpm
- PostgreSQL database

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AmirrezaJM/nodebase.git
   cd nodebase
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Environment Setup**
   Copy the example environment file and update it with your credentials:
   ```bash
   cp .env.example .env
   ```
   *Make sure to populate `DATABASE_URL`, `BETTER_AUTH_SECRET`, and AI provider keys.*

4. **Database Setup**
   Push the Prisma schema to your database:
   ```bash
   npx prisma db push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
