import { useTheme } from '../context/ThemeContext'
import { FaMoon, FaSun } from 'react-icons/fa'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="bg-transparent border-none rounded-full w-8 h-8 flex items-center justify-center cursor-pointer p-0 transition-transform duration-300 hover:scale-110 group focus:outline-none"
    >
      <span className="text-xl flex items-center justify-center transition-transform duration-300 group-hover:rotate-12">
        {theme === 'light' ? (
          <FaMoon className="text-slate-700 hover:text-blue-600 transition-colors" />
        ) : (
          <FaSun className="text-amber-400 hover:text-amber-300 transition-colors" />
        )}
      </span>
    </button>
  )
}

export default ThemeToggle