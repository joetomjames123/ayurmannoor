# Ayur Haven

# AYUR MANNOOR — PREMIUM LUXURY WEBSITE

Build a complete, production-ready website for:

**AYUR MANNOOR**  
**Ayurvedic Clinic & Treatment Centre**

Location:

**Meenpatti, Karuvanchal, Kannur, Kerala, India**

Phone:

**+91 75599 55181**

Doctor:

**Dr. Anupam Mathew**

Qualification:

**BAMS**

The website must look like a **premium luxury Ayurveda and wellness brand**, not a generic clinic website and absolutely not like an AI-generated template.

The visual direction should combine:

**Luxury Wellness + Kerala Ayurveda + Editorial Design + Premium Hospitality**

The final experience should feel:

**Elegant • Calm • Natural • Sophisticated • Minimal • Warm • Premium**

---

# 1. MOST IMPORTANT DESIGN GOAL

Do NOT create a typical medical website.

Avoid:

- generic hospital layouts
- excessive cards
- blue medical colors
- bright green
- excessive icons
- generic gradients
- template-looking sections
- AI-looking illustrations
- excessive rounded cards
- dashboard-style UI
- unnecessary statistics
- long boring paragraphs
- fake testimonials
- fake medical claims
- unnecessary doctor biography

The website should feel like a **luxury Ayurveda destination**.

Prioritize:

- photography
- typography
- whitespace
- visual storytelling
- subtle animation
- editorial layouts
- premium interaction design
- natural colors
- cinematic imagery

---

# 2. LIGHT LUXURY COLOR SYSTEM

Use a predominantly light theme.

Primary background:

`#F8F5EF`

Secondary background:

`#EFE9DE`

White:

`#FFFFFF`

Primary text:

`#26352C`

Secondary text:

`#6F756D`

Forest green:

`#294438`

Muted sage:

`#A8B29F`

Warm brown:

`#806C56`

Champagne gold:

`#B49A6A`

Use green and gold only as subtle accents.

The overall website should primarily feel:

**Ivory + Cream + Beige + White**

with muted green typography and accents.

Do NOT make the whole website green.

---

# 3. TYPOGRAPHY

Use an elegant editorial font pairing.

Headings:

**Cormorant Garamond**

or:

**Playfair Display**

Body:

**Manrope**

or:

**Inter**

Large headings should be visually dominant.

Use generous letter spacing and line height.

Use responsive typography with `clamp()`.

Example:

```text
The Art of
Ayurvedic
Wellbeing
```

The typography itself should contribute to the luxury feeling.

---

# 4. HERO — CINEMATIC VIDEO

The first screen must be extremely impressive.

The user will provide the hero video.

Use the exact supplied video.

Do not replace it.

The hero video must:

- autoplay
- loop continuously
- remain muted
- use `playsInline`
- cover the hero
- maintain aspect ratio
- never stretch
- never distort
- work across all devices

Do not show standard video controls.

The hero should occupy approximately:

Desktop:

`90–100vh`

Mobile:

`85–100svh`

---

# 5. RESPONSIVE VIDEO SYSTEM

This is extremely important.

The video must work correctly on:

- large desktop
- normal desktop
- laptop
- ultrawide
- tablet
- iPad
- mobile
- portrait
- landscape

Support aspect ratios such as:

- 16:9
- 16:10
- 4:3
- 3:2
- 21:9
- 9:16

Use:

```css
width: 100%;
height: 100%;
object-fit: cover;
```

but implement the hero intelligently so the important visual subject remains visible.

Never stretch the video.

Never distort the video.

---

# 6. MOBILE VIDEO

Design the video architecture so a mobile-specific video can be added later.

Structure:

```text
Desktop:
hero-video.mp4

Mobile:
hero-video-mobile.mp4

Fallback:
hero-video.mp4
```

If no mobile video is supplied, use the main video.

Allow separate configurable:

- desktop object position
- tablet object position
- mobile object position

This should be easy to modify later.

---

# 7. VIDEO FALLBACK

If browser autoplay fails:

- show a high-quality poster image
- keep the hero functional
- don't display broken controls
- don't make the website look broken

The hero must still look premium without autoplay.

---

