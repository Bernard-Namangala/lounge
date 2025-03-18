# Chill Lounge - Design Guidelines

This document outlines the initial design direction for the Chill Lounge project, including color scheme and wireframing priorities.

## Color Scheme

A relaxed, comfortable color palette that maintains a modern digital feel while evoking a night lounge atmosphere.

### Primary Color Palette

#### Deep Purple/Blue

- **Primary Color**: `#4A4DE7` (Deep indigo)
- **Light Variant**: `#7B7FF8` (Lighter purple-blue)
- **Dark Variant**: `#3236B0` (Darker purple-blue)

This rich blue-purple serves as the main brand color, conveying a night lounge atmosphere while feeling modern and digital.

#### Teal Accent

- **Accent Color**: `#2DD2C0` (Vibrant teal)
- **Light Variant**: `#65F0E0` (Light teal)
- **Dark Variant**: `#1FA195` (Dark teal)

This teal accent provides energy and contrast against the deeper primary colors, perfect for important actions and interactive elements.

### Neutral Tones

#### Dark Mode (Recommended Default)

- **Background (Darkest)**: `#121214` (Near black)
- **Surface/Cards**: `#1E1E24` (Dark charcoal)
- **Subtle Borders**: `#2D2D36` (Dark gray with hint of purple)
- **Inactive Elements**: `#6C6C7C` (Muted purple-gray)

#### Light Mode (Alternative)

- **Background (Light)**: `#F5F5FA` (Off-white with hint of purple)
- **Surface/Cards**: `#FFFFFF` (White)
- **Subtle Borders**: `#E8E8F0` (Very light purple-gray)
- **Inactive Elements**: `#9A9AAD` (Medium purple-gray)

### Functional Colors

- **Success**: `#32D583` (Green)
- **Warning**: `#FFC043` (Amber)
- **Error**: `#F04A62` (Red-pink)
- **Info**: `#52A9FF` (Blue)

### Typography

For a modern yet comfortable feel:

- **Headings**: Inter (bold weights)
- **Body Text**: Inter (regular & medium weights)
- **Accent Text/UI Elements**: Inter (medium & semibold)

---

## Wireframing Priority - Key Screens

A strategic ordering of screens to wireframe, starting with the most fundamental elements of the user experience.

### 1. Core User Flow Screens

#### 1.1. Landing Page

- Key elements: Welcome message, app description, login/signup buttons
- Purpose: First impression and entry point to the app

#### 1.2. Authentication Screens

- Registration form
- Login form
- Password recovery

#### 1.3. Main Dashboard/Home

- Lounges you're in
- Popular/featured lounges
- Friend activity
- Quick create lounge button
- Navigation to other sections

### 2. Lounge Creation & Management

#### 2.1. Create Lounge Screen

- Lounge name and description inputs
- Privacy settings
- Theme/customization options
- Invite friends option

#### 2.2. Lounge Browser/Discovery

- Search functionality
- Filters (by category, popularity, etc.)
- Lounge cards with preview information
- Join request UI

### 3. Active Lounge Experience

#### 3.1. Main Lounge Interface (Most Complex Screen)

- Participant list/sidebar
- Chat area
- Activity area (central space)
- Music player (minimized state)
- Game selection (minimized state)
- Lounge settings/options menu

#### 3.2. Expanded Music Player

- Current track information
- Playlist management
- Queue display
- Player controls
- Voting interface

#### 3.3. Game Selection Interface

- Game categories
- Game cards with descriptions
- Recently played
- Leaderboards preview

#### 3.4. Active Game Screen

- Game-specific UI (start with card game example)
- Chat sidebar or overlay
- Game controls
- Score/status display

### 4. User Profile & Social Features

#### 4.1. User Profile Page

- Profile information
- Activity history
- Favorite lounges
- Friend list
- Customization options

#### 4.2. Friend Management

- Friend requests
- Friend search
- Friend list with status
- Blocking options

### 5. Settings & Administrative

#### 5.1. User Settings

- Account settings
- Notification preferences
- Privacy settings
- Theme preferences

#### 5.2. Lounge Administration (for lounge owners)

- Member management
- Moderation tools
- Advanced customization
- Access control settings

### Wireframing Tips

1. **Start with mobile layouts** first, then adapt to desktop (mobile-first approach)
2. **Use grayscale** initially to focus on layout rather than colors
3. **Include multiple states** for interactive elements (default, hover, active, disabled)
4. **Note interactions** between screens with arrows or annotations
5. **Keep early wireframes low-fidelity** to iterate quickly

---

## Recommended Design Tools

- **Figma** - Best overall option for wireframing and later creating high-fidelity designs
- **Adobe XD** - Good alternative with similar features
- **Balsamiq** - Excellent for quick, low-fidelity wireframes
- **Miro** - Great for collaborative planning and user flow mapping
