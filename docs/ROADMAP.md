# Black Veil Archives — Roadmap

Black Veil Archives is a luxury horror discovery platform built for Halloween and beyond. The website will allow users to explore horror books, movies, music, haunted locations, tragic event archives, paranormal stories, haunted hotels, and interactive AI-powered scare experiences.

The long-term goal is to create a dark, premium archive where users can discover frightening media, real-world haunted locations, strange historical events, and optional horror experiences such as a scheduled 3 AM AI haunting call.

---

## Project Name

**Black Veil Archives**

## Domain Goal

```txt
blackveilarchives.com
```

## Repository Name

```txt
black-veil-archives
```

## Core Concept

Black Veil Archives is designed to feel like a mysterious digital archive of horror, tragedy, paranormal activity, haunted travel, and scary entertainment.

The platform should combine:

- Horror media discovery
- Haunted maps and location-based exploration
- Haunted hotel discovery
- True-crime and tragic event history
- Paranormal and extraterrestrial locations
- Affiliate-based product links
- AI-powered Halloween scare experiences

---

## Suggested Tech Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion

### Backend

- Supabase
- Supabase Postgres
- Supabase Auth
- Supabase Storage
- Supabase Edge Functions

### Maps

- Google Maps JavaScript API
- Google Places API, if needed later

### AI / Voice Calls

- Twilio
- OpenAI API or another voice AI provider
- Supabase scheduled call records
- Edge Functions for secure backend logic

### Payments

- Stripe Checkout
- Stripe Webhooks
- Supabase order/call tracking

### Affiliate Revenue

- Amazon Associates
- Hotel/travel affiliate links
- Horror product affiliate links
- Ghost hunting gear affiliate links

### Hosting

- Vercel for frontend
- Supabase for backend/database

---

# Phase 1 — Project Setup

## Goal

Create the foundation of the website and prepare the repo for future development.

## Tasks

- Create GitHub repository:

  ```txt
  black-veil-archives
  ```

- Initialize Next.js project with TypeScript.

- Install core dependencies:

  - Tailwind CSS
  - shadcn/ui
  - Framer Motion
  - Supabase client
  - Google Maps package, later when needed

- Set up folder structure:

```txt
src/
  app/
  components/
  data/
  lib/
  styles/
  types/
  utils/
  assets/
```

- Create environment variable file:

```txt
.env.local
```

- Add placeholder environment variables:

```txt
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
OPENAI_API_KEY=
```

- Create first README.md.
- Create ROADMAP.md.
- Create initial commit.

## Phase 1 Status

```txt
Not Started
```

---

# Phase 2 — Brand Identity & Landing Page

## Goal

Build the first public-facing version of Black Veil Archives.

## Pages

```txt
/
 /about
 /disclaimer
 /contact
```

## Homepage Sections

- Hero section
- Short brand description
- Featured archive categories
- Haunted map teaser
- Horror library teaser
- 3 AM haunting call teaser
- Email signup section
- Footer with affiliate/disclaimer links

## Design Direction

The website should feel:

- Dark
- Luxurious
- Cinematic
- Mysterious
- Premium horror
- Not cheesy
- Not overly graphic

## Possible Taglines

```txt
Step beyond the veil.
```

```txt
An archive of what waits in the dark.
```

```txt
Where horror, history, and the unknown are preserved.
```

## Visual Style

- Black backgrounds
- Deep red accents
- Smoke/fog effects
- Gold or silver subtle highlights
- Elegant serif headings
- Clean modern body text
- Dark cards
- Slow fade animations
- Subtle eerie motion effects

## Phase 2 Status

```txt
Not Started
```

---

# Phase 3 — Horror Library

## Goal

Create a content section where users can discover horror-related books, movies, music, documentaries, and products.

## Pages

```txt
/horror-library
/books
/movies
/music
/products
```

## Content Categories

- Horror books
- True-crime books
- Paranormal books
- UFO and extraterrestrial books
- Horror movies
- Horror documentaries
- Horror soundtracks
- Dark ambient music
- Halloween products
- Ghost hunting gear

## Card Fields

Each item should include:

```txt
title
category
description
image
author_or_creator
release_year
scare_level
affiliate_url
affiliate_partner
is_featured
```

## Affiliate Link Support

Users should be able to click buttons such as:

```txt
View on Amazon
Buy the Book
Watch the Movie
Listen Now
View Product
```

## Required Disclosure

Add affiliate disclosure to footer and relevant pages:

```txt
As an Amazon Associate, we may earn from qualifying purchases.
```

