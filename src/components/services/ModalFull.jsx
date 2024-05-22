import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function ModalFull({ data }) {
    const values = [true];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    const handleClick = () => {
        console.log(`Clicked button with data id: ${data.id} and title: ${data.title}`)
    }

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }

    return (
        <>
            {values.map((v, idx) => (
                <Button variant="outline-dark" key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
                    View more
                    {typeof v === 'string' && `below ${v.split('-')[0]}`} {handleClick()}
                </Button>
            ))}
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <div className="img-box d-flex flex-column align-items-center">
                            <img src={data.image} alt="" height="60px" width="60px" />
                        </div>
                        {data.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* content: description */}
                    {data.content && data.content.description}
                    <Container>
                    <Tabs
                        defaultActiveKey="profile"
                        id="uncontrolled-tab-example"
                        className="mb-3 mt-5"
                    >
                        {/* content: list: title */}
                        {data.content && data.content.list.map((item, idx) => (
                            <Tab eventKey={item.title} title={item.title} key={idx}>
                                <h3>{idx + 1}. {item.title}</h3>
                                <>
                                {/* content: list: subsection: title & description */}
                                {item.subsection && <h5 style={{marginTop: "3rem"}}>{item.subsection.title} </h5>}
                                <span>{item.subsection && item.subsection.description}</span>
                                </>

                                <>
                                {/* content: list: subsection: title2 & description2 */}
                                {item.subsection && <h5 style={{marginTop: "3rem"}}>{item.subsection.title2} </h5>}
                                <span>{item.subsection && item.subsection.description2}</span>
                                </>

                                <>
                                {/* content: list: subsection: title3 & description3 */}
                                {item.subsection && <h5 style={{marginTop: "3rem"}}>{item.subsection.title3} </h5>}
                                <span>{item.subsection && item.subsection.description3}</span>
                                </>

                                <>
                                {/* content: list: subsection: title4 & description4 */}
                                {item.subsection && <h5 style={{marginTop: "3rem"}}>{item.subsection.title4} </h5>}
                                <span>{item.subsection && item.subsection.description4}</span>
                                </>

                                <>
                                {/* content: list: subsection: title5 & description5 */}
                                {item.subsection && <h5 style={{marginTop: "3rem"}}>{item.subsection.title5} </h5>}
                                <span>{item.subsection && item.subsection.description5}</span>
                                </>

                                <>
                                {/* content: list: subsection: title6 & description6 */}
                                {item.subsection && <h5 style={{marginTop: "3rem"}}>{item.subsection.title6} </h5>}
                                <span>{item.subsection && item.subsection.description6}</span>
                                </>

                                <>
                                {/* content: list: subsection: title7 & description7 */}
                                {item.subsection && <h5 style={{marginTop: "3rem"}}>{item.subsection.title7} </h5>}
                                <span>{item.subsection && item.subsection.description7}</span>
                                </>
                            </Tab>
                        ))}
                    </Tabs>
                    </Container>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalFull;