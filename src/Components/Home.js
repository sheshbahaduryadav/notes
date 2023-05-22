import React from 'react'
import Students1 from '../Components/Images/student1.jpg';
import Students2 from '../Components/Images/student2.jpg';
import Students3 from '../Components/Images/students3.jpg';

const Home = () => {
  return (
    <>
          <div className='container-fluid mt-2'>
          <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Students1} class="d-block w-100" alt="By default" />
    </div>
    <div class="carousel-item">
      <img src={Students2} class="d-block w-100" alt="By default" />
    </div>
    <div class="carousel-item">
      <img src={Students3} class="d-block w-100" alt="By default" />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
          </div>
    </>
  )
}

export default Home;
