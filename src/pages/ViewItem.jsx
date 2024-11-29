import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer';
import PolicyTemplate from '../assets/PolicyTemplate.pdf';
import samplepptx from '../assets/samplepptx.pptx';
import SampleVideo from '../assets/SampleVideo.mp4';

const data = {
  'policy-pdfs': [
    { id: 1, title: 'Company Policy', fileUrl: PolicyTemplate },
    { id: 2, title: 'Leave Policy', fileUrl: PolicyTemplate },
    { id: 3, title: 'Safety Policy', fileUrl: PolicyTemplate },
    { id: 4, title: 'Data Protection Policy', fileUrl: PolicyTemplate },
  ],
  'training-ppts': [
    { id: 1, title: 'Onboarding PPT', fileUrl: samplepptx },
    { id: 2, title: 'Safety Training', fileUrl: samplepptx },
    { id: 3, title: 'Team Collaboration', fileUrl: samplepptx },
    { id: 4, title: 'Leadership Skills', fileUrl: samplepptx },
  ],
  'training-videos': [
    { id: 1, title: 'Welcome Video', fileUrl: SampleVideo },
    { id: 2, title: 'Safety Instructions', fileUrl: SampleVideo },
    { id: 3, title: 'Team Building', fileUrl: SampleVideo },
    { id: 4, title: 'Time Management', fileUrl: SampleVideo },
  ],
};

const ViewItem = () => {
  const { type, id } = useParams();
  const item = data[type]?.find((item) => item.id === parseInt(id));
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  if (!item) {
    return <div className="p-4">Item not found.</div>;
  }

  const handleLike = () => setLikes((prev) => prev + 1);
  const handleDislike = () => setDislikes((prev) => prev + 1);
  const toggleExpand = () => setIsExpanded((prev) => !prev);
  const handleCommentChange = (e) => setComment(e.target.value);
  const handleAddComment = () => {
    if (comment.trim()) {
      setComments((prevComments) => [...prevComments, comment]);
      setComment('');
    }
  };

  const renderContent = () => {
    const fileExtension = item.fileUrl.split('.').pop();

    if (fileExtension === 'mp4') {
      return (
        <div
          style={{
            width: isExpanded ? '100%' : '600px',
            height: isExpanded ? '90vh' : '340px',
            position: 'relative',
          }}
        >
          <video
            controls
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '8px',
              objectFit: 'cover',
            }}
          >
            <source src={item.fileUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div style={{ marginTop: '10px', textAlign: 'center' }}>
            <button
              onClick={handleLike}
              style={{
                marginRight: '10px',
                padding: '10px 20px',
                backgroundColor: '#28a745',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              👍 Like {likes}
            </button>
            <button
              onClick={handleDislike}
              style={{
                marginRight: '10px',
                padding: '10px 20px',
                backgroundColor: '#dc3545',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              👎 Dislike {dislikes}
            </button>
            <button
              onClick={toggleExpand}
              style={{
                padding: '10px 20px',
                backgroundColor: '#007bff',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              {isExpanded ? 'Collapse' : 'Expand'}
            </button>
          </div>
          {/* Comment Section */}
          <div style={{ marginTop: '20px' }}>
            <h4>Comments</h4>
            <div>
              <textarea
                value={comment}
                onChange={handleCommentChange}
                placeholder="Add a comment..."
                style={{
                  width: '100%',
                  height: '100px',
                  padding: '10px',
                  borderRadius: '8px',
                  border: '1px solid #ccc',
                }}
              />
            </div>
            <button
              onClick={handleAddComment}
              style={{
                marginTop: '10px',
                padding: '10px 20px',
                backgroundColor: '#007bff',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Add Comment
            </button>
            <div style={{ marginTop: '20px' }}>
              {comments.map((comment, index) => (
                <div key={index} style={{ marginBottom: '10px' }}>
                  <p>{comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    } else if (fileExtension === 'pdf') {
      return (
        <iframe
          src={item.fileUrl}
          style={{
            width: isExpanded ? '100%' : '600px',
            height: isExpanded ? '90vh' : '340px',
            border: 'none',
            borderRadius: '8px',
          }}
          sandbox="allow-same-origin allow-scripts"
          title="PDF Viewer"
        />
      );
    }

    return (
      <DocViewer
        documents={[{ uri: item.fileUrl }]}
        pluginRenderers={DocViewerRenderers}
        style={{ height: '80vh', width: '100%' }}
      />
    );
  };

  return (
    <div className="p-4">
      <a href={`/${type}`} className="btn btn-secondary mt-3">
        Back to List
      </a>
      <h2>{item.title}</h2>
      {renderContent()}
    </div>
  );
};

export default ViewItem;