## Phase 3 Status

```txt
Not Started
```

---

# Phase 4 — Haunted Map

## Goal

Create an interactive Google Maps experience where users can explore haunted, paranormal, true-crime, and extraterrestrial locations.

## Page

```txt
/haunted-map
```

## Location Categories

- Haunted hotels
- Ghost sightings
- Famous serial killer locations
- UFO and extraterrestrial locations
- Tragic event locations
- Abandoned places
- Urban legends
- Paranormal hotspots

## Map Features

- Google Maps integration
- Custom dark map styling
- Custom map pins
- Category filters
- Search by city/state
- Location cards
- “Open in Google Maps” button
- Location detail page links

## Location Detail Page

Example route:

```txt
/locations/cecil-hotel
```

Each location should include:

```txt
name
category
description
historical_context
content_warning
city
state
country
latitude
longitude
image_url
source_notes
affiliate_or_booking_url
```

## Important Content Rule

Real tragedies and true-crime content should be handled respectfully. The tone should be historical and informative, not exploitative or graphic.

## Phase 4 Status

```txt
Not Started
```

---

# Phase 5 — Haunted Hotels

## Goal

Create a dedicated section for famous haunted hotels and scary travel destinations.

## Pages

```txt
/haunted-hotels
/haunted-hotels/[slug]
```

## Hotel Card Fields

```txt
hotel_name
location
description
known_for
haunting_story
image_url
booking_url
affiliate_partner
map_coordinates
price_range
is_featured
```

## Features

- Haunted hotel cards
- Location map
- Hotel detail pages
- Booking/reservation outbound links
- Affiliate support if available
- Content warning when needed

## Example Hotels

- The Stanley Hotel
- The Cecil Hotel
- The Queen Mary
- The Mizpah Hotel
- The Crescent Hotel
- The Emily Morgan Hotel

## Phase 5 Status

```txt
Not Started
```

---

# Phase 6 — Tragic Events & Final Moments Archive

## Goal

Create a respectful archive for documented tragic events, public records, and historically significant final recordings when legally and ethically appropriate.

## Page

```txt
/archive
```

## Possible Categories

- Publicly released recordings
- Police-released material
- Historical disasters
- Final transmissions
- Emergency calls
- Unsolved cases
- Documented tragedies

## Required Safeguards

- Strong content warnings
- Age gate if needed
- No graphic thumbnails
- No sensational language
- Respectful descriptions
- Source links where appropriate
- Avoid victim exploitation
- Avoid private or leaked material

## Content Tone

This section should feel like a serious historical archive, not shock content.

## Example Disclaimer

```txt
This section may contain references to real tragedies, public records, and disturbing events. Content is provided for historical and educational context. Viewer discretion is advised.
```

## Phase 6 Status

```txt
Not Started
```

---

# Phase 7 — 3 AM Haunting Call

## Goal

Build an optional AI-powered horror call experience where users can sign up to receive a scary phone call.

## Page

```txt
/haunting-call
```

## MVP Version

The first version should use controlled, prewritten scripts instead of a fully live AI conversation.

## User Flow

```txt
User visits haunting call page
User reads disclaimer
User selects scare level
User enters phone number
User selects time zone
User confirms consent
User pays or signs up for beta
Call request is saved in Supabase
Twilio triggers scheduled call
User receives scary call
Call result is logged
```

## Scare Levels

```txt
Mild
Medium
Extreme
```

## Required Safety Features

- Clear consent checkbox
- Age confirmation
- Phone number confirmation
- Cancellation option
- Scare level selection
- Time zone confirmation
- Emergency disclaimer
- No calls without explicit permission
- No recording unless clearly disclosed and accepted

## Example Disclaimer

```txt
The 3 AM Haunting Call is a fictional horror entertainment experience. Do not sign up if you are sensitive to fear, anxiety, sleep disturbance, panic, or horror content. By continuing, you agree to receive a scheduled phone call for entertainment purposes.
```

## Future Version

- Live AI voice agent
- Personalized horror story
- User voice interaction
- AI-generated scary script
- Multiple horror themes
- Premium call packages

## Phase 7 Status

```txt
Not Started
```

---

# Phase 8 — Supabase Database

## Goal

Set up the database tables needed to manage the website content and user interactions.

## Suggested Tables

### profiles

```txt
id
user_id
full_name
email
role
created_at
```

### horror_items

```txt
id
title
slug
category
description
image_url
creator
release_year
scare_level
affiliate_url
affiliate_partner
is_featured
created_at
```

