import React, { useState, useRef, useEffect } from 'react';
import { Play, Plus, ThumbsUp } from 'lucide-react';

interface MovieProps {
  id: number;
  title: string;
  image: string;
  video?: string;
  rating?: string;
  year?: string;
  duration?: string;
}

export default function MovieCard({ title, image, video, rating, year, duration }: MovieProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressInterval = useRef<number>();

  const PREVIEW_DURATION = 5; // Preview duration in seconds

  useEffect(() => {
    let timeoutId: number;

    if (isHovered && videoRef.current) {
      const video = videoRef.current;

      const handleVideoLoaded = () => {
        if (video.duration && video.duration !== Infinity) {
          // Ensure we have a valid duration before setting currentTime
          const maxStartTime = Math.max(0, video.duration - (PREVIEW_DURATION + 1));
          const startTime = Math.min(maxStartTime, Math.random() * maxStartTime);
          video.currentTime = startTime;
          setIsVideoLoaded(true);

          // Start progress tracking
          const startTrackingTime = Date.now();
          progressInterval.current = window.setInterval(() => {
            const elapsed = (Date.now() - startTrackingTime) / 1000;
            const currentProgress = (elapsed / PREVIEW_DURATION) * 100;
            
            if (currentProgress >= 100) {
              // Reset to start position
              video.currentTime = startTime;
              setProgress(0);
              return;
            }
            
            setProgress(currentProgress);
          }, 50);
        }
      };

      // Add event listener for loadedmetadata
      video.addEventListener('loadedmetadata', handleVideoLoaded);

      // Cleanup
      return () => {
        video.removeEventListener('loadedmetadata', handleVideoLoaded);
        if (progressInterval.current) {
          clearInterval(progressInterval.current);
        }
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
      };
    }

    // Reset states when not hovering
    return () => {
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      setProgress(0);
      setIsVideoLoaded(false);
    };
  }, [isHovered]);

  return (
    <div 
      className="relative flex-none group w-[200px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsVideoLoaded(false);
      }}
    >
      <div className={`transform transition-all duration-300 ${isHovered ? 'scale-110 z-50' : 'scale-100'}`}>
        <div className="relative rounded-lg overflow-hidden shadow-xl">
          {isHovered && video ? (
            <div className="absolute inset-0 bg-black">
              <video
                ref={videoRef}
                src={video}
                autoPlay
                muted
                playsInline
                className={`w-full h-[300px] object-cover transition-opacity duration-300 ${
                  isVideoLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              />
              {/* Progress bar */}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-800">
                <div 
                  className="h-full bg-[#00A8E1] transition-all duration-100"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          ) : null}
          <img
            src={image}
            alt={title}
            className={`w-full h-[300px] object-cover ${
              isHovered && isVideoLoaded ? 'opacity-0' : 'opacity-100'
            }`}
          />
          
          {/* Hover Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent
            transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="flex items-center gap-2 mb-2">
                <button className="bg-white hover:bg-gray-200 text-black p-2 rounded-full transition-colors">
                  <Play className="h-4 w-4 fill-current" />
                </button>
                <button className="bg-[#1a242f]/80 hover:bg-[#1a242f] text-white p-2 rounded-full transition-colors">
                  <Plus className="h-4 w-4" />
                </button>
                <button className="bg-[#1a242f]/80 hover:bg-[#1a242f] text-white p-2 rounded-full transition-colors">
                  <ThumbsUp className="h-4 w-4" />
                </button>
              </div>
              
              <h3 className="text-white font-semibold mb-1">{title}</h3>
              <div className="flex items-center gap-2 text-xs text-gray-300">
                {rating && <span className="px-1 bg-gray-700 rounded">{rating}</span>}
                {year && <span>{year}</span>}
                {duration && <span>{duration}</span>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}