import './output.css' 
import './app.css'
import { useEffect, useState } from 'react';
import About from './components/About/About';
import Projects from './components/Projects/Projects'
 
function App() {

    const [current,setCurrent] = useState("")
    useEffect(()=>{
        setCurrent(<About />)
    },[])

    return (
        <div className="App bg-darkBlue h-auto">
        <h1 className='text-center pt-[50px] text-[35px] font-bold text-white'>My Portfolio</h1>
        <div className="grid lg:grid-cols-2 grid-cols-1 h-screen">
            <div className='text-center h-2/3 m-auto block'>
                <ul>
                    <li>
                        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800" onClick={()=>setCurrent(<About />)}>
                            <span className="relative px-7 py-2.5 transition-all ease-in duration-75 bg-green-200 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-xl">
                                About Me
                            </span>
                        </button>
                    </li>
                    <li className='py-[20px]'>
                        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800" onClick={()=>setCurrent(<Projects />)}>
                            <span className="relative px-9 py-2.5 transition-all ease-in duration-75 bg-green-200 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-xl">
                                Projects
                            </span>
                        </button>
                    </li>
                </ul>
            </div>
            <div className=' mt-[30px]' style={{overflowY:'auto' , whiteSpace:'nowrap'}}>
                {current}
            </div>
        </div>
        </div>
    );
    }

export default App;
