---
title: 'SSG-SSR'
date: '2023-11-27'
---

## SSG vs SSR

In Next.js, there are two methods for pre-rendering pages: Static Site Generation (SSG) and Server-side Rendering (SSR).

## Static Site Generation (SSG)

SSG generates HTML at build time and serves it to the client as static files. This means that the HTML is generated once during the build process and can be cached and served to multiple clients without any additional server-side processing.

To use SSG in Next.js, you can export a `getStaticProps` function from your page component. This function fetches data from an API or a database and returns it as props to the page component. The page component can then use these props to render the page.
