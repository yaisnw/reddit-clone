import upvote from "./upvote.svg"

function expanded({ups}) {
  return (
    <div className="expandedInfo">
        <img width="30px" height="30px" src={upvote} alt="upvotes"/>
        <p>upvotes: {ups}</p>
    </div>
  )
}

export default expanded