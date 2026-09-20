import { Container, Text, Title } from '@mantine/core'

export default function SectionTitle({ title, subtitle }: { title: string; subtitle: string }) {
    return (
    <section className="section-title">
        <Container size="lg">
            <Title order={1}>{title}</Title>
            <Text size="sm" c="dimmed" maw={420} mx="auto" mt={5}>{subtitle}</Text>
        </Container>
    </section>
    )
}
