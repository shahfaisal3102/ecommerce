import { Box, Button, Group, Image, Text } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';
import type { Product } from './data';

type Props = {
  product: Product;
  liked: boolean;
  onLike: () => void;
  onAdd: () => void;
  onView: () => void;
};

export default function ProductCard({
  product,
  liked,
  onLike,
  onAdd,
  onView,
}: Props) {
  return (
    <Box
      style={{
        width: '100%',
        minWidth: 0,
      }}
    >
      {/* IMAGE */}
      <Box
        onClick={onView}
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '1.45 / 1',
          overflow: 'hidden',
          borderRadius: 12,
          background: '#f3f3f1',
          cursor: 'pointer',
        }}
      >
        <Image
          src={product.image}
          alt={product.name}
          onClick={onView}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            display: 'block',
            objectFit: 'cover',
            objectPosition: 'center',
            transition: 'transform 450ms ease',
          }}
        />

        {/* IMAGE OVERLAY */}
        <Box
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.02), rgba(0,0,0,0.02))',
          }}
        />

        {/* WISHLIST */}
        <Box
          onClick={(e) => {
            e.stopPropagation();
            onLike();
          }}
          style={{
            position: 'absolute',
            top: 12,
            right: 12,
            width: 38,
            height: 38,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.92)',
            cursor: 'pointer',
            boxShadow: '0 3px 12px rgba(0,0,0,0.08)',
            transition: 'transform 180ms ease',
          }}
        >
          <IconHeart
            size={17}
            stroke={1.7}
            color="#654a31"
            fill={liked ? '#654a31' : 'none'}
          />
        </Box>

        {/* CATEGORY */}
        <Box
          style={{
            position: 'absolute',
            right: 10,
            bottom: 10,
            padding: '5px 9px',
            borderRadius: 20,
            background: 'rgba(246,241,234,0.95)',
            backdropFilter: 'blur(5px)',
          }}
        >
          <Text
            style={{
              fontSize: 8,
              lineHeight: 1,
              color: '#654a31',
              fontWeight: 500,
            }}
          >
            {product.category}
          </Text>
        </Box>
      </Box>

      {/* PRODUCT INFORMATION */}
      <Box
        style={{
          paddingTop: 20,
        }}
      >
        {/* PRICE */}
        <Text
          style={{
            margin: 0,
            color: '#655140',
            fontSize: 26,
            lineHeight: 1.5,
            fontWeight: 600,
            letterSpacing: '-0.035em',
          }}
        >
          ${product.price.toFixed(2)}
        </Text>

        {/* PRODUCT NAME */}
        <Text
          style={{
            marginTop: 8,
            color: '#564232',
            fontSize: 17,
            lineHeight: 1.25,
            fontWeight: 600,
          }}
        >
          {product.name}
        </Text>

        {/* DESCRIPTION */}
        <Text
          lineClamp={2}
          style={{
            marginTop: 6,
            minHeight: 34,
            color: '#77716b',
            fontSize: 12,
            lineHeight: 1.45,
          }}
        >
          Classic indoor-ready sneakers with premium materials,
          earthy tones, and signature contrast details.
        </Text>

        {/* ACTIONS */}
        <Group grow gap={12} mt={14} >
          <Button
            onClick={onAdd}
            radius="md"
            style={{
              height: 40,
              background: '#ebe5dc',
              color: '#4d3c2d',
              border: '1px solid #e1d8cc',
              fontSize: 13,
              fontWeight: 600,
              transition: 'all 200ms ease',
            }}
          >
            Add to Cart
          </Button>

          <Button
            onClick={onView}
            radius="md"
            style={{
              height: 40,
              background: '#8a6239',
              color: '#fff',
              fontSize: 13,
              fontWeight: 600,
              transition: 'all 200ms ease',
            }}
          >
            Buy Now
          </Button>
        </Group>
      </Box>
    </Box>
  );
}