import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import VideoCard from '../components/common/VideoCard';

export default function Videos() {
  const {keyword} = useParams()
  const {isLoading, error, data:videos} = useQuery(
    ['videos', keyword], async () => {
      return fetch(`../mock/${keyword ? 'search' : 'popular'}.json`)
      .then((res)=>res.json)
      .then((data)=>data.items)
    }
  )
  console.log(videos)
  return (
    <>
      <div>
        videos{keyword}
      </div>
        {isLoading && <p>Loading...</p>}
        {error && <p>Someting is wrong</p>}
        {videos && (
          <ul>
            {videos.map((video)=>(
              <VideoCard key={video.id} video={video} />
            ))}
          </ul>
        )}
    </>
  );
}

