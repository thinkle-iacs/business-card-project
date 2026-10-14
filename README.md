# Business Card Design Assignment

For an overview of how to use GitHub Codespaces, see my
[Sandbox Overview](SandboxOverview.md)

To see your page, open the terminal and type `npm start`.

Want a simple TODO list? See [TODO.md](TODO.md)

## Overview

In this assignment, you'll create two business cards using HTML and CSS, showcasing your layout skills. The first card will utilize only **box model properties** for layout, while the second will use **Flexbox and Grid**.

Each card gets its own page:

- `index.html`: your name and links to your two cards
- `box.html` + `box.css`: Card 1, the box model card
- `flex.html` + `flex.css`: Card 2, the flexbox card
- `citations.html`: your sources and AI use

Each card will represent an imaginary business of your choosing. This is your opportunity to get creative!

## Requirements

### Card 1: Box Model Layout (`box.html` + `box.css`)

- Use only box model properties (e.g., `margin`, `padding`, `border`, `width`, `height`, etc.) for layout.
- No use of Flexbox or Grid.
- Warm up with [Cats in Boxes](https://cat-in-box.netlify.app/) to practice the box model.

### Card 2: Flexbox and Grid Layout (`flex.html` + `flex.css`)

- Use **Flexbox** or **Grid** (or a combination) to design the layout.
- Demonstrate a different approach from the first card.
- See [example walk-throughs of flexbox layouts here](https://business-card-flex.netlify.app/)

### Starter CSS

Both `box.css` and `flex.css` start with two helpers:

- A **reset** that removes the space browsers add around headings, paragraphs,
  and lists, so every bit of space on your card is space you chose.
- A **wireframe** rule (commented out). Uncomment it to see an outline around every
  box on your card while you work on your layout.

### Honors Requirements:

- Make your flexbox card **change size**. Add the "Change size" button (it's
  in a comment in `flex.html`), which switches your card between `landscape`,
  `portrait`, and `square`. Your card must look good at all three sizes. Use
  the size classes in your CSS to adjust your design for each one, for example
  `.square .card-front { ... }`. One set of HTML, different CSS: this is the
  idea behind _responsive design_.

- Make use of at least one "border" trick to create a
  custom shape on the card. See [this page of
  cool css shape examples](https://css-tricks.com/the-shapes-of-css/)
- Include at least one "absolute positioned" element
  on the card using relative and absolute positioning.
- Include at least one instance of "color matching" (where a key color from the
  card is drawn from an image you are using).

### Design Elements for Both Cards

- Imaginary or real business with your own branding.
- Use a **custom font** (e.g., from [Google Fonts](https://fonts.google.com/)).
- Include images that you either:
  1. Create yourself,
  2. Generate using AI, such as with [Adobe Firefly](https://firefly.adobe.com/) (cite appropriately),
  3. Use from public domain or Creative Commons (cite sources).
- A citations page (`citations.html`, already linked at the bottom of your page) crediting any
  images, fonts, or other sources you used and acknowledging any AI use.
- Make effective use of the key design principles we've discussed:
  - Contrast
  - Repetition
  - Alignment
  - Proximity
- Include at least 4 different elements with at least 2 levels of visual hierarchy
  (in other words: it has to be clear some elements, such as brand name, are more
  important than others, such as social media handles)

## RUBRIC

[*] Indicates honors requirements

<table>
<tr><th>Criteria</th><th>Passing (2)</th><th>Proficient (3)</th><th>Excellent (4)</th></tr>
<tr><td>Box Model Usage</td>
  <td>Uses padding and margin to create spacing.</td>
  <td>Effectively uses padding, margin, and borders to create a well-structured layout</td>
  <td>Includes nested boxes (boxes within boxes).
  <br>
  <br>*Includes at least one "border" trick to create a custom shape on the card.
  <br>*Includes at least one "absolute positioned" element on the card using relative and absolute positioning.
  </td></tr>
<tr>
  <td>Flexbox/Grid Usage</td>
  <td>Uses flexbox or grid to align items in a basic layout.</td>
  <td>Effetively uses flexbox to align items in at least two separate containers.</td>
  <td>Masterfully uses flexbox and/or grid to create an effective layout, including 
  specifying alignment in both main and cross axes (justify-content and align-items).
  <br>
  <br>*Card looks good in landscape, portrait, and square sizes.</td></tr>
<tr>
  <td>Design Principles</td>
  <td>Includes at least 4 different elements with at least 2 levels of visual hierarchy.</td>
  <td>Effectively applies design principles (contrast, repetition, alignment, proximity)
  to create a visually appealing card.</td>
  <td>Masterfully applies design principles (contrast, repetition, alignment, proximity)
  to create a visually appealing and professional-looking card.
  <br>
  <br>Includes a custom font.
  <br>*Includes at least one instance of "color matching" (where a key color from the card is drawn from an image you are using).</td></tr>
</table>
