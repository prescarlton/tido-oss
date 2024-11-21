import { redirect } from 'next/navigation'

export default function ProjectNotFoundPage({
  params,
}: {
  params: { code: string }
}) {
  return redirect(`/projects/${params.code}`)
}
