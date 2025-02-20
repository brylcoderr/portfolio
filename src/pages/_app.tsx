import '@/src/styles/globals.css';
import type { AppProps } from 'next/app';
// Removed the import for Layout as it cannot be found
import { motion, AnimatePresence } from 'framer-motion';
import ThemeSwitcher from '@/src/components/ui/ThemeSwitcher';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <ThemeSwitcher />
      <AnimatePresence exitBeforeEnter>
        <motion.div key={Component.name} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default MyApp; 