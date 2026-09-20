import { useEffect, useState } from 'react';
import { ActionIcon, Box, Button, Container, Group, Image, Text, Title, } from '@mantine/core';
import {IconArrowLeft,IconArrowRight,} from '@tabler/icons-react';

type Slide = {
  image: string;
  eyebrow: string;
  title: string;
  titleLine2: string;
  titleLine3: string;
};

const slides: Slide[] = [
  {
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1800&q=90',
    eyebrow: 'NEW SEASON / 2026',
    title: 'Sneakers That',
    titleLine2: 'Defy Your Every',
    titleLine3: 'day Look',
  },
  {
    image:
      'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1800&q=90',
    eyebrow: 'STREET COLLECTION',
    title: 'Step Into',
    titleLine2: 'Your Own',
    titleLine3: 'style',
  },
  {
    image:
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1800&q=90',
    eyebrow: 'SUMMER / 2026',
    title: 'Made For',
    titleLine2: 'Everyday',
    titleLine3: 'movement',
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((current) =>
      current === slides.length - 1 ? 0 : current + 1
    );
  };

  const previousSlide = () => {
    setActiveSlide((current) =>
      current === 0 ? slides.length - 1 : current - 1
    );
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[activeSlide];

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: 650,
        overflow: 'hidden',
        background: '#715a45',
      }}
    >
      {/* Background Image */}
      <Image
        key={slide.image}
        src={slide.image}
        alt={slide.title}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          transition: 'opacity 500ms ease',
        }}
      />

      {/* Dark Overlay */}
      <Box
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background:
            'linear-gradient(90deg, rgba(40,28,20,.65) 0%, rgba(40,28,20,.28) 50%, rgba(40,28,20,.05) 100%)',
        }}
      />

      {/* Content */}
      <Container
        size="xl"
        style={{
          position: 'relative',
          zIndex: 5,
          height: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box
          key={activeSlide}
          style={{
            maxWidth: 650,
            marginTop: 40,
          }}
        >
          <Text
            style={{
              marginBottom: 18,
              color: 'rgba(255,255,255,.82)',
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.18em',
            }}
          >
            {slide.eyebrow}
          </Text>

          <Title
            order={1}
            style={{
              margin: 0,
              color: '#f8f0e5',
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(55px, 6.5vw, 94px)',
              fontWeight: 700,
              lineHeight: 0.94,
              letterSpacing: '-0.065em',
            }}
          >
            {slide.title}
            <br />
            {slide.titleLine2}
            <br />

            <i
              style={{
                fontStyle: 'normal',
              }}
            >
              {slide.titleLine3}
            </i>
          </Title>

          <Button
            radius="md"
            size="md"
            mt={38}
            style={{
              height: 50,
              paddingLeft: 32,
              paddingRight: 32,
              background: '#f7f1e9',
              color: '#292019',
              fontSize: 13,
              fontWeight: 600,
            }}
          >
            Shop Now
          </Button>
        </Box>
      </Container>

      {/* Slider Controls */}
      <Group
        gap={10}
        style={{
          position: 'absolute',
          right: 32,
          bottom: 28,
          zIndex: 10,
        }}
      >
        <Group
          gap={5}
          style={{
            marginRight: 5,
            color: 'rgba(255,255,255,.65)',
            fontSize: 12,
          }}
        >
          <span
            style={{
              color: '#fff',
              fontWeight: 700,
            }}
          >
            {String(activeSlide + 1).padStart(2, '0')}
          </span>

          <span>/</span>

          <span>
            {String(slides.length).padStart(2, '0')}
          </span>
        </Group>

        {/* Previous */}
        <ActionIcon
          radius="xl"
          size={38}
          variant="filled"
          color="dark"
          onClick={previousSlide}
        >
          <IconArrowLeft size={16} />
        </ActionIcon>

        {/* Next */}
        <ActionIcon
          radius="xl"
          size={38}
          variant="filled"
          color="dark"
          onClick={nextSlide}
        >
          <IconArrowRight size={16} />
        </ActionIcon>
      </Group>

      {/* Dots */}
      <Group
        gap={6}
        style={{
          position: 'absolute',
          left: '50%',
          bottom: 32,
          transform: 'translateX(-50%)',
          zIndex: 10,
        }}
      >
        {slides.map((_, index) => (
          <Box
            key={index}
            onClick={() => setActiveSlide(index)}
            style={{
              width: index === activeSlide ? 28 : 7,
              height: 7,
              borderRadius: 10,
              background:
                index === activeSlide
                  ? '#fff'
                  : 'rgba(255,255,255,.45)',
              cursor: 'pointer',
              transition: 'all 250ms ease',
            }}
          />
        ))}
      </Group>
    </section>
  );
}