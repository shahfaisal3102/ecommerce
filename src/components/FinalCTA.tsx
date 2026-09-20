import { Box, Button, Container, Image, Title, } from '@mantine/core';
import { IconArrowUpRight } from '@tabler/icons-react';

export default function FinalCTA() {
    return (
        <section style={{ width: '100%', padding: '20px 0 70px', background: '#fff', }} >
            <Container size="xl" style={{ paddingLeft: 24, paddingRight: 24, }} >
                <Box style={{
                    position: 'relative',
                    width: '100%',
                    height: 435,
                    overflow: 'hidden',
                    borderRadius: 16,
                }}>

                    <Image src='../assets/buildmyDesign.png' alt="Build your style"
                        style={{
                            position: 'absolute',
                            inset: 0,
                            width: '100%',
                            height: '100%',
                            display: 'block',
                            objectFit: 'cover',
                            objectPosition: 'center',
                            transform: 'scale(1.01)',
                        }} />

                    {/* DARK OVERLAY */}
                    <Box style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'rgba(35, 25, 18, 0.38)',
                        pointerEvents: 'none',
                    }} />

                    {/* CONTENT */}
                    <Box style={{
                        position: 'absolute',
                        inset: 0,
                        zIndex: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        padding: '20px',
                    }}>
                        <Title order={2}
                            style={{
                                margin: 0,
                                maxWidth: 760,
                                color: '#fff',
                                fontFamily:
                                    "'Playfair Display', Georgia, serif",
                                fontSize: 'clamp(28px, 3.2vw, 48px)',
                                lineHeight: 1.05,
                                fontWeight: 700,
                                letterSpacing: '-0.035em',
                            }}>
                            Build Your Style With Confident
                            <br />
                            Steps By Wearing Our Sneakers.
                        </Title>

                        <Button
                            size="md"
                            radius="md"
                            mt={20}
                            rightSection={
                                <IconArrowUpRight
                                    size={18}
                                    stroke={1.8}
                                />
                            }
                            style={{
                                height: 36,
                                paddingLeft: 22,
                                paddingRight: 18,
                                background: '#f7f1e9',
                                color: '#30251d',
                                fontSize: 12,
                                fontWeight: 600,
                                boxShadow:'0 4px 15px rgba(0,0,0,.12)',
                            }}>
                            Shop Now
                        </Button>
                    </Box>
                </Box>
            </Container>
        </section>
    );
}