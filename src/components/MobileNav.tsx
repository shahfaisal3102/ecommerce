import { Drawer, Stack } from '@mantine/core'

export default function MobileNav({ opened, onClose }: { opened: boolean; onClose: () => void }) {
    return (
        <Drawer opened={opened} onClose={onClose} title="CozyVerse">
            <Stack gap="lg">
                {['New In', 'Men', 'Kids', 'Collections', 'Categories', 'Blogs'].map(item =>
                    <a key={item} href="#new" onClick={onClose}>{item}</a>
                )}
            </Stack>
        </Drawer>
    )
}
