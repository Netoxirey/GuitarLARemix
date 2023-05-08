export async function getBlogs() {
    try {
        const response = await fetch(`${process.env.API_URL}/blogs?populate=image`);

        if (!response.ok) {
            throw new Error('Failed to fetch Blogs');
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch Blogs');
    }
}

export async function getBlog(url) {
    try {
        const response = await fetch(`${process.env.API_URL}/blogs?filters[url]=${url}&populate=image`);

        if (!response.ok) {
            throw new Error('Failed to fetch Blogs');
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch Blogs');
    }
}

