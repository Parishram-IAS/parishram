import { Button, Checkbox, Form, Image, Input, Icon } from "semantic-ui-react";
import Layout from "../../components/Layout";
import { useState, useRef } from "react";
import { uploadFileToFirebaseStorage } from "../../services/storage";

const articlePlaceholderImage = "/assets/images/article-placeholder-image.png";

const AddArticle = () => {
  const [formData, setFormData] = useState({ title: "", description: "", tags: "", featured_image: "" });
  const [selectedImage, setSelectedImage] = useState(null)
  const fileInputRef = useRef(null);

  const handleFormChange = (event) => {
    const [name, value] = event.target;
    setFormData((curData) => ({ ...curData, [name]: value }));
  };

  const handleChooseImage = event => {
    setSelectedImage(event.target.files[0])
  } 



  const handleImageUpload = async (event) => {
    console.log(event);
    console.log("ref files", selectedImage);
    const downloadURL = await uploadFileToFirebaseStorage(selectedImage, console.log)
    setFormData((curData) => ({
      ...curData,
      featured_image:downloadURL
    }));
  };

  return (
    <Layout>
      <Form>
        <Form.Field>
          <label>Title</label>
          <input placeholder="title" name="title" onChange={handleFormChange} value={formData.title} />
        </Form.Field>
        <Form.Field>
          <label>Description</label>
          <input placeholder="Last Name" name="description" onChange={handleFormChange} value={formData.description} />
        </Form.Field>
        <Form.Field>
          <label>Tags</label>
          <input placeholder="Last Name" name="tags" onChange={handleFormChange} value={formData.tags} />
        </Form.Field>
        <Form.Field>
          <label>Image</label>
          <Input
            placeholder="Last Name"
            type="file"
            accept="image/*"
            name="featured_image"
            ref={fileInputRef}
            onChange={handleChooseImage}
            icon={<Icon name="cloud upload" inverted circular link onClick={handleImageUpload} as="i" />}
          />
        </Form.Field>
        <Form.Field>
          <Image src={formData.featured_image || articlePlaceholderImage} fluid />
        </Form.Field>
        <Form.Field>
          <Checkbox label="I agree to the Terms and Conditions" />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    </Layout>
  );
};

export default AddArticle;
