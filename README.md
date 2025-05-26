# Brew Route

Welcome to Brew Route! This project is a modern web application built to help users discover, explore, and interact with the anti-counterfeit measurements in the world of brewing. It leverages a robust tech stack for speed, scalability, and a delightful user experience.

## Features

- ⚡️ Fast, modern UI with Vite, React, and TypeScript
- 🎨 Beautiful components with shadcn-ui and Tailwind CSS
- 📱 Responsive design for mobile and desktop
- 🔍 QR code scanning and interactive features
- 🧩 Modular, maintainable codebase
- 🔗 Blockchain integration with Cairo smart contracts on Starknet for anti-counterfeit verification

## Tech Stack

- [Vite](https://vitejs.dev/) – Lightning-fast build tool
- [React](https://react.dev/) – UI library
- [TypeScript](https://www.typescriptlang.org/) – Type safety
- [shadcn-ui](https://ui.shadcn.com/) – UI components
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework
- [Cairo](https://book.cairo-lang.org/) – Smart contract language for Starknet
- [Starknet](https://starknet.io/) – Layer 2 blockchain for scalable, secure smart contracts

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- (Optional) [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) for managing Node versions
- [Cairo](https://book.cairo-lang.org/) (v2.x recommended, for smart contract development)
- [Scarb](https://docs.swmansion.com/scarb/) (Cairo package manager)
- [snfoundry](https://github.com/foundry-rs/starknet-foundry) (for smart contract testing)

### Installation

#### Frontend

1. **Clone the repository:**

   ```sh
   git clone https://github.com/vineetmishra237/BrewRoute.git
   cd BrewRoute
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   ```
   The app will be available at [http://localhost:5173](http://localhost:5173) (or as indicated in your terminal).

#### Smart Contracts

1. **Navigate to the smart contract directory:**
   ```sh
   cd starkbc11
   ```
2. **Install dependencies and build:**
   ```sh
   scarb build
   ```
3. **Run tests:**
   ```sh
   scarb test
   ```

## Available Scripts

### Frontend

- `npm run dev` – Start the development server with hot reloading
- `npm run build` – Build the app for production
- `npm run preview` – Preview the production build locally
- `npm run lint` – Lint the codebase

### Smart Contracts (from `starkbc11` directory)

- `scarb build` – Build Cairo contracts
- `scarb test` – Run Cairo contract tests

## Project Structure

```
.
├── src/
│   ├── components/         # Reusable UI components
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   ├── pages/              # Page components (routing)
│   └── main.tsx            # App entry point
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind CSS configuration
├── vite.config.ts          # Vite configuration
├── package.json            # Project metadata and scripts
├── starkbc11/              # Cairo smart contracts for Starknet
│   ├── lib.cairo           # Main contract source file
│   ├── src/                # Additional contract modules
│   ├── Scarb.toml          # Scarb project configuration
│   ├── snfoundry.toml      # Foundry config for Starknet
│   ├── tests/              # Cairo contract tests
│   └── target/             # Build artifacts
└── README.md               # Project documentation
```

## Smart Contracts

This project includes Cairo smart contracts located in the `starkbc11` directory. These contracts are designed for the Starknet blockchain and are managed using [Scarb](https://docs.swmansion.com/scarb/), the Cairo package manager.

### Structure

- `lib.cairo` – Main contract source file
- `Scarb.toml` – Scarb project configuration
- `Scarb.lock` – Scarb lock file
- `snfoundry.toml` – Foundry configuration for Starknet
- `tests/` – Cairo test files for the contract
- `target/` – Build artifacts

### Getting Started with Cairo Contracts

#### Prerequisites

- [Cairo](https://book.cairo-lang.org/) (v2.x recommended)
- [Scarb](https://docs.swmansion.com/scarb/)
- [snfoundry](https://github.com/foundry-rs/starknet-foundry) (for testing)

#### Build the Contract

```sh
cd starkbc11
scarb build
```

#### Run Tests

```sh
scarb test
```

### Notes

- All contract code is in Cairo and targets the Starknet blockchain.
- Use `scarb` for dependency management and building.
- Tests are located in `starkbc11/tests/`.

For more details, see the files in the `starkbc11` directory or refer to the official Cairo and Starknet documentation.

## License

This project is licensed under the MIT License.

## Hack4Bengal & Starknet Re{Ignite}
This project was started as part of the Hack4Bengal hackathon, with the idea and mvp built during it's timeline. As a part of `dual submission` to the Starknet Re{Ignite} hackathon, in view of qualifying for the Starknet track, we aimed to give our UI an enhanced web3 look and futher explore the capabilities of Starknet fit to our solution at Starknet Re{Ignite}.
