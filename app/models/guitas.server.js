export async function getGuitars() {
    try {
        const response = await fetch(`${process.env.API_URL}/guitars?populate=image`);

        if (!response.ok) {
            throw new Error('Failed to fetch guitars');
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch guitars');
    }
}

export async function getGuitar(url) {
    try {
        const response = await fetch(`${process.env.API_URL}/guitars?filters[url]=${url}&populate=image`)
        if (!response.ok) throw new Error('Failed to fetch guitar data')
        const result = await response.json()
        return result
    } catch (error) {
        console.error('Error fetching guitar data:', error.message)
        return null // Return null or another default value to indicate failure
    }
}

