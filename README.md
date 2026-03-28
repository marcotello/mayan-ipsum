<div align="center">
  <img src="https://raw.githubusercontent.com/marcotello/mayan-ipsum/refs/heads/main/public/images/mayan-upsum-screenshot.png" alt="Mayan Ipsum" width="1000" />
    
  <h1>Mayan Ipsum</h1>
  <p>Placeholder text inspired by the sacred <em>Popol Vuh</em> — crafted for designers and developers who dare to be different.</p>

  [![MIT License](https://img.shields.io/github/license/marcoturi/mayan-ipsum)](LICENSE)
  [![Angular](https://img.shields.io/badge/Angular-21-red?logo=angular&logoColor=white)](https://angular.io)
  [![Analog](https://img.shields.io/badge/Analog-2-8b5cf6)](https://analogjs.org)
  ![Node](https://img.shields.io/badge/node-%3E%3D20.19.1-brightgreen?logo=node.js&logoColor=white)
</div>


## Summary

**Mayan Ipsum** is an Angular + Analog application that generates placeholder text drawn from the ancient Mayan language of the *Popol Vuh* — the Mayan creation epic. Instead of the tired "_Lorem ipsum_", give your designs a voice rooted in one of humanity's most profound literary works.

Key features:
- Generate short, medium, or long Mayan placeholder text
- One-click copy to clipboard
- Download as plain text
- Randomized Mayan symbol imagery on every generation
- Built with Angular 21, Analog SSR, and Tailwind CSS v4

---

## Prerequisites

| Tool | Version |
|------|---------|
| [Node.js](https://nodejs.org/) | ≥ 20.19.1 |
| [pnpm](https://pnpm.io/) | ≥ 9 |

---

## Getting Started

**1. Clone the repository**

```bash
git clone https://github.com/marcoturi/mayan-ipsum.git
cd mayan-ipsum
```

**2. Install dependencies**

```bash
pnpm install
```

**3. Start the development server**

```bash
pnpm start
```

Navigate to `http://localhost:5173/`. The app reloads automatically on file changes.

**4. Build for production**

```bash
pnpm build
```

Client artifacts → `dist/analog/public`  
Server artifacts → `dist/analog/server`

**5. Preview the production build**

```bash
pnpm preview
```

**6. Run tests**

```bash
pnpm test
```

Unit tests are powered by [Vitest](https://vitest.dev).

---

## Contributing

Contributions are welcome! This project follows [Conventional Commits](https://www.conventionalcommits.org/).

1. Fork the repository and clone it locally
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Make your changes and ensure linting passes
4. Run `pnpm test` to confirm nothing is broken
5. Commit using Conventional Commits format (e.g. `feat: add new Mayan paragraphs`)
6. Open a Pull Request describing what you changed and why

---

## License

[MIT](LICENSE)
