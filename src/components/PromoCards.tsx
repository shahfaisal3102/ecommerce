import {
    Button,
    Container,
    Image,
    SimpleGrid,
    Text,
} from '@mantine/core';

import { motion } from 'framer-motion';
import { heroCards } from './data';

const MotionBox = motion.div;

export default function PromoCards() {
    return (
        <section
            style={{
                padding: '70px 0',
                background: '#f6f3ef',
            }}
        >
            <Container size="xl">
                <SimpleGrid
                    cols={{
                        base: 1,
                        xs: 3,
                    }}
                    spacing={16}
                >
                    {heroCards.map((card, index) => (
                        <MotionBox
                            key={card.title}
                            whileHover="hover"
                            variants={{
                                initial: {
                                    y: 0,
                                },
                                hover: {
                                    y: -6,
                                },
                            }}
                            initial="initial"
                            transition={{
                                duration: 0.25,
                            }}
                            style={{
                                position: 'relative',
                                height: 420,
                                overflow: 'hidden',
                                borderRadius: 12,
                                cursor: 'pointer',
                            }}
                        >
                            {/* Image */}
                            <Image
                                src={card.image}
                                alt={card.title}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    transition: 'transform 500ms ease',
                                }}
                            />

                            {/* Dark gradient */}
                            <div
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background:
                                        'linear-gradient(180deg, rgba(0,0,0,0.05) 30%, rgba(0,0,0,0.75) 100%)',
                                }}
                            />

                            {/* Content */}
                            <div
                                style={{
                                    position: 'absolute',
                                    left: 28,
                                    right: 28,
                                    bottom: 28,
                                    zIndex: 2,
                                    color: '#fff',
                                }}
                            >
                                <Text
                                    fw={700}
                                    style={{
                                        fontSize: index === 2 ? 32 : 20,
                                        lineHeight: 1.1,
                                        color: '#fff',
                                        maxWidth: 260,
                                    }}
                                >
                                    {card.title}
                                </Text>

                                <Button
                                    size="sm"
                                    radius="sm"
                                    mt={16}
                                    style={{
                                        background: '#f8f2e9',
                                        color: '#241c16',
                                        fontWeight: 600,
                                        paddingLeft: 20,
                                        paddingRight: 20,
                                    }}
                                >
                                    {card.cta}
                                </Button>
                            </div>
                        </MotionBox>
                    ))}
                </SimpleGrid>
            </Container>
        </section>
    );
}