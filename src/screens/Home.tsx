import { useEffect, useState } from 'react';
import { Col, Row, Image } from 'react-bootstrap';
import commonAPIService from '../axios-services/common-api-services';
import { API_URL } from '../constants/BasicUrl';

interface IPost {
    userId: string | number,
    id: string | number,
    body: string,
    title: string
}

function Home() {
    const [posts, setPosts] = useState<IPost[]>([]);
    const [postNum, setPostNum] = useState({
        initial: 0,
        last: 5
    });
    const [showArrow, setShowArrow] = useState({
        left: false,
        right: true
    });
    useEffect(() => {
        getuserPosts();
    }, []);
    useEffect(() => {
        if (postNum.initial <= 0) {
            setShowArrow({
                left: false,
                right: true
            });
        } else if (postNum.last >= posts.length) {
            setShowArrow({
                left: true,
                right: false
            });
        } else {
            setShowArrow({
                left: true,
                right: true
            });
        }
    }, [postNum, posts.length]);
    const getuserPosts = () => {
        commonAPIService.get(API_URL.posts).then((res) => {
            setPosts(res.data);
        });
    }
    const paginateHandler = (type: number) => {
        let temp = {
            initial: postNum?.initial,
            last: postNum?.last
        }
        if (type === -1) {
            setPostNum({
                initial: temp.initial - 5,
                last: temp.initial
            });
        } else {
            setPostNum({
                initial: temp.last,
                last: temp.last + 5
            });
        }
    }
    return (
        <Row className='d-flex justify-content-center'>
            <Col md={7} sm={10} xs={11}>
                {
                    posts && posts?.slice(postNum.initial, postNum.last)?.map((post, index) => {
                        return <div key={post?.id} className="bg-light m-2 p-2 pt-4 rounded">
                            <h4><mark>{post?.id}</mark> {post?.title.slice(0, 30)}</h4>
                            <div className='d-flex justify-content-center'>
                                <Image src={`https://picsum.photos/550/30${index < 10 ? index : 1}`} className="img-fluid rounded" />
                            </div>
                            <div className='p-2 rounded bg-white my-2'>
                                <p><em> {post?.body}</em></p>
                            </div>
                            <div className='d-flex justify-content-end'>
                                <span>
                                    <strong>
                                        <em>
                                            <mark>by user {post?.id}</mark>
                                        </em>
                                    </strong>
                                </span>
                            </div>
                        </div>
                    })
                }
                <div className='d-flex justify-content-between mb-5 py-4'>
                    <div>
                        {showArrow.left && <i className="fa fa-arrow-left cursor-pointer font-size-lg" title="Back"
                            onClick={() => paginateHandler(-1)}></i>}
                    </div>
                    <div>
                        {showArrow.right && <i className="fa fa-arrow-right cursor-pointer font-size-lg" title="Forward"
                            onClick={() => paginateHandler(1)}></i>}
                    </div>
                </div>
            </Col>
        </Row >
    );
}

export default Home;