# 8. HERO CONTENT

Place minimal text over the video.

Small label:

**AYURVEDIC CLINIC & TREATMENT CENTRE**

Main heading:

**The Art of  
Ayurvedic Wellbeing**

Supporting text:

**Traditional wisdom, personalized care, and a deeper connection with wellbeing.**

Buttons:

**Book a Consultation**

**Explore Treatments**

Do not overcrowd the hero.

Let the video remain the main visual.

---

# 9. HERO ANIMATION

On page load:

1. Video begins.
2. Navigation appears.
3. AYUR MANNOOR branding fades in.
4. Eyebrow appears.
5. Heading reveals elegantly.
6. Description fades in.
7. Buttons appear.
8. Scroll indicator appears.

Use slow, refined transitions.

No flashy effects.

---

# 10. NAVIGATION

Create transparent navigation over the video.

Logo:

**AYUR MANNOOR**

Links:

- Home
- About
- Treatments
- Panchakarma
- Our Doctor
- Gallery
- Contact

Right-side CTA:

**Book Consultation**

When scrolling:

Navigation changes to a soft ivory background with dark text and a very subtle border/shadow.

Make it sticky.

---

# 11. MOBILE NAVIGATION

Create a refined fullscreen mobile navigation.

Large elegant typography.

Links:

Home  
About  
Treatments  
Panchakarma  
Our Doctor  
Gallery  
Contact

Add:

**Book Consultation**

Use smooth opening/closing animation.

---

# 12. INTRODUCTION

After the hero, create a spacious editorial section.

Small label:

**A TRADITIONAL APPROACH TO MODERN WELLBEING**

Large heading:

**Where Ayurvedic wisdom meets thoughtful, personalized care.**

Short paragraph:

**AYUR MANNOOR is an Ayurvedic Clinic & Treatment Centre in Meenpatti, Karuvanchal, Kannur, focused on Ayurvedic consultation and traditional wellness therapies.**

CTA:

**Discover AYUR MANNOOR →**

Keep this section short.

Do not add unnecessary history or storytelling.

---

# 13. ABOUT SECTION

Create an elegant editorial two-column layout.

Use a real AYUR MANNOOR clinic photograph.

Heading:

**Wellness begins with balance.**

Text:

**Rooted in Ayurvedic traditions, AYUR MANNOOR provides personalized consultation and traditional therapies in a calm and welcoming environment.**

CTA:

**Explore AYUR MANNOOR →**

Keep the copy concise.

No long paragraphs.

---

# 14. CLINIC PHOTOGRAPHS

Use the existing AYUR MANNOOR photographs available through its public Google/Business presence as visual reference and, where permitted/available, use those actual clinic images in the website.

The current business listing has public photographs associated with AYUR MANNOOR.

Do NOT use random images of another Ayurveda clinic.

Do NOT accidentally use photographs belonging to another business.

The clinic imagery should clearly represent:

**AYUR MANNOOR**

If an image cannot be legally/reliably retrieved, create a placeholder and make it easy for the user to replace with the original photo.

---

# 15. TREATMENTS

Create a premium editorial treatment section.

Label:

**OUR TREATMENTS**

Heading:

**Traditional therapies, thoughtfully delivered.**

Show:

### 01
**Ayurvedic Consultation**

### 02
**Pain Management**

### 03
**Panchakarma**

### 04
**Ayurvedic Massage**

### 05
**Shirodhara**

### 06
**Steam Therapy**

These services are based on publicly listed information for AYUR MANNOOR.

Do not add additional treatments unless they are confirmed.

---

# 16. TREATMENT DESIGN

Do not use six generic cards.

Instead create elegant horizontal editorial rows.

Example:

```text
01     Ayurvedic Consultation                    →
       Personalized Ayurvedic consultation
```

On desktop hover:

- treatment image appears
- row subtly moves
- image fades in
- arrow moves

On mobile:

Use tap/expand interaction instead of hover.

---

# 17. GENERATED TREATMENT IMAGES

Generate premium supporting imagery for the treatment sections.

Create realistic luxury Ayurveda photography for:

