import './Home.css';
function Home() {
  return (
    <div>

      <h1> Your task</h1>
      <p>
        1- Create new compoenrts, 2- Create Navigation bar, 3- install router dom and link the components, 
        4- route the components, 5- define the rendering
      </p>
      <h1> Strategy & Science Nexus</h1>
      
      <p> The Strategy & Science Nexus represents the critical intersection between scientific advancement and strategic planning in the fields of education, research, and innovation. This concept emphasizes the integration of strategic vision with scientific development to drive long-term progress, 
        knowledge dissemination, and sustainable solutions for global challenges.
      </p>
     {/* Container for movable images */}
     <div className="image-slider">
        {/* Images go here */}
        <img src="./STEM architecture.png" alt="Picture space" />
        {/* Add more images as needed */}
      </div>
    </div>
  );
}
export default Home;
