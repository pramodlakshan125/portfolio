import { useTheme } from '../context/ThemeContext'
import { FaMoon, FaSun } from 'react-icons/fa'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="bg-transparent border-none rounded-full w-6 h-6 flex items-center justify-center cursor-pointer text-white p-0 transition-transform duration-300 hover:scale-115 group"
    >
      <span className="text-xl flex items-center justify-center transition-transform duration-300 group-hover:rotate-12">
        {theme === 'light' ? <FaMoon /> : <FaSun />}
      </span>
    </button>
  )
}

export default ThemeToggle