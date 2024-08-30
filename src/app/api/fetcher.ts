export const fetcher = async (url: string, options = {}) => {
    try {
        const response = await fetch(url, {
            ...options,
            next: { revalidate: 10 },
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        } else {
            const data = await response.json();
            return data;
        }
    } catch (error) {
        console.error(error);
    }
}

