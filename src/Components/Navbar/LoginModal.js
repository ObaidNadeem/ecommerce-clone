import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel'
import firebase from 'firebase'
import './LoginModal.css'

// FACEBOOK LOGIN

// const facebook_login = () => {
//   // firebase.initializeApp();
//   var provider = new firebase.auth.FacebookAuthProvider();
//   firebase.auth().signInWithPopup(provider).then(function(result) {
//     var token = result.credential.accessToken;
//     var user = result.user;
//     console.log(`user data \n ${user}`)
//   }).catch(function(error) {
//     console.log(`Error \n ${error.message}`);
//   });

//   // App.initializeApp()
  
// }



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
          {/* Modal Carousel */}
          <div className="modal-carousel">
            <Carousel>
                <Carousel.Item>
                    {/* <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=First slide&bg=373940"
                    alt="First slide"
                    /> */}
                    {/* <Carousel.Caption> */}
                    <div className="modal-item">
                        <div className="modal-item-img">
                        <img src="https://statics.olx.com.pk/external/base/img/loginEntryPointPost.png" alt=""/>
                        </div>
                        <p>Help make OLX safer place to buy and sell</p>
                    </div>
                    {/* </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    {/* <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Second slide&bg=282c34"
                    alt="Third slide"
                    /> */}
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
                {/* Carousel end */}
           </div>
          <div className="social-auth-buttons">
              <button>Continue with phone</button>
              <button ><span><svg width="22px" height="22px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-367TP rui-27W37" d="M512 85.325c235.648 0 426.667 191.019 426.667 426.667s-191.019 426.667-426.667 426.667c-235.648 0-426.667-191.019-426.667-426.667s191.019-426.667 426.667-426.667zM512 150.605c-199.595 0-361.429 161.792-361.429 361.387 0 199.637 161.835 361.429 361.429 361.429s361.429-161.792 361.429-361.429c0-199.595-161.835-361.387-361.429-361.387zM616.789 301.133v57.6h-61.312c-15.403 0-28.8 14.848-28.8 31.616v0 63.147h90.069v53.845h-90.069v215.509h-67.115v-215.509h-78.592v-53.845h78.592v-74.325c0-42.752 34.517-78.037 76.672-78.037v0h80.555z"></path></svg></span> Continue with facebook</button>
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

// App.inti

// render(<Login />);
export default Login