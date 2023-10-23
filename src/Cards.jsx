/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Btn } from "./Btn";
import Modal from "react-bootstrap/Modal";

export const Cards = ({ post, id, getAllBlog }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");

  const handleDelete = (id) => {
    const data = localStorage.getItem("blog");

    const parseData = JSON.parse(data);
    const filterData = parseData.filter((item) => {
      return item.id !== id;
    });
    localStorage.setItem("blog", JSON.stringify(filterData));
    getAllBlog();
  };

  return (
    <div className=" my-5">
      <Card
        style={{ width: "18rem" }}
        className=" bg-slate-200 p-5 rounded-t-xl relative mx-auto"
      >
        <Card.Img
          variant="top"
          src={post.img}
          style={{ height: "200px", objectFit: "cover", objectPosition: "top" }}
        />
        <Card.Body>
          <Card.Title>
            <h1 className=" font-bold text-xl">{post.title}</h1>
          </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>

          <div className="mt-4 flex justify-between">
            <Button
              className="btn bg-blue-400"
              variant="primary"
              onClick={() => {
                handleShow()
                setModalTitle(post.title)
                setModalContent(post.content)
              }}
            >
              View more
            </Button>
            {/* <button className="btn bg-red-400" onClick={() =>delete(id)}>Delete</button> */}
          </div>
        </Card.Body>

        <div
          className=" absolute top-0 right-3 bg-red-600 my-2 h-7 w-7 rounded-full text-xl text-white font-bold cursor-pointer"
          onClick={() => handleDelete(post.id)}
        >
          &times;
        </div>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h2 className="text-sm">{modalTitle}</h2>
            <h2 className="text-sm">{modalContent}</h2>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
