import { Button, Checkbox, Form, Image, Input, Icon } from "semantic-ui-react";
import Layout from "../../components/Layout";
import { useState, useRef } from "react";
import { uploadFileToFirebaseStorage, ARTICLE_IMAGES_BASE_PATH } from "../../services/storage";

const articlePlaceholderImage = "/assets/images/article-placeholder-image.png";

const initialFormData = { title: "", description: "", tags: "", featured_image: "" }

const AddArticle = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUploading, setImageUploading] = useState(false);
  const fileInputRef = useRef(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormChange = (event) => {
    const {name, value} = event.target;
    setFormData((curData) => ({ ...curData, [name]: value }));
  };

  const handleChooseImage = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleImageUpload = async (event) => {
    console.log(event);
    console.log("ref files", selectedImage);
    setImageUploading(true);
    const fileUploadPath = `${ARTICLE_IMAGES_BASE_PATH}/${file.name}`;
    const downloadURL = await uploadFileToFirebaseStorage(selectedImage, fileUploadPath, console.log);
    setFormData((curData) => ({
      ...curData,
      featured_image: downloadURL,
    }));
    setImageUploading(false);
  };

  const handleReset = event => {
        setFormData(initialFormData)
        setFormSubmitted(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true)
  };

  return (
    <Layout>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Title</label>
          <Form.Input
            placeholder="Title"
            name="title"
            onChange={handleFormChange}
            value={formData.title}
            error={formSubmitted && !formData.title ? "Title cannot be empty" : null}
          />
        </Form.Field>
        <Form.Field>
          <label>Description</label>
          <Form.TextArea
            placeholder="Description"
            name="description"
            onChange={handleFormChange}
            value={formData.description}
            error={formSubmitted && !formData.description ? "Description cannot be empty" : null}
          />
        </Form.Field>
        <Form.Field>
          <label>Tags</label>
          <Form.Input
            placeholder="Tags"
            name="tags"
            onChange={handleFormChange}
            value={formData.tags}
            error={formSubmitted && !formData.description ? "Tags cannot be empty" : null}
          />
        </Form.Field>
        <Form.Field>
          <label>Image</label>
          <Form.Input
            type="file"
            accept="image/*"
            name="featured_image"
            ref={fileInputRef}
            onChange={handleChooseImage}
            error={formSubmitted && !formData.featured_image ? "Please upload an image to continue" : null}
            icon={
              <Icon
                name="cloud upload"
                inverted
                circular
                loading={imageUploading}
                disabled={imageUploading || !selectedImage}
                link
                onClick={handleImageUpload}
                as="i"
              />
            }
          />
        </Form.Field>
        <Form.Field>
            <label>Preview</label>
          <Image src={formData.featured_image || articlePlaceholderImage} fluid />
        </Form.Field>
        <Button type="reset" onClick={handleReset}>Reset</Button>
        <Button type="submit">Submit</Button>
      </Form>
    </Layout>
  );
};

export default AddArticle;
