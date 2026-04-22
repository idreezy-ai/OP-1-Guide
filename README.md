# OP-1 Beat Making Guide — Desktop App

A fully offline Windows desktop app built with Electron.

---

## What's in this folder

```
op1-app/
├── main.js                  ← Electron app entry point
├── package.json             ← App config & build settings
├── op1-learning-guide.html  ← The actual app content
├── icon.svg                 ← App icon (replace with your own if you like)
└── README.md                ← This file
```

---

## Step 1 — Install Node.js (if you haven't already)

1. Go to https://nodejs.org
2. Download the **LTS** version (the left button)
3. Run the installer — keep all defaults, click Next through everything
4. When done, open **Command Prompt** (search "cmd" in Start Menu)
5. Type this and press Enter to confirm it worked:
   ```
   node --version
   ```
   You should see something like `v20.11.0`

---

## Step 2 — Open this folder in Command Prompt

1. Open **Command Prompt**
2. Type `cd ` (with a space after), then drag the `op1-app` folder into the Command Prompt window — it'll paste the path automatically
3. Press Enter

Or manually type the path, e.g.:
```
cd C:\Users\YourName\Downloads\op1-app
```

---

## Step 3 — Install dependencies

Paste this and press Enter:
```
npm install
```

This downloads Electron and the build tools (~200MB). Takes 1–3 minutes depending on your internet speed.

---

## Step 4 — Test it first (optional but recommended)

```
npm start
```

This launches the app immediately so you can confirm it looks right before building the installer.

Press **Ctrl+C** in the Command Prompt to close it when done.

---

## Step 5 — Build the Windows installer

```
npm run build
```

This takes 2–5 minutes. When it's done you'll see a new `dist/` folder appear.

---

## Step 6 — Install your app

Inside the `dist/` folder you'll find:
```
dist/
└── OP-1 Beat Guide Setup 1.0.0.exe
```

Double-click that `.exe` to install it. It will:
- Install the app silently
- Create a **desktop shortcut**
- Add it to your **Start Menu**

Done! You now have a proper Windows app.

---

## Optional: Custom icon

Replace `icon.ico` with your own 256x256 `.ico` file before running `npm run build`.
You can convert any image to `.ico` at https://convertio.co/png-ico/

---

## Sharing with others

Just share the `OP-1 Beat Guide Setup 1.0.0.exe` file from the `dist/` folder.
Anyone can double-click it to install — no Node.js required on their machine.

