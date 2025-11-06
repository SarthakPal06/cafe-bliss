import "./About.css";

function About() {
  return (
    <div className="about-section">
      <div className="about-content">
        <h2>☕ About Café Bliss</h2>
        <p>
          Welcome to <b>Café Bliss</b> — where every sip tells a story.  
          Since <b>2010</b>, we’ve been crafting moments of warmth, aroma,  
          and happiness. Our beans are ethically sourced, roasted to perfection,  
          and brewed with love — just for you.
        </p>
        <p>
          Whether it’s your morning caffeine fix, a cozy corner for reading,  
          or catching up with friends, Café Bliss is your perfect spot to unwind.
        </p>
      </div>

      <div className="about-gallery">
        <img
          src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=900&q=80"
          alt="Coffee cup"
          className="about-img main"
        />
        <div className="gallery-row">
          <img
            src="https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=600&q=80"
            alt="Cafe table"
            className="about-img small"
          />
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80"
            alt="Cafe interior"
            className="about-img small"
          />
        </div>
      </div>
    </div>
  );
}

export default About;

