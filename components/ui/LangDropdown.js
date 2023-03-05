import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const Langs = [
  {id:1 , name: 'en' },
  {id:2 , name: 'fr' },
  {id:3 , name: 'es' },
]

export default function MyListbox() {
  const [selectedLang, setselectedLang] = useState(Langs[0])

  return (
    <div className='relative inline-block'>

    <Listbox 
    value={selectedLang} 
    onChange={setselectedLang}
    >
         

        <Listbox.Button

        className={({ selected }) =>
                    `font-bold border-0 transition-all inline-flex w-full items-center
                     ${selected ? 'bg-blue shadow-none' : 'text-gray-900'
                    }`
                  }
       
        >
          {selectedLang.name}

            <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
        </Listbox.Button>
 
      {/* <Listbox.Button
      className="text-sm font-bold shadow-custom hover:shadow-none 
      hover:translate-x-1 transition-all active:shadow-none"
      >
        {selectedLang.name}
      </Listbox.Button> */}
      <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
      <Listbox.Options
      className="list-box-lang absolute z-10 right-0 mt-2 origin-top-right divide-y divide-gray-100
       bg-white hover:cursor-pointer border"
       
      >
        {Langs.map((person) => (
        /* Use the `selected` state to conditionally style the selected option. */
          <Listbox.Option key={person.id} value={person} as={Fragment}
            // className="px-[1.2rem] py-3 hover:cursor-pointer"
          >
            {({selected}) => (
               <li
               className={`
               ${selected ? 'bg-white-bg font-bold' : 'bg-white'}
            `}
               >
                {/* {active && <CheckIcon />} */}
                {person.name}      
               </li>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options> 
    </Transition>
    </Listbox>
    </div>

  )
}