- Ayurvedic oil massage
- Shirodhara
- Steam therapy
- Panchakarma
- Ayurvedic consultation
- Ayurvedic oils and herbs
- Ayurvedic treatment room
- Traditional Kerala wellness environment

Style:

- photorealistic
- premium photography
- natural daylight
- Kerala-inspired
- warm neutral tones
- natural wood
- brass elements
- authentic Ayurveda
- sophisticated wellness environment

Avoid:

- fantasy Ayurveda
- unrealistic people
- distorted hands
- fake-looking AI faces
- excessive flowers
- excessive green
- spiritual fantasy imagery
- text embedded in images

All generated images should look like they came from the **same professional photoshoot**.

---

# 18. PANCHAKARMA FEATURE

Create a large cinematic section.

Label:

**THE PANCHAKARMA EXPERIENCE**

Heading:

**A deeper journey towards balance.**

Short description:

**Explore traditional Ayurvedic therapies designed around individualized care and holistic wellbeing.**

CTA:

**Explore Panchakarma →**

Use a large premium treatment image.

Add subtle parallax.

---

# 19. OUR DOCTOR

Do NOT create a long biography.

Use only:

### DR. ANUPAM MATHEW

**BAMS**

That is all.

The user will provide the doctor's photograph.

Use the exact supplied photograph.

Do not generate a replacement doctor.

Layout:

Large portrait on one side.

Other side:

**OUR PRACTITIONER**

**Dr. Anupam Mathew**

**BAMS**

Then a simple CTA:

**Book a Consultation →**

Do NOT add:

- experience
- personal story
- biography
- awards
- specialization
- achievements
- registration information

unless the user provides them later.

Keep this section extremely clean.

---

# 20. DOCTOR IMAGE ANIMATION

Use:

- large vertical portrait
- elegant cropping
- subtle rounded corners
- soft background
- slow reveal

On scroll:

Doctor photograph reveals smoothly.

Text fades in.

No excessive animation.

---

# 21. WHY AYUR MANNOOR

Keep this section short.

Heading:

**A thoughtful approach to wellbeing.**

Show four principles:

**Personalized Care**

**Traditional Wisdom**

**Holistic Wellbeing**

**A Calm Environment**

Use elegant typography.

Avoid icon-heavy cards.

---

# 22. GALLERY

Create an editorial gallery using:

- real AYUR MANNOOR clinic photographs
- user-provided doctor photo
- user-provided hero video
- generated treatment images
- Ayurveda details
- clinic environment

Use an asymmetrical masonry layout.

Clicking an image opens a premium fullscreen gallery.

---

# 23. PATIENT REVIEWS

Create:

**PATIENT EXPERIENCES**

Heading:

**What our visitors say.**

If the current Google rating is displayed, keep it dynamically replaceable because ratings/review counts change.

The current business listing shows approximately **4.8/5 with 44 reviews** in the structured business result, while another directory currently shows **4.9 with 39 ratings**, so do not hardcode one number as permanent.

Do NOT create fake testimonials.

Prefer:

**View Google Reviews →**

if actual reviews are not supplied.

---

# 24. LOCATION

Create a premium location section.

Heading:

**Visit AYUR MANNOOR**

Display:

**Meenpatti, Karuvanchal,  
Kannur, Kerala, India**

Phone:

**+91 75599 55181**

Use:

**Get Directions**

**Call Us**

**WhatsApp**

The business listing currently identifies AYUR MANNOOR in Meenpatti, Karuvanchal.

Use the verified Google Maps/business location for the Directions button.

---

# 25. CONTACT

Create a minimal contact section.

Heading:

**Begin your journey towards balance.**

Text:

**Connect with AYUR MANNOOR to enquire about consultation and treatments.**

CTA:

**Book a Consultation**

**Contact Us**

---

# 26. BOOKING FORM

Create a simple premium enquiry form.

Fields:

- Name
- Phone
- Email
- Preferred Date
- Preferred Time
- Treatment
- Message

Button:

**Request Consultation**

Keep the form visually minimal.

No hospital-style design.

---

# 27. WHATSAPP

Add a small floating WhatsApp button.

Use a refined design.

Do not use an oversized green button.

On hover:

**Chat with AYUR MANNOOR**

Use the verified number when configuring the link.

---

