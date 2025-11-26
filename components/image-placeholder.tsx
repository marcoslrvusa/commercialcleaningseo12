interface ImagePlaceholderProps {
  variant: 'hero' | 'content'
  label: string
  description: string
}

export function ImagePlaceholder({ variant, label, description }: ImagePlaceholderProps) {
  const height = variant === 'hero' ? 'h-[400px]' : 'h-[300px]'
  const margin = variant === 'hero' ? 'mb-12' : 'my-12'
  
  return (
    <div className={`${margin} rounded-lg overflow-hidden shadow-lg border-4 border-dashed border-gray-300 bg-gray-50 ${height} flex items-center justify-center`}>
      <div className="text-center p-8">
        <p className="text-gray-600 font-semibold mb-2">📸 Image Slot: {label}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  )
}
