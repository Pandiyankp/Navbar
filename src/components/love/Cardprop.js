import './card.css'

export default  function  Cardprop (props) {
    return ( 
<>


<div className ="card">

<div className ="card_body">
    
    <img src={props.img} alt="img" className="card_img"/>
<h2 className="card_title">{props.title}</h2>

    <p className="card_detals">
    {props.para}
   
        </p>  
    </div>

<button className="card_btn">View</button>
</div>

</>

     );
}

