import React, { Component } from 'react'

class Modal extends Component {
  constructor(props) {
    super(props)
    this.closeButton = null
  }

  closeModal(){
    this.closeButton.click();
  }

  submitModal = () => {
    this.closeModal();
  }

  render() {
    return (
      <div>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
          Create Movie
        </button>

        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Create Movie</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {this.props.children}
              </div>
              <div className="modal-footer">
                <button ref={element => this.closeButton = element} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                { this.props.hasSubmit && 
                    <button type="button" className="btn btn-primary" onClick={this.submitModal}>Save changes</button>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal


// const Modal = (props) =>{
//   // Bootstrap already provides the closing code for close button.
//   // On submit, JS will get the close button element and perform a 'click' on it to close the modal.
//   let closeButton = null;

//   const submitModal = () => {
//     closeButton.click()
//   }

//   return(
//     <div>
//       <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
//         Create Movie
//       </button>

//       <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//       <div className="modal-dialog" role="document">
//         <div className="modal-content">
//           <div className="modal-header">
//             <h5 className="modal-title" id="exampleModalLabel">Create Movie</h5>
//             <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//               <span aria-hidden="true">&times;</span>
//             </button>
//           </div>
//           <div className="modal-body">
//             {props.children}
//           </div>
//           <div className="modal-footer">
//             <button ref={element => closeButton = element} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
//             { props.hasSubmit && 
//                 <button type="button" className="btn btn-primary" onClick={submitModal}>Save changes</button>
//             }
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   )
// }

// export default Modal
