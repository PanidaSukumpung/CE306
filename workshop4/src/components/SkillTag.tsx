
export interface SkillTagProps {
    skillName: string;
    level ?: 'Beginner' | 'Intermediate' | 'Advanced';
}

const SkillTag = ({skillName, level} : SkillTagProps) => {
    let bg = 'gray'
    
    if(level === 'Beginner'){
        bg = '#c2e6c8';
    } else if (level === 'Intermediate') {
        bg = '#FEE2AD';
    } else if (level === 'Advanced') {
        bg = '#F08787';
    }


    return(
        <div style={{backgroundColor : bg , borderRadius: 8,padding: 4 }}>
            {skillName} ({level} ) 
        </div>
    )
     
};

export default SkillTag