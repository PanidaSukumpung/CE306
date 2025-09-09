import SkillTag from "./SkillTag";
import type { SkillTagProps } from "./SkillTag";
import "./UserProfileCard.css";

interface UserDataProps {
  id: string | number;
  name: string;
  avatarUrl?: string;
  email: string;
  isOnline: boolean;
  skills: SkillTagProps[];
  onViewDetails: (id: string | number) => void;
}

const UserProfileCard = ({
  id,
  name,
  avatarUrl,
  email,
  isOnline,
  skills,
  onViewDetails,
}: UserDataProps) => {
  return (
    <div className="Card">
      <div className="Profile">
        <img src={avatarUrl}></img>
        <form>
          <h3>{name}</h3>
          <p>{email}</p>
          
          <div className="status">
            <span className="status-badge">
              <span
                className={
                  isOnline ? "status-dot online" : "status-dot offline"
                }
              ></span>
              {isOnline ? "Online" : "Offline"}
            </span>
          </div>
        </form>
      </div>

      <div className="skilltag">
        <h4>Skills:</h4>
        {skills.map((skill, index) => (
          <SkillTag
            key={index}
            skillName={skill.skillName}
            level={skill.level}
          />
        ))}
      </div>
      <button
        type="button"
        className="btn-viewDetail"
        onClick={() => onViewDetails(id)}
      >
        View Details
      </button>
    </div>
  );
};

export default UserProfileCard;
