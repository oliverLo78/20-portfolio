// React
import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';

function Skills(args) {

const [modal, setModal] = useState(false);

const toggle = () => setModal(!modal);

return (
    <div>
        <div className='skills'>
        <h1>Skills</h1>
        <ol className='skills-list'>
          <li className='soft-skills'>
            <h2>Front-End Developer</h2>
                <span>
                    HTML.
                    CSS.
                    JavaScript.
                    DOM Manipulation.
                    JSON.
                    AJAX.
                    Node.js.
                    MySQL.
                </span>
          </li>
          <li className='soft-skills'>
            <h2>Back-End Developer</h2>
                <span>
                    Python.
                    Java.
                    PHP.
                    SQL.
                    Git.
                    HTML.
                    CSS.
                    JavaScript.
                </span>
          </li>
          <li className='soft-skills'>
            <h2>Coding Languages</h2>
                <span>
                    Data structures and algorithms.
                    Database and SQL.
                    Object-oriented programming (OOP) languages.
                    Integrated development environments (IDEs)
                    Cloud computing.
                    Web development.
                    Containers.
                    Text editors.
                </span>
          </li>
        </ol>
      </div>
        <Button color="success" onClick={toggle}>
        Click Me
        </Button>
        <Modal isOpen={modal} toggle={toggle} {...args}>
            <ModalHeader toggle={toggle}>Motivation</ModalHeader>
        <ModalBody>
            I’m a product manager able to leverage a background in customer service to deliver client satisfaction through leadership and technical know-how. Often tagged by management to train new employees and lead initiatives to drive sales and customer satisfaction. Enjoy coordinating group efforts to meet goals and over-deliver on client expectations.
        </ModalBody>
        <ModalFooter>
            <Button color="primary" onClick={toggle}>
            Do Something
            </Button>{' '}
        <Button color="secondary" onClick={toggle}>
            Cancel
        </Button>
        </ModalFooter>
    </Modal>
</div>

    );
}

export default Skills;
