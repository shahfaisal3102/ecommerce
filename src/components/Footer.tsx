import { Button, Container, Group, SimpleGrid, Stack, Text, TextInput, } from '@mantine/core';

const columns = {
    Explore: ['Home', 'Men', 'Women', 'Kids', 'Collections', 'Shop',],
    Legal: ['Privacy policy', 'Terms and conditions', 'Shipping policy', 'Refund policy',],
    Help: ['Contact us', 'Track order', 'FAQs', 'Size guide',],
};

function FooterColumn({ title, links, }: { title: string; links: string[]; }) {
    return (
        <div>
            <Text style={{
                fontSize: 14,
                fontWeight: 700,
                color: '#8f7e71',
            }} >
                {title}
            </Text>

            <Stack gap={9} mt={14}>
                {links.map((link) => (
                    <a href="#new" key={link}
                        style={{
                            color: '#746b63',
                            fontSize: 13,
                            lineHeight: 1.4,
                            textDecoration: 'none',
                            transition: 'color 180ms ease',
                        }}>
                        {link}
                    </a>
                ))}
            </Stack>
        </div>
    );
}

export default function Footer() {
    return (
        <footer
            style={{
                background: '#382715',
                padding: '65px 0 25px',
                borderTop: '1px solid #eee7df',
            }}
        >
            <Container
                size="xl"
                style={{
                    paddingLeft: 30,
                    paddingRight: 30,
                }}
            >
                {/* MAIN FOOTER */}
                <SimpleGrid
                    cols={{ base: 1, xs: 2, md: 4, }}
                    spacing={{ base: 35, md: 55, }}
                >
                    {/* BRAND */}
                    <div>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 7,
                            color: '#8f7e71',
                            fontFamily: 'Georgia, serif',
                            fontSize: 23,
                            fontWeight: 700,
                            letterSpacing: '-0.04em',
                        }}>
                            <span style={{
                                fontFamily: 'Arial, sans-serif',
                                fontSize: 28,
                                transform: 'rotate(-25deg)',
                                display: 'inline-block',
                            }} >
                                ◕
                            </span>

                            <span>CozyVerse</span>
                        </div>

                        <Text mt={15}
                            style={{
                                maxWidth: 290,
                                color: '#756c64',
                                fontSize: 13,
                                lineHeight: 1.65,
                            }}
                        >
                            We curate everyday footwear that brings
                            comfort, character and confidence to every
                            step.
                        </Text>

                        {/* NEWSLETTER */}
                        <Group mt={20} gap={8} wrap="nowrap" align="center" >
                            <TextInput placeholder="Enter your email" size="sm" radius="md"
                                style={{
                                    flex: 1,
                                    maxWidth: 210,
                                }}
                                styles={{
                                    input: {
                                        height: 38,
                                        fontSize: 12,
                                        background: '#fff',
                                        border: '1px solid #e2dbd3',
                                    },
                                }}
                            />

                            <Button size="sm" radius="md"
                                style={{
                                    height: 38,
                                    paddingLeft: 17,
                                    paddingRight: 17,
                                    background: '#6e5337',
                                    color: '#fff',
                                    fontSize: 11,
                                    fontWeight: 600,
                                }}
                            >
                                Subscribe
                            </Button>
                        </Group>
                    </div>

                    {/* FOOTER COLUMNS */}
                    {Object.entries(columns).map(
                        ([title, links]) => (
                            <FooterColumn
                                key={title}
                                title={title}
                                links={links}
                            />
                        )
                    )}
                </SimpleGrid>

                {/* DIVIDER */}
                <div
                    style={{
                        width: '100%',
                        height: 1,
                        marginTop: 50,
                        marginBottom: 20,
                        background: '#e3dbd2',
                    }}
                />

                {/* BOTTOM */}
                <Group justify="space-between" align="center" gap={15} wrap="wrap" >
                    <Text style={{ fontSize: 12, color: '#8a8179', }} >
                        © 2026 CozyVerse. All rights reserved.
                    </Text>

                    <Group gap={18}>
                        {['Instagram', 'Facebook', 'Pinterest', 'TikTok',].map((social) => (
                            <Text key={social} component="a" href="#"
                                style={{
                                    fontSize: 12,
                                    color: '#8f7e71',
                                    textDecoration: 'none',
                                    cursor: 'pointer',
                                }}
                            >
                                {social}
                            </Text>
                        ))}
                    </Group>
                </Group>
            </Container>
        </footer>
    );
}