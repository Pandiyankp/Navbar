
// import Name from './component/funcomp';
// import Nameone from './component/classcom';
// import FavEvent from './component/funevent';
// import ClassEvent from './component/classevent';
// import ClassEventcons from './component/constructor'
import card_img1 from "./love1.jfif";
import card_img3 from "./love2.jfif";
import card_img2 from "./love3.jfif";

import Cardprop from './Cardprop'

export default  function Appcard() {
  return (
    <>
    

<div className="wrapper">

<Cardprop  img={card_img1} title='Card title Sometext' 

para="
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia eaque vitae repudiandae aliquam fuga aspernatur veniam, quo laboriosam quasi facilis rem inventore minus nobis nostrum, repellat, laborum deserunt distinctio expedita."

/>
<Cardprop  img={card_img2} title='Card title Sometext' 

para="
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia eaque vitae repudiandae aliquam fuga aspernatur veniam, quo laboriosam quasi facilis rem inventore minus nobis nostrum, repellat, laborum deserunt distinctio expedita."

/>
<Cardprop  img={card_img3} title='Card title Sometext' 

para="
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia eaque vitae repudiandae aliquam fuga aspernatur veniam, quo laboriosam quasi facilis rem inventore minus nobis nostrum, repellat, laborum deserunt distinctio expedita."

/>
</div>

    </>
  );
  
}

