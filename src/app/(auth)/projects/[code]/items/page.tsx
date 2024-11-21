import NoItems from '@/components/items/no-items'

export default function ItemsPage() {
  // TODO: throw an empty state in this mf
  const items = []
  if (items.length === 0) {
    return <NoItems />
  }
}