# 28. FOOTER

Minimal luxury footer.

Large:

**AYUR MANNOOR**

Subtitle:

**Ayurvedic Clinic & Treatment Centre**

Links:

Home  
About  
Treatments  
Panchakarma  
Our Doctor  
Gallery  
Contact

Contact:

**+91 75599 55181**

Location:

**Meenpatti, Karuvanchal, Kannur, Kerala**

Social icons only if official accounts are provided.

Bottom:

**© AYUR MANNOOR. All rights reserved.**

Privacy Policy  
Terms

---

# 29. ANIMATIONS

Use Motion / Framer Motion.

Use:

- fade-in
- text reveal
- image reveal
- subtle parallax
- smooth scrolling
- hover transitions
- navigation transformation
- section reveal

Animation style:

**slow + elegant + calm**

Avoid:

- bouncing
- spinning
- excessive zoom
- flashy transitions
- excessive motion

---

# 30. LUXURY MICRO-INTERACTIONS

Buttons:

Subtle arrow movement.

Images:

Very slight scale:

`1.02–1.04`

Treatment rows:

Smooth image reveal.

Navigation:

Elegant underline.

Do not use a large custom cursor.

---

# 31. RESPONSIVE DESIGN

The entire website must be fully responsive.

Desktop:

Editorial luxury layout.

Tablet:

Balanced layout.

Mobile:

Purpose-designed mobile experience.

Do not simply shrink desktop content.

Mobile should feel equally premium.

---

# 32. MOBILE HERO

Mobile hero must:

- remain cinematic
- fill the viewport appropriately
- respect safe areas
- keep text readable
- avoid covering the main subject
- avoid excessive cropping
- avoid stretching
- use `svh`/`dvh` appropriately

Support:

- iPhone
- Android
- small phones
- large phones

---

# 33. SAFE AREAS

Support:

- notch
- Dynamic Island
- browser UI
- bottom navigation

Use safe-area insets where appropriate.

---

# 34. PERFORMANCE

Optimize:

- hero video
- images
- fonts
- JavaScript
- animations

Use:

- WebP/AVIF
- compressed MP4
- poster image
- lazy loading below fold
- responsive images

Do not make the website slow because of excessive video/image assets.

---

# 35. ACCESSIBILITY

Implement:

- semantic HTML
- proper headings
- alt text
- keyboard navigation
- visible focus
- accessible buttons
- accessible forms
- adequate contrast

Respect:

`prefers-reduced-motion`

---

# 36. SEO

Page title:

**AYUR MANNOOR | Ayurvedic Clinic & Treatment Centre in Kannur**

Meta description:

**AYUR MANNOOR is an Ayurvedic Clinic & Treatment Centre in Meenpatti, Karuvanchal, Kannur, offering Ayurvedic consultation and traditional wellness therapies.**

Add:

- Open Graph metadata
- favicon
- semantic headings
- canonical URL
- sitemap-ready structure
- appropriate local business structured data using verified information only

---

# 37. TECHNOLOGY

Use:

**React + Vite + TypeScript + Tailwind CSS + Motion**

Create reusable components.

Suggested:

```text
src/
├── components/
│   ├── Navbar
│   ├── Hero
│   ├── Intro
│   ├── About
│   ├── Treatments
│   ├── Panchakarma
│   ├── Doctor
│   ├── Philosophy
│   ├── Gallery
│   ├── Reviews
│   ├── Location
│   ├── Booking
│   └── Footer
│
├── pages/
│   ├── Home
│   ├── About
│   ├── Treatments
│   ├── Panchakarma
│   ├── Doctor
│   ├── Gallery
│   └── Contact
│
└── assets/
    ├── hero
    ├── doctor
    ├── clinic
    └── treatments
```

---

# 38. PAGES

Create:

### HOME

Hero  
Introduction  
About  
Treatments  
Panchakarma  
Doctor  
Why AYUR MANNOOR  
Reviews  
Gallery  
Location  
Booking CTA

### ABOUT

Short clinic introduction  
Approach  
Philosophy  
Clinic visuals

### TREATMENTS

Treatment list  
Treatment images  
Consultation CTA

### PANCHAKARMA

