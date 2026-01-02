# YouTube Clone 🎥
A feature-rich video streaming interface built with React and Tailwind CSS. This project replicates the modern YouTube desktop and mobile experience, focusing on responsive grid layouts, category filtering, and a sleek dark-mode aesthetic.


### ✨ Features
Dynamic Video Grid: Auto-responsive layout that adjusts the number of columns based on screen width.
Category Chips: Functional category filter bar for sorting video content.
Collapsible Sidebar: A fully responsive navigation menu that switches between full and "mini" modes.
Video Player View: A dedicated playback page layout with "Recommended Videos" and "Comments" sections.
Search Functionality: Real-time search simulation and UI for discovering content.

#### 🛠️ Tech Stack
Framework: React.js

#### Styling: Tailwind CSS
#### Icons: React Icons / Lucide-React

Data Handling: Dynamic mapping of video objects (simulating API responses)

## 🏗️ Technical Highlights
Responsive Grid Layouts
The most challenging part of this project was the CSS Grid logic. I utilized Tailwind's grid-cols with auto-fill and minmax to ensure the video thumbnails look consistent from 4K monitors down to mobile screens.

## State-Driven Filtering
I implemented a state-managed "Category Bar" where clicking a chip dynamically filters the displayed video array, mimicking the behavior of the actual YouTube homepage.

## 📦 Installation
1. Clone the repo:

```bash
git clone https://github.com/NojoudCodes/YouTube-clone.git
```

2. Install dependencies:
```bassh
npm install
```

3. Run the project:

```bash

npm run dev
