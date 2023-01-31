import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import VideoCard from '../components/common/VideoCard';
export default function RelatedVideos({id}) {
  const {youtube} = useYoutubeApi()
  const {error, isLoading, data:videos} = useQuery(
    ['relatedd', id], 
    () => youtube.relatedVideos(id),
    {staleTime: 1000*60*5}
  )
  return (
    <>
        {isLoading && <p>Loading...</p>}
        {error && <p>Someting is wrong</p>}
        {videos && (
          <ul className=''>
            {videos.map((video)=>(
              <VideoCard key={video.id} video={video} type='list' />
            ))}
          </ul>
        )}
    </>
  );
}

