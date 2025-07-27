
const  Contact = () => {

return(
   <div className="w-100">
    <h1>Contact Us Page</h1>

    <form className="flex ">
      <div className="flex justify-center">
         <input type="text" className="border border-black p-2 m-2" placeholder="Name"  />
        <input type="text" className="border border-black p-2 m-2" placeholder="Message"  />
       <span className="pt-2"><button type="submit" className="bg-cyan-500 shadow-lg shadow-cyan-500/50 p-2">Submit</button></span> 
      </div>
    </form>
   </div>
    )
}

export default Contact;