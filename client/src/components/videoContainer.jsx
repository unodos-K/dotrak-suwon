// VideoContainer.js
import styled from 'styled-components';

const VideoContainerWrapper = styled.section`
    text-align: center;
    background-color: #f5f5f5;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    > h2 {
        color: var(--secondary-color);
        margin-bottom: 20px;
    }

    > iframe {
        width: 100%;
        height: 275px;
        border: none;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease-in-out;

        &:hover {
            transform: scale(1.02);
        }
    }
`;

const VideoContainer = () => {
  return (
    <VideoContainerWrapper id="video-container">
      <h2>VSMP 시술영상</h2>
      <iframe
        width="100%"
        height="275px"
        src="https://www.youtube.com/embed/UGWOI5mLQP8"
        allowFullScreen
        title="VSMP 시술영상"
      ></iframe>
    </VideoContainerWrapper>
  );
};

export default VideoContainer;
