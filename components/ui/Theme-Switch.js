import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

import DarkSwitcher from "../../public/assets/img/switcher-moon.svg";
// import DarkSwitcher from "../../public/assets/img/switcher-light.svg";
import LightSwitcher from "../../public/assets/img/switcher-sun.svg";
// import LightSwitcher from "../../public/assets/img/switcher-night.svg";

// import {Icon} from '@iconify/react'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const {systemTheme, theme, setTheme } = useTheme()
  

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }
//   const currentTheme = theme === 'system' ? systemTheme : theme;
  
  const renderThemeChanger = () => {
      if (!mounted) { return null }

      const currentTheme = theme === 'system' ? systemTheme : theme;
      
      if(currentTheme ==='dark') {
        return (
      //       // <button >
      //           // <Image 
      //           // src={lightSwitcher} 
      //           // alt="switcher" 
      //           // onClick={() => setTheme('light')}
      //           // />
            //       // </button>
              <div className='h-[40px] w-[h-[40px]]'>
                {/* <span>Light side?</span> */}
                <DarkSwitcher
                className='hover:cursor-pointer'
                onClick={() => setTheme('light')}
                /> 
            </div>
        )

      } else {
        return (
      //       // <button onClick={() => setTheme('dark')}>
      //           // <Image 
      //           // src={darkSwitcher} 
      //           // alt="switcher" 
      //           // height="40" 
      //           // width="40" 
      //           // onClick={() => setTheme('dark')}
      //           // />
      //       // </button>
            <div className='h-[40px] w-[h-[40px]]'>
                {/* <span>Dark side?</span> */}
                <LightSwitcher
                className='hover:cursor-pointer'
                onClick={() => setTheme('dark')}
                />
            </div>
   
        )
      }
    }
    
  return (
    // <select value={theme} onChange={e => setTheme(e.target.value)}>
    //   {/* <option value="system">System</option> */}
    //   <option value="dark">Dark</option>
    //   <option value="light">Light</option>
    // </select>

//     <div>
//     <span>{theme} side</span>
//     <button onClick={() => setTheme('light')}>Light Mode</button>
//     <button onClick={() => setTheme('dark')}>Dark Mode</button>
//   </div>
    <div>
       {/* <button onClick={() => setTheme('light')}>
        <span> {theme} Mode</span>
        <Image src={lightSwitcher} alt="switcher"/>
       </button> */}
       {/* <button onClick={() => setTheme('dark')}>
        <span>Dark Mode</span>
        <Image src={darkSwitcher} alt="switcher"/>
        </button> */}
     {/* <span>{theme} side</span> */}
     {renderThemeChanger()}

    {/* <Icon icon="line-md:moon-filled-alt-to-sunny-filled-loop-transition" /> */}
  </div>
     
  )
}

export default ThemeSwitch;