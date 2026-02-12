# GiftDrop - Birthday Wishlist

Create and share your birthday wishlist with friends and family. Sign up, add the gifts you want, set priorities, and share your list via a public link.

## Features

- **Sign up / Log in** with name, email, password, and birthday
- **Add wishlist items** with name, description, link, price, and priority (low / medium / high)
- **Birthday countdown** displayed on your dashboard
- **Filter items** by priority or purchased status
- **Share your wishlist** via a public link at `/wish/[userId]`
- **Mark items as purchased** so gift-givers can coordinate

## Tech Stack

- **Next.js** (App Router)
- **Tailwind CSS** + **shadcn/ui**
- **localStorage** for data persistence (no database required)

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.
