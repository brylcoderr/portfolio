export const getThemeFromLocalStorage = (): string => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark'
    }
    return 'dark'
  }
  
  export const setThemeToLocalStorage = (theme: string): void => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme)
    }
  }
  