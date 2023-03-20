import TeamMember from "./TeamMember";

function Team(){
    return(
       
        <div className="row">
            <TeamMember
                info = {
                    {
                        img:'/images/01.jpg',
                        name:'nasr nasr',
                        position:'junior developer',
                        phone:'70280189',
                        email:'nasrnasr8915@gmail.com',
                        website:'nasrnasr.com'
                    }
                }
            />
            
        </div>
        
      
    )
  }
  
  export default Team;