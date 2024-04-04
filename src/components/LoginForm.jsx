import React, {useState} from 'react'

function LoginForm() {
  const[name, setName] = useState()
  function handleName(e){
    setName(e.target.value)
  }

  const [pass, setPass] = useState()
  function handlePassword(e){
    setPass(e.target.value)
  }

  function submitForm(e){
    e.preventDefault();
    alert("Form submitted");
    setName("");
    setPass("");
  }
    return (
    <div className="bg-[url('https://images.unsplash.com/photo-1501820434261-5bb046afcf6b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] h-screen w-full flex justify-center items-center box-border ">
        <div className="form-container h-[30%] w-[40%] bg-zinc-200 rounded-md shadow-black">
          <form onSubmit={submitForm} action="" className="flex flex-col gap-2 justify-center items-center p-3 rounded-md">
            <h1 className="text-[24px]">Login Form</h1>
            <input onChange={handleName} value={name} type="text" className="box-border rounded-md w-[90%] text-lg px-3 py-2 focus:border-[0]" placeholder="Username" required/>
            <input onChange={handlePassword} value={pass} type="password" className="box-border rounded-md w-[90%] text-lg px-3 py-2 focus:border-[0]" placeholder="Password" required/>
            <input type="submit" value="submit" className="bg-white p-2 w-[60%] rounded-md"/>
          </form>
        </div>
      </div>
    )
}

export default LoginForm
