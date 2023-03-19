import { useState } from 'react';
import { Form, Col, Row, Button, Toast } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

interface IPostDetails {
    title: string,
    content: string,
    authorName: string,
    authorDescription: string,
    coverImage: File
}
function AddPost() {
    const [show, setShow] = useState(false);
    const { register, formState: { errors }, handleSubmit, reset } = useForm<IPostDetails>();
    const onSubmit = (data: IPostDetails) => {
        console.log(data);
        reset();
        setShow(true);
    }
    return (
        <Row className='d-flex justify-content-center'>
            <Col xs={8}>
                <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide bg={"info"} className="my-2">
                    <Toast.Header>
                        <img
                            src="holder.js/20x20?text=%20"
                            className="rounded me-2"
                            alt=""
                        />
                        <strong className="me-auto">Submission successfull</strong>
                        <small>1 sec ago</small>
                    </Toast.Header>
                    <Toast.Body>Woohoo, you're post has been submitted!</Toast.Body>
                </Toast>
                <div className="bg-light rounded p-4">
                    <h3>Add your post</h3>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter title"  {...register("title", { required: true })}
                                className={`${errors.title ? "border-danger" : ""}`}
                            />
                            {errors.title && <p className='text-danger'>Title is required</p>}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Content</Form.Label>
                            <Form.Control as="textarea" rows={3}  {...register("content", { required: true })}
                                className={`${errors.content ? "border-danger" : ""}`}
                            />
                            {errors.content && <p className='text-danger'>Content is required</p>}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Author name</Form.Label>
                            <Form.Control type="text" placeholder="ex: jhon doe"  {...register("authorName", { required: true })}
                                className={`${errors.authorName ? "border-danger" : ""}`}
                            />
                            {errors.authorName && <p className='text-danger'>Title is required</p>}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Author description</Form.Label>
                            <Form.Control as="textarea" rows={3}  {...register("authorDescription", { required: true })}
                                className={`${errors.authorDescription ? "border-danger" : ""}`}
                            />
                            {errors.authorDescription && <p className='text-danger'>Author description is required</p>}
                        </Form.Group>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Cover image</Form.Label>
                            <Form.Control type="file"  {...register("coverImage", { required: true })}
                                className={`${errors.coverImage ? "border-danger" : ""}`}
                            />
                            {errors.coverImage && <p className='text-danger'>Cover image is required</p>}
                        </Form.Group>
                    </Form>
                </div>
                <div className='d-grid p-4'>
                    <Button size="lg" onClick={handleSubmit(onSubmit)}>Submit</Button>
                </div>
            </Col>
        </Row>
    );
}

export default AddPost;