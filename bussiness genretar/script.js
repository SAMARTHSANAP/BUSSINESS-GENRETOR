function generateIdea() {
 const category = document.getElementById('categoryInput').value.toLowerCase().trim();
  const ideas = {
    bike: [
      "BikeLelo",
      "GTGarage",
      "EcoBikeWala",
      "RideRush",
      "SpeedNashik"
    ],
    chai: [
      "CrazyChaiWala",
      "UrbanTea",
      "VadapavExpress",
      "Chai Junction",
      "DesiChaiHub"
    ],
    tech: [
      "NextToppers",
      "TechNova",
      "CodeFactory",
      "JustCreate",
      "InnoDev"
    ],
    fun: [
      "CA ka standup",
      "ChatGPT 😂",
      "FunFunda",
      "MastStartup",
      "MemesBazaar"
    ]
  };

  if (!ideas[category]) {
    document.getElementById('output').value = "⚠️ Invalid category. speling galat hai gawar😂";
    return;
  }

  const randomIndex = Math.floor(Math.random() * ideas[category].length);
  document.getElementById('output').value = "🧠 " + ideas[category][randomIndex];
}