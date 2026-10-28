# Appointy deployment notes

This source copy excludes `.git`, `node_modules`, build output, and real `.env` files. Keep secrets in hosting-provider environment settings.

## Hosting layout
- Render web service: Root Directory `backend`, Build Command `npm install`, Start Command `npm start`.
- Vercel patient frontend: Root Directory `frontend`, Framework `Vite`, Build Command `npm run build`, Output Directory `dist`.
- Vercel admin frontend: Root Directory `admin`, Framework `Vite`, Build Command `npm run build`, Output Directory `dist`.
- MongoDB Atlas: add a database user and configure Network Access so Render can connect. For a quick demo, Atlas may allow `0.0.0.0/0`; use strong credentials and understand this permits network connections from any IP, still gated by database authentication.

See `.env.example` files for variable names. Replace example URLs with the actual deployed URLs. Set `VITE_*` variables in Vercel before building/redeploying. Never put `RAZORPAY_KEY_SECRET`, `JWT_SECRET`, MongoDB password, or Cloudinary secret in Vite variables.
