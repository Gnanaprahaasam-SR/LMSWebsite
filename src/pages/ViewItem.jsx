import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import PolicyTemplate from '../assets/PolicyTemplate.pdf';
import samplepptx from '../assets/samplepptx.pptx';
import SampleVideo from '../assets/SampleVideo.mp4';

const samplepptxUrl = "/assets/samplepptx.pptx";

const data = {
  'policy-pdfs': [
    { id: 1, fileType: 'pdf', title: 'Company Policy', fileUrl: PolicyTemplate },
    { id: 2, fileType: 'pdf', title: 'Leave Policy', fileUrl: PolicyTemplate },
    { id: 3, fileType: 'pdf', title: 'Safety Policy', fileUrl: PolicyTemplate },
    { id: 4, fileType: 'pdf', title: 'Data Protection Policy', fileUrl: PolicyTemplate },
  ],
  'training-ppts': [
    { id: 1, fileType: 'ppt', title: 'Onboarding PPT', fileUrl: 'https://scholar.harvard.edu/files/torman_personal/files/samplepptx.pptx' },
    { id: 2, fileType: 'ppt', title: 'Safety Training', fileUrl: 'https://scholar.harvard.edu/files/torman_personal/files/samplepptx.pptx' },
    { id: 3, fileType: 'ppt', title: 'Team Collaboration', fileUrl: 'https://scholar.harvard.edu/files/torman_personal/files/samplepptx.pptx' },
    { id: 4, fileType: 'ppt', title: 'Leadership Skills', fileUrl: 'https://scholar.harvard.edu/files/torman_personal/files/samplepptx.pptx' },
  ],
  'training-videos': [
    { id: 1, fileType: 'video', title: 'Welcome Video', fileUrl: SampleVideo },
    { id: 2, fileType: 'video', title: 'Safety Instructions', fileUrl: SampleVideo },
    { id: 3, fileType: 'video', title: 'Team Building', fileUrl: SampleVideo },
    { id: 4, fileType: 'video', title: 'Time Management', fileUrl: SampleVideo },
  ],
};

const ViewItem = () => {
  const { type, id } = useParams();
  const item = data[type]?.find((item) => item.id === parseInt(id));
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  if (!item) {
    return <div className="p-4">Item not found.</div>;
  }

  const handleLike = () => setLikes((prev) => prev + 1);
  const handleDislike = () => setDislikes((prev) => prev + 1);
  const handleCommentChange = (e) => setComment(e.target.value);
  const handleAddComment = () => {
    if (comment.trim()) {
      setComments((prev) => [...prev, comment]);
      setComment('');
    }
  };

  const renderContent = () => {
    switch (item.fileType) {
      case 'pdf':
        return (
          <embed
            src={item.fileUrl}
            style={{
              width: '100%',
              height: '90vh',
              border: 'none',
              borderRadius: '8px',
            }}
            title="PDF Viewer"
          />
        );

      case 'ppt':
        return (
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <iframe
              src={`https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(item.fileUrl) }`}
              width="100%"
              height="600px"
              download="none" 
              viewer="microsoft"
              frameBorder="0"
              title={item.title}
              style={{
                border: 'none',
                borderRadius: '8px',
              }}
            ></iframe>
          </div>
        );

      case 'video':
        return (
          <video
            controls
            style={{
              width: '100%',
              height: '60vh',
              borderRadius: '8px',
              objectFit: 'cover',
            }}
            onContextMenu={(e) => e.preventDefault()} // Disable right-click
          >
            <source src={item.fileUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        );

      default:
        return <div>Unsupported file type.</div>;
    }
  };

  return (
    <div className="p-4">
      <a href={`/${type}`} className="btn btn-secondary mt-3">
        Back to List
      </a>
      <h2>{item.title}</h2>
      {renderContent()}
      <div style={{ marginTop: '20px' }}>
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
      </div>
      <div style={{ marginTop: '20px' }}>
        <h4>Comments</h4>
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
};

export default ViewItem;
