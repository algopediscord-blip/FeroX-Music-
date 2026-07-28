# Creo Music Bot

A premium, highly-customizable Discord music bot built with Discord.js v14, TypeScript, Prisma (SQLite), and Kazagumo (Lavalink).

## Features

- **High-Quality Music Playback:** Connects to Lavalink nodes via Kazagumo and Shoukaku for lag-free, high-quality audio.
- **Premium UI:** Uses Discord's modern Canvas components (Containers, Text Displays, Buttons, Menus) for a stunning "Creo" themed interface.
- **Advanced Features:** Autoplay, filters, volume control, queue management, and a robust Liked Songs (`/liked`) system.
- **Full Customization:** Users can configure bot prefix, bio, avatar, and banner directly from Discord commands.
- **Admin System:** Granular control with No-Prefix durations, Premium features, and specific Owner/Admin badges on user profiles.

---

## 🚀 Getting Started

### Prerequisites

Before you start, ensure you have the following installed on your system:
- **Node.js** (v18 or higher recommended)
- **Lavalink Server** (You will need a Lavalink node running to play music. Lavalink v4 is supported via Kazagumo)
- **TypeScript** (Can be installed via `npm i -g typescript`)

### 1. Installation

Clone this repository and install all required dependencies:

```bash
# Install NPM dependencies
npm install
```

### 2. Configuration

Create a `.env` file in the root directory and fill it out with your configuration details:

```env
# Bot Credentials
BOT_TOKEN=YOUR_DISCORD_BOT_TOKEN
CLIENT_ID=YOUR_BOT_CLIENT_ID
DATABASE_URL=file:./creo.db

# Lavalink Node Configuration
LAVALINK_URL=localhost:2333
LAVALINK_AUTH=youshallnotpass
LAVALINK_NAME=MainNode

# General Configuration
PREFIX=$
OWNER_ID=YOUR_DISCORD_USER_ID,ANOTHER_OWNER_ID
```

*(Note: Replace `YOUR_DISCORD_BOT_TOKEN`, `YOUR_BOT_CLIENT_ID`, and your Lavalink details with actual values)*

### 3. Database Setup

Creo Music uses **Prisma** with a local **SQLite** database (`creo.db`). Before running the bot for the first time, you must initialize the database schema:

```bash
# Push the Prisma schema to the database (creates creo.db)
npx prisma db push
```

### 4. Running the Bot

You can start the bot using either the development script (which automatically restarts on file changes) or the production script:

```bash
# For Development (using nodemon and ts-node)
npm run dev

# For Production (using ts-node directly)
npm run start
```

---

## 📂 Project Structure

- `/src/bot.ts` - Main Client initialization and database connections.
- `/src/commands` - Contains all slash & prefix commands grouped by category (music, general, config, owner, etc.).
- `/src/events` - Discord event listeners (`ready`, `messageCreate`, `interactionCreate`) and Lavalink events (`trackStart`, `trackEnd`, etc.).
- `/src/handlers` - Handlers to dynamically load commands, events, and UI component routes.
- `/src/ui` - Contains the premium UI builders (`playerEmbed`, `helpMenu`, `containers`) for the beautiful Canvas UI.
- `/src/utils/emojis.json` - Centralized JSON file where you can customize every single emoji the bot uses.

---

## 🛠️ Management & Customization

### Emojis
You can customize the bot's look by editing the `src/utils/emojis.json` file. All commands automatically sync with the emojis defined here. Remember to only use valid Unicode emojis or Custom Emojis in the `<:name:id>` format!

### Bot Customization Commands
As an owner, you can directly change the bot's appearance via Discord:
- `/bprefix <new_prefix>` - Change the global prefix.
- `/bpfp <url>` - Change the bot's avatar.
- `/bbio <text>` - Change the bot's "About Me" bio.

### Granting Access
You can grant users special privileges via the `/admin`, `/premium`, and `/np` (No Prefix) commands. They will automatically receive shiny badges on their `/profile`!

---

**Made with ❤️ by FeroX Devs**
