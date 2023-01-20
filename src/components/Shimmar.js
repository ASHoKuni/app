
const Shimmer  =()=>{
    return(
        <div className="restrauntlist"> 
          {
          Array(10).fill("").map((e,index)=>{
            return <div  key={index} className="shimmer-card shine"> </div>
          })
          }
        </div>
     
    )
}

export default Shimmer