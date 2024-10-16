import { useState } from "react";

interface CreateProps {}

const Create: React.FC<CreateProps> = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageLink, setImageLink] = useState<string>("");
  const categories: string[] = ["Nature", "Animal", "Art"];

  const handleTagClick = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((selectedTag) => selectedTag !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageLink(e.target.value);
    if (e.target.value) {
      setImagePreview(e.target.value); // Update image preview when an image link is provided
    }
  };

  return (
    <div className="create w-full h-[calc(100vh_-_100px)] p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="left-side bg-white p-4 flex justify-center items-center">
        {imagePreview ? (
          <img
            src={imagePreview}
            alt="Preview"
            className="h-auto w-full object-cover rounded-xl"
          />
        ) : (
          <>
            <input
              type="file"
              className="h-full w-full border border-neutral-600 rounded-lg p-4 mb-4"
              onChange={handleImageUpload}
            />
          </>
        )}
      </div>
      <div className="right-side bg-white p-4">
        <div className="mb-4">
          <label htmlFor="title" className="block mb-2 text-sm font-medium">
            Title
          </label>
          <input
            id="title"
            type="text"
            placeholder="Enter Title"
            className="border border-neutral-600 p-2 w-full rounded-sm font-normal"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block mb-2 text-sm font-medium">
            Description
          </label>
          <input
            id="description"
            type="text"
            placeholder="Enter Description"
            className="border border-neutral-600 p-2 w-full rounded-sm font-normal"
          />
        </div>
        <div className="mb-4">
        <label htmlFor="img_link" className="block mb-2 text-sm font-medium">
          Link
          </label>
        <input
              id="img_link"
              type="text"
              placeholder="Or enter image link"
              value={imageLink}
              onChange={handleImageLinkChange}
              className="border border-neutral-600 p-2 w-full rounded-sm font-normal"
            />
        </div>
        <div className="mb-4">
          <p>Categories</p>
          <div className="flex gap-2 mt-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleTagClick(category)}
                className={`border px-5 rounded-full text-sm font-normal h-[30px]${
                  selectedTags.includes(category) ? " bg-neutral-500" : ""
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <p>Tags</p>
          <div className="flex gap-2 mt-2 flex-wrap">
            {selectedTags.map((tag) => (
              <span
                key={tag}
                className="bg-neutral-900 text-white font-normal text-sm rounded-full py-1 px-5 cursor-pointer flex"
                onClick={() => handleTagClick(tag)}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <button className="mt-4 text-white py-3 w-1/2 rounded-full bg-neutral-900 text-sm">
          Create Post
        </button>
      </div>
    </div>
  );
};

export default Create;
