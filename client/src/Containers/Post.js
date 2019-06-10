import React, { Component } from "react";
import PostItem from "./PostItem";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import axios from "axios";
import icons from "glyphicons";

class Post extends Component {
  state = {
    modal: false,
    goals: ""
  };

  pullInfo = async e => {
    const { values } = this.props;
    e.preventDefault();
    e = values.owner;
    // console.log(e);
    let res = await axios.get("/api/users/snoop/" + e);
    let { data } = await res;
    // console.log(data);
    this.setState({
      goals: data.goals
    });
    this.toggle();
  };

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  render() {
    const { values } = this.props;
    return (
      <div style={{marginTop:'10px'}}>
        <div className="card flex-row flex-wrap">
          <div className="card-header">
            <h4 className="card-title">{values.name}</h4>            
          </div>
          <div className="card-block px-2">
            <div className="card-text w-90">
            {values.sets.map(element => {
              return <PostItem reps={element.reps} weight={element.weight} />;
            })}
            </div>
          </div>
        </div>
            <Modal
              style={{ color: "black", marginTop: "20vh" }}
              isOpen={this.state.modal}
              toggle={this.toggle}
              className="profile-modal"
            >
              <ModalHeader className="profile-modal-inner" toggle={this.toggle}>
                {values.name}
              </ModalHeader>
              <ModalBody className="profile-modal-inner">{this.state.goals}</ModalBody>
              <ModalFooter className="profile-modal-inner">
                <Button color="primary" onClick={this.toggle}>
                  {icons.handVictory} coming soon
                </Button>{" "}
                <Button style={{ color: "white" }} onClick={this.toggle}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
           </div>
    //     </div>
    //   </div>
    );
  }
}

export default Post;