Panchakarma introduction  
Therapies  
Visuals  
CTA

### OUR DOCTOR

Dr. Anupam Mathew  
BAMS  
Doctor photograph  
Consultation CTA

### GALLERY

Clinic  
Treatments  
Doctor  
Ayurveda  
Environment

### CONTACT

Address  
Phone  
Map  
WhatsApp  
Booking form

---

# 39. CONTENT RULE

Keep content concise.

The user specifically does NOT want:

- long doctor biographies
- clinic history
- boring stories
- unnecessary paragraphs
- excessive content

Prioritize:

**Visual storytelling over text.**

Use short, elegant copy.

---

# 40. INFORMATION ACCURACY

Do not invent:

- doctor experience
- doctor story
- qualifications beyond BAMS
- awards
- certifications
- treatments not confirmed
- patient testimonials
- medical success rates
- cure claims
- statistics

Only use verified information.

If something is unknown, leave it out.

Do NOT fill empty sections with invented content.

---

# 41. CLINIC IMAGE REQUIREMENT

The existing AYUR MANNOOR public business presence contains clinic photographs. Use the available AYUR MANNOOR imagery as the primary visual reference and, where permitted and technically available, incorporate those real clinic photographs rather than substituting another clinic's photographs.

If direct image retrieval is unavailable:

- do not use images from another clinic
- use a clean placeholder
- make the image easily replaceable
- preserve the intended layout

---

# 42. FINAL VISUAL EXPERIENCE

The first five seconds should communicate:

**AYUR MANNOOR**

↓

**Luxury Ayurveda**

↓

**Kerala**

↓

**Calmness**

↓

**Trust**

↓

**Premium Care**

The combination of:

**cinematic video + real clinic photography + doctor's photograph + premium generated treatment imagery + elegant typography + light colors + subtle animations**

should make the website feel like a **high-end wellness brand**.

---

# 43. DO NOT MAKE IT LOOK AI-GENERATED

This is one of the highest-priority requirements.

Avoid predictable AI website patterns.

Do not create:

- repetitive cards
- excessive gradients
- generic icons
- huge rounded containers
- unnecessary glassmorphism
- random decorative blobs
- excessive shadows
- overly symmetrical layouts
- generic stock images
- excessive text
- fake statistics

Instead use:

- editorial composition
- intentional whitespace
- high-quality photography
- asymmetry
- premium typography
- subtle borders
- natural colors
- refined interactions

The website should feel **human-designed**.

---

# 44. FINAL QUALITY CONTROL

Before finishing, verify:

### HERO

- Video autoplay
- Video loop
- Muted
- playsInline
- Responsive
- Correct cropping
- Mobile support
- Poster fallback

### IMAGES

- Doctor image works
- Clinic images represent AYUR MANNOOR
- Treatment images are visually consistent
- No broken images

### RESPONSIVE

Test:

```text
1920 × 1080
2560 × 1440
3440 × 1440
1440 × 900
1366 × 768
1280 × 800

1024 × 1366
834 × 1194
768 × 1024

430 × 932
414 × 896
390 × 844
375 × 812
360 × 800
```

Test portrait and landscape.

### FUNCTIONALITY

- Navigation
- Mobile menu
- Booking form
- Gallery
- Contact
- Call button
- WhatsApp
- Google Maps
- All routes
- All CTA buttons

### TECHNICAL

- No console errors
- No broken routes
- No broken images
- Fast loading
- SEO
- Accessibility
- Reduced-motion support

---

# 45. FINAL INSTRUCTION

Do not build a basic website and stop.

Build the entire experience as a **premium luxury digital identity for AYUR MANNOOR**.

The priority order is:

**1. Visual quality**

**2. Premium user experience**

**3. Responsive cinematic video**

**4. Real AYUR MANNOOR imagery**

**5. Doctor presentation**

**6. Treatment visual storytelling**

**7. Performance**

**8. Accessibility**

**9. SEO**

The final website should feel:

**Luxury. Calm. Natural. Editorial. Premium. Kerala. Ayurveda.**

It should look like a website that a professional luxury wellness agency designed—not a website generated from a generic AI template.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/a6e5f31b-1aed-454f-97fb-4096dad5bbf6).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
