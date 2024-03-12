This is just a toolkit on how to get prisma working with a free db. This is what I feel should be known.

Toolkit includes 
- A built prisma schema that was recommened to be used with every project
- A lib with a db.ts that is for prisma


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

# Using Aiven
[Aiven](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjOw9igne6EAxUVMEQIHRg5DK8QFnoECAgQAQ&url=https%3A%2F%2Faiven.io%2F&usg=AOvVaw0p2cSFbln3OqAYwatr_J6P&opi=89978449)
```bash
# After compile
npx prisma generate
# Retrieve and connect our database with our .env
npx prisma db push
# Runs a easy UI to modify out DB
npx prisma studio
```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
