

---

# SidecWebApp

**SidecWebApp** is a modern React application powered by Vite. This template provides a minimal setup to get React up and running with Hot Module Replacement (HMR) and integrated ESLint rules.

## Features

- **Fast Development Build**: Leverages [Vite](https://vitejs.dev/) for a faster development experience.
- **React Support**: Includes [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react) for React Fast Refresh using Babel.
- **Alternative Fast Refresh**: Optionally use [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) with SWC for even faster performance.

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed. This project is compatible with Node.js version 14 or later.

### Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Sidec-HQ/sidecwebapp.git
   cd sidecwebapp
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

### Development

To start the development server with Hot Module Replacement (HMR), run:
```bash
npm run dev
```

This command will start the Vite development server and open the application in your default browser.

### Build

To create a production build, use:
```bash
npm run build
```

This will generate optimized static files in the `dist` directory.

### Linting

Linting is set up using ESLint. To run linting checks, use:
```bash
npm run lint
```

### Testing

To run tests, use:
```bash
npm test
```

### Configuration

You can configure the Vite and ESLint settings in the respective configuration files:

- **Vite Configuration**: `vite.config.js`
- **ESLint Configuration**: `.eslintrc.js`

### Plugins

- **@vitejs/plugin-react**: Integrates Babel for React Fast Refresh.
- **@vitejs/plugin-react-swc**: Use this plugin if you prefer SWC for React Fast Refresh.

For more details on these plugins, check out their respective documentation:
- [@vitejs/plugin-react Documentation](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)
- [@vitejs/plugin-react-swc Documentation](https://github.com/vitejs/vite-plugin-react-swc)

## Contributing

Contributions are welcome! Please check out our [contributing guidelines](CONTRIBUTING.md) for more information on how to get started.

## License

This project is licensed under the [MIT License](LICENSE).

---
