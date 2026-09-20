import {
    ActionIcon,
    Box,
    Group,
    TextInput,
    UnstyledButton,
} from '@mantine/core';

import {
    IconHeart,
    IconMenu2,
    IconSearch,
    IconShoppingBag,
    IconUser,
} from '@tabler/icons-react';

type Props = {
    cartCount: number;
    search: string;
    onSearchChange: (v: string) => void;
    onMobileMenu: () => void;
    onCart: () => void;
};

export default function Header({
    cartCount,
    search,
    onSearchChange,
    onMobileMenu,
    onCart,
}: Props) {
    return (
        <header
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 20,
                color: '#fff',
            }}
        >
            <Group
                px={{ base: 18, sm: 25, md: 32 }}
                h={{ base: 64, md: 72 }}
                style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >

                {/* ================= MOBILE MENU ================= */}

                <Group hiddenFrom="md">
                    <ActionIcon
                        variant="subtle"
                        color="white"
                        onClick={onMobileMenu}
                        size="lg"
                    >
                        <IconMenu2 size={22} />
                    </ActionIcon>
                </Group>


                {/* ================= LOGO ================= */}

                <UnstyledButton
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 7,
                        color: '#fff',
                        fontFamily: 'Georgia, serif',
                        fontSize: 23,
                        fontWeight: 700,
                        letterSpacing: '-0.04em',
                        whiteSpace: 'nowrap',
                    }}
                >
                    <span
                        style={{
                            fontFamily: 'Arial, sans-serif',
                            fontSize: 31,
                            lineHeight: 1,
                            transform: 'rotate(-25deg)',
                            display: 'inline-block',
                        }}
                    >
                        ◕
                    </span>

                    <span>
                        CozyVerse
                    </span>
                </UnstyledButton>


                {/* ================= DESKTOP NAVIGATION ================= */}

                <Group
                    visibleFrom="md"
                    gap={30}
                    style={{
                        position: 'absolute',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        whiteSpace: 'nowrap',
                    }}
                >
                    {[
                        'Women',
                        'Men',
                        'Kids',
                        'Accessories',
                        'Collection',
                        'Brands',
                    ].map((item) => (
                        <a
                            href={`#${item.toLowerCase()}`}
                            key={item}
                            style={{
                                color: 'rgba(255,255,255,0.95)',
                                fontSize: 13,
                                fontWeight: 500,
                                textDecoration: 'none',
                                transition: 'opacity 0.2s ease',
                            }}
                        >
                            {item}
                        </a>
                    ))}
                </Group>


                {/* ================= RIGHT ACTIONS ================= */}

                <Group
                    ml="auto"
                    gap={4}
                    align="center"
                >

                    {/* Search input */}

                    <TextInput
                        visibleFrom="lg"
                        value={search}
                        onChange={(e) =>
                            onSearchChange(e.currentTarget.value)
                        }
                        placeholder="Search"
                        variant="unstyled"
                        leftSection={
                            <IconSearch
                                size={17}
                                stroke={1.5}
                            />
                        }
                        styles={{
                            root: {
                                width: 145,
                                marginRight: 5,
                            },
                            input: {
                                color: '#fff',
                                fontSize: 12,
                                borderBottom: '1px solid rgba(255,255,255,0.45)',
                                borderRadius: 0,
                            },
                            section: {
                                color: '#fff',
                            },
                        }}
                    />


                    {/* Search icon */}

                    <ActionIcon
                        variant="subtle"
                        color="white"
                        visibleFrom="sm"
                        size="lg"
                    >
                        <IconSearch
                            size={21}
                            stroke={1.5}
                        />
                    </ActionIcon>


                    {/* User */}

                    <ActionIcon
                        variant="subtle"
                        color="white"
                        visibleFrom="sm"
                        size="lg"
                    >
                        <IconUser
                            size={21}
                            stroke={1.5}
                        />
                    </ActionIcon>


                    {/* Wishlist */}

                    <ActionIcon
                        variant="subtle"
                        color="white"
                        visibleFrom="sm"
                        size="lg"
                    >
                        <IconHeart
                            size={21}
                            stroke={1.5}
                        />
                    </ActionIcon>


                    {/* Cart */}

                    <Box
                        style={{
                            position: 'relative',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <ActionIcon
                            variant="subtle"
                            color="white"
                            onClick={onCart}
                            size="lg"
                        >
                            <IconShoppingBag
                                size={21}
                                stroke={1.5}
                            />
                        </ActionIcon>

                        {cartCount > 0 && (
                            <span
                                style={{
                                    position: 'absolute',
                                    top: -1,
                                    right: -1,
                                    width: 15,
                                    height: 15,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '50%',
                                    background: '#f1e9dd',
                                    color: '#33271d',
                                    fontSize: 8,
                                    fontWeight: 700,
                                    pointerEvents: 'none',
                                }}
                            >
                                {cartCount}
                            </span>
                        )}
                    </Box>

                </Group>

            </Group>
        </header>
    );
}