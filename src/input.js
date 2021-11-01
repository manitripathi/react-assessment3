import {Component} from 'react';
import './App.css';

// function Input(props){
//         return(
//             <div>
//                 <h1>EMPLOYEE FEEDBACK DATA</h1>
//             <div className='placeInput'>
//             <div className='flexBox'>  
//               Name:{props.index.Name} | Department:{props.index.Department} | Rating:{props.index.Rating}
//             </div>
//           </div>
          
//               <button className='btn' onClick={this.props.updateComponent}>Go Back</button>
              
//           </div>
//         );
//     }
class FormOutput extends Component {
      render() {
        return (
          <div>
                <h1>EMPLOYEE FEEDBACK DATA</h1>
            <div className='placeInput'>
          
            {this.props.arr.map((value,index) => {
              return <div className='flexBox' key={index.id} index={index} >;
              Name:{value.Name} | Department:{value.Department} | Rating:{value.Rating}
              </div>
            })}
          </div>
          
          <button className='btn' onClick={this.props.updateComponent}>Go Back</button>
          
      </div>
        );
      }
    }
export default FormOutput;