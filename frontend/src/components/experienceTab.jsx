import "../component-styles/experienceTab.css";

const ExperienceTab = ({ expImg, expText, expDate }) => {
  return (
    <div className="experienceTab">
      <img src={expImg} alt={expText} className="experienceImg" />
        <p className="experienceText">{expText}</p>
        <p className="experienceDate">{expDate}</p>
    </div>
  );
};


export default ExperienceTab;