# Anjous Temitayo · Portfolio

Personal portfolio for Anjous Temitayo, Product UI/UX Designer + Product Manager.
Built with Next.js, GSAP and Lenis. The whole site builds to plain static files, so hosting is free.

---

## Put it online (about 10 minutes, no coding)

**1. Upload the code to GitHub**

1. Create a free account at [github.com](https://github.com) if you don't have one.
2. Click **+** (top right) → **New repository**. Name it `anjous-portfolio`, keep it **Public** or **Private**, and click **Create repository**.
3. On the next screen click **uploading an existing file**.
4. Open the unzipped `anjous-portfolio` folder on your computer, select **everything inside it** and drag it into the GitHub page.
5. Click **Commit changes**.

**2. Publish it with Vercel**

1. Go to [vercel.com](https://vercel.com) → **Sign up** → **Continue with GitHub**.
2. Click **Add New… → Project**, find `anjous-portfolio` and click **Import**.
3. Change **Project Name** to `anjoustemitayo`. Leave everything else as it is.
4. Click **Deploy**. After about a minute your site is live at **https://anjoustemitayo.vercel.app**.

If that name is taken, Vercel adds a few letters to it. You can choose a different name under **Settings → Domains**.

---

## Change the content

All the words and projects live in two files. You don't need to touch anything else.

| File | What's in it |
|---|---|
| `content/site.ts` | Name, statement, email, social links, roles, process steps, capabilities, Behance archive |
| `content/projects.ts` | Every case study: text, roles, years, screens, decisions, reference links |

**To edit on GitHub:** open the file, click the pencil icon, make your change, then click **Commit changes**. Vercel republishes the site automatically in about a minute.

**To add an image to a project:**

1. Upload the image into `public/img/` on GitHub (**Add file → Upload files**). JPG, PNG or WebP. Keep it under about 500 KB.
2. In `content/projects.ts`, add it to that project's `extra` list:
   ```ts
   extra: [{ src: "/img/safefi-onboarding.webp", caption: "Onboarding" }],
   ```

**To add a reference link** (Figma, prototype, live site), add it to the project's `links` list:
```ts
links: [
  { label: "Figma prototype", url: "https://www.figma.com/proto/..." },
  { label: "Behance", url: "https://www.behance.net/gallery/..." },
],
```

**To add a job's dates**, edit `roles` in `content/site.ts`:
```ts
{ title: "Product Manager", org: "Calm Information Technologies", place: "Lagos, Nigeria", dates: "2025 – Present" },
```

---

## Connect your own domain later

1. Buy the domain (for example `anjoustemitayo.com`).
2. In Vercel: **Project → Settings → Domains → Add**, type the domain, and copy the DNS records it shows into your domain registrar's DNS settings.
3. In Vercel: **Settings → Environment Variables**, add `NEXT_PUBLIC_SITE_URL` = `https://anjoustemitayo.com`, then **Redeploy**. This updates the sitemap and the link previews.

---

## For developers

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in /out
```

- `app/`: pages (home, work, case study, about, experience, contact), sitemap, robots
- `components/`: navigation, page transition, smooth scroll, animations, annotated screens
- `content/`: all copy and project data
- `public/img/`: optimised WebP images; `public/og.jpg` is the social preview image

Motion respects `prefers-reduced-motion`. Smooth scrolling is on only for mouse and trackpad; touch devices keep native scrolling. Fonts are self-hosted from Fontsource (Archivo, Bodoni Moda, Azeret Mono), so there are no calls to Google Fonts.
