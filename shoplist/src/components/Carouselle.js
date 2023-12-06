import { colors } from '@mui/material';
import Carousel from 'react-bootstrap/Carousel';


function Carouselle() {
  return (
    <Carousel>
      <Carousel.Item>
        <img  style={{width:"1000px",height:"700px"}}src='https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/27d6d436-b35e-43f1-9a33-e41485d9006a/omni-multi-court-big-kids-indoor-court-shoes-xbrQcw.png'/>
        <Carousel.Caption>
          <h3 style={{color:"black"}}> Air jordan</h3>
          <p style={{color:"black"}}>running shoes</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img style={{width:"1000px",height:"700px"}} src='https://www.rei.com/dam/up_2018-02-c01_2972_running_shoes_fit.jpg?t=ea16by9xs'/>
        <Carousel.Caption>
          <h3> Nike</h3>
          <p>running shoes for summer</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img style={{width:"1000px",height:"700px"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAPXtKaI_X9X6jCUjcalBROebkMqvF3l2Qtw&usqp=CAU'/>
        <Carousel.Caption>
          <h3> ADIDAS</h3>
          <p>
         runing shoes for all environment
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carouselle;