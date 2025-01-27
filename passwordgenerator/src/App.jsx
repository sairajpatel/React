import { useState,useCallback,useEffect,useRef } from 'react'
function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed,setNumberAllowed]=useState(false);
  const [characterAllowed,setcharcterAllowed]=useState(false);
  const [password,setPassword]=useState("");
  const passwordRef=useRef(null)
  const passwordgenerator=useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str+= "0123456789"
    if(characterAllowed) str+="!@#$%^&*()_+-=~/<>,."
    for (let i = 0; i <=length; i++) {
      let char = Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char);
      
    }
    setPassword(pass);                          

  },[length,numberAllowed,characterAllowed,setPassword]);
  


 const copyPasswordToClipboard=useCallback(()=>{
  passwordRef.current?.select()
  window.navigator.clipboard.writeText(password);
 },[password])

 useEffect(()=>{
  passwordgenerator()
 },[length,numberAllowed,characterAllowed,passwordgenerator]);
 
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
     <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input type="text" 
      value={password}
      className='outline-none w-full py-1 px-3'
      placeholder='Password'
      ref={passwordRef}
      readOnly
      
      />
      <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPasswordToClipboard}>copy</button>

     </div>
     <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type="range"
        min={8}
        max={100}
        value={length}
        className='cursor-pointer'
      
        onChange={(e)=>{setLength(e.target.value)}}
        
        />
        <label>Length:{length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox"
        defaultChecked={numberAllowed}
        id="numberInput"
        onChange={()=>{
          setNumberAllowed((prev)=>!prev);
        }}
        
        
        />
        <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox"
        defaultChecked={characterAllowed}
        id="charcterInput"
        onChange={()=>{
          setcharcterAllowed((prev)=>!prev);
        }}
        
        
        />
        <label htmlFor="characterInput">Characters</label>
      </div>
      

     </div>
    </div>
      
    </>
  )
}

export default App
