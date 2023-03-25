import React from "react";
import { Modal, Row, Col, Form, Card, Button } from "react-bootstrap";

const SingleData = (props) => {
    
  const { image, price, title, description } = props.selectedData;

  return (
    <>
      <Modal {...props} size="md" centered>
        <Modal.Body>
          <div className="modal-content p-2">
            <div className="modal-header">
              <div className="imgs">
                <img alt="" src={image} />
              </div>
              <h5 className="modal-title" id="staticBackdropLabel">
                {" "}
                {title}
              </h5>
            </div>

            <div className="modal-body">
              {description}
              <h5 className="text-right mt-3">
                <b> Rs: {price}</b>
              </h5>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={props.onHide}
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Order Now
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SingleData;
