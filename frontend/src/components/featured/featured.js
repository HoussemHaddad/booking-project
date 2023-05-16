import { useSelector, useEffect } from "react";
import useFetch from "../../hooks/usefetch";
import "./featured.css";
import { GET } from "../../redux/action/actionpost";
import Example from "./modal";
import { useDispatch } from "react-redux";

const Featured = () => {
  const dispatch=useDispatch()

  const { data, loading } = useFetch(
    
    "/hotels/countByCity?cities=berlin,madrid,london"
  );
 
  useEffect(() => {
    dispatch(GET())
  }, [dispatch])

 const travel1= useSelector((state)=>console.log(state))
//  console.log(travel);
const travel =[]
  return (
    <div>
      <Example/>
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
        {travel?.map((e)=> 
         <div>
         <div className="featuredItem">
           <img
             src={e?.photos}
             alt=""
             className="featuredImg"
           />
           <div className="featuredTitles">
             <h1>{e?.city}</h1>
            

           </div>
         </div>

         </div>
        )
         }
        </>
      )}
    </div>
    </div>

  );
};

export default Featured;