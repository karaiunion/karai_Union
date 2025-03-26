import index from "@/app"
import styled from "styled-components"
import { useEffect, useState } from "react"
import Image from 'next/image'

const VideoComp = styled.div`
    margin:5rem;
    display:grid;
    grid-template-columns: 0.3fr 0.3fr ;
    grid-gap : 2rem ;
    justify-content: center;
    .li{
        list-style-type: none;
    }
   

`;
const Video = styled.div`
display: grid;
padding:1.5rem;
justify-content: center;
background-color: white;
border-radius: 0.5rem;
box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;
const Thumbnail = styled.div`
display:grid;
.image{
    border-radius:0.5rem;
}
`;
const Title = styled.p`
    margin:1rem;
`;

const page = () => {
    const [data, setData] = useState([])
    const videoData = data.items;
    useEffect(() => {
        const fetchVideos = async () => {
            const res = await index();
            return setData(res);
        }
        fetchVideos()
    }, [])

    return <VideoComp>

        {
            videoData?.map((video) => {

                return <li className="li" key={video.id}>
                    <a href={`https://www.youtube.com/watch?v=${video?.snippet?.resourceId?.videoId}`}>
                        <Video key={video.id}>
                            <Thumbnail>
                                <Image src={video?.snippet?.thumbnails?.medium?.url} alt='Youtube Content' width={video.snippet.thumbnails.medium.width} height={video.snippet.thumbnails.medium.height} className="image"></Image>
                            </Thumbnail>
                            <Title>{video.snippet.title}</Title>
                        </Video>
                    </a>
                </li>



            })
        }

    </VideoComp>
}

// const page = () => {
//     return (
//         <iframe
//             width="100%"
//             height="600"
//             src="https://www.youtube.com/embed/videoseries?list=UU_a4FC6a-6g7i0arN__K1W6A"
//             title="YouTube Channel Videos"
//             frameBorder="0"
//             allow="autoplay; encrypted-media; picture-in-picture"
//             allowFullScreen
//         ></iframe>
//     );
// };

export default page;

