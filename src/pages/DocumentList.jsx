import React, { useState, useEffect } from "react";
import { getDocuments } from "../services/LMSServices";


const DocumentsList = () => {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const docs = await getDocuments("Shared Documents"); // "Documents" is your document library name
        setDocuments(docs);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching documents:", error);
        setLoading(false);
      }
    };

    fetchDocuments();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {documents.map((doc) => (
            <li key={doc.Id}>
              <a href={`${doc.FileLeafRef}`} target="_blank" rel="noopener noreferrer">
                {doc.Title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DocumentsList;
