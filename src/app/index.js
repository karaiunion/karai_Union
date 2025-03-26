'use server'

const index = async () => {
    const apiKey = process.env.YOUTUBE_API_KEY;
    const channelId = process.env.YOUTUBE_CHANNEL_ID;
    const url = process.env.YOUTUBE_API_URL;
    const maxResults = 5;


    try {
        const result = await fetch(`${url}?part=snippet&${maxResults}&playlistId=PLA4XjYx-ulaiiNBDjZ81lDK8MSc2aeG-7&key=${apiKey}`)
        console.log(result)
        return await result.json();

    }
    catch (error) {
        throw new Error('Failed to fetch data: ', error)
    }
    return (
        <div>

        </div>
    )
}

export default index
