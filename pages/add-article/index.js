import { Button, Checkbox, Form, Image } from "semantic-ui-react";
import Layout from "../../components/Layout";
import { useState } from "react";

const articlePlaceholderImage = "/assets/images/article-placeholder-image.png"

const AddArticle = () => {
  const [formData, setFormData] = useState({title:"", description:"", tags:"", featured_image:""});

  const handleFormChange = event => {
    const [name, value] = event.target;
    setFormData(curData=>({...curData, [name]:value}))
  }

  const handleImageUpload = event => {
    console.log(event)

    setFormData(curData=>({...curData, featured_image:"https://grdp.co/cdn-cgi/image/width=700,quality=80/https://gs-post-images.grdp.co/2018/6/daily-current-affairs-for-upsc-and-state-pcs-exams-2-img1528106563849-63.jpg-rs-high-webp.jpg"}))
  }

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
          <input placeholder="Last Name" type="file" accept="image/*" name="featured_image" onChange={handleImageUpload} />
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
