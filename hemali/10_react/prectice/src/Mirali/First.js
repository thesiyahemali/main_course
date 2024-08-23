import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Card, Row, Col } from 'react-bootstrap';

const Index = () => {
    const [products, setProducts] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(0);

    const elementRef = useRef(null);

    function onIntersection(entries) {
        const firstEntry = entries[0];
        if (firstEntry.isIntersecting && hasMore) {
            fetchMoreItems();
        }
    }

    useEffect(() => {
        const observer = new IntersectionObserver(onIntersection);
        if (observer && elementRef.current) {
            observer.observe(elementRef.current);
        }
        return () => {
            if (observer) {
                observer.disconnect();
            }
        };
    }, [products]);

    async function fetchMoreItems() {
        try {
            const response = await axios.get(`https://dummyjson.com/products?limit=10&skip=${page * 10}`);
            const data = response.data;
            if (data.products.length === 0) {
                setHasMore(false);
            } else {
                setProducts(prevProducts => [...prevProducts, ...data.products]);
                setPage(prevPage => prevPage + 1);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    return (
        <>
            {products.map(item =>
                <Card key={item.id} style={{ width: '600px', margin: '0 auto' }} className={'mb-2'}>
                    <Row>
                        <Col md={4}>
                            <img src={item.thumbnail} alt='productimage' style={{ width: '100%', margin: '10px' }}></img>
                        </Col>
                        <Col md={8}>
                            <Card.Body>
                                <Card.Text>{item.description}</Card.Text>
                                <Card.Text>${item.price}</Card.Text>
                            </Card.Body>
                        </Col>
                        <Col></Col>
                        <Col></Col>
                    </Row>
                </Card>
            )}
            {hasMore && <div ref={elementRef}>Load more items....</div>}
        </>
    );
};

export default Index;
