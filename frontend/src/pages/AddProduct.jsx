import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import { useFormik } from 'formik';
 import * as Yup from 'yup';
 import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAddNewProductMutation } from '../redux/features/product/productApi'

function AddProduct() {

    const [addProduct, { isLoading }] = useAddNewProductMutation();

    const {handleSubmit, handleChange, handleBlur, errors, values, touched, setFieldValue} = useFormik({
        initialValues: {
          title: '',
          description: '',
          category:'',
          image: '',
          price:'',
          discount:''

        },
        validationSchema: Yup.object({
            title: Yup.string().max(30, 'Must be 30 characters or less').required('Required'),
            description: Yup.string().max(2000, 'Must be 2000 characters or less').required('Required'),
            category: Yup.string().required('Required'),
            image: Yup.string(),
            price: Yup.number().required('Required'),
            discount: Yup.number().required('Required'),
        }),
        onSubmit: async (values) => {
            const res = await addProduct(values).unwrap();
            console.log(res)
            if (res.success) {
                toast.success(res.message);
            } else {
                toast.error(res.message);
            }
        },
      });
    
  return (
    <>
        <Breadcrumb/>

        <div className="container-fluid">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Add New Product</span></h2>
        <div className="row px-xl-5">
            <div className="col-lg-7 mb-5">
                <div className="contact-form bg-light p-30">
                    <div id="success"></div>
                    <form name="addProduct" id="contactForm" onSubmit={handleSubmit}>
                        <div className="control-group">
                            <input type="text" onChange={handleChange} onBlur={handleBlur} className="form-control" id="title" name='title' placeholder="Product Title"/>
                            <p className="help-block text-danger">{errors.title && touched.title ? errors.title : null}</p>
                        </div>
                        <div className="control-group">
                            <textarea className="form-control" onChange={handleChange} onBlur={handleBlur} rows="8" id="description" name='description' placeholder="Description"></textarea>
                            <p className="help-block text-danger">{errors.description && touched.description ? errors.description : null}</p>
                        </div>
                        <div className="control-group mb-3">
                            <select name="category" id="" className='form-control' onChange={handleChange} onBlur={handleBlur}>
                                <option value="">Select Category</option>
                                <option value="men fasion">Men fasion</option>
                                <option value="watches">Watches</option>
                            </select>
                            <p className="help-block text-danger">{errors.category && touched.category ? errors.category : null}</p>
                        </div>
                        <div className="control-group">
                            <input type="file" onChange={(event) => {
                                let reader = new FileReader();
                                reader.onloadend = () => {
                                    if (reader.readyState === 2) {
                                        setFieldValue("image", reader.result);
                                        //setPreview(reader.result)
                                    }
                                }
                                reader.readAsDataURL(event.currentTarget.files[0]);
                            }
                            } onBlur={handleBlur} className="form-control" id="image" name='image' placeholder="Product Image"/>
                            <p className="help-block text-danger">{errors.image && touched.image ? errors.image : null}</p>
                        </div>
                        <div className="control-group">
                            <input type="number" onChange={handleChange} onBlur={handleBlur} name="price" className="form-control" id="price" placeholder="Price"/>
                            <p className="help-block text-danger">{errors.price && touched.price ? errors.price : null}</p>
                        </div>
                        <div className="control-group">
                            <input type="number"  onChange={handleChange} onBlur={handleBlur} name="discount" className="form-control" id="discount" placeholder="discount"/>
                            <p className="help-block text-danger">{errors.discount && touched.discount ? errors.discount : null}</p>
                        </div>
                        
                        <div>
                            <button className="btn btn-primary py-2 px-4" type="submit" id="sendMessageButton">Add Product</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-lg-5 mb-5">
                <div className="bg-light p-30 mb-30">
                   
                </div>
                <div className="bg-light p-30 mb-3">
                <ToastContainer />  
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default AddProduct