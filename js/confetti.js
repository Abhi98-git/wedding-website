// Function to trigger confetti from the bottom-left and bottom-right corners
function triggerConfetti(team) {
    // Common defaults for both teams
    const defaults = {
      spread: 120, // Wider spread for dynamic effect
      ticks: 300, // Duration for confetti
      gravity: 1.5, // Gravity for a natural fall
      decay: 0.92, // Decay to slow down particles
      startVelocity: 50, // Higher initial velocity
      scalar: 1.2, // Adjusts particle size
      colors: ["#FFC0CB", "#FF69B4", "#FF1493", "#C71585", "#FFD700", "#ADFF2F", "#00CED1"], // Vibrant colors
      shapes: ["circle", "square", "heart"], // Basic shapes for confetti
    };
  
    // Generate vibrant and lively confetti
    const generateConfetti = (xOrigin) => {
      for (let i = 0; i < 3; i++) { // Multiple bursts for a layered effect
        confetti({
          ...defaults,
          origin: {
            x: xOrigin,
            y: 1
          }, // Dynamic origin (bottom-left or bottom-right)
          particleCount: 75 + i * 25, // Gradual increase in particles
          startVelocity: 50 + i * 10, // Gradual increase in throw velocity
          spread: 90 + i * 30, // Gradual increase in spread
        });
      }
    };
  
    if (team === "rajosee") {
      generateConfetti(0); // Bottom-left corner
    } else if (team === "abhisek") {
      generateConfetti(1); // Bottom-right corner
    }
  }