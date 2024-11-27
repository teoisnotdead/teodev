import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      dropShadow: {
        light: '0 4px 6px rgba(0, 0, 0, 0.1)',
        dark: '0 4px 6px rgba(255, 255, 255, 0.2)',
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        primary: '#f19f00',
        secondary: '#232323',
        'project-card': '#090909',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [],
}
export default config
