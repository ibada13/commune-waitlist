# Commune 🏡  
*A simple, modern landing page for communities and collaboration.*  

## 🚀 Features  
- 🌟 Clean and responsive UI  
- ⚡ Fast and optimized with Next.js & TailwindCSS  
- 📱 Mobile-friendly design  

## 🛠️ Tech Stack  
- **Next.js** 
- **TypeScript**  
- **Tailwind CSS**  
- **React Icons**  



## 🚀 Setup & Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ibada13/commune-waitlist.git
   cd commune-waitlist
   ```

2. Install dependencies using pnpm:
   ```bash
   pnpm install
   ```

3. Run the development server:
   ```bash
   pnpm dev
   ```

4. Build & export the static site:
   ```bash
   pnpm build && pnpm export
   ```

## 🖼️ Assets Location
All images, logos, and other assets are stored in the `lib/assets/` directory. If you encounter missing assets, ensure the correct import path:
```js
import Logo from '@/lib/assets/logo.svg';
```

## 📌 Notes
- The app does **not** use API routes (static export only).
- Ensure your environment supports **Node.js 16+**.

## 📜 License
This project is open-source and available under the [MIT License](LICENSE).