
import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
   const [meteors, setMeteors] = useState([]);


  useEffect(() => {
    generateStars();
     generateMeteors();
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 6000

    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }
    setStars(newStars);
  };
   const generateMeteors = () => {
    const numberOfMeteors = 4

    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
      });
    }
    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {stars.map((star) => (
         <div
    key={star.id}
    className="star animate-pulse-subtle"
    style={{
      position: "absolute",
      top: star.y + "%",
      left: star.x + "%",
      width: star.size + "px",
      height: star.size + "px",
       
      opacity: star.opacity,
      animationDuration: star.animationDuration + "s",
    }}
  />
))} 
    
           {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            position: "absolute",
            top: meteor.y+"%",
            left:  meteor.x+"%",
            width: meteor.size*50+"px",
            height: meteor.size*2+"px",
           
            animationDelay: meteor.delay ,
            animationDuration: meteor.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};


/*import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }
    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 4;

    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
      });
    }

    setMeteors(newMeteors); // ✅ Fixed: was incorrectly using "newSMeteors"
  };

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star-animate-pulse-subtle"
          style={{
            position: "absolute", // ✅ missing in original
            top: star.y + "%",
            left: star.x + "%",
            width: star.size + "px",
            height: star.size + "px",
            borderRadius: "50%", // ✅ optional but makes stars round
            backgroundColor: "white", // ✅ optional for visibility
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}

      {meteors.map((meteor) => ( // ✅ Changed from "meteors" to "meteor"
        <div
          key={meteor.id}
          className="meteors animate-meteors"
          style={{
            position: "absolute",
            top: meteor.y + "%",
            left: meteor.x + "%",
            width: meteor.size + "px",
            height: meteor.size + "px",
            borderRadius: "50%",
            backgroundColor: "white",
            animationDelay: meteor.delay + "s", // ✅ was incorrectly using star.delay
            animationDuration: meteor.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};
*/