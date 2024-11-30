import { spfi, SPFx } from "@pnp/sp/presets/all";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";

// Initialize SPFI instance
const sp = spfi("https://tnxt.sharepoint.com/sites/POIM"); // Replace with your SharePoint site URL

// Fetch documents from a library
export const getDocuments = async (libraryName) => {
  try {
    console.log("Fetching list by title:", libraryName);
    
    // Only call getByTitle once and store the list reference
    const list = sp.web.lists.getByTitle(libraryName);
    // Fetch items from the list with required fields (Title, FileLeafRef, Id)
    const items = await list.items.select("Title", "FileLeafRef", "Id")();

    console.log("Fetched items:", items);
    return items;
  } catch (error) {
    console.error("Error fetching documents:", error);
    throw new Error("Unable to fetch documents");
  }
};
