import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel'
import firebase from 'firebase'
import './LoginModal.css'
import FbAuth from './fbauth'



function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-carousel">
            <Carousel>
                <Carousel.Item>
                   
                    <div className="modal-item">
                        <div className="modal-item-img">
                        <img src="https://statics.olx.com.pk/external/base/img/loginEntryPointPost.png" alt=""/>
                        </div>
                        <p>Help make OLX safer place to buy and sell</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                 
                    <div className="modal-item">
                        <div className="modal-item-img">
                        <img src="https://statics.olx.com.pk/external/base/img/loginEntryPointFavorite.png" alt=""/>
                        </div>
                        <p>Help make OLX safer place to buy and sell</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                <div className="modal-item">
                        <div className="modal-item-img">
                        <img src="https://statics.olx.com.pk/external/base/img/loginEntryPointChat.png" alt=""/>
                        </div>
                        <p>Help make OLX safer place to buy and sell</p>
                    </div>
                </Carousel.Item>
                </Carousel>
           </div>
          <div className="social-auth-buttons">
              <button>Continue with phone</button>
              <FbAuth />
              <button><span><svg width="22px" height="22px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-367TP rui-27W37" d="M511.979 85.321c235.648 0 426.667 191.019 426.667 426.667s-191.019 426.667-426.667 426.667c-235.605 0-426.667-191.019-426.667-426.667s191.061-426.667 426.667-426.667zM511.979 150.601c-199.595 0-361.429 161.792-361.429 361.387 0 199.637 161.835 361.429 361.429 361.429 199.637 0 361.429-161.792 361.429-361.429 0-199.595-161.792-361.387-361.429-361.387zM515.772 325.594c47.061-2.176 91.221 17.92 127.189 45.995-15.403 17.109-31.275 33.621-48.341 49.024-43.221-29.312-104.747-37.717-147.968-3.797-61.867 41.899-64.768 140.971-5.205 186.155 57.856 51.541 167.296 25.941 183.381-52.864-36.309-0.555-72.661 0-108.885-1.152-0.171-21.291-0.213-42.453-0.171-63.659 60.587-0.213 121.259-0.299 181.973 0.171 3.627 49.92-3.157 102.955-34.347 144.256-47.317 65.28-142.379 84.352-216.576 56.32-74.411-27.691-127.232-104.789-120.917-183.424 1.664-96.128 91.861-180.309 189.867-177.024z"></path></svg></span> Continue with google</button>
              <button>Continue with email</button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <p>We won't share your personal details with anyone</p>
          <p>If you continue, you are accepting <a href="#">OLX Terms and Conditions</a> and <a href = "#">Privacy Policy</a></p>
        </Modal.Footer>
      </Modal>
    );
}
  
function Login() {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <Button className="login-button" variant="primary" onClick={() => setModalShow(true)}>
          Login
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
}


export default Login