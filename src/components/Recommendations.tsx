import { Box, Button, Container, Image, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { motion } from 'framer-motion';

import { recommendationCards } from './data';

const MotionBox = motion.div;

export default function Recommendations() {
    const isMobile = useMediaQuery('(max-width: 767px)');

    return (
        <section
            id="collections"
            style={{
                width: '100%',
                padding: isMobile ? '15px 0 50px' : '20px 0 70px',
                background: '#fff',
            }}
        >
            <Container
                size="xl"
                style={{
                    paddingLeft: isMobile ? 14 : 18,
                    paddingRight: isMobile ? 14 : 18,
                }}
            >
                <Box
                    style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile
                            ? '1fr'
                            : '1fr 1fr',

                        gridTemplateRows: isMobile
                            ? '280px 200px 200px 250px'
                            : '210px 210px 250px',

                        gap: isMobile ? 10 : 12,
                    }}
                >
                    {recommendationCards.map((item, index) => {
                        let gridColumn = '1';
                        let gridRow = `${index + 1}`;

                        if (!isMobile) {
                            if (index === 0) {
                                gridColumn = '1';
                                gridRow = '1 / 3';
                            }

                            if (index === 1) {
                                gridColumn = '2';
                                gridRow = '1';
                            }

                            if (index === 2) {
                                gridColumn = '2';
                                gridRow = '2';
                            }

                            if (index === 3) {
                                gridColumn = '1 / 3';
                                gridRow = '3';
                            }
                        }

                        return (
                            <MotionBox
                                key={`${item.title}-${index}`}
                                whileHover={{
                                    y: -3,
                                }}
                                transition={{
                                    duration: 0.25,
                                    ease: 'easeOut',
                                }}
                                style={{
                                    gridColumn,
                                    gridRow,

                                    position: 'relative',

                                    width: '100%',
                                    height: '100%',
                                    minWidth: 0,
                                    minHeight: 0,

                                    overflow: 'hidden',

                                    borderRadius: 12,

                                    background: '#e9e9e9',

                                    cursor: 'pointer',
                                }}
                            >
                                {/* IMAGE */}
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    style={{
                                        position: 'absolute',

                                        top: 0,
                                        left: 0,

                                        width: '100%',
                                        height: '100%',

                                        display: 'block',

                                        objectFit: 'cover',

                                        objectPosition:
                                            item.objectPosition || 'center center',

                                        transform: 'scale(1.01)',

                                        transition:
                                            'transform 500ms ease',
                                    }}
                                />

                                {/* OVERLAY */}
                                <Box
                                    style={{
                                        position: 'absolute',
                                        inset: 0,

                                        background:
                                            'linear-gradient(180deg, rgba(0,0,0,0) 35%, rgba(0,0,0,.62) 100%)',

                                        pointerEvents: 'none',
                                    }}
                                />

                                {/* CONTENT */}
                                <Box
                                    style={{
                                        position: 'absolute',

                                        left: isMobile ? 18 : 24,
                                        bottom: isMobile ? 18 : 20,

                                        zIndex: 2,
                                    }}
                                >
                                    <Title
                                        order={3}
                                        style={{
                                            margin: 0,

                                            color: '#fff',

                                            fontFamily:
                                                "'Playfair Display', Georgia, serif",

                                            fontSize:
                                                index === 0 || index === 3
                                                    ? 28
                                                    : 25,

                                            lineHeight: 1,

                                            fontWeight: 500,

                                            letterSpacing: '-0.025em',
                                        }}
                                    >
                                        {item.title}
                                    </Title>

                                    <Button
                                        size="sm"
                                        radius="md"
                                        mt={12}
                                        style={{
                                            height: 38,

                                            paddingLeft: 18,
                                            paddingRight: 18,

                                            background: '#fff',
                                            color: '#30261e',

                                            fontSize: 10,
                                            fontWeight: 500,

                                            boxShadow:
                                                '0 3px 10px rgba(0,0,0,.08)',
                                        }}
                                    >
                                        {item.cta}
                                    </Button>
                                </Box>
                            </MotionBox>
                        );
                    })}
                </Box>
            </Container>
        </section>
    );
}