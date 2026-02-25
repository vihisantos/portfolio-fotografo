import { BrowserRouter } from 'react-router-dom';
import { Navbar, Footer } from '@/components/layout';
import { Home } from '@/pages/Home';
import { ThemeProvider } from '@/components/theme-provider';
import { CustomCursor } from '@/components/ui/custom-cursor';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme" attribute="class">
      <BrowserRouter basename="/portfolio-fotografo">
        <CustomCursor />
        <div className="min-h-screen bg-background text-foreground flex flex-col font-sans transition-colors duration-500 cursor-default">
          <Navbar />
          <main className="flex-1">
            <Home />
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
