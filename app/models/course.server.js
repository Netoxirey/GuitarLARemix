export async function getCourse() {
    try {
        const response = await fetch(`${process.env.API_URL}/course?populate=image`);

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