import aboutImg from "../aboutPic.jpg";
import {FaHandPointRight} from "react-icons/fa"

const About = () => {
  return (
    <div className="about-container">
      <img className="about-img" src={aboutImg} alt="about Pic" />
      <h1 className="about-title">The 10 best plant-based milks</h1>
      <p className="about-p">
        <i>
          Although plant milks have been consumed for centuries in various
          cultures, their popularity has skyrocketed over the past decade.
          People choose plant milk over dairy milk for a variety of reasons.
          Whether it is for their nutritional value, animal-welfare reasons,
          lower environmental impact, to avoid lactose or dairy milk allergens,
          or simply out of preference, there are many great options to try.
          ProVeg presents the 10 best plant milks.
        </i>
      </p>
      <h3>Milk alternatives are growing in popularity</h3>
      <p className="about-text">
        More and more consumers are questioning the consumption of cow’s milk
        and the effects that our diets have on cows, the environment, and our
        health. This is also reflected in the increasing demand for non-dairy
        milk. Plant milks have been consumed for centuries in various cultures,
        but their popularity has skyrocketed over the past decade. The range of
        healthy vegan milk alternatives for drinking, cooking, and baking is now
        huge. Some plant milks have sugar added to them, but unsweetened options
        are also available.
      </p>
      <h2 className="about-text about-title">What to know about plant-based milk?</h2>
      <div className="flex-row align-center">
         <FaHandPointRight /><h3 className="about-facts">Almond milk is rich in several healthy nutrients</h3>
      </div>
      <div className="flex-row align-center"><FaHandPointRight /><h3 className="about-facts">
        Cashew milk has a slightly nutty taste and is suitable for cooking and
        baking.
      </h3></div>
      <div className="flex-row align-center"><FaHandPointRight /><h3 className="about-facts">Coconut milk: a great choice for cooking</h3></div>
      <div className="flex-row align-center"><FaHandPointRight /><h3 className="about-facts">Hazelnut milk is a creamy treat for the palate</h3></div>
      <div className="flex-row align-center"><FaHandPointRight /><h3 className="about-facts">Hemp milk is a good source for omega-3 fatty acids</h3></div>
      <div className="flex-row align-center"><FaHandPointRight /><h3 className="about-facts">
        Oat milk tastes great with cereals and is suitable for cooking and
        baking
      </h3></div>
      <div className="flex-row align-center"><FaHandPointRight /><h3 className="about-facts">Rice milk is the best choice for people with allergies</h3></div>
      <div className="flex-row align-center"><FaHandPointRight /><h3 className="about-facts">
        Soya milk naturally contains the same amount of protein as cow’s milk
      </h3></div>
      <div className="flex-row align-center"><FaHandPointRight /><h3 className="about-facts">Spelt milk is great for sweet treats</h3></div>

      
      
      
      
      
      
      
      
    </div>
  );
};

export default About;
