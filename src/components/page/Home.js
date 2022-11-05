import './card1.css'
import pic from './cardpic.png'
function Home() {
  return (
    <>
    <div className='CardInfo1'>
     <div className="card1">
        <div className="content1">
<h2 className="card-title1">Lorem ipsum dolor sit amet.</h2>
<p className="card-p1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum temporibus perferendis amet ut? Blanditiis aperiam dolores omnis quaerat, incidunt praesentium soluta dolor. Magni blanditiis et nemo autem amet ipsa culpa placeat? Quasi sequi rem non dignissimos. Odio incidunt similique quaerat.</p>

<img src={pic} alt={`gym-img`} className='card-img1'/>
        </div>
    </div>
    </div>
    </>
  );
}

export default Home;