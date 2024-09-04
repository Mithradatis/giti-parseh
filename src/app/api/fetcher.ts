export const fetcher = async (url: string, options = {}) => {
  try {
    const response = await fetch(url, {
      ...options,
      next: { revalidate: 10 },
    })
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    let processedData = data
    if (Array.isArray(data)) {
      processedData = await Promise.all(
        data.map(async (item: any) => {
          if (item.image && item.image.url) {
            const blurResponse = await fetch('/api/processImage', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ imageUrl: item.image.url }),
            })

            if (blurResponse.ok) {
              const { blurredImage } = await blurResponse.json()
              return {
                ...item,
                blurredImage,
              }
            }
          }
          return item
        })
      )
    }

    return processedData
  } catch (error) {
    console.error(error)
    throw error
  }
}
