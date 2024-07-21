import React, { useState } from "react";
import { Input, Form, Flex, Select, Button } from 'antd';
import "./Style.css";

export default function StudentEntry() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal"> Open </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
             <Form>
                <h3> ADD STUDENT </h3>
                <hr/>
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: 'Form must be complete',
                    },
                  ]}
                >
                    <Flex vertical gap={12}>
                      <Flex gap={5}>
                        <Input placeholder="First Name" variant="outlined" />
                        <Input placeholder="Last Name" variant="outlined" />
                      </Flex>
                      <Input placeholder="E-mail" variant="outlined" />
                      <Flex gap={5}>
                        <Select placeholder="Gender"
                          options={[
                            {
                              value: 'MALE',
                              label: 'Male',
                            },
                            {
                              value: 'FEMALE',
                              label: 'Female',
                            },
                          ]}
                        />
                       <Select placeholder="Department"
                          options={[
                            {
                              value: 'MALE',
                              label: 'Male',
                            },
                            {
                              value: 'FEMALE',
                              label: 'Female',
                            },
                          ]}
                        />
                      </Flex>
                      <Button type="primary"> Add Student </Button>
                      <Button type="primary" danger onClick={toggleModal}> Cancel </Button>
                    </Flex>
                </Form.Item>
             </Form>
          </div>
        </div>
      )}
    </>
  );
}
