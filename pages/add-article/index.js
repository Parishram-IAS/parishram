import { Button, Checkbox, Form, Image, Input, Icon } from "semantic-ui-react";
import Layout from "../../components/Layout";
import { useState, useRef } from "react";
import { uploadFileToFirebaseStorage, ARTICLE_IMAGES_BASE_PATH } from "../../services/firebase/storage";
import { addNewArticle } from "../../services/firebase/article";

const articlePlaceholderImage = "/assets/images/article-placeholder-image.png";

const initialFormData = {category:"hindu", title: "", description: "", tags: "", featured_image: "" , video_url:""}

const categoryOptions = [{key:"hindu", value:"hindu", text:"The Hindu"}, {key:"livemint", value:"livemint", text:"The Live Mint"}]

const AddArticle = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUploading, setImageUploading] = useState(false);
  const fileInputRef = useRef(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormChange = (event) => {
    const {name, value} = event.target;
    console.log("namr", name, "value", value)
    setFormData((curData) => ({ ...curData, [name]: value }));
  };

  const handleChooseImage = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleCategoryChange = (_, {value}) => {
    setFormData((curData) => ({ ...curData, category: value }));
  }

  const handleImageUpload = async (event) => {
    setImageUploading(true);
    const fileUploadPath = `${ARTICLE_IMAGES_BASE_PATH}/${selectedImage.name}`;
    const downloadURL = await uploadFileToFirebaseStorage(selectedImage, fileUploadPath, console.log);
    setFormData((curData) => ({
      ...curData,
      featured_image: downloadURL,
    }));
    setImageUploading(false);
  };

  const handleReset = () => {
        setFormData(initialFormData)
        setFormSubmitted(false)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormSubmitted(true)
    let anyFieldEmpty = Object.values(formData).some(el=> !Boolean(el))
    if(anyFieldEmpty){
        return 
    }
    const newArticle = {
        title:formData.title,
        description: formData.description,
        created: new Date(),
        news_time: new Date(),
        tags: formData.tags.trim().split(","),
        featured_image: formData.featured_image,
        updated: new Date(),
        video_url: formData.video_url
    }
    const newArticlId = await addNewArticle(formData.category, newArticle)
    alert(`New article is created with id:- ${newArticlId}`)
    setFormData(initialFormData)
  };

  return (
    <Layout>
      <Form onSubmit={handleSubmit}>
      <Form.Field>
          <label>Category</label>
          <Form.Dropdown
            placeholder="Category"
            name="category"
            onChange={handleCategoryChange}
            value={formData.category}
            options={categoryOptions}
            selection
            error={formSubmitted && !formData.category ? "Category cannot be empty" : null}
          />
        </Form.Field>
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
          <Image alt="parishram-Ias-caursoel" src={formData.featured_image || articlePlaceholderImage} fluid />
        </Form.Field>
        <Form.Field>
          <label>Title</label>
          <Form.Input
            placeholder="Video URL"
            name="video_url"
            onChange={handleFormChange}
            value={formData.video_url}
            error={formSubmitted && !formData.video_url ? "Video URL cannot be empty" : null}
          />
        </Form.Field>
        <Button type="reset" onClick={handleReset}>Reset</Button>
        <Button type="submit">Submit</Button>
      </Form>
    </Layout>
  );
};

export default AddArticle;