### locations

```txt
id
name
slug
category
description
historical_context
content_warning
city
state
country
latitude
longitude
image_url
source_notes
affiliate_or_booking_url
is_featured
created_at
```

### haunted_hotels

```txt
id
name
slug
location
description
haunting_story
image_url
booking_url
affiliate_partner
latitude
longitude
price_range
is_featured
created_at
```

### call_signups

```txt
id
user_id
full_name
phone_number
email
timezone
scheduled_time
scare_level
consent_confirmed
payment_status
call_status
created_at
```

### call_logs

```txt
id
call_signup_id
twilio_call_sid
status
started_at
ended_at
duration_seconds
created_at
```

### affiliate_clicks

```txt
id
item_id
item_type
affiliate_partner
clicked_url
created_at
```

## Phase 8 Status

```txt
Not Started
```

---

# Phase 9 — Admin Dashboard

## Goal

Create an admin area where content can be added, edited, featured, hidden, or removed without changing code.

## Route

```txt
/admin
```

## Admin Features

- Add/edit horror books
- Add/edit movies
- Add/edit music
- Add/edit haunted locations
- Add/edit haunted hotels
- Add/edit tragic event archive entries
- Add affiliate links
- Mark items as featured
- Toggle public visibility
- Review call signups
- View affiliate click stats

## Access

Admin dashboard should require:

```txt
Supabase Auth
Admin role check
Protected routes
```

## Phase 9 Status

```txt
Not Started
```

---

# Phase 10 — Payments

## Goal

Add paid experiences and monetization features.

## Stripe Features

- One-time payment for haunting calls
- Premium horror experience packages
- Membership option later
- Webhook confirmation
- Payment status saved in Supabase

## Possible Products

```txt
3 AM Haunting Call
Extreme Haunting Call
Halloween Scare Pack
Premium Archive Membership
```

## Phase 10 Status

```txt
Not Started
```

---

# Phase 11 — SEO & Content Growth

## Goal

Make Black Veil Archives discoverable through search engines.

## SEO Priorities

- Individual pages for locations
- Individual pages for haunted hotels
- Individual pages for books/movies/music
- Metadata for every page
- Open Graph images
- Sitemap
- Robots.txt
- Clean URLs
- Fast loading
- Optimized images

## Example SEO Pages

```txt
/locations/stanley-hotel
/locations/queen-mary
/haunted-hotels/stanley-hotel
/books/the-shining
/movies/the-exorcist
/music/halloween-soundtrack
```

## Phase 11 Status

```txt
Not Started
```

---

# Phase 12 — Final Halloween Launch

## Goal

Prepare the website for public Halloween launch.

## Launch Checklist

- Homepage complete
- Horror Library live
- Haunted Map live
- Haunted Hotels live
- Affiliate disclosure added
- Disclaimer pages complete
- Basic SEO complete
- Mobile responsiveness complete
- Test all links
- Test Google Maps usage
- Test haunting call signup
- Test Stripe checkout if payments are enabled
- Test Supabase content loading
- Test admin dashboard
- Deploy to production
- Connect custom domain
- Announce on social media

## Phase 12 Status

```txt
Not Started
```

---

# Future Ideas

## User Accounts

- Save favorite haunted locations
- Save books and movies
- View haunting call history
- Create watchlists
- Create travel lists

## Membership

- Premium archive content
- Exclusive scary audio stories
- Premium map filters
- Members-only haunted hotel guide
- Discounted haunting calls

## Community Features

- User-submitted ghost stories
- User-submitted haunted locations
- Story moderation
- Ratings and reviews
- “I visited this place” badges

## AI Features

- AI horror narrator
- AI-generated scary stories
- Personalized haunting calls
- AI location summaries
- AI travel route suggestions
- AI paranormal research assistant

## Mobile App

- Haunted map mobile app
- Push notifications
- Location-based horror alerts
- Saved haunted trips
- Halloween event mode

---

# Development Notes

This project should be built in phases. The first version should focus on a strong homepage, horror library, haunted map, haunted hotels, and basic affiliate monetization.

The 3 AM AI haunting call should be developed carefully because it involves phone calls, consent, fear-based entertainment, and possible payments. The first version should use controlled scripts before moving into live AI conversations.

The true-crime and tragic event sections should be handled with respect, strong content warnings, and a historical tone.

---

# Current Project Status

```txt
Planning
```

# Next Step

Create the initial Next.js project and begin building the landing page for Black Veil Archives.
