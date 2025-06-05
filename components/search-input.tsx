'use client'

import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export default function SearchInput() {
  const searchParams = useSearchParams()
  const pathName = usePathname()
  const { replace } = useRouter()

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const params = new URLSearchParams()
    const search = e.currentTarget.value

    if (search) params.set('search', search)
    else params.delete('search')

    replace(`${pathName}?${params.toString()}`)
  }

  return (
    <div className="relative">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Busque por nome..."
        className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
        onChange={handleChange}
      />
    </div>
  )
}
