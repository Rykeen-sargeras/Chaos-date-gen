# 💘 Chaos Date Generator v4.0 - Valentine's Edition

A chaotic date scenario generator with dynamic prompt generation, floating cupids, and beautiful pink Valentine's theming.

![Preview](preview.png)

## 💕 Features

- **Dynamic Prompt Generation** - Stories built from modular components, creating thousands of unique combinations
- **No Repeats** - Tracks used activities to avoid repetition  
- **36 Custom Hosts** - Your full crew with easy image integration
- **Valentine's Theme** - Pink gradients, floating hearts, animated cupids
- **History Tracking** - Review past generations
- **Screenshot Export** - Save and share your chaos
- **Clipboard Sharing** - One-click copy
- **Keyboard Support** - Press `Space` to generate

---

## 📁 GitHub Repository Structure

```
chaos-date-gen/
│
├── index.html              ← Main application (all-in-one)
├── README.md               ← This file
├── .gitignore              ← Git ignore rules
├── package.json            ← For Node.js deployment (optional)
├── server.js               ← Express server (optional)
├── render.yaml             ← Render deployment config
│
└── assets/
    └── hosts/              ← PUT YOUR 36 HOST IMAGES HERE
        ├── Albert.png
        ├── ALR.png
        ├── A-Mac.png
        ├── Angie.png
        ├── Batgorl.png
        ├── Billy.png
        ├── Boogie.png
        ├── Cherry.png
        ├── Gidgy.png
        ├── Glamy.png
        ├── Grimm.png
        ├── Ice.png
        ├── Jaffee.png
        ├── Jeff.png
        ├── Josh.png
        ├── Ken.png
        ├── Knightmare.png
        ├── Lici.png
        ├── Lucy.png
        ├── Mel.png
        ├── NickMTV.png
        ├── Pesci.png
        ├── Phantom.png
        ├── Scooter.png
        ├── Smooch.png
        ├── Stake.png
        ├── Sweet_Tea.png
        ├── Tech.png
        ├── Tina.png
        ├── Tommy.png
        ├── Twiggy.png
        ├── WonderWoman.png
        ├── Xylie.png
        ├── Yomama.png
        ├── Zey.png
        └── Zita.png
```

---

## 🚀 Quick Start

### 1. Clone & Add Images

```bash
git clone https://github.com/YOUR_USERNAME/chaos-date-gen.git
cd chaos-date-gen
```

Then add your 36 host PNG images to `assets/hosts/`

### 2. Test Locally

Just open `index.html` in your browser - that's it!

Or use a local server:
```bash
# Python
python -m http.server 8000

# Node
npx serve
```

---

## 🌐 Deploy to Render

### Option A: Static Site (FREE - Recommended)

1. Push your repo to GitHub
2. Go to [render.com](https://render.com) → **New** → **Static Site**
3. Connect your GitHub repo
4. Settings:
   - **Build Command:** *(leave empty)*
   - **Publish Directory:** `.`
5. Click **Deploy**

Your site will be live at `https://chaos-date-gen.onrender.com`

### Option B: Web Service (if you need server features)

1. Push to GitHub
2. Go to Render → **New** → **Web Service**
3. Connect repo
4. Settings:
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
5. Deploy

---

## 🎨 Customization

### Change Colors

Edit CSS variables at the top of `index.html`:

```css
:root {
    --pink-light: #fce7f3;
    --pink-hot: #ec4899;
    --pink-deep: #db2777;
    --rose: #e11d48;
    /* etc... */
}
```

### Add More Story Content

Find the `STORY_PARTS` object in the `<script>` section:

```javascript
const STORY_PARTS = {
    openings: [
        "Your new opening...",
    ],
    activityCores: [
        "your new activity",
    ],
    // etc...
};
```

### Switch to Fallback Avatars

If images aren't loading, set:
```javascript
const CONFIG = {
    useLocalImages: false,  // Uses DiceBear API instead
    ...
};
```

---

## 📱 Mobile Support

Fully responsive:
- Cupids hidden on small screens
- Stacked buttons
- Touch-friendly
- Optimized sizes

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `Space` | Generate new chaos |

---

## 🛠 Tech Stack

- **Pure HTML/CSS/JS** - No build step required
- **html2canvas** - For screenshots
- **Google Fonts** - Pacifico, Space Grotesk, JetBrains Mono
- **SVG Cupids** - Custom inline SVG art

---

## 📄 License

MIT - Do whatever you want with it!

---

## 💝 Credits

Made with chaos and questionable romantic advice.

*"Love is patient, love is kind, love is... whatever this is."*
