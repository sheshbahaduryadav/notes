import React from 'react'
import Students1 from '../Components/Images/student1.jpg';
import Students2 from '../Components/Images/student2.jpg';
import Students3 from '../Components/Images/students3.jpg';

const UserHome = () => {
  return (
    <>
   <div className='container-fluid mt-2'>
   <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Students1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={Students2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={Students3} class="d-block w-100" alt="..."/>
    </div>
  </div>
</div>
   </div>
    </>
  );
}

export default UserHome
