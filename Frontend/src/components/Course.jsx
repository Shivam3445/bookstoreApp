


import list from "../assets/list.json"
import Cards from "./Cards";
import {Link} from "react-router-dom"

function Course() {

   
  return (
    <>
      <div className={`  max-w-screen-2xl container mx-auto md:px-20 px-4 `}>
        <div className="mt-28 items-center justify-center text-center">
            <h1 className="text-2xl  md:text-4xl">We're delighted to have you <span className="text-pink-500">here:)</span></h1>
            <p className="mt-12">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur illum vitae similique reprehenderit sequi nulla ipsa tempora eaque ullam ab, obcaecati eius repellendus inventore pariatur nisi harum, unde omnis? Aspernatur expedita officiis nemo, eius mollitia fugiat tempora voluptas alias repellat Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nam repellendus officia maiores magnam explicabo repellat recusandae ducimus suscipit a..</p>

           <Link to="/">
                <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-200" >Back</button>
           </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
            {

                list.map((item) => (
                   <Cards key={item.id} item = {item}/>
                ))
            }
        </div>

      </div>
    </>
  )
}

export default Course

