# Don-Philip | Personal Portfolio

**Building. Securing. Designing.**

The technology portfolio of **Onyejekwe Philip Emeka (Don-Philip)**, a Full Stack Software Engineer working across four connected areas: software and backend development, cybersecurity, digital design and IT support. The site is built for both **employers** and **freelance clients**.

🌐 **Live site:** https://donphilip.dev
💼 **LinkedIn:** https://www.linkedin.com/in/onyejekwe-philip-emeka-18700226a

## About me

Computer Science student at the University of the People. ALX Software Engineering (Back-end) and ALX Graphic Design graduate, with an ALX Cybersecurity certificate and Cisco Networking Academy certificates in Network Support and Security and Cyber Threat Management.

I build web apps, design brand identities, and I'm learning to think like a defender.

## What's on the site

- **About:** professional background and education
- **Services:** four categories (Software & Backend Development, Cybersecurity & Network Defense, Digital Design & Branding, IT Support & Technical Solutions)
- **Projects:** web projects (BizTrack, God's Lifting School) and brand identity case studies (TerraWeave, DON'S LAB, Ajo) with PDFs
- **Skills:** toolkit and skills grouped by area
- **Cybersecurity:** my approach to ethical, authorised security learning
- **Certifications and learning:** with links to verify each certificate
- **CV and contact:** CV download, email, WhatsApp, LinkedIn and GitHub
- **Light and dark mode**, remembered between visits
- Fully responsive, with a link-preview image, search-engine tags and security headers

## Built with

- [React](https://react.dev/) 19 and [Vite](https://vite.dev/)
- Plain CSS with light and dark themes
- [Oxlint](https://oxc.rs/docs/guide/usage/linter) for code checks
- Hosted on [Vercel](https://vercel.com/); every push to `master` redeploys automatically

## Run it locally

```bash
npm install
npm run dev       # start the development server
npm run build     # create the production build in /dist
npm run preview   # preview the production build
npm run lint      # check the code
```

## Project structure

```
index.html          page title, SEO tags and link-preview tags
vercel.json         security headers
public/             images, PDFs, logos, certificates, robots.txt, sitemap.xml
src/App.jsx         the page and its content
src/App.css         all styles, including the light theme
```

## Updating the content

The content lives in simple lists at the top of `src/App.jsx`. Edit the text there and push to GitHub:

| List | What it controls |
| --- | --- |
| `projects` | Design case study cards |
| `webProjects` | Web project cards (add a project's domain in `url` to show its live link) |
| `certificates` | Certifications and their verify links |
| `services` | The "How I can help" cards |
| `contact` and `profileLinks` | Email, WhatsApp, LinkedIn, GitHub and CV links |

## Notes

- TerraWeave and Ajo are **fictional concept brands** created for portfolio and educational projects. No real-world impact claims are made.
- DON'S LAB is a brand concept for a cybersecurity learning lab.

## Copyright

© 2026 Onyejekwe Philip Emeka (Don-Philip). All rights reserved. Please don't copy the design or content without permission.
