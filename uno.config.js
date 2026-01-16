import { defineConfig, presetUno, presetWebFonts } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Inter:400,500,600',
      },
    }),
  ],
  theme: {
    colors: {
      primary: '#1a1a1a',
      secondary: '#666666',
      accent: '#000000',
    },
  },
  shortcuts: {
    'link-hover': 'hover:opacity-70 transition-opacity duration-200',
  },
})
