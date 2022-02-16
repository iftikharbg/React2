import React, { Component } from 'react'

 class User extends Component {
    state = {
            
        isVisible:true
    }
     static defaultProps = {
         name:"No data found",
         salary:"No data found",
         branch:"No data found"

     }
    
     constructor(props){
         super();
         
     }
     
     ClickHandler=(e)=>{
        this.setState({
            isVisible:!this.state.isVisible
        })

     }

    //  ClickHandler(e) {
        
    //     // this.setState({
    //     //     isVisible:!this.state.isVisible
    //     // })
    //  }
  render() {
      const{name,salary,branch} = this.props;
      const{isVisible} = this.state;
    return (
      <div className='col-12 mb-4'>
         <div onClick={this.ClickHandler.bind(this)} className='card'>
             <div style={{cursor:"pointer"}} className='card-title py-1 bg-secondary d-flex justify-content-between align-items-center'>
                 <h4 style={{color:"white",paddingLeft:"10px"}}>{name}</h4>
                 <button className='btn btn-danger'><i className="fa-solid fa-trash-can"></i> Delete</button>

             </div>
         {
             isVisible ?     <div className='card-body p-3'>
             <ul>
                 <li>
                     Salary: {salary}
                 </li>
                 <li>
                     Department: {branch}
                 </li>
                
             </ul>

         </div> : null
         }

         </div>

      </div>
    )
  }
}
export default User;